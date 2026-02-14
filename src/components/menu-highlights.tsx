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
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-12 text-primary">
                    Menu Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item) => (
                        <Card key={item.title} className="overflow-hidden border-none shadow-lg group">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <CardContent className="p-6 bg-card text-center">
                                <h3 className="text-2xl font-serif font-bold mb-3 text-primary">{item.title}</h3>
                                <p className="text-muted-foreground mb-6">{item.description}</p>
                                <Link href={item.link}>
                                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                        Explore Menu
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
