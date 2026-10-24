'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { ArrowRight, Banknote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export interface JobItem {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: React.ReactNode;
}

export const JOBS_DATA: JobItem[] = [
  {
    id: 'job-1',
    title: 'Senior Software Engineer',
    company: 'TBO.com',
    location: 'Pan India',
    salary: '20 L - 32 LPA',
    logo: (
      <div className="flex h-full w-full flex-col items-center justify-center p-0.5 leading-none">
        <div className="flex items-center text-sm font-black tracking-tight text-[#1c4980]">
          <span>tbo</span>
          <span className="text-xs text-[#f97316]">.com</span>
        </div>
        <span className="mt-0.5 text-[5px] font-semibold uppercase tracking-wider text-slate-400">
          TRAVEL SIMPLIFIED
        </span>
      </div>
    ),
  },
  {
    id: 'job-2',
    title: 'Founding Full-Stack Product Engineer',
    company: 'Shipzy Technologies Private Limited',
    location: 'In Office | Noida',
    salary: '7 L - 12 LPA',
    logo: (
      <div className="flex h-full w-full items-center justify-center rounded-[8px] bg-[#00bcd4] text-2xl font-black text-white shadow-xs">
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
      <div className="flex h-full w-full flex-col items-center justify-center p-0.5 leading-none">
        <div className="mb-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-emerald-600 bg-emerald-50 text-[10px] text-emerald-600">
          🌱
        </div>
        <span className="whitespace-nowrap text-[6.5px] font-black uppercase tracking-tighter text-slate-800">
          GREENPOD LABS
        </span>
      </div>
    ),
  },
  {
    id: 'job-4',
    title: 'Full Stack & Cloud Engineer (AWS)',
    company: 'Aqyron Labs Private limited',
    location: 'Work from Home',
    salary: '5 L - 7 LPA',
    logo: (
      <div className="flex h-full w-full flex-col items-center justify-center p-0.5 leading-none">
        <div className="flex items-center text-sm font-black tracking-tighter">
          <span className="text-slate-900 font-extrabold text-base">A</span>
          <span className="text-[#0284c7] font-extrabold text-base -ml-0.5">Q</span>
        </div>
        <span className="text-[5px] font-bold text-slate-800 tracking-[0.14em] uppercase mt-0.5">
          AQYRON
        </span>
        <span className="text-[3.5px] text-slate-400 font-semibold tracking-widest uppercase">
          LABS
        </span>
      </div>
    ),
  },
  {
    id: 'job-5',
    title: 'Sales Manager – US Sales Process',
    company: 'SS TECHNOLOGIES',
    location: 'In Office | Noida',
    salary: '55 K - 95 K/Month',
    logo: (
      <div className="flex h-full w-full items-center justify-center p-0.5">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-[#1565c0]" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="12" r="6" stroke="#1e88e5" />
            <circle cx="15" cy="12" r="6" stroke="#0d47a1" />
          </svg>
          <span className="text-[6px] font-bold text-[#1e3a8a] tracking-tight leading-tight">
            SS Tech Services
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'job-6',
    title: 'Senior Customer Care Executive',
    company: 'Ola CAr Wash Private Limited',
    location: 'In Office | New Delhi',
    salary: '25 K - 35 K/Month',
    logo: (
      <div className="flex h-full w-full items-center justify-center p-0.5">
        <div className="w-10 h-10 rounded-full bg-black flex flex-col items-center justify-center text-center p-0.5 border border-slate-700 shadow-xs">
          <span className="text-[5.5px] font-black tracking-tighter text-white uppercase leading-none">
            OLA CAR WASH
          </span>
          <span className="text-[3.5px] text-slate-300 tracking-tight mt-0.5">
            The Detailing Brothers
          </span>
        </div>
      </div>
    ),
  },
];

export interface JobsSectionProps {
  items?: JobItem[];
  onSelect?: (item: JobItem) => void;
  onViewAll?: () => void;
  viewAllHref?: string;
}

export const JobsSection: React.FC<JobsSectionProps> = ({
  items = JOBS_DATA,
  onSelect,
  onViewAll,
  viewAllHref = '/jobs',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  const carouselId = useId();
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const update = () => {
      setCanGoBack(container.scrollLeft > 2);
      setCanGoForward(container.scrollLeft + container.clientWidth < container.scrollWidth - 2);
    };
    update();
    container.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(container);
    Array.from(container.children).forEach((child) => observer.observe(child));
    return () => {
      container.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [items]);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    const card = container?.firstElementChild as HTMLElement | null;
    if (!container || !card) return;
    const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
    container.scrollBy({
      left: (card.getBoundingClientRect().width + gap) * (direction === 'right' ? 1 : -1),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  const viewAllClass =
    'inline-flex h-[38px] shrink-0 items-center justify-center gap-2 rounded-full border border-[#b8d8ff] bg-[#f3f8ff] px-4 text-[14px] font-medium text-[#0073e6] transition-colors hover:bg-[#e6f1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] sm:text-[15px]';
  const viewAllContent = (
    <>
      <span>View All</span>
      <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#0073e6] text-white">
        <ArrowRight size={11} strokeWidth={2.5} aria-hidden="true" />
      </span>
    </>
  );
  const arrowClass =
    'absolute top-1/2 z-10 flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full border border-[#d0d0d0] bg-white text-[#444] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all hover:border-[#0073e6] hover:text-[#0073e6] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] cursor-pointer';

  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto w-full min-w-0 max-w-[980px] bg-white py-4 px-2 sm:px-4 font-[Arial,Helvetica,sans-serif]"
    >
      {/* Header matching Competitions & Internships */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="relative min-w-0 pl-3.5 before:absolute before:inset-y-0 before:left-0 before:w-[4px] before:rounded-r-full before:bg-[#0073e6]">
          <h2
            id={headingId}
            className="text-[21px] font-semibold leading-[1.2] text-[#383838] sm:text-[26px]"
          >
            Jobs
          </h2>
          <p className="mt-0.5 text-[13px] font-normal leading-[20px] text-[#777] sm:text-[15px]">
            Unveil jobs designed for your next big move.
          </p>
        </div>

        {onViewAll ? (
          <button type="button" onClick={onViewAll} className={viewAllClass}>
            {viewAllContent}
          </button>
        ) : (
          <a href={viewAllHref} className={viewAllClass}>
            {viewAllContent}
          </a>
        )}
      </div>

      {/* Responsive Carousel Grid (3 Cards per view on desktop with scroll arrows) */}
      <div className="relative">
        <div
          id={carouselId}
          ref={scrollContainerRef}
          role="region"
          aria-label="Job cards"
          className="grid min-w-0 snap-x snap-mandatory auto-cols-[250px] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain rounded-[16px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [-webkit-tap-highlight-color:transparent] sm:auto-cols-[calc((100%_-_16px)/2)] md:auto-cols-[calc((100%_-_32px)/3)] lg:auto-cols-[calc((100%_-_32px)/3)]"
        >
          {items.map((item) => {
            const content = (
              <>
                {/* Top Banner matching Internships & Competitions dimensions */}
                <div className="flex h-[86px] items-center justify-between gap-2.5 rounded-[13px] bg-[#f2f6fc] px-3">
                  <div className="flex min-w-0 flex-col justify-center gap-0.5">
                    {item.salary && (
                      <div className="flex items-center gap-1 text-[11.5px] font-semibold text-[#00875a]">
                        <Banknote
                          size={13}
                          className="shrink-0 text-[#00875a]"
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.salary}</span>
                      </div>
                    )}
                    <div className="flex min-w-0 items-center gap-1 text-[12.5px] font-normal text-[#383838]">
                      <MapPin
                        size={14}
                        strokeWidth={2.3}
                        className="shrink-0 text-[#7b7b7b]"
                        aria-hidden="true"
                      />
                      <span className="truncate" title={item.location}>
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-hidden rounded-[11px] border border-[#b4b4b4] bg-white p-1">
                    {item.logo}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="min-w-0 px-3 pb-2.5 pt-2">
                  <h3
                    title={item.title}
                    className="truncate text-[15px] font-semibold leading-[21px] text-[#383838] transition-colors group-hover:text-[#0073e6] group-active:text-[#0073e6] sm:text-[16px]"
                  >
                    {item.title}
                  </h3>
                  <p
                    title={item.company}
                    className="mt-0.5 truncate text-[12.5px] font-normal leading-[17px] text-[#666] sm:text-[13px]"
                  >
                    {item.company}
                  </p>
                </div>
              </>
            );

            const cardClass =
              'group block h-[168px] min-w-0 snap-start overflow-hidden rounded-[16px] border border-[#dedede] bg-white p-1 text-left cursor-pointer transition-shadow hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [-webkit-tap-highlight-color:transparent] select-none';

            return onSelect ? (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item)}
                className={cardClass}
              >
                {content}
              </button>
            ) : (
              <article key={item.id} className={cardClass}>
                {content}
              </article>
            );
          })}
        </div>

        {canGoBack && (
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Previous jobs"
            aria-controls={carouselId}
            className={`${arrowClass} -left-2.5 sm:-left-3 xl:-left-[44px]`}
          >
            <ChevronLeft size={17} strokeWidth={2.2} aria-hidden="true" />
          </button>
        )}
        {canGoForward && (
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Next jobs"
            aria-controls={carouselId}
            className={`${arrowClass} -right-2.5 sm:-right-3 xl:-right-[44px]`}
          >
            <ChevronRight size={17} strokeWidth={2.2} aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
};

export default JobsSection;
