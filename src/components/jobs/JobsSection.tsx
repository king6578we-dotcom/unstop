'use client';

import React, { useRef } from 'react';
import { MapPin, Banknote, ChevronRight, ArrowRight } from 'lucide-react';

interface JobItem {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: React.ReactNode;
}

const JOBS_DATA: JobItem[] = [
  {
    id: 'job-1',
    title: 'Senior Software Engineer',
    company: 'TBO.com',
    location: 'Pan India',
    salary: '20 L - 32 LPA',
    logo: (
      <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex flex-col items-center justify-center p-1 shadow-2xs leading-none">
        <div className="flex items-center text-[#1c4980] font-black text-sm tracking-tight">
          <span>tbo</span>
          <span className="text-[#f97316] text-xs">.com</span>
        </div>
        <span className="text-[5.5px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
          TRAVEL SIMPLIFIED
        </span>
      </div>
    ),
  },
  {
    id: 'job-2',
    title: 'Founding Full-Stack Product Engi...',
    company: 'Shipzy Technologies Private Limited',
    location: 'In Office | Noida',
    salary: '7 L - 12 LPA',
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#00bcd4] flex items-center justify-center text-white font-black text-2xl shadow-2xs">
        <span className="font-sans font-black italic">S</span>
      </div>
    ),
  },
  {
    id: 'job-3',
    title: 'Business Development Associate',
    company: 'GreenPod Labs',
    location: 'In Office | Solapur',
    salary: '25 K - 35 K/Month',
    logo: (
      <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex flex-col items-center justify-center p-1 shadow-2xs leading-none">
        {/* Green leaf sprout emblem matching GreenPod Labs */}
        <div className="w-4 h-4 rounded-full border border-emerald-600 bg-emerald-50 flex items-center justify-center text-[10px] text-emerald-600 mb-0.5">
          🌱
        </div>
        <span className="text-[7px] font-black text-slate-800 tracking-tighter uppercase">
          GREENPOD LABS
        </span>
      </div>
    ),
  },
  {
    id: 'job-4',
    title: 'Lead Backend Engineer (Go/Distributed)',
    company: 'Flipkart',
    location: 'In Office | Bengaluru',
    salary: '35 L - 50 LPA',
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#2874f0] flex items-center justify-center text-white font-black text-xs italic shadow-2xs">
        Flipkart
      </div>
    ),
  },
  {
    id: 'job-5',
    title: 'Data Scientist II - Recommendation Engine',
    company: 'Swiggy',
    location: 'Hybrid | Bengaluru',
    salary: '28 L - 42 LPA',
    logo: (
      <div className="w-12 h-12 rounded-xl bg-[#fc8019] flex items-center justify-center text-white font-black text-sm shadow-2xs">
        S
      </div>
    ),
  },
];

export const JobsSection: React.FC = () => {
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
      {/* Section Header Matching Screenshot */}
      <div className="flex items-center justify-between mb-4">
        <div className="border-l-[3.5px] border-[#0073e6] pl-3 py-0.5">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
            Jobs
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            Unveil jobs designed for your next big move.
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
          {JOBS_DATA.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] min-w-[280px] shrink-0 flex-1 rounded-2xl border border-slate-200/90 bg-white p-4.5 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              {/* Top Row: Salary badge / Location & Right Brand Logo */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5">
                  {/* Green Salary Pill Badge */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-100/90">
                    <Banknote className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{item.salary}</span>
                  </div>

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
          title="Next jobs"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};

export default JobsSection;
