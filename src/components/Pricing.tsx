import { Check } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import Title from './Title';
import { plansData } from '../assets/dummy-data';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const plan = plansData.find((p) => p.popular) ?? plansData[0];
    const outcomeBullets = [
        'Inventory accuracy you can rely on, without manual counts',
        'Stockouts and urgent purchases caused by data errors are eliminated',
        'Reduced capital locked in safety buffers and excess stock',
        'Faster audits and root-cause analysis',
        'ERP data teams can trust for daily operational decisions',
    ];

    return (
        <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="THE OUTCOME"
                    heading="What changes when ERP reflects reality"
                    description="When physical inventory is continuously verified, operations become predictable. This is not periodic inventory checking. It is continuous operational visibility."
                />

                <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
                    <motion.div
                        ref={(el) => {
                            refs.current[0] = el;
                        }}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                        onAnimationComplete={() => {
                            const card = refs.current[0];
                            if (card) {
                                card.classList.add("transition", "duration-500", "hover:scale-102");
                            }
                        }}
                        className={`relative p-6 rounded-xl border backdrop-blur ${plan.popular
                            ? 'border-indigo-500/50 bg-indigo-900/30'
                            : 'border-white/8 bg-indigo-950/30'
                            } md:w-1/2 mx-auto`}
                    >
                        <div className="mb-6">
                            <p className="text-lg font-semibold">
                                With Vixgen, companies achieve:
                            </p>
                        </div>

                        <ul className="space-y-3 mb-6">
                            {outcomeBullets.map((feat, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 text-sm text-gray-300"
                                >
                                    <Check className="w-4 h-4 text-indigo-400" />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <div>
                            <PrimaryButton className="w-full sm:w-auto">
                                Get a Demo
                            </PrimaryButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};