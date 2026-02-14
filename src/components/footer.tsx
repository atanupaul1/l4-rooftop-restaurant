import { Search, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 md:py-16" id="contact">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand & About */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-3xl font-serif font-bold mb-4">L4 Rooftop</h2>
                        <p className="text-primary-foreground/80 max-w-xs mb-6">
                            A modern organic dining experience offering the best views and flavors in the city.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <h3 className="text-xl font-serif font-bold mb-2">Visit Us</h3>
                        <a
                            href="https://maps.app.goo.gl/LDm3km2Wdj9UsFgq5?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 hover:text-accent transition-colors"
                        >
                            <MapPin className="h-5 w-5 mt-1 shrink-0" />
                            <p className="text-primary-foreground/80">
                                123 Example Street, <br />
                                City, State 12345
                            </p>
                        </a>
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 shrink-0" />
                            <p className="text-primary-foreground/80">+91 98765 43210</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 mt-1 shrink-0" />
                            <p className="text-primary-foreground/80">
                                Mon - Sun: 1:30 PM - 10:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl font-serif font-bold mb-4">Get Directions</h3>
                        <a
                            href="https://maps.app.goo.gl/LDm3km2Wdj9UsFgq5?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs mb-4"
                        >
                            <Button variant="secondary" className="w-full">
                                Open in Google Maps
                            </Button>
                        </a>
                        <p className="text-sm text-primary-foreground/60 mt-auto">
                            © {new Date().getFullYear()} L4 Rooftop. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
