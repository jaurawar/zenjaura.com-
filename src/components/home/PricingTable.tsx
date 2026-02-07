"use client";

import { motion } from "framer-motion";

const TIERS = [
    { name: "Basic", price: "$700", features: ["ISBN Registration", "Global Distribution", "Standard Editing"], highlight: false },
    { name: "Global Signature", price: "$2,200", features: ["Hardback Setup", "PR Strategy", "Author Website", "Amazon Ads"], highlight: true },
    { name: "Global Elite", price: "$4,500", features: ["Podcast Interviews", "Times Square Billboard", "Bestseller Campaign", "Custom Illustrations"], highlight: false },
];

export default function PricingTable() {
    return (
        <section className="py-24 bg-background text-foreground px-6 border-t border-white/5">
            <div className="container mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-serif mb-4">Investment Tiers</h2>
                    <p className="text-foreground/50 font-light">Transparent pricing for global ambitions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TIERS.map((tier, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-lg flex flex-col ${tier.highlight ? 'bg-brand-gold/5 border-2 border-brand-gold shadow-[0_0_40px_-10px_rgba(198,163,91,0.2)]' : 'bg-white/[0.02] border border-white/10'}`}
                        >
                            <div className="mb-8">
                                <h3 className="text-xs uppercase tracking-[0.2em] mb-4 text-brand-gold">{tier.name}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-serif">{tier.price}</span>
                                    <span className="text-foreground/40 text-sm">/ Project</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-foreground/70">
                                        <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-sm transition-all font-medium ${tier.highlight ? 'bg-brand-gold text-background hover:bg-white hover:text-background' : 'bg-white/5 border border-white/20 hover:border-brand-gold hover:text-brand-gold'}`}>
                                Select This Tier
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* High-Ticket Series Section */}
                <div className="mt-20 p-12 bg-white/[0.01] border border-white/5 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h4 className="text-2xl font-serif mb-4 italic text-brand-gold">Franchise Building & Series Publishing</h4>
                        <p className="text-foreground/50 text-sm font-light leading-relaxed">
                            For high-ticket authors looking to build a legacy. Comprehensive franchise management and multi-book strategies across web and film.
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs uppercase tracking-widest text-foreground/40 mb-2">Starting From</p>
                        <p className="text-3xl font-serif">₹4,00,000</p>
                        <button className="mt-6 text-sm text-brand-gold border-b border-brand-gold/30 hover:border-brand-gold transition-all pb-1 uppercase tracking-[0.2em]">Book Consultation</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
