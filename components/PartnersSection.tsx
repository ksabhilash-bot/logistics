"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Coca Cola", logo: "/cocacola.png" },
  { name: "Asian Paints", logo: "/asianpaints.jpg" },
  { name: "PepsiCo", logo: "/pepsi.jpg" },
  { name: "Hero MotoCorp", logo: "/hero.png" },
];

export default function PartnersSection() {
  // We duplicate the partner list twice to ensure we have enough items for a seamless marquee loop
  // across wide screens, while ensuring correct -50% translation alignment.
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-white border-t border-b border-slate-100 overflow-hidden relative">
      {/* Subtle Studio lights overlay */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-slate-50/50 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Trusted By Leading Brands
          </h2>
          <p className="font-inter text-slate-500 text-sm mt-2">
            Building long-term partnerships through dependable, precise logistics.
          </p>
        </div>

        {/* Marquee Track Container */}
        <div className="relative w-full overflow-hidden py-4 flex items-center">
          
          {/* Fade overlays on sides for premium visual cutoff */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee scrolling strip */}
          <div className="animate-marquee flex gap-12 sm:gap-20 items-center justify-start">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-[120px] sm:w-[160px] h-[50px] relative group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 640px) 120px, 160px"
                  className="object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
