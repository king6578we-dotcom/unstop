'use client';

import React, { useState, useEffect } from 'react';
import { UnstopLogo } from '@/components/ui/UnstopLogo';

interface SplashScreenProps {
  /**
   * Time in milliseconds the splash screen stays before initiating fade out
   * Default: 1800ms
   */
  duration?: number;
  /**
   * Callback executed when the splash screen has completely finished fading out
   */
  onFinish?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  duration = 1800,
  onFinish,
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [dots, setDots] = useState('');

  // Subtle animated dots for "Please Wait"
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 450);
    return () => clearInterval(dotInterval);
  }, []);

  useEffect(() => {
    // Start fade out after the specified duration
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, duration);

    // Fully unmount after fade transition completes (600ms)
    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      if (onFinish) {
        onFinish();
      }
    }, duration + 600);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, [duration, onFinish]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-between px-4 py-8 select-none transition-opacity duration-600 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="dialog"
      aria-label="Loading Unstop"
      aria-live="polite"
    >
      {/* Top spacer for optical vertical centering */}
      <div className="w-full flex-1" />

      {/* Center Content: Exact Logo + Please Wait */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Unstop Official Logo */}
        <div className="transform transition-transform duration-700 hover:scale-105">
          <UnstopLogo
            variant="full"
            className="h-10 sm:h-12 w-auto max-w-[200px]"
            color="#1C4980"
          />
        </div>

        {/* Loading text with animated ellipsis */}
        <div className="mt-5 flex items-center justify-center h-6">
          <p className="text-[#334155] text-[15px] font-normal tracking-wide">
            Please Wait<span className="inline-block w-4 text-left font-semibold">{dots}</span>
          </p>
        </div>
      </div>

      {/* Bottom Footer Text: Exact notice from screenshot */}
      <div className="w-full flex-1 flex items-end justify-center pb-2">
        <p className="text-[#8c9ba5] text-xs font-normal text-center tracking-tight">
          Best viewed in latest versions of Mozilla, Chrome, Opera &amp; Safari.
        </p>
      </div>
    </div>
  );
};
