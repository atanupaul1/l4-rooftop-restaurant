"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { supabase } from "@/lib/supabase";

export function ReservationForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setStatus("idle");
        setMessage("");

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get("name") as string,
            phone: formData.get("phone") as string,
            reservation_date: formData.get("date") as string,
            reservation_time: formData.get("time") as string,
            guests: parseInt(formData.get("guests") as string),
        };

        if (!supabase) {
            // Fallback if supabase uses placeholder logic or isn't init
            console.log("Supabase not initialized, mocking submission:", data);
            setTimeout(() => {
                setLoading(false);
                setStatus("success");
                setMessage("Reservation submitted successfully! (Mocked)");
            }, 1000);
            return;
        }

        try {
            const { error } = await supabase.from("reservations").insert([data]);

            if (error) throw error;

            setStatus("success");
            setMessage("Reservation submitted successfully! We will confirm shortly.");
            (event.target as HTMLFormElement).reset();
        } catch (error) {
            console.error("Error submitting reservation:", error);
            setStatus("error");
            setMessage("Failed to submit reservation. Please try again or call us.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="reservation" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4 max-w-3xl">
                <Card className="border-none shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl md:text-4xl font-serif text-primary">Book a Table</CardTitle>
                        <CardDescription>Reserve your spot for an unforgettable dining experience.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                    <Input id="phone" name="phone" placeholder="+91 98765 43210" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-sm font-medium">Date</label>
                                    <Input id="date" name="date" type="date" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="time" className="text-sm font-medium">Time</label>
                                    <Input id="time" name="time" type="time" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="guests" className="text-sm font-medium">Guests</label>
                                    <Input id="guests" name="guests" type="number" min="1" max="20" placeholder="2" required />
                                </div>
                            </div>
                            <Button type="submit" className="w-full text-lg h-12" disabled={loading}>
                                {loading ? "Submitting..." : "Confirm Reservation"}
                            </Button>

                            {status === "success" && (
                                <p className="text-green-600 text-center font-medium mt-4">{message}</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-600 text-center font-medium mt-4">{message}</p>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
