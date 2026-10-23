'use client';

import React from 'react';

// Exact brand logos matching user screenshot
const BRAND_LOGOS = [
  {
    name: 'PepsiCo',
    render: () => (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-[#005cb9] font-black text-xl tracking-wider font-sans">
          PEPSICO
        </span>
      </div>
    ),
  },
  {
    name: 'Reliance Industries Limited',
    render: () => (
      <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
        {/* Reliance Torch Gold Emblem */}
        <div className="w-6 h-6 rounded-full border border-amber-600/70 bg-gradient-to-tr from-amber-600 to-yellow-500 flex items-center justify-center shadow-2xs">
          <span className="text-white text-[10px] font-serif font-black">R</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-slate-800 font-black text-[13px] tracking-tight">Reliance</span>
          <span className="text-slate-500 text-[8px] font-semibold tracking-wider uppercase">Industries Limited</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Samsung',
    render: () => (
      <div className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-[#0c4da2] font-black text-xl tracking-widest font-sans">
          SAMSUNG
        </span>
      </div>
    ),
  },
  {
    name: 'Snapdeal',
    render: () => (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <div className="w-5 h-5 rounded-md bg-[#e40046] flex items-center justify-center text-white text-xs font-bold shadow-2xs">
          🛍️
        </div>
        <span className="text-[#e40046] font-extrabold text-lg tracking-tight">
          snapdeal
        </span>
      </div>
    ),
  },
  {
    name: 'Tata',
    render: () => (
      <div className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 100 24" className="h-6 w-auto text-[#00539f]" fill="currentColor">
          <text x="5" y="19" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="21" letterSpacing="4">TATA</text>
        </svg>
      </div>
    ),
  },
  {
    name: 'Hindustan Petroleum (HP)',
    render: () => (
      <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
        <div className="w-7 h-7 rounded-full border-2 border-[#d9222a] bg-gradient-to-br from-[#0c4da2] to-[#d9222a] flex items-center justify-center shadow-xs">
          <span className="text-white font-black text-[11px] tracking-tight">HP</span>
        </div>
      </div>
    ),
  },
  {
    name: 'ABInBev',
    render: () => (
      <div className="flex flex-col opacity-90 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded-full bg-[#f59e0b] flex items-center justify-center text-[8px] text-white font-bold">🍺</div>
          <span className="text-[#b45309] font-black text-base tracking-tight">ABInBev</span>
        </div>
        <span className="text-slate-400 text-[7px] font-medium leading-none">To a Future With More Cheer</span>
      </div>
    ),
  },
  {
    name: 'Amazon',
    render: () => (
      <div className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-slate-800 font-black text-lg tracking-tight">
          amazon<span className="text-[#f59e0b]">.</span>
        </span>
      </div>
    ),
  },
  {
    name: 'Flipkart',
    render: () => (
      <div className="flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity">
        <span className="text-[#2874f0] font-black text-lg italic tracking-tight">
          Flipkart
        </span>
      </div>
    ),
  },
];

export const TrustedVeterans: React.FC = () => {
  return (
    <section className="py-6 select-none">
      {/* Title Matching Screenshot: "Trusted by Industry Veterans" */}
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          <span className="text-[#0073e6]">Trusted</span> by Industry Veterans
        </h3>
      </div>

      {/* Marquee Ticker: Right to Left Infinite Continuous Moving */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Soft edge fade left & right */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Double array track for seamless infinite loop */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-1">
          {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="shrink-0 flex items-center justify-center px-2 cursor-pointer grayscale hover:grayscale-0 transition-all duration-300"
              title={brand.name}
            >
              {brand.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedVeterans;
