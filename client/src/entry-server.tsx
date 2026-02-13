import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Router } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import App from "./App";
import { PassThrough } from "node:stream";

export type RenderResult = {
  appHtml: string;
  headHtml: string;
  htmlAttributes: string; // e.g. lang="de"
};

function safeToString(x: unknown) {
  if (!x) return "";
  // react-helmet-async parts expose .toString()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyX = x as any;
  return typeof anyX.toString === "function" ? anyX.toString() : String(anyX);
}

export async function render(ssrPath: string): Promise<RenderResult> {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const appHtml = await new Promise<string>((resolve, reject) => {
    let resolved = false;
    const stream = new PassThrough();
    const chunks: Buffer[] = [];

    stream.on("data", (chunk) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
    });
    stream.on("end", () => {
      if (resolved) return;
      resolved = true;
      resolve(Buffer.concat(chunks).toString("utf8"));
    });
    stream.on("error", (err) => {
      if (resolved) return;
      resolved = true;
      reject(err);
    });

    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <Router ssrPath={ssrPath}>
          <App />
        </Router>
      </HelmetProvider>,
      {
        onAllReady() {
          pipe(stream);
        },
        onShellError(err) {
          if (resolved) return;
          resolved = true;
          reject(err);
        },
        onError(err) {
          // Keep going; errors are surfaced by hydration too. We only fail on shell errors.
          // eslint-disable-next-line no-console
          console.error(err);
        },
      }
    );

    // Safety timeout: abort any hung render (e.g., never-resolving suspense).
    const timeoutMs = 15_000;
    const t = setTimeout(() => abort(), timeoutMs);
    stream.on("close", () => clearTimeout(t));
    stream.on("end", () => clearTimeout(t));
  });

  const helmet = helmetContext.helmet;
  const headHtml = [
    safeToString(helmet?.title),
    safeToString(helmet?.meta),
    safeToString(helmet?.link),
    safeToString(helmet?.script),
  ]
    .filter(Boolean)
    .join("\n");

  const htmlAttributes = safeToString(helmet?.htmlAttributes).trim();

  return { appHtml, headHtml, htmlAttributes };
}

