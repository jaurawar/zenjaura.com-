"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TIMES = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

export default function PodcastBooking() {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    return (
        <section className="py-24 bg-background text-foreground px-6 border-t border-white/5">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif">Global Author Podcast</h2>
                    <p className="text-foreground/50 mt-4 font-light">Schedule your feature interview with our media house.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/[0.02] border border-white/10 p-12 rounded-lg">
                    <div>
                        <h3 className="text-xl font-serif mb-6">Select a Date</h3>
                        <input
                            type="date"
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-4 rounded-sm text-foreground focus:border-brand-gold outline-none transition-all"
                        />
                        <p className="mt-4 text-xs text-foreground/40 italic">
                            Authors in the "Global Signature" tier get 1 free session.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-serif mb-6">Available Slots</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {TIMES.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    className={`py-3 rounded-sm border transition-all text-sm font-medium ${selectedTime === time ? 'bg-brand-gold text-background border-brand-gold' : 'bg-transparent border-white/10 hover:border-brand-gold/50'}`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>

                        <button
                            disabled={!selectedDate || !selectedTime}
                            className="w-full mt-10 py-4 bg-foreground text-background font-medium rounded-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-gold transition-colors"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
