"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, Boxes, Zap, ShieldCheck, GitPullRequest, Globe2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Full Truck Load",
    description: "Efficient transportation for large shipments, offering dedicated containerized trucks and optimal routing across long distances.",
    icon: Truck,
    color: "blue",
  },
  {
    title: "Part Load Services",
    description: "Flexible and cost-effective delivery solutions for smaller bulk orders, consolidating shipments to reduce business overheads.",
    icon: Boxes,
    color: "slate",
  },
  {
    title: "Express Delivery",
    description: "Fast and dependable transport services with priority transit and time-bound deliveries to keep your supply chain running.",
    icon: Zap,
    color: "blue",
  },
  {
    title: "Dedicated Fleet",
    description: "Customized logistics support for enterprises, providing dedicated trucks and vetted drivers tailored to your operations.",
    icon: ShieldCheck,
    color: "slate",
  },
  {
    title: "Supply Chain Support",
    description: "End-to-end movement coordination from warehousing hubs to retail stores, offering seamless stock transitions.",
    icon: GitPullRequest,
    color: "blue",
  },
  {
    title: "Nationwide Coverage",
    description: "Reliable connectivity across India's industrial centers, connecting metropolitan hubs to regional areas securely.",
    icon: Globe2,
    color: "slate",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-outfit font-semibold text-xs text-blue-600 uppercase tracking-widest bg-blue-50 w-fit px-3 py-1.5 rounded-full mb-4 inline-block">
            Our Offerings
          </span>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
            Reliable Transportation Solutions Tailored to Your Business Needs
          </h2>
          <p className="font-inter font-normal text-slate-500 text-lg mt-4 max-w-2xl">
            We provide a diverse range of shipping configurations. Whether you need express shipping, dedicated assets, or consolidated part loads, AS Logistics has you covered.
          </p>
        </div>

        {/* Feature Split Banner (Using truck1.jpg) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-20 shadow-xl shadow-slate-100 group"
        >
          <Image
            src="/truck1.jpg"
            alt="Commercial fleet shipping across India"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent flex items-end p-8 md:p-12" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg z-10 text-white">
            <span className="font-outfit font-medium text-xs text-blue-400 uppercase tracking-widest mb-2 inline-block">
              Premium Freight Fleet
            </span>
            <h3 className="font-outfit font-extrabold text-2xl md:text-4xl leading-tight mb-3">
              Heavy Cargo Security & Real-Time Tracking
            </h3>
            <p className="font-inter font-normal text-sm md:text-base text-slate-200">
              Our container fleet is fully secure and GPS-enabled, providing updates and transit confirmations for high-value enterprise distribution.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBlue = service.color === "blue";
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200/80 p-8 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors mb-6 ${
                      isBlue
                        ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                        : "bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-outfit font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-inter font-normal text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors pointer-events-none">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
