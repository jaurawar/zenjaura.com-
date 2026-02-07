import HomeHero from "@/components/home/HomeHero";
import GenreGrid from "@/components/home/GenreGrid";
import JourneyMap from "@/components/home/JourneyMap";
import PricingTable from "@/components/home/PricingTable";

export default function Home() {
    return (
        <main className="bg-background min-h-screen">
            {/* Navigation - Simplified for Demo */}
            <nav className="fixed top-0 w-full z-50 px-12 py-8 flex justify-between items-center mix-blend-difference">
                <h1 className="text-2xl font-serif tracking-widest text-foreground">ZENJAURA</h1>
                <div className="flex gap-8 text-xs uppercase tracking-widest text-foreground/70">
                    <a href="#" className="hover:text-brand-gold transition-colors">Authors</a>
                    <a href="#" className="hover:text-brand-gold transition-colors">Services</a>
                    <a href="#" className="hover:text-brand-gold transition-colors">Dashboard</a>
                </div>
            </nav>

            <HomeHero />
            <GenreGrid />
            <JourneyMap />
            <PricingTable />

            {/* Footer */}
            <footer className="py-24 bg-background border-t border-white/5 text-center">
                <p className="text-xs uppercase tracking-[0.5em] text-foreground/30 mb-8">Zenjaura Publishing House</p>
                <div className="flex justify-center gap-12 font-light text-foreground/50 text-sm">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Contact</a>
                </div>
            </footer>
        </main>
    );
}
