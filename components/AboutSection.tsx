"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Compass, Truck } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Studio Lighting Accent Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-slate-100/80 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Image and Glassmorphism Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/80 group">
              <Image
                src="/alok.jpeg"
                alt="Alok Sharma - Founder, AS Logistics"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Overlay shadow for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glassmorphic Accent Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-8 -right-4 sm:right-6 bg-white/70 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <h4 className="font-outfit font-bold text-lg text-slate-900">Alok Sharma</h4>
              <p className="font-inter font-medium text-xs text-blue-600 uppercase tracking-widest mb-2">
                Founder, AS Logistics
              </p>
              <p className="font-inter font-normal text-xs text-slate-500 leading-relaxed">
                We don&apos;t just move cargo. We drive industrial progress and build lasting trust.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Company Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-outfit font-semibold text-xs text-blue-600 uppercase tracking-widest bg-blue-50 w-fit px-3 py-1.5 rounded-full">
              Corporate Overview
            </span>

            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
              A Trusted Logistics Partner Committed to Excellence
            </h2>

            <p className="font-inter font-normal text-base sm:text-lg text-slate-600 leading-relaxed">
              At AS Logistics, we stand as a cornerstone of dependable freight connectivity. 
              We are dedicated to providing seamless cargo operations with a strict focus on safety, 
              punctuality, and customer-first support. We operate with high corporate ethics, 
              delivering customized logistics solutions that cater to the demanding needs of modern enterprises.
            </p>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-base text-slate-900">Absolute Safety</h4>
                  <p className="font-inter text-sm text-slate-500 mt-1">
                    Premium insurance and secure handling processes for zero-loss cargo transport.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-base text-slate-900">On-Time Deliveries</h4>
                  <p className="font-inter text-sm text-slate-500 mt-1">
                    Strict transit scheduling and optimized routes ensures deliveries are on time, every time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-base text-slate-900">Nationwide Reach</h4>
                  <p className="font-inter text-sm text-slate-500 mt-1">
                    Connecting industrial centers, metropolitan cities, and remote areas across India.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-base text-slate-900">Modern Fleet</h4>
                  <p className="font-inter text-sm text-slate-500 mt-1">
                    GPS-enabled commercial vehicles driven by vetted, experienced professionals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
