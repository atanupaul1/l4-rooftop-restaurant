import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
            <div className="container relative mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="font-serif text-3xl font-bold text-white tracking-tight">
                    L4
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    {["Home", "Menu", "Reservations", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : item === "Menu" ? "/menu" : `#${item.toLowerCase()}`}
                            className="text-sm font-medium text-white/80 hover:text-accent transition-colors tracking-wide uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <Link href="#reservation">
                        <Button className="rounded-full bg-white text-primary hover:bg-accent hover:text-primary font-semibold transition-all">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
