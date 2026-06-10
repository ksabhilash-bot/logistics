"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/aslogistics/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="font-outfit font-extrabold text-2xl tracking-tight text-white">
              AS<span className="text-blue-500 font-medium"> LOGISTICS</span>
            </span>
            <p className="font-inter text-sm max-w-sm">
              Moving India Forward. Providing premium, high-efficiency cargo transport, full-truck load delivery, and custom supply-chain coordination nationwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-white text-sm uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-2.5 text-sm">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#coverage" className="hover:text-white transition-colors">Coverage</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Socials & Information */}
          <div className="flex flex-col gap-4">
            <h4 className="font-outfit font-bold text-white text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink-500"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Separator line */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-slate-600">
            © 2026 AS Logistics. All rights reserved. Designed for premium supply connectivity.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 hover:border-slate-600 hover:bg-slate-900 text-slate-400 hover:text-white transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
