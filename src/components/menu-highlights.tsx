import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const highlights = [
    {
        title: "Tandoori Specials",
        description: "Authentic clay oven delicacies marinated in secret spices.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2000&auto=format&fit=crop",
        link: "/menu#tandoori",
    },
    {
        title: "Chinese Fusion",
        description: "A perfect blend of bold flavors and fresh ingredients.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1892&auto=format&fit=crop",
        link: "/menu#chinese",
    },
    {
        title: "Refreshing Drinks",
        description: "Handcrafted mocktails and beverages to cool you down.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1887&auto=format&fit=crop",
        link: "/menu#drinks",
    },
];

export function MenuHighlights() {
    return (
        <section className="relative py-16 md:py-24 bg-[#F7F4EF] overflow-hidden">
            {/* Aesthetic Grain Effect Overlay */}
            {/* Aesthetic Grain Effect Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4F5844]">
                        Menu Highlights
                    </h2>
                    <p className="text-xs md:text-sm text-[#4F5844]/60 mt-2 md:mt-0 uppercase tracking-widest">
                        Full menu available in-store and online.
                    </p>
                </div>

                {/* Fix: Grid layout for mobile (2 columns) and desktop (3 columns) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                    {highlights.map((item, idx) => (
                        <Link
                            href={item.link}
                            key={item.title}
                            className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-sm
                                ${idx === 2 ? "col-span-2 md:col-span-1" : "col-span-1"} 
                                h-[260px] md:h-[500px]`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                            {/* Content Overlay - Adjusted for small screens */}
                            <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                                <h3 className="text-xl md:text-4xl font-serif text-white mb-1 leading-tight">
                                    {item.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h3>
                                <div className="h-0.5 w-8 bg-white/50 mt-2 mb-2 transform origin-left transition-all duration-300 group-hover:w-full group-hover:bg-white" />

                                {/* Hidden on mobile to keep it clean, shown on hover/desktop */}
                                <p className="hidden md:block text-white/80 text-xs md:text-base opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
