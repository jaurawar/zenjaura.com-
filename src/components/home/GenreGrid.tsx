"use client";

import { motion } from "framer-motion";

const GENRES = [
    "Romance", "Self-Help", "Philosophy", "Thriller",
    "Business", "Memoir", "Fantasy", "Science",
    "Poetry", "History", "Children", "Art"
];

export default function GenreGrid() {
    return (
        <section className="py-24 bg-background text-foreground px-6">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-serif mb-4">Explore Your Industry</h2>
                    <p className="text-foreground/50 max-w-xl mx-auto font-light">
                        From philosophical treatises to global business franchises, Zenjaura powers success across every literary landscape.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {GENRES.map((genre, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="group relative h-48 bg-white/[0.03] border border-white/5 overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-all hover:border-brand-gold/40 hover:bg-white/[0.05]"
                        >
                            <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/[0.02] transition-colors" />
                            <h3 className="text-xl font-serif relative z-10 group-hover:text-brand-gold transition-colors">{genre}</h3>
                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                <span className="text-[10px] uppercase tracking-widest text-brand-gold border-b border-brand-gold/30 pb-1">
                                    View Success Stories
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
