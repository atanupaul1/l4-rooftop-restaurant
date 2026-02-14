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
        <section className="py-16 md:py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                        Menu Highlights
                    </h2>
                    <p className="hidden md:block text-sm text-muted-foreground mt-2 md:mt-0">
                        Full menu available in-store and online.
                    </p>
                </div>

                {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
                    {highlights.map((item) => (
                        <Link href={item.link} key={item.title} className="flex-shrink-0 w-[85vw] md:w-auto snap-center">
                            <div className="group relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl cursor-pointer">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 leading-tight">
                                        {item.title.split(' ').map((word, i) => (
                                            <span key={i} className="block">{word}</span>
                                        ))}
                                    </h3>
                                    <div className="h-0.5 w-12 bg-accent mt-4 mb-4 transform origin-left transition-all duration-300 group-hover:w-full" />
                                    <p className="text-white/80 text-sm md:text-base opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <p className="md:hidden text-center text-xs text-muted-foreground mt-4">
                    Full menu available in-store and online.
                </p>
            </div>
        </section>
    );
}
