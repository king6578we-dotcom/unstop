'use client';

import React, { useRef } from 'react';
import { MapPin, Banknote, ChevronRight, ArrowRight } from 'lucide-react';

interface InternshipItem {
  id: string;
  title: string;
  company: string;
  location: string;
  stipend?: string;
  logo: React.ReactNode;
}

const INTERNSHIPS_DATA: InternshipItem[] = [
  {
    id: 'intern-1',
    title: 'Social Media & Content Internship',
    company: 'Shipzy Technologies Private Limited',
    location: 'Hybrid | Noida',
    stipend: '5 K - 20 K/Month',
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#00bcd4] flex items-center justify-center text-white font-black text-2xl shadow-2xs">
        {/* Bold geometric modern S logo matching Shipzy */}
        <span className="font-sans font-black italic">S</span>
      </div>
    ),
  },
  {
    id: 'intern-2',
    title: 'Outreach and Sales Internship',
    company: 'Curwic',
    location: 'Work from Home',
    logo: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-black border border-slate-700 flex items-center justify-center p-1 shadow-2xs">
        <span className="font-serif italic text-white text-[11px] font-bold tracking-widest">
          Curwic
        </span>
      </div>
    ),
  },
  {
    id: 'intern-3',
    title: 'Campus Ambassador Internship',
    company: 'Xcellify Pvt Ltd',
    location: 'In Office | Bhubaneswar',
    stipend: '2 K/Month',
    logo: (
      <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex flex-col items-center justify-center p-1 shadow-2xs leading-none">
        {/* Runner icon with star */}
        <div className="w-4 h-4 text-purple-600 mb-0.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-purple-600">
            <circle cx="12" cy="5" r="2.5" fill="currentColor" stroke="none" />
            <path d="M7 21l3-5 2 2 3-5M12 9v5l4 3" />
          </svg>
        </div>
        <span className="text-[8px] font-black text-purple-900 tracking-tight">
          Xcellify
        </span>
      </div>
    ),
  },
  {
    id: 'intern-4',
    title: 'Product Management Internship',
    company: 'CRED Technologies',
    location: 'In Office | Bengaluru',
    stipend: '35 K - 50 K/Month',
    logo: (
      <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center p-1 shadow-2xs text-white font-mono font-bold text-xs tracking-widest">
        CRED
      </div>
    ),
  },
  {
    id: 'intern-5',
    title: 'Full Stack Web Developer Intern',
    company: 'Swiggy',
    location: 'Hybrid | Bengaluru',
    stipend: '30 K - 45 K/Month',
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#fc8019] flex items-center justify-center p-1 shadow-2xs text-white font-black text-sm">
        S
      </div>
    ),
  },
];

export const InternshipsSection: React.FC = () => {
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
            Internships
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            Unleash internships tailored to your aspirations.
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
          {INTERNSHIPS_DATA.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] min-w-[280px] shrink-0 flex-1 rounded-2xl border border-slate-200/90 bg-white p-4.5 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* Top Row: Stipend badge / Location & Right Brand Logo */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  {/* Green Stipend Pill Badge if present */}
                  {item.stipend ? (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-100/90">
                      <Banknote className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{item.stipend}</span>
                    </div>
                  ) : null}

                  {/* Location */}
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Right Logo */}
                <div className="shrink-0 group-hover:scale-105 transition-transform">
                  {item.logo}
                </div>
              </div>

              {/* Bottom Row: Title & Company */}
              <div className="mt-5">
                <h4 className="text-[14.5px] sm:text-[15px] font-bold text-slate-900 group-hover:text-[#0073e6] transition-colors leading-snug truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-normal truncate">
                  {item.company}
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
          title="Next internships"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};

export default InternshipsSection;
