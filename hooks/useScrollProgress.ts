
import { useState, useEffect } from "react";

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 3.5; // 350vh from your HeroCanvas
      
      // Calculate progress (0 to 1) through the hero section
      const progress = Math.min(1, Math.max(0, scrollY / heroHeight));
      setScrollProgress(progress);
      
      // Check if scrolled past the hero section (after 350vh)
      setHasScrolledPastHero(scrollY > heroHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollProgress, hasScrolledPastHero };
};