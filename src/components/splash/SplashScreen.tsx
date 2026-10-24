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

  // Skip splash immediately if requested
  useEffect(() => {
    try {
      if (
        sessionStorage.getItem('skipSplash') === 'true' ||
        (typeof window !== 'undefined' && window.location.search.includes('nosplash=true'))
      ) {
        setIsMounted(false);
        onFinish?.();
      }
    } catch {
      // ignore
    }
  }, [onFinish]);

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
        <div className="transform transition-transform duration-500 hover:scale-105">
          <UnstopLogo
            variant="full"
            className="h-9 sm:h-10 md:h-11 w-auto max-w-[150px] sm:max-w-[175px]"
            color="#1C4980"
          />
        </div>

        {/* Loading text with animated ellipsis */}
        <div className="mt-3 sm:mt-4 flex items-center justify-center h-6">
          <p className="text-[#475569] text-sm sm:text-[15.5px] font-normal tracking-wide">
            Please Wait<span className="inline-block w-4 text-left font-medium">{dots}</span>
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
