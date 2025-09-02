"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Star, Heart, Sparkles, Leaf, Droplet } from "lucide-react";
import { image } from "framer-motion/client";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="max-w-2xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
    {subtitle && <p className="text-muted-foreground mt-3 leading-relaxed">{subtitle}</p>}
  </div>
);

const ServiceCard = ({ title, desc, price, image }: { title: string; desc: string; price?: React.ReactNode; image?: string }) => (
  <Card className="rounded-2xl overflow-hidden">
    {image && (
      <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
    )}
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-2 leading-relaxed">{desc}</p>
      {price && <p className="mt-4 font-semibold">{price}</p>}
      <div className="mt-4">
        <a
          href="https://www.fresha.com/a/jin-spa-san-antonio-13216-huebner-rd-huebner-road-aet3w337"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-2xl">Book {title}</Button>
        </a>
      </div>
    </CardContent>
  </Card>
);

export default function JinsMassageLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(255, 182, 193, 0.4)] via-[rgba(255, 182, 193, 0.6)] to-[rgba(255, 182, 193, 0.8)] text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6"/>
            <span className="font-semibold tracking-wide">Jin's Massage</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#add-ons" className="hover:opacity-80">Add-Ons</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <a
            href="https://www.fresha.com/a/jin-spa-san-antonio-13216-huebner-rd-huebner-road-aet3w337"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-2xl px-4">Book Now</Button>
          </a>
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
              <a
                href="https://www.fresha.com/a/jin-spa-san-antonio-13216-huebner-rd-huebner-road-aet3w337"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-2xl px-5">Schedule Now</Button>
              </a>
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

            {/* About */}
            <section id="about" className="py-16">
              <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-[url('/images/hands.jpg')] bg-cover bg-center" />
                <div>
                  <SectionTitle title="About Jin's" />
                  <p className="text-muted-foreground leading-relaxed">
                    With a gentle yet effective approach, Jin's blends Eastern and Western techniques to support circulation, mobility, and deep relaxation. Each session is fully customized to your body and goals.
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                    <li className="flex items-center gap-2"><Sparkles className="w-4 h-4"/> Licensed, experienced staff</li>
                    <li className="flex items-center gap-2"><Star className="w-4 h-4"/> Local 5‑star favorite</li>
                    <li className="flex items-center gap-2"><Leaf className="w-4 h-4"/> Clean, skin‑friendly products</li>
                    <li className="flex items-center gap-2"><Clock className="w-4 h-4"/> Easy online booking</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services */}
            <section id="services" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
            <SectionTitle title="Massage Services" subtitle="Classic and targeted bodywork to meet you where you are."/>
            <div className="grid md:grid-cols-4 gap-6">
            <ServiceCard
              title="Swedish Massage"
              desc="Long, flowing strokes to calm the nervous system, improve circulation, and melt away everyday tension. Ideal for first‑timers and deep relaxation."
              price={
              <span style={{ whiteSpace: "pre-line" }}>
                30 min • $50
                {"\n"}60 min • $80
                {"\n"}90 min • $120
              </span>
              }
              image="images/swedishMassage.jpg"
            />
            <ServiceCard
              title="Deep Tissue Massage"
              desc="Focused, slower pressure to reach deeper layers and relieve chronic tightness. Great for desk strain, athletic recovery, and persistent knots."
              price={
              <span style={{ whiteSpace: "pre-line" }}>
                30 min • $60
                {"\n"}60 min • $90
                {"\n"}90 min • $130
              </span>
              }
              image="images/deepTissueMassage.jpg"
            />
            <ServiceCard
              title="Combo Massage"
              desc="An elevated session with premium oil, hot stones or Himalayan salt stones, steam eye mask or facial mask, plus hydration and infrared lamp treatment."
              price={
              <span style={{ whiteSpace: "pre-line" }}>
                30 min • $55
                {"\n"}60 min • $85
                {"\n"}90 min • $125
              </span>
              }
              image="images/comboMassage.jpg"
            />
            <ServiceCard
              title="Foot Reflexology"
              desc="Gentle pressure on mapped points of the feet to ease tension, improve circulation, reduce stress, and restore balance throughout the body."
              price={
              <span style={{ whiteSpace: "pre-line" }}>
                30 min • $50
                {"\n"}45 min • $65
                {"\n"}60 min • $80
              </span>
              }
              image="images/footBath.jpg"
            />
            </div>
            {/* <p className="text-sm text-muted-foreground mt-4">* Placeholder. Replace with actual menu.</p> */}
          </div>
          </section>

      {/* Packages */}
      <section id="add-ons" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle title="Add-Ons" subtitle="Enhance your session with these relaxing upgrades." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Cupping", desc: "Gentle suction therapy to improve circulation, relieve muscle tension, and promote healing.", price: "$20", image: "images/cupping.jpg" },
              { title: "Himalayan Salt Stone", desc: "Warm salt stones to soothe tight areas and provide a natural detoxifying effect.", price: "$15", image: "images/saltStones.jpg" },
              { title: "Hot Stones", desc: "Smooth, heated stones to melt away tension and enhance relaxation during your massage.", price: "$15", image: "images/hotStones.jpg" },
              { title: "doTERRA Oil", desc: "Premium essential oil blend to elevate your massage with calming or invigorating aromas.", price: "$15", image: "images/doTERRA.jpg" },
              { title: "CBD Oil", desc: "Infused oil to reduce inflammation, ease pain, and promote deep relaxation.", price: "$15", image: "images/CBD.jpg" },
              { title: "Stretching", desc: "Assisted stretching to improve flexibility, relieve stiffness, and enhance mobility.", price: "$30", image: "images/stretching.jpg" },
            ].map((addon) => (
              <Card key={addon.title} className="rounded-2xl overflow-hidden">
                {addon.image && (
                  <div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${addon.image})` }}
                  />
                )}
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-semibold">{addon.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{addon.desc}</p>
                  </div>
                  <p className="mt-4 font-semibold self-start">{addon.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                <p className="text-sm text-muted-foreground">131216 Huebner Rd<br/>San Antonio, TX 78230</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-sm text-muted-foreground">Mon–Sun: 9:30a–8p<br/></p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-6 space-y-2">
                <h3 className="font-semibold">Connect</h3>
                <p className="text-sm flex items-center gap-2"><Phone className="w-4 h-4"/> (210) 909-8821</p>
                <p className="text-sm flex items-center gap-2"><Mail className="w-4 h-4"/> jinspa13216@gmail.com</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.fresha.com/a/jin-spa-san-antonio-13216-huebner-rd-huebner-road-aet3w337"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-2xl px-6">Book an Appointment</Button>
            </a>
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