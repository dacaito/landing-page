import { ArrowRightIcon, PlayIcon, PauseIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {

    const bgVideoRef = useRef<HTMLVideoElement | null>(null);
    const [isBgVideoPaused, setIsBgVideoPaused] = useState(false);

    const trustedUserImages = [
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
    ];

    const mainImageUrl = 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1600&auto=format&fit=crop';

    const trustedLogosText = [
        'Startups',
        'Scale-ups',
        'Founders',
        'Global teams',
        'Creative brands'
    ];

    useEffect(() => {
        const videoEl = bgVideoRef.current;
        if (!videoEl) return;

        const sync = () => setIsBgVideoPaused(videoEl.paused);
        sync();

        videoEl.addEventListener('play', sync);
        videoEl.addEventListener('pause', sync);

        return () => {
            videoEl.removeEventListener('play', sync);
            videoEl.removeEventListener('pause', sync);
        };
    }, []);

    return (
        <>
            <section id="home" className="relative z-10 overflow-hidden">
                {/* Background (swap to <video muted playsInline loop ... /> later) */}
                <div aria-hidden className="absolute inset-0 z-0">
                    <video
                        ref={bgVideoRef}
                        className="h-full w-full object-cover object-center scale-105 opacity-35"
                        src="/demo_video_test.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        controls={false}
                        disablePictureInPicture
                    />
                    <div className="absolute inset-0 bg-black/65" />
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-25 mix-blend-soft-light" />
                </div>

                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20">
                    <button
                        type="button"
                        className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-black/35 backdrop-blur-sm hover:bg-black/50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                        aria-label={isBgVideoPaused ? 'Play background video' : 'Pause background video'}
                        aria-pressed={!isBgVideoPaused}
                        onClick={async () => {
                            const videoEl = bgVideoRef.current;
                            if (!videoEl) return;

                            try {
                                if (videoEl.paused) {
                                    await videoEl.play();
                                } else {
                                    videoEl.pause();
                                }
                            } catch {
                                // Ignore autoplay/play promise failures (e.g. if browser blocks it unexpectedly).
                            }
                        }}
                    >
                        {isBgVideoPaused ? (
                            <PlayIcon className="size-4.5" />
                        ) : (
                            <PauseIcon className="size-4.5" />
                        )}
                    </button>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
                    <div className="w-full">
                        <div className="text-left max-w-3xl">
                            <motion.a href="https://prebuiltui.com/tailwind-templates?ref=pixel-forge" className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                            >
                                <div className="flex -space-x-2">
                                    {trustedUserImages.map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`Client ${i + 1}`}
                                            className="size-6 rounded-full border border-black/50"
                                            width={40}
                                            height={40}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-200/90">
                                    Trusted by brands & founders worldwide
                                </span>
                            </motion.a>

                            <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                Align ERP{' '}
                                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-indigo-400">
                                    with Reality
                                </span>
                            </motion.h1>

                            <motion.p className="text-gray-300 max-w-xl mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                            >
                                Real-time visibility and reconciliation between ERP data and physical inventory.
                                <br />
                                No manual counts. No tags. No operational disruption.
                            </motion.p>

                            <motion.div className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                            >
                                <a href="/" className="w-full sm:w-auto">
                                    <PrimaryButton className="max-sm:w-full py-3 px-7">
                                        Get a Demo
                                        <ArrowRightIcon className="size-4" />
                                    </PrimaryButton>
                                </a>

                                <GhostButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                                    <PlayIcon className="size-4" />
                                    View our work
                                </GhostButton>
                            </motion.div>

                            <motion.div className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <ZapIcon className="size-4 text-sky-500" />
                                    <div>
                                        <div>Strategy-led execution</div>
                                        <div className="text-xs text-gray-400">
                                            Focused on growth & results
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block h-6 w-px bg-white/6" />

                                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                                    <CheckIcon className="size-4 text-cyan-500" />
                                    <div>
                                        <div>Full-service delivery</div>
                                        <div className="text-xs text-gray-400">
                                            Design, dev & marketing
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOGO MARQUEE */}
            <motion.section className="border-y border-white/6 bg-white/1 max-md:mt-10"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="w-full overflow-hidden py-6">
                        <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
                            {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                                <span
                                    key={i}
                                    className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide transition-colors"
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};