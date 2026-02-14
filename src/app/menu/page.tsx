"use client"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Mock data in case Supabase is empty or not connected
const MOCK_MENU = [
    { id: 1, name: "Tandoori Chicken", description: "Half chicken marinated in yogurt and spices", price: 450, category: "Tandoori Specials", is_available: true },
    { id: 2, name: "Paneer Tikka", description: "Cottage cheese cubes grilled with veggies", price: 350, category: "Tandoori Specials", is_available: true },
    { id: 3, name: "Dragon Chicken", description: "Crispy chicken tossed in spicy red sauce", price: 420, category: "Chinese Fusion", is_available: true },
    { id: 4, name: "Hakka Noodles", description: "Stir-fried noodles with crisp vegetables", price: 280, category: "Chinese Fusion", is_available: true },
    { id: 5, name: "Virgin Mojito", description: "Fresh mint and lime refresher", price: 180, category: "Refreshing Drinks", is_available: true },
    { id: 6, name: "Blue Lagoon", description: "Curacao syrup with lemonade", price: 200, category: "Refreshing Drinks", is_available: true },
];

type MenuItem = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image_url?: string;
    is_available: boolean;
};

export default function MenuPage() {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMenu() {
            setLoading(true);

            let data: MenuItem[] | null = null;

            if (supabase) {
                const { data: supabaseData, error } = await supabase
                    .from('menu_items')
                    .select('*')
                    .eq('is_available', true);

                if (!error && supabaseData && supabaseData.length > 0) {
                    data = supabaseData;
                }
            }

            // Fallback to mock data
            if (!data) {
                console.log("Using mock menu data");
                data = MOCK_MENU;
            }

            setItems(data);
            const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
            setCategories(uniqueCategories);
            setLoading(false);
        }

        fetchMenu();
    }, []);

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-24 pb-12 bg-primary text-primary-foreground text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold">Our Menu</h1>
                <p className="mt-4 text-lg text-primary-foreground/80">Explore our culinary delights</p>
            </div>

            <div className="container mx-auto px-4 py-12">
                {loading ? (
                    <div className="text-center py-20">Loading menu...</div>
                ) : (
                    categories.map(category => (
                        <div key={category} id={category.toLowerCase().split(' ')[0]} className="mb-16">
                            <h2 className="text-3xl font-serif font-bold mb-8 text-primary border-b border-primary/20 pb-2 inline-block">
                                {category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                {items
                                    .filter(item => item.category === category)
                                    .map(item => (
                                        <Card key={item.id} className="flex flex-col md:flex-row overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                                            <CardContent className="p-6 flex-1 flex flex-col justify-center">
                                                <div className="flex justify-between items-baseline mb-2">
                                                    <h3 className="text-xl font-serif font-bold">{item.name}</h3>
                                                    <span className="text-lg font-medium text-primary">₹{item.price}</span>
                                                </div>
                                                <p className="text-muted-foreground">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </main>
    );
}
