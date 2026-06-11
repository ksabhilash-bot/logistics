"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle, RefreshCw } from "lucide-react";
import { useTruckSequence } from "@/hooks/useTruckSequence";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);
  const currentFrameIndexRef = useRef<number>(151);

  const {
    images,
    progress: loadProgress,
    loading: isLoading,
    error,
  } = useTruckSequence(151);

  // Helper to draw a frame on the canvas with "cover" aspect-ratio fit
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index - 1];
    if (!img || !img.complete) return;

    // Dimensions accounting for Device Pixel Ratio (Retina support)
    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    // Set canvas buffer width and height to match display size * DPR
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    // Cover math
    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Resize canvas when viewport size changes
  const handleResize = () => {
    drawFrame(currentFrameIndexRef.current);
  };

  // Trigger frame updates and pinning via GSAP ScrollTrigger
  useEffect(() => {
    if (isLoading || images.length === 0) return;

    // Draw the first frame (index 150, exploded truck) initially
    drawFrame(150);

    const ctx = gsap.context(() => {
      // Pin the section and animate frame progression on scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // smooth scrubbing catch-up
        pin: stickyRef.current,
        onUpdate: (self) => {
          const scrollProgress = self.progress;

          // Map progress (0 -> 1) to frame index (150 -> 1)
          const totalFrames = 150;
          const targetFrame = Math.max(
            1,
            Math.min(
              totalFrames,
              Math.round(totalFrames - scrollProgress * (totalFrames - 1)),
            ),
          );

          currentFrameIndexRef.current = targetFrame;

          // Perform rendering inside requestAnimationFrame for maximum 60fps performance
          requestAnimationFrame(() => {
            drawFrame(targetFrame);
          });

          // Text opacity fade out: fades out completely in the first 25% of scroll
          if (textOverlayRef.current) {
            const textProgress = Math.min(1, scrollProgress / 0.25);
            const opacity = 1 - textProgress;
            const translateY = -60 * textProgress;

            textOverlayRef.current.style.opacity = opacity.toString();
            textOverlayRef.current.style.transform = `translateY(${translateY}px)`;
            textOverlayRef.current.style.pointerEvents =
              opacity < 0.1 ? "none" : "auto";
          }
        },
      });
    }, containerRef);

    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoading, images]);

  // Subtle Mouse Parallax Effect
  useEffect(() => {
    if (isLoading) return;

    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Map coordinates to range [-1, 1] relative to viewport center
      const xOffset = (clientX - innerWidth / 2) / (innerWidth / 2);
      const yOffset = (clientY - innerHeight / 2) / (innerHeight / 2);

      // Translate canvas element slightly for 3D depth effect
      gsap.to(canvas, {
        x: xOffset * 15,
        y: yOffset * 15,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isLoading]);

  // Framer Motion Animation Variants for text overlay
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
    <div
      id="home"
      ref={containerRef}
      className="relative w-full h-[350vh] bg-white"
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-6">
          <div className="w-full max-w-md flex flex-col items-center text-center">
            <span className="font-outfit font-extrabold text-3xl tracking-tight text-slate-900 mb-6">
              AS<span className="text-blue-600 font-medium"> LOGISTICS</span>
            </span>
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: "0%" }}
                animate={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="font-outfit font-medium text-sm text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin text-blue-600" />
              Loading Experience {loadProgress}%
            </p>
          </div>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div
        ref={stickyRef}
        className="w-full h-screen overflow-hidden bg-white select-none flex items-center justify-center relative"
      >
        {/* Subtle background glow representing studio lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />

        {/* The frame sequence canvas inside a floating animation container */}
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden animate-[float_8s_ease-in-out_infinite]">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover transition-transform"
          />
        </div>

        {/* Text Overlay Section */}
        <div
          ref={textOverlayRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-100 ease-out"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "visible"}
            className="max-w-4xl flex flex-col items-center gap-6"
          >
            <motion.h1
              variants={itemVariants}
              className="font-outfit font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-white"
            >
              Moving India Forward.
              <br />
              <span className="text-zinc-400">Reliable Logistics.</span>
              <br />
              Trusted Delivery.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-inter font-normal text-base sm:text-xl text-white max-w-2xl"
            >
              Efficient transport solutions connecting businesses across the
              nation. Experience the cinematic power of precision dispatch.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-6 pointer-events-auto"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-blue-500/10 text-base"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white border border-slate-200 hover:border-slate-400 text-slate-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-slate-50 text-base"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-10 flex flex-col items-center gap-2 text-white"
            >
              <span className="font-outfit font-medium text-xs uppercase tracking-widest">
                Scroll to Explore
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown className="w-5 h-5 text-blue-600" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
