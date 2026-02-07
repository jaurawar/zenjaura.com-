"use client";

import { motion } from "framer-motion";

const STAL_DATA = [
    { label: "Total Royalties", value: "$12,450.00", change: "+12%", trend: "up" },
    { label: "Books Published", value: "3", change: "New Release", trend: "neutral" },
    { label: "Global Reach", value: "48 Countries", change: "+5", trend: "up" },
    { label: "Profile Status", value: "Gold Tier", change: "Next: Olive", trend: "neutral" },
];

export default function AuthorDashboard() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8 font-sans">
            <header className="mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-serif mb-2">Welcome back, Elara</h2>
                    <p className="text-foreground/50 font-light">Your publishing empire at a glance.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold rounded-sm hover:bg-brand-gold/20 transition-all font-medium">
                        Submit Manuscript
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {STAL_DATA.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 blur-[40px] rounded-full group-hover:bg-brand-gold/10 transition-all" />
                        <p className="text-xs uppercase tracking-widest text-foreground/40 mb-2">{item.label}</p>
                        <h3 className="text-3xl font-serif text-foreground mb-4">{item.value}</h3>
                        <div className={`text-xs ${item.trend === 'up' ? 'text-brand-gold' : 'text-foreground/30'}`}>
                            {item.change}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sales Chart Placeholder */}
                <div className="lg:col-span-2 p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
                    <div className="flex justify-between items-center mb-8">
                        <h4 className="text-xl font-serif">Global Revenue Stream</h4>
                        <select className="bg-transparent border-none text-xs text-foreground/50 focus:ring-0 cursor-pointer">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-4">
                        {/* Mock chart bars */}
                        {[40, 70, 45, 90, 65, 80].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    className="w-full bg-brand-gold/20 border-t-2 border-brand-gold rounded-t-sm relative group"
                                >
                                    <div className="absolute top-[-40px] left-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 bg-brand-gold text-background px-2 py-1 rounded text-[10px] transition-all">
                                        ${h * 100}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Tracker */}
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
                    <h4 className="text-xl font-serif mb-8">Project: "The Gilded Page"</h4>
                    <div className="space-y-8">
                        {[
                            { step: "Editorial Review", status: "completed", date: "Jan 12" },
                            { step: "Book Cover Design", status: "in-progress", date: "Est. Feb 15" },
                            { step: "ISBN Registration", status: "pending", date: "---" },
                            { step: "Global Distribution", status: "pending", date: "---" },
                        ].map((s, i) => (
                            <div key={i} className="flex gap-4 items-start relative">
                                {i < 3 && <div className="absolute left-2.5 top-6 bottom-[-24px] w-[1px] bg-white/10" />}
                                <div className={`w-5 h-5 rounded-full mt-1 z-10 ${s.status === 'completed' ? 'bg-brand-gold' : s.status === 'in-progress' ? 'bg-brand-gold/30 border border-brand-gold animate-pulse' : 'bg-white/10 border border-white/20'}`} />
                                <div>
                                    <p className={`text-sm tracking-wide ${s.status === 'pending' ? 'text-foreground/30' : 'text-foreground'}`}>{s.step}</p>
                                    <p className="text-[10px] text-foreground/40">{s.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
