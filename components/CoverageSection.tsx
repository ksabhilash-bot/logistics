"use client";

import { motion } from "framer-motion";
import { MapPin, Activity, Navigation, Radio } from "lucide-react";

interface City {
  name: string;
  x: number; // SVG X coordinate
  y: number; // SVG Y coordinate
  align: "left" | "right" | "top" | "bottom";
}

const cities: City[] = [
  { name: "Delhi", x: 305, y: 175, align: "top" },
  { name: "Mumbai", x: 195, y: 395, align: "left" },
  { name: "Chennai", x: 345, y: 505, align: "right" },
  { name: "Bengaluru", x: 295, y: 495, align: "left" },
  { name: "Hyderabad", x: 315, y: 425, align: "right" },
  { name: "Kolkata", x: 455, y: 285, align: "right" },
  { name: "Ahmedabad", x: 185, y: 295, align: "left" },
  { name: "Jaipur", x: 260, y: 215, align: "left" },
  { name: "Lucknow", x: 345, y: 210, align: "right" },
  { name: "Chandigarh", x: 295, y: 125, align: "top" },
];

const routes = [
  { from: "Delhi", to: "Mumbai", controlX: 240, controlY: 280 },
  { from: "Delhi", to: "Kolkata", controlX: 380, controlY: 230 },
  { from: "Mumbai", to: "Bengaluru", controlX: 230, controlY: 450 },
  { from: "Bengaluru", to: "Chennai", controlX: 320, controlY: 500 },
  { from: "Delhi", to: "Bengaluru", controlX: 310, controlY: 330 },
  { from: "Hyderabad", to: "Chennai", controlX: 330, controlY: 465 },
  { from: "Mumbai", to: "Kolkata", controlX: 320, controlY: 340 },
  { from: "Jaipur", to: "Ahmedabad", controlX: 220, controlY: 255 },
  { from: "Delhi", to: "Lucknow", controlX: 325, controlY: 190 },
  { from: "Chandigarh", to: "Delhi", controlX: 300, controlY: 150 },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Studio Lighting Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-100/60 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-outfit font-semibold text-xs text-blue-600 uppercase tracking-widest bg-blue-50 w-fit px-3 py-1.5 rounded-full">
              National Network
            </span>
            
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
              Delivering Across India
            </h2>
            
            <p className="font-inter font-normal text-slate-600 text-base sm:text-lg leading-relaxed">
              From busy metropolitan manufacturing centers to emerging industrial corridors, AS Logistics provides dependable, highly optimized transport routes across the nation. 
              Our connected hubs enable fast regional dispatching and safe, nationwide tracking for high-volume enterprise logistics.
            </p>

            {/* Interactive Legend / Info */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Radio className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-slate-900 text-sm">Real-Time Routing</h4>
                  <p className="font-inter text-xs text-slate-500">Live coordinates optimize shipment routes dynamically.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/50 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-slate-900 text-sm">Metropolitan Hubs</h4>
                  <p className="font-inter text-xs text-slate-500">Connecting 10 major commercial zones seamlessly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom SVG Map Graphic */}
          <div className="lg:col-span-7 flex justify-center relative">
            
            {/* Floating Telemetry Badges */}
            <div className="absolute top-4 left-4 sm:top-10 sm:left-10 z-10 bg-white/80 backdrop-blur-md border border-slate-200/50 p-4 rounded-xl shadow-lg flex items-center gap-3 animate-[float_6s_ease-in-out_infinite]">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
              <div className="font-outfit">
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Active Shipments</p>
                <p className="text-sm font-extrabold text-slate-900">1,482 Parcels In Transit</p>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 z-10 bg-white/80 backdrop-blur-md border border-slate-200/50 p-4 rounded-xl shadow-lg flex items-center gap-3 animate-[float_8s_ease-in-out_infinite_2s]">
              <Activity className="w-5 h-5 text-blue-600" />
              <div className="font-outfit">
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Network Health</p>
                <p className="text-sm font-extrabold text-slate-900">99.8% On-Time Dispatches</p>
              </div>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="w-full max-w-[500px] aspect-[12/13] bg-white rounded-3xl border border-slate-200/50 shadow-xl p-4 sm:p-8 studio-glow">
              <svg
                viewBox="0 0 600 650"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized geometric background outline of India */}
                <motion.path
                  initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M 300,50 
                     L 320,80 L 310,120 L 350,150 L 370,180 L 350,220 L 400,240 L 420,220 L 450,230 L 470,260 L 530,260 L 570,250 L 580,270 L 540,290 L 510,290 L 490,320 L 450,300 L 430,340 L 400,340 L 380,380 L 350,420 L 340,480 L 330,520 L 320,560 L 300,600 L 285,560 L 270,510 L 250,470 L 225,450 L 210,400 L 220,360 L 170,350 L 150,340 L 110,340 L 100,310 L 130,280 L 160,280 L 180,240 L 220,230 L 240,180 L 260,170 L 275,120 L 270,80 Z"
                  fill="rgba(37, 99, 235, 0.015)"
                  stroke="rgba(148, 163, 184, 0.2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Animated Routes (quadratic bezier curves for visual elegance) */}
                <g>
                  {routes.map((route, idx) => {
                    const startCity = cities.find(c => c.name === route.from);
                    const endCity = cities.find(c => c.name === route.to);
                    if (!startCity || !endCity) return null;

                    return (
                      <g key={`${route.from}-${route.to}`}>
                        {/* Static light blue base connector */}
                        <path
                          d={`M ${startCity.x},${startCity.y} Q ${route.controlX},${route.controlY} ${endCity.x},${endCity.y}`}
                          fill="none"
                          stroke="rgba(37, 99, 235, 0.08)"
                          strokeWidth="2"
                        />
                        {/* Glowing flowing connector animation */}
                        <motion.path
                          d={`M ${startCity.x},${startCity.y} Q ${route.controlX},${route.controlY} ${endCity.x},${endCity.y}`}
                          fill="none"
                          stroke="rgba(37, 99, 235, 0.6)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className="animated-route"
                          style={{
                            // We define custom dashes and keyframe animation via inline style
                            strokeDasharray: "6, 12",
                          }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                        />
                      </g>
                    );
                  })}
                </g>

                {/* Pulsing City Markers */}
                <g>
                  {cities.map((city) => {
                    const textOffset = { x: 0, y: 0 };
                    if (city.align === "left") {
                      textOffset.x = -10;
                      textOffset.y = 4;
                    } else if (city.align === "right") {
                      textOffset.x = 10;
                      textOffset.y = 4;
                    } else if (city.align === "top") {
                      textOffset.x = 0;
                      textOffset.y = -12;
                    } else {
                      textOffset.x = 0;
                      textOffset.y = 16;
                    }

                    return (
                      <g key={city.name} className="cursor-pointer group">
                        {/* Pulsing ring indicator */}
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="12"
                          className="fill-blue-500/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"
                          style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                        />
                        {/* Interactive inner dot */}
                        <circle
                          cx={city.x}
                          cy={city.y}
                          r="4.5"
                          className="fill-blue-600 stroke-white stroke-2 group-hover:fill-slate-900 transition-colors"
                        />
                        {/* City label text */}
                        <text
                          x={city.x + textOffset.x}
                          y={city.y + textOffset.y}
                          textAnchor={
                            city.align === "left"
                              ? "end"
                              : city.align === "right"
                              ? "start"
                              : "middle"
                          }
                          className="font-outfit text-[11px] font-semibold fill-slate-700 pointer-events-none group-hover:fill-blue-600 transition-colors"
                        >
                          {city.name}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS Inject for Dash Offset Flow */}
      <style jsx global>{`
        @keyframes routeFlow {
          from {
            stroke-dashoffset: 48;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animated-route {
          animation: routeFlow 2.5s linear infinite;
        }
      `}</style>
    </section>
  );
}
