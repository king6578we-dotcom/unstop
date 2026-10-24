'use client';

import React, { useState, useEffect, useRef } from 'react';

// Exact brand logos matching user screenshot in full authentic colors
const BRAND_LOGOS = [
  {
    name: 'Aditya Birla Group',
    render: () => (
      <div className="flex flex-col items-center justify-center leading-none text-center select-none">
        {/* Rising Sun Prism Faceted Emblem */}
        <div className="relative overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.12)] mb-1">
          <svg
            viewBox="0 0 54 32"
            className="h-[23px] sm:h-[25px] w-auto"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="abg-gloss" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                <stop offset="35%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="65%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Deep ruby maroon base */}
            <rect width="54" height="32" fill="#8e1219" />

            {/* Faceted Sun Shards radiating from bottom center */}
            <polygon points="27,4 23,28 31,28" fill="#ffe600" />
            <polygon points="27,4 23,28 17,9" fill="#ffb703" />
            <polygon points="27,4 30,28 37,9" fill="#ffb703" />
            <polygon points="17,9 23,28 11,28" fill="#fb8500" />
            <polygon points="37,9 31,28 43,28" fill="#fb8500" />
            <polygon points="17,9 11,28 4,13" fill="#e63946" />
            <polygon points="37,9 43,28 50,13" fill="#e63946" />
            <polygon points="4,13 11,28 0,28 0,13" fill="#b91c1c" />
            <polygon points="50,13 43,28 54,28 54,13" fill="#b91c1c" />
            <polygon points="0,0 27,0 27,4 17,9 4,13 0,13" fill="#7f1d1d" opacity="0.85" />
            <polygon points="54,0 27,0 27,4 37,9 50,13 54,13" fill="#7f1d1d" opacity="0.85" />

            {/* Bottom center core glow */}
            <circle cx="27" cy="28" r="5" fill="#fff59d" />

            {/* Glass reflection */}
            <rect width="54" height="32" fill="url(#abg-gloss)" />
          </svg>
        </div>
        <span className="font-sans text-[6.5px] sm:text-[7px] font-bold text-[#83181c] tracking-[0.08em] uppercase">
          ADITYA BIRLA GROUP
        </span>
      </div>
    ),
  },
  {
    name: 'Amazon',
    render: () => (
      <div className="flex items-center justify-center select-none">
        <svg
          viewBox="0 0 110 34"
          className="h-[22px] sm:h-[25px] w-auto max-w-full"
          fill="none"
          aria-hidden="true"
        >
          {/* Official amazon bold wordmark */}
          <text
            x="2"
            y="22"
            fill="#131921"
            fontSize="24"
            fontWeight="bold"
            fontFamily="Arial, Helvetica, sans-serif"
            letterSpacing="-0.8"
          >
            amazon
          </text>
          {/* Iconic orange smile arrow from 'a' to 'z' */}
          <path
            d="M10 26.5c22 8 50 8 71-2.5"
            stroke="#ff9900"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M78 21.5c2.2 1.6 4.8 3.2 7.2 3.6-1.4 1.8-2.8 3.8-4 5.8-.6-2.2-.9-4.2-3.2-9.4z"
            fill="#ff9900"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'boAt',
    render: () => (
      <div className="flex items-center justify-center select-none">
        <svg
          viewBox="0 0 94 34"
          className="h-[24px] sm:h-[26px] w-auto max-w-full"
          fill="none"
          aria-hidden="true"
        >
          {/* b */}
          <path
            d="M14 6v22M14 20a7 7 0 110-12 7 7 0 010 12z"
            stroke="#111827"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* o */}
          <circle
            cx="33"
            cy="20"
            r="7"
            stroke="#111827"
            strokeWidth="2.6"
          />
          {/* A (Iconic boAt red triangular sail) */}
          <path
            d="M52 6L42 27h6.2l2-4.5h7.6l2 4.5H66L56 6h-4zm2 5.5l2.4 6h-4.8l2.4-6z"
            fill="#e31e24"
          />
          {/* t */}
          <path
            d="M74 10v14.5c0 2 1.2 2.5 3 2.5M69 15h9"
            stroke="#111827"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    name: 'CK Birla Group',
    render: () => (
      <div className="flex items-center justify-center select-none">
        <svg
          viewBox="0 0 154 28"
          className="h-[20px] sm:h-[22px] w-auto max-w-full"
          fill="none"
          aria-hidden="true"
        >
          {/* 3 Red Concentric Arcs: ((( */}
          <path
            d="M17 5a9.5 9.5 0 000 19"
            stroke="#d2232a"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M12.5 8.5a6 6 0 000 12"
            stroke="#d2232a"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M8.5 11.5a3 3 0 000 6"
            stroke="#d2232a"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Text: CK BIRLA GROUP */}
          <text
            x="24"
            y="19"
            fill="#262930"
            fontSize="13"
            fontWeight="bold"
            fontFamily="Arial, 'Segoe UI', sans-serif"
            letterSpacing="0.2"
          >
            CK BIRLA{' '}
            <tspan fill="#64748b" fontWeight="normal">
              GROUP
            </tspan>
          </text>
        </svg>
      </div>
    ),
  },
  {
    name: 'Coca-Cola',
    render: () => (
      <div className="flex items-center justify-center select-none">
        <svg
          viewBox="0 0 134 42"
          className="h-[25px] sm:h-[28px] w-auto max-w-full"
          fill="#e61a27"
          aria-hidden="true"
          style={{ transform: 'skewX(-9deg)' }}
        >
          {/* First C and lower flourish */}
          <path d="M18.5 16.5c-.8-4.2-3.8-7.5-8.2-7.5-5 0-7.8 4.2-7.8 9.5 0 6.8 5 11 11.2 11 3.2 0 6.5-1.2 9-3.2l-1.5-2.2c-2 1.5-4.5 2.5-7.2 2.5-4.5 0-7.8-3.2-7.8-8.2 0-4.5 2.2-7.2 5.5-7.2 3.2 0 4.8 2.5 5.5 5.3h1.3zm-6.8 17c12-1 25-3.5 35-7l-1-2.2c-9.5 3.2-22 5.5-34 6.5l0 2.7z" />
          
          {/* First 'oca-' */}
          <path d="M30 19.5c-2.8 0-4.8 2.2-4.8 5.2 0 3.2 2 5.2 4.8 5.2 2.8 0 4.8-2 4.8-5.2 0-3-2-5.2-4.8-5.2zm0 8.2c-1.5 0-2.5-1.4-2.5-3 0-1.8 1-3 2.5-3s2.5 1.2 2.5 3c0 1.6-1 3-2.5 3z" />
          <path d="M38.5 24.2c-.8-.8-1.8-1.2-2.8-1.2-2 0-3.5 1.6-3.5 3.8 0 2.2 1.5 3.8 3.5 3.8 1.2 0 2.2-.5 3-1.4l1.2 1.4c-1.2 1.4-2.6 2.2-4.4 2.2-3.2 0-5.6-2.5-5.6-6s2.4-6 5.6-6c1.6 0 3 .6 4 1.8l-1 1.6z" />
          <path d="M47 19.8v10.5h-2v-1.6c-.8 1.2-2 1.8-3.4 1.8-2.6 0-4.4-1.8-4.4-4.5 0-2.8 1.8-4.5 4.4-4.5 1.3 0 2.4.6 3.2 1.6v-3.3h2.2zm-2.2 5.4c0-.3 0-.6-.2-.8-.4-.8-1.2-1.3-2.2-1.3-1.5 0-2.5 1.2-2.5 2.8 0 1.6 1 2.8 2.5 2.8 1 0 1.8-.5 2.2-1.3.2-.3.2-.7.2-1.2v-1z" />
          <path d="M49 23c2-.5 4.5-.8 7-1l-.3 2c-2.2.2-4.5.5-6.2 1l-.5-2z" />

          {/* Second Capital C with grand lower sweeping ribbon */}
          <path d="M72 16.5c-.8-4.2-3.8-7.5-8.2-7.5-5 0-7.8 4.2-7.8 9.5 0 6.8 5 11 11.2 11 3.2 0 6.5-1.2 9-3.2l-1.5-2.2c-2 1.5-4.5 2.5-7.2 2.5-4.5 0-7.8-3.2-7.8-8.2 0-4.5 2.2-7.2 5.5-7.2 3.2 0 4.8 2.5 5.5 5.3h1.3z" />
          <path d="M64 33.5c18-1 38-4 54-10.5 4-1.6 7-3.5 7-5.5 0-1.5-1.2-2.2-2.8-2.2-2.2 0-4.5 1.5-6.5 3.5l-1.4-1.8c2.8-2.8 6-4 9-4 3.2 0 5 1.8 5 4.5 0 3.5-4 6-9 8-16 6.8-37 10-55.3 11l0-3z" />

          {/* Second 'ola' */}
          <path d="M83.5 19.5c-2.8 0-4.8 2.2-4.8 5.2 0 3.2 2 5.2 4.8 5.2 2.8 0 4.8-2 4.8-5.2 0-3-2-5.2-4.8-5.2zm0 8.2c-1.5 0-2.5-1.4-2.5-3 0-1.8 1-3 2.5-3s2.5 1.2 2.5 3c0 1.6-1 3-2.5 3z" />
          <path d="M92 7c-1.2 0-2.2.8-2.8 2.2l-3.2 13.5c-.3 1.2-.5 2.5-.5 3.8 0 2.5 1.2 4 3.2 4 1.8 0 3-1.2 3.8-2.8l1.8 1c-1.2 2.2-3 3.8-5.8 3.8-3.5 0-5.5-2.5-5.5-6.2 0-1.8.3-3.6.8-5.2l3.4-14.3c1-4 3.2-5.8 6.5-5.8 2.5 0 4.2 1.4 4.2 3.8 0 1.8-.8 3.2-2.2 4.2l-1.4-1.5c.8-.6 1.2-1.4 1.2-2.2 0-1.2-.8-1.8-2.2-1.8z" />
          <path d="M102 19.8v10.5h-2v-1.6c-.8 1.2-2 1.8-3.4 1.8-2.6 0-4.4-1.8-4.4-4.5 0-2.8 1.8-4.5 4.4-4.5 1.3 0 2.4.6 3.2 1.6v-3.3h2.2zm-2.2 5.4c0-.3 0-.6-.2-.8-.4-.8-1.2-1.3-2.2-1.3-1.5 0-2.5 1.2-2.5 2.8 0 1.6 1 2.8 2.5 2.8 1 0 1.8-.5 2.2-1.3.2-.3.2-.7.2-1.2v-1z" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Flipkart',
    render: () => (
      <div className="flex items-center justify-center gap-1.5 select-none">
        {/* Flipkart text in blue bold italic */}
        <span className="font-sans text-[20px] sm:text-[22px] font-black italic tracking-tight text-[#2874f0]">
          Flipkart
        </span>
        {/* Yellow badge with blue 'f' and motion wings */}
        <div className="flex h-[24px] w-[24px] items-center justify-center rounded-[5px] bg-[#ffd800] shadow-sm">
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13 5.5c-2 0-3.5 1.2-3.5 3.2v2.3H7.5v3h2V20h3.5v-6h3l.5-3h-3.5V9c0-.8.5-1.3 1.3-1.3H16V5.5h-3z"
              fill="#2874f0"
            />
            <path
              d="M15 11.5h4c.6 0 1 .4 1 1s-.4 1-1 1h-4v-2z"
              fill="#2874f0"
            />
            <path
              d="M16 14.5h3.5c.5 0 .9.4.9.9s-.4.9-.9.9H16v-1.8z"
              fill="#2874f0"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    name: "L'Oréal India",
    render: () => (
      <div className="flex flex-col items-center justify-center leading-none text-center select-none">
        <span className="font-sans text-[18px] sm:text-[20px] font-extrabold tracking-[0.06em] text-[#111827]">
          L&apos;ORÉAL
        </span>
        <span className="text-[7.5px] sm:text-[8px] font-semibold text-[#64748b] tracking-[0.38em] uppercase mt-1 pl-[0.38em]">
          INDIA
        </span>
      </div>
    ),
  },
  {
    name: 'Kenvue',
    render: () => (
      <div className="flex items-center justify-center gap-1.5 select-none">
        <svg viewBox="0 0 28 32" className="h-[22px] sm:h-[24px] w-auto shrink-0" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="kenvue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="10" height="15" rx="5" fill="url(#kenvue-grad)" opacity="0.85" />
          <rect x="2" y="15" width="10" height="15" rx="5" fill="url(#kenvue-grad)" opacity="0.95" />
          <path d="M12 10 C18 10 22 13 22 16 C22 19 18 22 12 22" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="font-sans text-[18px] sm:text-[20px] font-bold text-[#111827] tracking-tight">
          kenvue
        </span>
      </div>
    ),
  },
  {
    name: 'Mahindra Rise',
    render: () => (
      <div className="flex flex-col items-center justify-center select-none leading-none">
        <svg viewBox="0 0 130 36" className="h-[24px] sm:h-[27px] w-auto max-w-full" fill="none" aria-hidden="true">
          <text
            x="0"
            y="21"
            fill="#e31837"
            fontSize="21"
            fontWeight="900"
            fontFamily="'Arial Black', Arial, sans-serif"
            letterSpacing="-0.5"
          >
            Mahindra
          </text>
          <text
            x="82"
            y="33"
            fill="#4b5563"
            fontSize="12.5"
            fontStyle="italic"
            fontFamily="'Times New Roman', Georgia, serif"
            fontWeight="bold"
          >
            Rise.
          </text>
        </svg>
      </div>
    ),
  },
  {
    name: 'Mondelēz International',
    render: () => (
      <div className="flex flex-col items-center justify-center select-none leading-none text-center">
        <div className="flex items-center justify-center gap-0.5">
          <span className="h-2 w-2 rounded-full bg-[#e31837] shrink-0 mb-2 transform -rotate-12" aria-hidden="true" />
          <span className="font-sans text-[17px] sm:text-[19px] font-black tracking-tight text-[#49176d]">
            Mondelēz
          </span>
          <span className="h-2 w-2 rounded-full bg-[#e31837] shrink-0 mb-2 transform rotate-12" aria-hidden="true" />
        </div>
        <span className="font-sans text-[6.5px] sm:text-[7.5px] font-bold text-[#49176d] tracking-[0.14em] uppercase -mt-0.5">
          International
        </span>
      </div>
    ),
  },
  {
    name: 'Myntra',
    render: () => (
      <div className="flex items-center justify-center gap-1.5 select-none">
        <svg viewBox="0 0 34 30" className="h-[22px] sm:h-[25px] w-auto shrink-0" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="myntra-pink" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="myntra-orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path
            d="M5 24 C2 18, 4 6, 9 6 C13 6, 15 14, 17 21"
            stroke="url(#myntra-pink)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M10 24 C12 16, 14 7, 18 7 C21 7, 23 15, 25 24"
            stroke="url(#myntra-orange)"
            strokeWidth="5.2"
            strokeLinecap="round"
          />
          <path
            d="M17 21 C19 14, 21 6, 25 6 C30 6, 32 18, 29 24"
            stroke="url(#myntra-pink)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-sans text-[18px] sm:text-[20px] font-bold text-[#282c3f] tracking-tight">
          Myntra
        </span>
      </div>
    ),
  },
  {
    name: 'OLA',
    render: () => (
      <div className="flex items-center justify-center gap-1.5 select-none">
        <svg viewBox="0 0 28 28" className="h-[22px] sm:h-[25px] w-auto shrink-0" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="12" fill="#111827" />
          <circle cx="14" cy="14" r="9.5" fill="#ffffff" />
          <circle cx="14" cy="14" r="8" fill="#111827" />
          <circle cx="14" cy="14" r="6" fill="#a3e635" />
        </svg>
        <span className="font-sans text-[19px] sm:text-[22px] font-black text-[#111827] tracking-tight">
          OLA
        </span>
      </div>
    ),
  },
  {
    name: 'PEPSICO',
    render: () => (
      <div className="flex items-center justify-center gap-2 select-none">
        <svg viewBox="0 0 32 32" className="h-[24px] sm:h-[27px] w-auto shrink-0" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="14" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.4" />
          <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="16" cy="16" rx="14" ry="10" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="16" cy="16" rx="5.5" ry="14" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 11 C10 8, 22 8, 28 11" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 21 C10 24, 22 24, 28 21" stroke="#0369a1" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <span className="font-sans text-[18px] sm:text-[21px] font-black text-[#1e3a8a] tracking-tight">
          PEPSICO
        </span>
      </div>
    ),
  },
  {
    name: 'Reliance Industries Limited',
    render: () => (
      <div className="flex flex-col items-center justify-center select-none leading-none text-center">
        <div className="flex items-center justify-center mb-0.5">
          <svg viewBox="0 0 28 26" className="h-[18px] sm:h-[20px] w-auto" fill="none" aria-hidden="true">
            <ellipse cx="14" cy="13" rx="11" ry="12" fill="#c5a059" />
            <path
              d="M14 4 C11 9, 8 13, 8 17 C8 20, 10.5 22, 14 22 C17.5 22, 20 20, 20 17 C20 13, 17 9, 14 4 Z"
              fill="#ffffff"
            />
            <path
              d="M14 9 C12.5 12, 11 14.5, 11 17 C11 18.5, 12.2 19.5, 14 19.5 C15.8 19.5, 17 18.5, 17 17 C17 14.5, 15.5 12, 14 9 Z"
              fill="#c5a059"
            />
          </svg>
        </div>
        <span className="font-serif text-[13px] sm:text-[14px] font-bold text-[#1f2937] tracking-tight">
          Reliance
        </span>
        <span className="font-sans text-[6px] sm:text-[6.5px] font-semibold text-[#64748b] tracking-wider uppercase">
          Industries Limited
        </span>
      </div>
    ),
  },
];

const VISIBLE_COUNT = 7;
const PAUSE_DURATION_MS = 5000; // 5 seconds pause
const TRANSITION_DURATION_MS = 750; // 750ms smooth sliding glide
const EXTENDED_LOGOS = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

export const TrustedVeterans: React.FC = () => {
  // Start at the middle duplicate set for seamless 2-way infinite looping
  const [currentIndex, setCurrentIndex] = useState(BRAND_LOGOS.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance every 5 seconds (pausing 5 sec, then sliding)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, PAUSE_DURATION_MS);

    return () => clearInterval(timer);
  }, [isPaused, trigger]);

  // Handle re-enabling transitions after a silent reposition
  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  // Seamless boundary wrap when reaching boundary clones
  const handleTransitionEnd = () => {
    if (currentIndex >= BRAND_LOGOS.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(BRAND_LOGOS.length);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(BRAND_LOGOS.length);
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setTrigger((t) => t + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTrigger((t) => t + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <section className="mx-auto w-full min-w-0 max-w-[980px] px-2 sm:px-4 pt-5 sm:pt-7 pb-7 sm:pb-10 select-none">
      {/* Title: "Trusted by Industry Veterans" with clean spacious gap below */}
      <div className="text-center mb-6 sm:mb-8 px-4">
        <h3 className="text-xl sm:text-[23px] font-bold text-[#1e293b] tracking-tight">
          <span className="text-[#0073e6]">Trusted</span> by Industry Veterans
        </h3>
      </div>

      {/* 7 Logos in 1 Line with 5s Pause Carousel - Centered like Competitions */}
      <div
        className="group relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle Edge Vignettes (Smooth fade on sides matching screenshot) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-8 sm:w-14 bg-gradient-to-r from-white via-white/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-8 sm:w-14 bg-gradient-to-l from-white via-white/80 to-transparent"
        />

        {/* Sliding Track: Exactly 7 Logos Visible per Line (100% / 7 = 14.2857%) */}
        <div
          className="flex items-center pb-1 select-none"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translate3d(-${currentIndex * (100 / VISIBLE_COUNT)}%, 0, 0)`,
            transition: isTransitioning
              ? `transform ${TRANSITION_DURATION_MS}ms cubic-bezier(0.25, 1, 0.5, 1)`
              : 'none',
            willChange: 'transform',
          }}
        >
          {EXTENDED_LOGOS.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              style={{
                width: `${100 / VISIBLE_COUNT}%`,
                flex: `0 0 ${100 / VISIBLE_COUNT}%`,
              }}
              className="shrink-0 flex items-center justify-center px-1 sm:px-2 h-[46px] sm:h-[50px]"
            >
              <div
                className="flex h-full w-full items-center justify-center origin-center"
                title={brand.name}
              >
                {brand.render()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedVeterans;