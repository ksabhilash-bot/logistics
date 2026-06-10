// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { hasScrolledPastHero, scrollProgress } = useScrollProgress();
  const [isScrolled, setIsScrolled] = useState(false);

  // Additional check for normal scroll (not just hero section)
  useEffect(() => {
    const handleSimpleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleSimpleScroll);
    return () => window.removeEventListener("scroll", handleSimpleScroll);
  }, []);

  // Determine navbar style based on scroll position
  const isTransparent = !hasScrolledPastHero && !isScrolled;
  
  // Navbar background styles
  const navbarBg = isTransparent
    ? "bg-transparent"
    : "bg-white/80 backdrop-blur-md border-b border-slate-100";
  
  // Text link styles
  const linkColor = isTransparent
    ? "text-white hover:text-white/80"
    : "text-slate-600 hover:text-slate-900";
  
  // Logo text color
  const logoColor = isTransparent ? "text-white" : "text-slate-900";
  const logoAccentColor = isTransparent ? "text-blue-300" : "text-blue-600";
  
  // Mobile menu button color
  const menuButtonColor = isTransparent ? "text-white" : "text-slate-900";
  
  // Mobile menu background
  const mobileMenuBg = isTransparent
    ? "bg-black/90 backdrop-blur-lg"
    : "bg-white/95 backdrop-blur-lg ";

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <span className={`font-outfit font-extrabold text-2xl tracking-tight transition-colors duration-300 ${logoColor}`}>
                AS<span className={`transition-colors duration-300 ${logoAccentColor}`}> LOGISTICS</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-outfit font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 ${linkColor}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <a
                href="#quote"
                className={`font-outfit font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 ${
                  isTransparent
                    ? "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
                    : "bg-slate-900 text-white hover:bg-blue-600 shadow-md hover:shadow-blue-500/20"
                }`}
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${menuButtonColor}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Progress Bar (optional - shows scroll progress through hero section) */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: `${scrollProgress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className={`fixed top-20 left-0 w-full z-40 overflow-hidden md:hidden ${mobileMenuBg}`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-outfit font-medium text-lg py-2 transition-colors ${linkColor}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-outfit font-semibold text-center px-6 py-3 rounded-full mt-4 transition-all ${
              isTransparent
                ? "bg-white/10 backdrop-blur-sm text-white border border-white/20"
                : "bg-slate-900 text-white hover:bg-blue-600"
            }`}
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </>
  );
}