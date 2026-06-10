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
export function useTruckSequence(totalFrames: number = 150): UseTruckSequenceResult {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const preloadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let failedCount = 0;

    const checkCompletion = () => {
      if (!isMounted) return;
      const totalCount = loadedCount + failedCount;
      const percentage = Math.round((totalCount / totalFrames) * 100);
      setProgress(percentage);

      if (totalCount === totalFrames) {
        setLoading(false);
        if (failedCount > 10) {
          setError(`Failed to load ${failedCount} frames. Canvas rendering may contain glitches.`);
        }
      }
    };

    const onLoad = () => {
      loadedCount++;
      checkCompletion();
    };

    const onError = (index: number) => {
      failedCount++;
      console.warn(`[useTruckSequence] Failed to load frame_${index.toString().padStart(4, "0")}.jpg`);
      checkCompletion();
    };

    // Initialize preloading of frames (frame_0001.jpg to frame_0151.jpg)
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameName = `frame_${i.toString().padStart(4, "0")}.jpg`;
      img.src = `/frames/${frameName}`;
      img.onload = onLoad;
      img.onerror = () => onError(i);
      preloadedImages.push(img);
    }

    setImages(preloadedImages);

    return () => {
      isMounted = false;
    };
  }, [totalFrames]);

  return { images, progress, loading, error };
}
