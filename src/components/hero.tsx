"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-start md:justify-center items-center overflow-hidden bg-primary px-4 pt-32 md:pt-20">
            {/* Decorative Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float-medium delay-1000" />

            {/* Floating Organic Elements (Simulated with simple shapes for now) */}
            <div className="absolute top-1/4 left-10 md:left-20 animate-float-slow text-accent opacity-60">
                <Star className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <div className="absolute bottom-1/3 right-10 md:right-24 animate-float-fast delay-500 text-secondary opacity-60">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="40" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto text-center">
                <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="text-xs md:text-base font-medium text-accent tracking-wider uppercase">
                        Welcome to L4 Rooftop
                    </span>
                </div>

                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-primary-foreground mb-4 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 leading-tight">
                    Taste the <br className="hidden md:block" />
                    <span className="italic text-accent relative inline-block">
                        Organic
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>{" "}
                    <br className="md:hidden" />
                    Elegance
                </h1>

                <p className="max-w-2xl mx-auto text-base md:text-xl text-primary-foreground/80 mb-8 md:mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 px-4">
                    A sanctuary where modern design meets culinary artistry.
                    Experience seasonal flavors in a space designed to soothe the soul.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 w-full px-4">
                    <Link href="/menu" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent/90 text-primary font-semibold min-w-[180px] h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            View Menu
                        </Button>
                    </Link>
                    <Link href="#reservation" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto rounded-full bg-[#E8E0D5] hover:bg-white text-primary font-semibold min-w-[180px] h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#E8E0D5] hover:border-white">
                            Book a Table
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 hidden md:block">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary-foreground to-transparent" />
            </div>
        </section>
    );
}
