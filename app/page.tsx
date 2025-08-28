"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Star, Heart, Sparkles } from "lucide-react";

// Jin's Massage one-page starter, modeled after the structure of the provided reference
// Swap shadcn/ui for simple <button> tags if needed.

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="max-w-2xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-3 leading-relaxed">{subtitle}</p>}
  </div>
);

const ServiceCard = ({ title, desc, price, image }: { title: string; desc: string; price?: string; image?: string }) => (
  <Card className="rounded-2xl overflow-hidden">
    {image && (
      <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
    )}
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2 leading-relaxed">{desc}</p>
      {price && <p className="mt-4 font-semibold">{price}</p>}
      <div className="mt-4">
        <Button className="rounded-2xl">Book {title}</Button>
      </div>
    </CardContent>
  </Card>
);

export default function JinsMassageLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6"/>
            <span className="font-semibold tracking-wide">Jin's Massage</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#packages" className="hover:opacity-80">Packages</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <Button className="rounded-2xl px-4">Book Now</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Relax. Realign. <span className="whitespace-nowrap">Restore.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Therapeutic bodywork and calming treatments tailored to your goals. From Swedish to Deep Tissue and specialty add‑ons, Jin's Massage is your space to breathe and reset.
            </p>
            <div className="mt-8 flex gap-3">
              <Button className="rounded-2xl px-5">Schedule Now</Button>
              <Button variant="outline" className="rounded-2xl px-5" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4"/>Mon–Sun, 9:30a–8p</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/>13216 Huebner Rd</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              {/* Local image placeholder */}
              <div className="absolute inset-0 bg-[url('/images/heroImg.jpg')] bg-cover bg-center"/>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"/>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">Quiet atmosphere. Skilled hands. Gentle results.</div>
            </motion.div>
          </div>
          </section>

          {/* Services */}
          <section id="services" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Massage Services" subtitle="Classic and targeted bodywork to meet you where you are."/>
            <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Swedish Massage"
              desc="Long, flowing strokes to calm the nervous system, improve circulation, and melt away everyday tension. Ideal for first‑timers and deep relaxation."
              price="$98 • 60 min"
              image="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&auto=format&fit=crop&w=1200"
            />
            <ServiceCard
              title="Deep Tissue Massage"
              desc="Focused, slower pressure to reach deeper layers and relieve chronic tightness. Great for desk strain, athletic recovery, and persistent knots."
              price="$108 • 60 min"
              image="https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&auto=format&fit=crop&w=1200"
            />
            <ServiceCard
              title="Deluxe Elite Massage"
              desc="An elevated session with premium oil, hot stones or Himalayan salt stones, steam eye mask or facial mask, plus hydration and infrared lamp treatment."
              price="$128 • 60 min"
              image="https://images.unsplash.com/photo-1556228724-4c1f9a9f5ff3?q=80&auto=format&fit=crop&w=1200"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">* Sample pricing. Replace with Jin's actual menu.</p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Popular Combos" subtitle="Thoughtful pairings for a fuller reset."/>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Refresh Duo", desc: "30m Swedish + 30m Deep Tissue", price: "$150" },
              { title: "Weekend Reset", desc: "60m Massage + Hot Stones", price: "$165" },
              { title: "Calm & Glow", desc: "60m Massage + Hydration add‑on", price: "$145" },
            ].map((p) => (
              <Card key={p.title} className="rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground mt-2">{p.desc}</p>
                  <p className="mt-4 font-semibold">{p.price}</p>
                  <Button className="mt-6 rounded-2xl w-full">Book {p.title}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1619451635801-9836d6f6e6a3?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
          <div>
            <SectionTitle title="Meet Jin" />
            <p className="text-muted-foreground leading-relaxed">
              With a gentle yet effective approach, Jin blends Eastern and Western techniques to support circulation, mobility, and deep relaxation. Each session is fully customized to your body and goals.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4"/> Licensed, experienced therapist</li>
              <li className="flex items-center gap-2"><Star className="w-4 h-4"/> Local 5‑star favorite</li>
              <li className="flex items-center gap-2"><Sparkles className="w-4 h-4"/> Clean, skin‑friendly products</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4"/> Easy online booking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Retail / Items */}
      <section id="retail" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Shop Jin’s Essentials" subtitle="Curated items to extend your relaxation at home."/>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Aromatherapy Oil Blend", desc: "A gentle, skin‑safe blend ideal for temple or neck massage at home. Calming notes to quiet the mind.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&auto=format&fit=crop&w=1200" },
              { title: "Himalayan Salt Stone", desc: "Naturally warming stone to ease tight areas. Use as a dry compress or glide with oil for soothing heat.", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&auto=format&fit=crop&w=1200" },
              { title: "Steam Eye Mask", desc: "Single‑use warming mask to relieve eye fatigue and encourage deeper rest after screen‑heavy days.", image: "https://images.unsplash.com/photo-1612832021025-46ef2eac8d5b?q=80&auto=format&fit=crop&w=1200" },
            ].map((i) => (
              <Card key={i.title} className="rounded-2xl overflow-hidden">
                <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: `url(${i.image})` }} />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{i.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{i.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">We’ll swap in your exact products and photos once provided.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Contact & Hours" subtitle="Have a question or special request? We’re here to help."/>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Visit</h3>
                <p className="text-sm text-muted-foreground">123 Tranquil Ln, Suite B<br/>Your City, ST 00000</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-sm text-muted-foreground">Mon–Sat: 10:00a – 7:00p<br/>Sun: Closed</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6 space-y-2">
                <h3 className="font-semibold">Connect</h3>
                <p className="text-sm flex items-center gap-2"><Phone className="w-4 h-4"/> (555) 123‑4567</p>
                <p className="text-sm flex items-center gap-2"><Mail className="w-4 h-4"/> hello@jinsmassage.example</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button className="rounded-2xl px-6">Book an Appointment</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Jin's Massage. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-80">Policies</a>
            <a href="#" className="hover:opacity-80">Gift Cards</a>
          </div>
        </div>
      </footer>
    </div>
  );
}