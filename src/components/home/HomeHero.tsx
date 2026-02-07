"use client";

import { motion } from "framer-motion";

export default function HomeHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground px-6 py-24">
            {/* Background 3D-like blobs for atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-olive opacity-20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold opacity-10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs tracking-[0.3em] uppercase border border-brand-gold/30 rounded-full bg-brand-gold/5 text-brand-gold">
                        The Pinnacle of Modern Publishing
                    </span>

                    <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1] tracking-tight">
                        Transform Your <br />
                        <span className="italic text-brand-gold">Manuscript</span> Into <br />
                        A Global Book
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 mb-12 font-sans font-light leading-relaxed">
                        Experience intellectual luxury. Zenjaura bridges the gap between editorial prestige and global reach.
                        Publishing starting at <span className="text-foreground">$700 (₹58,000 approx)</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-brand-gold text-background font-medium rounded-sm border border-brand-gold hover:bg-transparent hover:text-brand-gold transition-all duration-300"
                        >
                            Start Your Journey
                        </motion.button>
                        <motion.button
                            whileHover={{ y: -2 }}
                            className="px-10 py-4 bg-transparent text-foreground font-medium rounded-sm border border-foreground/20 hover:border-foreground/50 transition-all duration-300"
                        >
                            View Pricing Tiers
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating Book Mockup Placeholders */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto opacity-40">
                    {/* These would be Three.js components or high-res images */}
                    <div className="h-64 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transform rotate-[-5deg] flex items-center justify-center font-serif text-brand-gold/50">The Odyssey</div>
                    <div className="h-72 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg transform translate-y-[-20px] flex items-center justify-center font-serif text-white/50 shadow-2xl">Zenjaura Signature</div>
                    <div className="h-64 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transform rotate-[5deg] flex items-center justify-center font-serif text-brand-olive/50">Modern Philosophy</div>
                </div>
            </div>
        </section>
    );
}
