'use client';

import React, { useRef } from 'react';
import { Globe, Users, MapPin, ChevronRight, ArrowRight } from 'lucide-react';

interface CompetitionItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  isOnline: boolean;
  registeredCount: string;
  logo: React.ReactNode;
}

const COMPETITIONS_DATA: CompetitionItem[] = [
  {
    id: 'comp-1',
    title: 'AceCubing Essay Challenge - Oc...',
    organization: 'AceCubing',
    location: 'Online',
    isOnline: true,
    registeredCount: '11 Registered',
    logo: (
      <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center p-1 shadow-2xs">
        {/* Isometric 3 Cubes Vector matching AceCubing logo */}
        <svg viewBox="0 0 40 40" className="w-9 h-9 text-slate-900" fill="currentColor">
          {/* Top cube */}
          <polygon points="20,4 28,9 20,14 12,9" fill="#1e293b" />
          <polygon points="12,9 20,14 20,24 12,19" fill="#475569" />
          <polygon points="28,9 20,14 20,24 28,19" fill="#0f172a" />
          {/* Left cube */}
          <polygon points="10,18 18,23 10,28 2,23" fill="#334155" />
          <polygon points="2,23 10,28 10,38 2,33" fill="#64748b" />
          <polygon points="18,23 10,28 10,38 18,33" fill="#1e293b" />
          {/* Right cube */}
          <polygon points="30,18 38,23 30,28 22,23" fill="#334155" />
          <polygon points="22,23 30,28 30,38 22,33" fill="#64748b" />
          <polygon points="38,23 30,28 30,38 38,33" fill="#1e293b" />
        </svg>
      </div>
    ),
  },
  {
    id: 'comp-2',
    title: 'Stock Analysis - October 2026',
    organization: 'IBS Business School Ahmedabad',
    location: 'Online',
    isOnline: true,
    registeredCount: '3 Registered',
    logo: (
      <div className="w-12 h-12 rounded-xl bg-black flex flex-col items-center justify-center p-1 shadow-2xs border border-stone-800">
        <span className="font-serif italic text-amber-400 font-bold text-base leading-none tracking-tight">
          WS
        </span>
        <span className="text-[6px] text-amber-200/90 font-mono tracking-widest uppercase mt-0.5">
          WEALTH STREET
        </span>
      </div>
    ),
  },
  {
    id: 'comp-3',
    title: 'Case Union 4.0',
    organization: "Masters' Union School of Business",
    location: 'CDS Corporate Tower, Mast...',
    isOnline: false,
    registeredCount: '7 Registered',
    logo: (
      <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex flex-col items-center justify-center p-1 shadow-2xs leading-none">
        <span className="text-[9px] font-black text-slate-900 tracking-tighter">
          masters&apos;
        </span>
        <span className="text-[9px] font-bold text-slate-800 tracking-tighter">
          union
        </span>
        <span className="text-[6.5px] text-slate-500 font-medium tracking-tight">
          university
        </span>
      </div>
    ),
  },
  {
    id: 'comp-4',
    title: "L'Oréal Brandstorm 2026 - Innovation Challenge",
    organization: "L'Oréal",
    location: 'Online',
    isOnline: true,
    registeredCount: '4,280 Registered',
    logo: (
      <div className="w-12 h-12 rounded-xl border border-slate-200 bg-[#f8f5ee] flex flex-col items-center justify-center p-1 shadow-2xs">
        <span className="font-serif font-black text-slate-900 text-[10px] tracking-widest">
          L&apos;ORÉAL
        </span>
      </div>
    ),
  },
  {
    id: 'comp-5',
    title: 'Tata Imagination Challenge 2026',
    organization: 'Tata Sons',
    location: 'Online',
    isOnline: true,
    registeredCount: '19,500 Registered',
    logo: (
      <div className="w-12 h-12 rounded-xl border border-slate-200 bg-blue-50 flex items-center justify-center p-1 shadow-2xs text-[#00539f] font-black text-xs">
        TATA
      </div>
    ),
  },
];

export const CompetitionsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-4 select-none">
      {/* Section Header Matching Screenshot with Left Blue Accent Line & View All Button */}
      <div className="flex items-center justify-between mb-4">
        <div className="border-l-[3.5px] border-[#0073e6] pl-3 py-0.5">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
            Competitions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            Uncover the most talked-about competitions today.
          </p>
        </div>

        {/* View All Pill with Blue Circular Arrow Button */}
        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eef5fc] hover:bg-[#deecfa] text-[#0073e6] font-semibold text-xs sm:text-[13px] transition-colors cursor-pointer group shrink-0"
        >
          <span>View All</span>
          <span className="w-4 h-4 rounded-full bg-[#0073e6] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
          </span>
        </button>
      </div>

      {/* Cards Row & Carousel Navigation */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1"
        >
          {COMPETITIONS_DATA.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] min-w-[280px] shrink-0 flex-1 rounded-2xl border border-slate-200/90 bg-white p-4.5 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* Top Row: Meta info & Right Brand Logo */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  {/* Location / Online */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    {item.isOnline ? (
                      <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                    <span className="truncate max-w-[150px] sm:max-w-[170px]">{item.location}</span>
                  </div>

                  {/* Registered Count */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.registeredCount}</span>
                  </div>
                </div>

                {/* Right Logo */}
                <div className="shrink-0 group-hover:scale-105 transition-transform">
                  {item.logo}
                </div>
              </div>

              {/* Bottom Row: Title & Organization */}
              <div className="mt-5">
                <h4 className="text-[14.5px] sm:text-[15px] font-bold text-slate-900 group-hover:text-[#0073e6] transition-colors leading-snug truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-normal truncate">
                  {item.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Right Arrow Button matching Screenshot */}
        <button
          type="button"
          onClick={() => handleScroll('right')}
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 cursor-pointer z-10 hidden sm:flex"
          title="Next competitions"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};

export default CompetitionsSection;
