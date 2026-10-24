'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { ArrowRight, Banknote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export interface InternshipItem {
  id: string;
  title: string;
  company: string;
  location: string;
  logo: React.ReactNode;
  stipend?: string;
}

export const INTERNSHIPS_DATA: InternshipItem[] = [
  {
    id: 'intern-1',
    title: 'Outreach Internship',
    company: 'Accesco Living',
    location: 'Work from Home',
    logo: (
      <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#f7eaf5] p-1.5">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Stylized 'A' */}
          <path
            d="M22 72V30c0-2 1.5-3.5 3.5-3.5h16c2 0 3.5 1.5 3.5 3.5v42h-8V54H30v18h-8z"
            fill="#9e0c5d"
          />
          <path d="M30 34h7v12h-7V34z" fill="#f7eaf5" />
          {/* Stylized 'L' */}
          <path d="M52 30h9v34h19v8H52V30z" fill="#9e0c5d" />
          {/* Smooth dynamic wave */}
          <path
            d="M26 52c8-14 24-20 36-12 8 5 12 14 18 16 5 2 9-1 11-4-2 7-7 12-13 11-8-2-13-8-19-13-9-7-18-4-26 4l-7-2z"
            fill="#600539"
          />
        </svg>
      </div>
    ),
  },
  {
    id: 'intern-2',
    title: 'Social Media & Content Internship',
    company: 'Shipzy Technologies',
    location: 'Hybrid | Noida',
    logo: (
      <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#00bcd4] text-white shadow-xs">
        <span className="font-sans text-3xl font-black italic">S</span>
      </div>
    ),
  },
  {
    id: 'intern-3',
    title: 'Product Management Internship',
    company: 'CRED Technologies',
    location: 'In Office | Bengaluru',
    logo: (
      <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black p-1 font-mono text-sm font-bold tracking-widest text-white shadow-xs">
        CRED
      </div>
    ),
  },
  {
    id: 'intern-4',
    title: 'International Business Developm...',
    company: 'Nvision Advisory',
    location: 'Work from Home',
    stipend: '5.5 K - 17 K/Month',
    logo: (
      <div className="flex h-full w-full items-center justify-center bg-white p-0.5">
        <div className="w-full bg-[#1a73e8] py-1 px-1 rounded-[3px] flex flex-col items-center justify-center text-center leading-none">
          <span className="text-[7px] font-bold text-white tracking-tight">Nvision Advisory</span>
          <span className="text-[3.5px] text-blue-100 tracking-tighter mt-0.5">Financial Modeling. Solutions. Delivered</span>
        </div>
      </div>
    ),
  },
  {
    id: 'intern-5',
    title: 'Front-End Developer Internship',
    company: 'Logictap Private Limited',
    location: 'Pan India',
    stipend: '15 K - 25 K/Month',
    logo: (
      <div className="flex h-full w-full items-center justify-center bg-white p-1">
        <div className="flex items-center font-sans text-xs font-bold tracking-tight">
          <span className="text-slate-900">logic</span>
          <span className="text-[#e65100]">tap</span>
        </div>
      </div>
    ),
  },
  {
    id: 'intern-6',
    title: 'BizTech Operations Internship',
    company: 'Springer Capital',
    location: 'Pan India',
    logo: (
      <div className="flex h-full w-full items-center justify-center bg-white p-1">
        <div className="flex items-center gap-0.5">
          <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0 text-[#2e7d32]" fill="currentColor">
            <circle cx="9" cy="9" r="3" />
            <circle cx="15" cy="9" r="3" />
            <circle cx="9" cy="15" r="3" />
            <circle cx="15" cy="15" r="3" />
          </svg>
          <span className="text-[6.5px] font-bold tracking-wider text-[#2e7d32] uppercase font-sans">
            SPRINGER CAPITAL
          </span>
        </div>
      </div>
    ),
  },
];

export interface InternshipsSectionProps {
  items?: InternshipItem[];
  onSelect?: (item: InternshipItem) => void;
  onViewAll?: () => void;
  viewAllHref?: string;
}

export const InternshipsSection: React.FC<InternshipsSectionProps> = ({
  items = INTERNSHIPS_DATA,
  onSelect,
  onViewAll,
  viewAllHref = '/internships',
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
      {/* Header matching Competitions */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="relative min-w-0 pl-3.5 before:absolute before:inset-y-0 before:left-0 before:w-[4px] before:rounded-r-full before:bg-[#0073e6]">
          <h2
            id={headingId}
            className="text-[21px] font-semibold leading-[1.2] text-[#383838] sm:text-[26px]"
          >
            Internships
          </h2>
          <p className="mt-0.5 text-[13px] font-normal leading-[20px] text-[#777] sm:text-[15px]">
            Unleash internships tailored to your aspirations.
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

      {/* Responsive Carousel Grid (3 Cards in one view on desktop with scroll arrows) */}
      <div className="relative">
        <div
          id={carouselId}
          ref={scrollContainerRef}
          role="region"
          aria-label="Internship cards"
          className="grid min-w-0 snap-x snap-mandatory auto-cols-[250px] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain rounded-[16px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [-webkit-tap-highlight-color:transparent] sm:auto-cols-[calc((100%_-_16px)/2)] md:auto-cols-[calc((100%_-_32px)/3)] lg:auto-cols-[calc((100%_-_32px)/3)]"
        >
          {items.map((item) => {
            const content = (
              <>
                {/* Top Banner matching Competitions dimensions */}
                <div className="flex h-[86px] items-center justify-between gap-2.5 rounded-[13px] bg-[#f2f6fc] px-3">
                  <div className="flex min-w-0 flex-col justify-center gap-0.5">
                    {item.stipend && (
                      <div className="flex items-center gap-1 text-[11.5px] font-semibold text-[#00875a]">
                        <Banknote
                          size={13}
                          className="shrink-0 text-[#00875a]"
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.stipend}</span>
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
            aria-label="Previous internships"
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
            aria-label="Next internships"
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

export default InternshipsSection;
