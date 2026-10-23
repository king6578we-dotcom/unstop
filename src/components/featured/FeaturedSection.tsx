'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { FEATURED_ITEMS } from '@/data/mockData';
import { FeaturedItem } from '@/types';

/* ==========================================================================
   1. FEATURED CARD COMPONENT
   ========================================================================== */

export interface FeaturedCardProps {
  item: FeaturedItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onSelect: (item: FeaturedItem) => void;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({
  item,
  isBookmarked,
  onToggleBookmark,
  onSelect,
}) => {
  // Render visual graphic specific to bannerType matching screenshot
  const renderVisualPoster = () => {
    switch (item.bannerType) {
      case 'nykaa':
        return (
          <div className="relative h-[270px] w-full bg-[#f8f5ee] border-b border-stone-200 text-stone-900 overflow-hidden flex flex-col justify-between p-3 select-none">
            {/* Top WANTED black banner */}
            <div className="w-full bg-black py-1 px-3 text-center rounded-xs shadow-xs">
              <span className="text-xl font-black tracking-widest text-[#ff1493] uppercase font-mono">
                WANTED
              </span>
            </div>

            {/* Heading: THE NEXT FACE OF NYKAA */}
            <div className="text-center mt-1">
              <h4 className="text-[13px] font-black tracking-wider text-black uppercase leading-tight">
                THE NEXT FACE <br />
                OF <span className="text-[#ff1493] italic font-serif font-black text-sm tracking-normal">NYKAA</span>
              </h4>
            </div>

            {/* Silhouette & Makeup brushes center illustration */}
            <div className="relative my-auto flex items-center justify-center h-28">
              {/* Silhouette head & neck */}
              <div className="relative flex items-center justify-center">
                <svg className="w-24 h-24 text-black drop-shadow-xs" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 20 C42 20 36 26 36 34 C36 41 39 46 44 48 C43 51 40 55 38 60 C36 65 37 72 40 76 L44 86 C46 89 54 89 56 86 L60 76 C63 72 64 65 62 60 C60 55 57 51 56 48 C61 46 64 41 64 34 C64 26 58 20 50 20 Z" />
                  <path d="M38 34 C38 30 43 25 50 25 C57 25 62 30 62 34 C62 38 58 42 50 42 C42 42 38 38 38 34 Z" fill="#111" />
                </svg>

                {/* Makeup hands / brushes around head */}
                <div className="absolute -left-3 top-2 rotate-[-40deg] flex items-center">
                  <div className="w-8 h-1 bg-black rounded-l"></div>
                  <div className="w-3 h-2 bg-stone-400 rounded-xs"></div>
                  <div className="w-3.5 h-3 bg-stone-800 rounded-r-full"></div>
                </div>
                <div className="absolute -left-4 top-10 rotate-[-15deg] flex items-center">
                  <div className="w-9 h-1 bg-black rounded-l"></div>
                  <div className="w-3.5 h-2.5 bg-pink-400 rounded-r-md"></div>
                </div>
                <div className="absolute -left-3 bottom-3 rotate-[20deg] flex items-center">
                  <div className="w-7 h-1.5 bg-black rounded"></div>
                  <div className="w-4 h-4 rounded-full border-2 border-black bg-stone-300"></div>
                </div>
                <div className="absolute -right-3 top-2 rotate-[40deg] flex items-center">
                  <div className="w-3.5 h-2 bg-[#ff1493] rounded-l-xs"></div>
                  <div className="w-2.5 h-2.5 bg-amber-400"></div>
                  <div className="w-7 h-2 bg-black rounded-r"></div>
                </div>
                <div className="absolute -right-4 top-10 rotate-[15deg] flex items-center">
                  <div className="w-4 h-3 bg-stone-800 rounded-l-full"></div>
                  <div className="w-2 h-2 bg-stone-400"></div>
                  <div className="w-8 h-1 bg-black rounded-r"></div>
                </div>
                <div className="absolute -right-3 bottom-3 rotate-[-20deg] flex items-center">
                  <div className="w-4 h-4 rounded-full bg-pink-200 border border-pink-400"></div>
                  <div className="w-7 h-1.5 bg-black rounded-r"></div>
                </div>
              </div>
            </div>

            {/* REWARD? FACE SEEN EVERYWHERE */}
            <div className="text-center">
              <h3 className="text-base font-black tracking-tight text-black leading-tight">
                REWARD?
              </h3>
              <p className="text-[11px] font-black tracking-wider text-black uppercase">
                FACE SEEN EVERYWHERE
              </p>
              <p className="text-[8.5px] text-stone-600 font-medium mt-0.5">
                Search &apos;Be The Face Of Nykaa&apos; <br />
                On The Nykaa App
              </p>
            </div>

            {/* APPLY NOW Button & *T&C APPLY */}
            <div className="mt-1 flex items-center justify-between">
              <div className="w-10"></div>
              <div className="px-4 py-1 rounded-sm bg-black text-[#ff1493] font-black text-[11px] tracking-wider uppercase shadow-xs">
                APPLY NOW
              </div>
              <span className="text-[7px] text-stone-500 font-mono">*T&amp;C APPLY</span>
            </div>
          </div>
        );

      case 'coursera':
        return (
          <div className="relative h-[270px] w-full bg-linear-to-b from-[#1565c0] via-[#1e88e5] to-[#1976d2] text-white overflow-hidden flex flex-col justify-between p-3 select-none">
            {/* Sparkles */}
            <span className="absolute top-8 left-3 text-cyan-200 text-xs">✦</span>
            <span className="absolute bottom-6 left-4 text-cyan-200 text-sm">✦</span>
            <span className="absolute top-16 right-3 text-cyan-200 text-xs">★</span>

            {/* Coursera Plus Header */}
            <div className="text-center pt-1">
              <div className="inline-flex items-center gap-1">
                <span className="text-sm font-black tracking-tight text-white lowercase">coursera</span>
                <span className="px-1 py-0.2 rounded-xs bg-[#0056d2] border border-blue-300/40 text-[9px] font-bold text-white uppercase">
                  PLUS
                </span>
              </div>
              <h4 className="text-[13px] font-bold text-white mt-1 leading-snug px-2">
                Set your routine <br />
                and save on skills
              </h4>
            </div>

            {/* Tablet Mockup with Partner Logos */}
            <div className="relative mx-auto w-[200px] h-[135px] bg-white rounded-lg shadow-xl border border-blue-200/80 p-2 flex flex-col justify-between text-slate-800">
              {/* Window dots */}
              <div className="flex items-center gap-1 pb-1 border-b border-slate-100">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              </div>

              {/* Logos grid inside tablet */}
              <div className="grid grid-cols-2 gap-2 pl-14 pt-1">
                <div className="flex items-center gap-1.5">
                  <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
                    <div className="bg-[#f25022]"></div>
                    <div className="bg-[#7fba00]"></div>
                    <div className="bg-[#00a4ef]"></div>
                    <div className="bg-[#ffb900]"></div>
                  </div>
                  <span className="text-[9px] font-semibold text-slate-700">Microsoft</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-200 flex items-center justify-center font-bold text-[8px] text-blue-600 bg-white">
                    G
                  </div>
                  <span className="text-[9px] font-semibold text-slate-700">Google</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#0668e1] font-bold text-xs">∞</span >
                  <span className="text-[9px] font-semibold text-slate-700">Meta</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#0f62fe] font-black text-[9px] tracking-tight">IBM</span>
                </div>
                <div className="col-span-2 flex items-center gap-1">
                  <span className="text-[#8c1515] font-serif font-black text-[8.5px]">Stanford</span>
                  <span className="text-[7.5px] px-1 bg-red-50 text-red-700 rounded font-mono">ONLINE</span>
                </div>
              </div>

              {/* Pink Overlay Pricing Card on Left */}
              <div className="absolute -left-3 top-4 w-[105px] bg-linear-to-b from-[#e91e63] to-[#c2185b] rounded-md shadow-lg p-2 text-white border border-pink-300/40">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/70"></div>
                  <div className="w-1 h-1 rounded-full bg-white/70"></div>
                  <div className="w-1 h-1 rounded-full bg-white/70"></div>
                </div>
                <p className="text-[9px] text-pink-200 line-through mt-0.5">₹13,999</p>
                <p className="text-base font-black leading-tight tracking-tight">₹7,499</p>
                <p className="text-[8.5px] text-pink-100 font-medium">/year</p>
              </div>

              {/* Effectively ₹625/month yellow pill */}
              <div className="self-end px-2 py-0.5 rounded-sm bg-[#ffeb3b] border border-amber-300 text-slate-900 text-[8.5px] font-bold shadow-xs text-center leading-tight">
                <div>Effectively</div>
                <div className="font-extrabold text-[9.5px]">₹625/month</div>
              </div>
            </div>
          </div>
        );

      case 'maruti':
        return (
          <div className="relative h-[270px] w-full bg-linear-to-b from-[#050e26] via-[#09183d] to-[#040a1d] text-white overflow-hidden flex flex-col justify-between p-3 select-none">
            {/* Tech grid road and glowing nodes */}
            <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#00d2ff_1px,transparent_1px),linear-gradient(to_bottom,#00d2ff_1px,transparent_1px)] bg-[size:14px_14px]"></div>

            {/* Maruti Suzuki Logo */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-xs">
                <span className="text-[10px] font-black text-slate-900 tracking-tight">MARUTI</span>
                <span className="text-[10px] font-black text-red-600 tracking-tight">SUZUKI</span>
              </div>
              <div className="w-5 h-5 rounded-full border border-cyan-400/60 flex items-center justify-center text-[10px] text-cyan-300">
                ⚡
              </div>
            </div>

            {/* XCELerate 2026 Title */}
            <div className="relative z-10 text-center my-1">
              <div className="inline-flex items-center gap-1">
                <span className="text-xl font-black italic tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-white to-cyan-400 drop-shadow-md">
                  &gt;&gt;CELerate
                </span>
                <span className="px-1.5 py-0.5 rounded-xs bg-cyan-950 border border-cyan-400 text-cyan-300 font-bold text-[10px]">
                  2026
                </span>
              </div>
              <p className="text-[11px] text-cyan-100 font-medium mt-1">
                Powering the Future of Mobility!
              </p>

              {/* Register Now button */}
              <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-sm bg-white text-[#050e26] font-extrabold text-[10px] tracking-wider uppercase shadow-md hover:bg-cyan-50">
                <span>Register Now</span>
                <span className="text-cyan-600">&gt;&gt;</span>
              </div>
            </div>

            {/* Glowing Electric Concept Car Illustration */}
            <div className="relative z-10 mx-auto w-full flex items-center justify-center">
              <div className="relative w-40 h-16 flex items-center justify-center">
                <svg className="w-full h-full text-cyan-400 drop-shadow-[0_0_8px_rgba(0,210,255,0.7)]" viewBox="0 0 160 64" fill="none">
                  <path
                    d="M10 46 L28 42 L52 26 L112 26 L136 38 L152 44 L150 52 L12 52 Z"
                    stroke="#00d2ff"
                    strokeWidth="1.5"
                    fill="rgba(0, 150, 255, 0.15)"
                  />
                  <path d="M48 26 L64 14 L102 14 L118 26 Z" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56, 189, 248, 0.2)" />
                  <circle cx="36" cy="50" r="10" stroke="#00d2ff" strokeWidth="2" fill="#040d21" />
                  <circle cx="36" cy="50" r="4" fill="#00d2ff" />
                  <circle cx="126" cy="50" r="10" stroke="#00d2ff" strokeWidth="2" fill="#040d21" />
                  <circle cx="126" cy="50" r="4" fill="#00d2ff" />
                  <line x1="146" y1="44" x2="160" y2="46" stroke="#ffffff" strokeWidth="2" />
                  <line x1="10" y1="46" x2="2" y2="47" stroke="#ef4444" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Platform Partner Unstop */}
            <div className="relative z-10 flex items-center justify-end gap-1.5 text-[9.5px] text-slate-300 pt-1 border-t border-cyan-900/40">
              <span>Platform Partner</span>
              <div className="inline-flex items-center gap-1 font-bold text-white bg-blue-900/60 px-1.5 py-0.5 rounded-full border border-blue-400/40">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>unstop</span>
              </div>
            </div>
          </div>
        );

      case 'reliance-tup':
        return (
          <div className="relative h-[270px] w-full bg-[#fbfbfe] border-b border-slate-200 text-slate-900 overflow-hidden flex flex-col justify-between p-3 select-none">
            {/* Grid paper background */}
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:16px_16px]"></div>

            {/* Top row: The Ultimate Pitch badge & Reliance logo */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-full bg-[#1c3d5a] border-2 border-amber-400 flex items-center justify-center text-amber-300 font-serif font-black text-[9px] shadow-xs">
                  T.U.P
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold text-[#1c3d5a] uppercase tracking-tight leading-none">
                    The Ultimate
                  </span>
                  <span className="text-[9px] font-serif font-bold text-amber-600 leading-tight">
                    Pitch <span className="bg-amber-400 text-slate-950 px-1 rounded-xs font-mono text-[7.5px]">SEASON 10</span>
                  </span>
                </div>
              </div>

              {/* Reliance Logo */}
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-linear-to-tr from-amber-600 to-red-600 flex items-center justify-center text-white text-[9px] font-black">
                  R
                </div>
              </div>
            </div>

            {/* Center: Different BY design on purple angled banner */}
            <div className="relative z-10 my-auto">
              <div className="absolute -top-3 left-1 text-slate-700 rotate-[-15deg] font-mono text-sm">
                ✈
              </div>

              <div className="w-[190px] mx-auto bg-[#6b21a8] rounded-xl p-3 shadow-md border-2 border-purple-400/40 rotate-[-3deg] text-center">
                <div className="text-amber-300 font-extrabold text-xl tracking-tight leading-none drop-shadow-xs font-serif">
                  Different
                </div>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="text-white text-[11px] font-bold tracking-widest uppercase">BY</span>
                  <span className="text-amber-200 font-serif italic text-lg leading-none font-bold">
                    design
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom: Megaphone and Apply Now */}
            <div className="relative z-10 flex items-center justify-between pt-1">
              <div className="px-3.5 py-1 rounded-sm bg-[#ffeb3b] border border-amber-400 shadow-sm">
                <span className="text-[#6b21a8] font-black text-xs uppercase tracking-wider">
                  Apply Now
                </span>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-[#00e676] flex items-center justify-center text-black text-sm shadow-sm rotate-[-15deg]">
                  📢
                </div>
              </div>
            </div>
          </div>
        );

      case 'retro-game':
        return (
          <div className="relative h-[270px] w-full bg-linear-to-b from-amber-500 via-amber-600 to-amber-700 p-4 text-white overflow-hidden flex flex-col justify-between select-none">
            <div className="relative z-10 my-auto text-center py-2">
              <h3 className="text-xl font-black uppercase text-white">Unlock Your Offer</h3>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-[270px] w-full bg-linear-to-br from-indigo-600 to-purple-800 p-4 text-white flex flex-col justify-between">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-xs text-indigo-100">{item.headline}</p>
          </div>
        );
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      className="min-w-[280px] sm:min-w-[310px] max-w-[320px] bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group shrink-0 select-none"
    >
      {/* Top Banner Poster */}
      <div className="relative overflow-hidden">
        {renderVisualPoster()}
      </div>

      {/* Card Footer Matching Screenshot */}
      <div className="p-3.5 flex flex-col justify-between gap-2 bg-white">
        {/* Pills & Heart Save button */}
        <div className="flex items-center justify-between gap-2 min-h-6">
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-normal shadow-2xs"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Heart favorite button */}
          {item.hasHeart !== false && (
            <button
              type="button"
              onClick={(e) => onToggleBookmark(item.id, e)}
              className={`p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ${
                isBookmarked ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-500'
              }`}
              title={isBookmarked ? 'Saved to bookmarks' : 'Save opportunity'}
              aria-label="Bookmark"
            >
              <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
            </button>
          )}
        </div>

        {/* Card Title */}
        <div>
          <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#0073e6] transition-colors leading-snug line-clamp-2 min-h-[40px]">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. FEATURED SECTION COMPONENT
   ========================================================================== */

export interface FeaturedSectionProps {
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onSelectFeatured: (item: FeaturedItem) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  bookmarkedIds,
  onToggleBookmark,
  onSelectFeatured,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-4 select-none">
      {/* Section Header with Blue Accent Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {/* Blue accent indicator bar from screenshot */}
          <span className="w-1.5 h-6 bg-[#0073e6] rounded-full"></span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Featured
          </h2>
        </div>

        {/* Carousel Prev / Next Circular Control Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 flex items-center justify-center shadow-2xs transition-all active:scale-95 cursor-pointer"
            title="Previous opportunities"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 flex items-center justify-center shadow-2xs transition-all active:scale-95 cursor-pointer"
            title="Next opportunities"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cards Scrollable Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-3 pt-1 no-scrollbar scroll-smooth"
      >
        {FEATURED_ITEMS.map((item) => (
          <FeaturedCard
            key={item.id}
            item={item}
            isBookmarked={bookmarkedIds.has(item.id)}
            onToggleBookmark={onToggleBookmark}
            onSelect={onSelectFeatured}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
