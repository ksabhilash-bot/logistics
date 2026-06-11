"use client";

import { useState, useEffect } from "react";

export interface UseTruckSequenceResult {
  images: HTMLImageElement[];
  progress: number;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook to preload 151 frame images for the cinematic canvas scroll sequence.
 * Caches images in memory to prevent canvas flicker and reports real-time load progress.
 *
 * @param totalFrames Total number of frame images to load.
 */
export function useTruckSequence(
  totalFrames: number = 150,
): UseTruckSequenceResult {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // 🔑 Tracks if component is still on screen
    const preloadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let failedCount = 0;

    const updateProgress = () => {
      if (!isMounted) return;
      const totalProcessed = loadedCount + failedCount;
      const percentage = Math.round((totalProcessed / totalFrames) * 100);
      setProgress(percentage);

      // ✅ ONLY update images when ALL are done loading
      if (totalProcessed === totalFrames) {
        setImages(preloadedImages); // ← Move setImages here
        setLoading(false);

        if (failedCount > 10) {
          setError(`Failed to load ${failedCount} frames`);
        }
      }
    };

    // Load images
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/frames/frame_${i.toString().padStart(4, "0")}.jpg`;

      img.onload = () => {
        loadedCount++;
        updateProgress(); // ✅ Update progress when each image loads
      };

      img.onerror = () => {
        failedCount++;
        updateProgress(); // ✅ Update progress on error too
      };

      preloadedImages.push(img);
    }

    // ❌ REMOVE this line: setImages(preloadedImages);

    return () => {
      isMounted = false; // 🔑 Cleanup when component unmounts
    };
  }, [totalFrames]);

  return { images, progress, loading, error };
}
