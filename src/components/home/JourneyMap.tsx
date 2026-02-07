"use client";

import { motion } from "framer-motion";

const STEPS = [
    { title: "Manuscript", desc: "Digital submission & initial appraisal." },
    { title: "Editing", desc: "Copy-editing and conceptual ghostwriting." },
    { title: "Design", desc: "Cover art and premium interior layout." },
    { title: "ISBN", desc: "Global registration and indexing." },
    { title: "Distribution", desc: "Live on Amazon, Barnes & Noble, and Ingram." },
];

export default function JourneyMap() {
    return (
        <section className="py-24 bg-background text-foreground px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-serif">The Path to Publication</h2>
                    <p className="text-foreground/50 mt-4 font-light">Precision at every milestone.</p>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 max-w-6xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent hidden md:block" />

                    {STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex-1 text-center md:text-left"
                        >
                            <div className="w-20 h-20 bg-white/[0.03] border border-white/10 flex items-center justify-center rounded-sm mb-6 mx-auto md:mx-0 group hover:border-brand-gold/50 transition-all cursor-default">
                                <span className="text-brand-gold font-serif text-2xl group-hover:scale-110 transition-transform">0{idx + 1}</span>
                            </div>
                            <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                            <p className="text-sm text-foreground/40 font-light leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
