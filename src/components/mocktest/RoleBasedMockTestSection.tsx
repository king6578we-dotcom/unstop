'use client';
import React, { useState, useRef, useId, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react';
interface MockTestRole {
  id: string;
  category: 'Tech' | 'Management' | 'General';
  title: string;
  description: string;
  companies: { name: string; icon: React.ReactNode }[];
  tagsText: string;
}
const MOCK_ROLES: MockTestRole[] = [
  {
    id: 'role-1',
    category: 'Tech',
    title: 'AI Engineer',
    description: 'Builds and deploys machine learning models and AI-powered systems.',
    companies: [
      {
        name: 'Microsoft',
        icon: (
          <div className="grid grid-cols-2 gap-[1.5px] w-3.5 h-3.5 shrink-0" aria-label="Microsoft">
            <span className="bg-[#f25022] rounded-[0.5px]" />
            <span className="bg-[#7fba00] rounded-[0.5px]" />
            <span className="bg-[#00a4ef] rounded-[0.5px]" />
            <span className="bg-[#ffb900] rounded-[0.5px]" />
          </div>
        ),
      },
      {
        name: 'Perplexity AI',
        icon: (
          <div className="w-4 h-4 rounded-[4px] bg-black flex items-center justify-center shrink-0 p-0.5" aria-label="Perplexity AI">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
            </svg>
          </div>
        ),
      },
      {
        name: 'Optum',
        icon: (
          <div className="px-1.5 py-[1.5px] rounded-[4px] border border-[#f97316] bg-orange-50/60 flex items-center justify-center shrink-0" aria-label="Optum">
            <span className="text-[9px] font-black text-[#ea580c] tracking-tight leading-none">optum</span>
          </div>
        ),
      },
    ],
    tagsText: 'Artificial Intelligence (AI), +14',
  },
  {
    id: 'role-2',
    category: 'Tech',
    title: 'Android App Developer',
    description: 'Builds Android applications and mobile experiences.',
    companies: [
      {
        name: 'Uber',
        icon: (
          <div className="h-4 px-1 rounded-[3px] bg-black flex items-center justify-center shrink-0" aria-label="Uber">
            <span className="text-[9px] font-black text-white tracking-tight leading-none">Uber</span>
          </div>
        ),
      },
      {
        name: 'Swiggy',
        icon: (
          <div className="w-4 h-4 rounded-[4px] bg-[#fc8019] flex items-center justify-center shrink-0 p-0.5 shadow-2xs" aria-label="Swiggy">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        ),
      },
      {
        name: 'Meesho',
        icon: (
          <div className="w-4 h-4 rounded-[4px] bg-[#800040] flex items-center justify-center shrink-0 text-white font-black text-[10px] leading-none" aria-label="Meesho">
            m
          </div>
        ),
      },
    ],
    tagsText: 'Debugging, Git Version Control, Firebase, Swift, +11',
  },
  {
    id: 'role-3',
    category: 'Tech',
    title: 'Full Stack Web Developer',
    description: 'Designs front-end architectures and scales backend services.',
    companies: [
      {
        name: 'Google',
        icon: (
          <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8px] font-black shrink-0">
            G
          </div>
        ),
      },
      {
        name: 'CRED',
        icon: (
          <div className="w-4 h-4 rounded-[3px] bg-black text-white flex items-center justify-center text-[8px] font-black shrink-0 font-mono">
            C
          </div>
        ),
      },
      {
        name: 'Amazon',
        icon: (
          <div className="w-4 h-4 rounded-[3px] bg-[#ff9900] text-black flex items-center justify-center text-[8px] font-black shrink-0">
            a
          </div>
        ),
      },
    ],
    tagsText: 'React, Node.js, Next.js, PostgreSQL, Docker, +9',
  },
  {
    id: 'role-4',
    category: 'Tech',
    title: 'Data Scientist',
    description: 'Extracts insights from large data sets and builds predictive pipelines.',
    companies: [
      {
        name: 'Meta',
        icon: (
          <div className="w-4 h-4 rounded-[3px] bg-[#0081fb] text-white flex items-center justify-center text-[9px] font-black shrink-0">
            ∞
          </div>
        ),
      },
      {
        name: 'Netflix',
        icon: (
          <div className="w-4 h-4 rounded-[3px] bg-[#e50914] text-white flex items-center justify-center text-[9px] font-black shrink-0">
            N
          </div>
        ),
      },
      {
        name: 'Spotify',
        icon: (
          <div className="w-4 h-4 rounded-full bg-[#1db954] text-black flex items-center justify-center text-[9px] font-black shrink-0">
            ≈
          </div>
        ),
      },
    ],
    tagsText: 'Python, Pandas, SQL, Scikit-Learn, Deep Learning, +12',
  },
  {
    id: 'role-mgmt-1',
    category: 'Management',
    title: 'Analyst',
    description: 'Collects, cleans, and examines data to surface trends and support business decisions.',
    companies: [
      {
        name: 'Deloitte India',
        icon: (
          <div className="h-4 px-1 rounded-[3px] bg-black flex items-center justify-center shrink-0" aria-label="Deloitte India">
            <span className="text-[9px] font-black text-white leading-none">D<span className="text-[#86bc25]">.</span></span>
          </div>
        ),
      },
      {
        name: 'BCG',
        icon: (
          <div className="h-4 px-1 rounded-[3px] bg-[#005128] flex items-center justify-center shrink-0" aria-label="BCG">
            <span className="text-[8px] font-black text-white tracking-tighter leading-none">BCG</span>
          </div>
        ),
      },
      {
        name: 'Bain & Com...',
        icon: (
          <div className="w-4 h-4 rounded-full border border-[#cc0000] bg-white flex items-center justify-center shrink-0" aria-label="Bain & Company">
            <span className="text-[8px] font-black text-[#cc0000] leading-none">B</span>
          </div>
        ),
      },
    ],
    tagsText: 'Data Interpretation, Statistics, +13',
  },
  {
    id: 'role-mgmt-2',
    category: 'Management',
    title: 'Associate Consultant',
    description: 'Supports client engagement teams through research, analysis, and structured problem-solving at the entry level.',
    companies: [
      {
        name: 'EY',
        icon: (
          <div className="h-4 px-1 rounded-[3px] bg-[#2e2e38] flex items-center justify-center shrink-0 border-t border-[#ffe600]" aria-label="EY">
            <span className="text-[9px] font-black text-white tracking-tight leading-none">EY</span>
          </div>
        ),
      },
      {
        name: 'KPMG',
        icon: (
          <div className="h-4 px-1 rounded-[3px] bg-[#00338d] flex items-center justify-center shrink-0" aria-label="KPMG">
            <span className="text-[8px] font-black text-white tracking-tighter leading-none">KPMG</span>
          </div>
        ),
      },
      {
        name: 'PwC',
        icon: (
          <div className="h-4 px-1 rounded-[3px] bg-slate-100 border border-slate-300 flex items-center justify-center shrink-0" aria-label="PwC">
            <span className="text-[8.5px] font-black text-[#d04a02] tracking-tighter leading-none">PwC</span>
          </div>
        ),
      },
    ],
    tagsText: 'Microsoft Excel, Stakeholder Communication, +13',
  },
  {
    id: 'role-mgmt-3',
    category: 'Management',
    title: 'Associate Product Manager',
    description: 'Supports product strategy and execution, coordinating teams to deliver features that meet user needs.',
    companies: [
      {
        name: 'Google',
        icon: (
          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.26 21.35 7.33 24 12 24z" />
              <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.27C.46 8.2 0 10.04 0 12s.46 3.8 1.27 5.42l4.01-3.13z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.65 1.27 6.58l4.01 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
            </svg>
          </div>
        ),
      },
      {
        name: 'Meta',
        icon: (
          <div className="w-4 h-4 rounded-[3px] bg-[#0081fb] flex items-center justify-center shrink-0 p-0.5" aria-label="Meta">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current">
              <path d="M16.99 6.22c-1.89 0-3.32 1.05-4.99 3.26-1.67-2.21-3.1-3.26-4.99-3.26C3.06 6.22 0 9.4 0 13.56c0 4.16 3.06 7.34 6.99 7.34 2.29 0 3.88-1.24 5.01-2.92 1.13 1.68 2.72 2.92 5.01 2.92 3.93 0 6.99-3.18 6.99-7.34 0-4.16-3.06-7.34-7.01-7.34zm0 11.89c-2.3 0-3.79-1.81-4.99-3.74 1.2-1.93 2.69-3.74 4.99-3.74 2.3 0 4.2 1.74 4.2 3.74 0 2-1.9 3.74-4.2 3.74zm-9.98 0c-2.3 0-4.2-1.74-4.2-3.74 0-2 1.9-3.74 4.2-3.74 2.3 0 3.79 1.81 4.99 3.74-1.2 1.93-2.69 3.74-4.99 3.74z" />
            </svg>
          </div>
        ),
      },
      {
        name: 'Microsoft',
        icon: (
          <div className="grid grid-cols-2 gap-[1.5px] w-3.5 h-3.5 shrink-0" aria-label="Microsoft">
            <span className="bg-[#f25022] rounded-[0.5px]" />
            <span className="bg-[#7fba00] rounded-[0.5px]" />
            <span className="bg-[#00a4ef] rounded-[0.5px]" />
            <span className="bg-[#ffb900] rounded-[0.5px]" />
          </div>
        ),
      },
    ],
    tagsText: 'Project Management, +14',
  },
  {
    id: 'role-mgmt-4',
    category: 'Management',
    title: 'Brand Manager',
    description: 'Shapes brand strategy and positioning to grow awareness, equity, and market share.',
    companies: [
      {
        name: 'Godrej',
        icon: (
          <div className="h-4 px-1 rounded-[3px] bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0" aria-label="Godrej">
            <span className="text-[8px] font-serif font-black italic text-[#8a1538] tracking-tighter leading-none">Godrej</span>
          </div>
        ),
      },
      {
        name: 'ITC',
        icon: (
          <div className="w-4 h-4 rounded-full bg-[#0070ba] flex items-center justify-center shrink-0 text-white text-[7.5px] font-black leading-none shadow-2xs" aria-label="ITC">
            ▲
          </div>
        ),
      },
      {
        name: 'Nestle',
        icon: (
          <div className="h-4 px-1 rounded-[3px] bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0" aria-label="Nestle">
            <span className="text-[8px] font-serif font-bold text-[#6a4c28] tracking-tight leading-none">Nestlé</span>
          </div>
        ),
      },
    ],
    tagsText: 'Paid Digital Advertising, +14',
  },
];
export const RoleBasedMockTestSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Tech' | 'Management' | 'General'>('Tech');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const filteredRoles = MOCK_ROLES.filter((r) =>
    activeTab === 'General' ? true : r.category === activeTab
  );
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const update = () => {
      setCanGoBack(container.scrollLeft > 4);
      setCanGoForward(container.scrollLeft + container.clientWidth < container.scrollWidth - 4);
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
  }, [filteredRoles]);
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    const card = container?.firstElementChild as HTMLElement | null;
    if (!container || !card) return;
    const gap = parseFloat(getComputedStyle(container).columnGap) || 20;
    container.scrollBy({
      left: (card.getBoundingClientRect().width + gap) * (direction === 'right' ? 1 : -1),
      behavior: 'smooth',
    });
  };
  const arrowClass =
    'absolute top-1/2 z-10 flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full border border-[#d0d0d0] bg-white text-[#444] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all hover:border-[#0073e6] hover:text-[#0073e6] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] cursor-pointer';
  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto w-full min-w-0 max-w-[980px] bg-white py-4 px-2 sm:px-4 font-[Arial,Helvetica,sans-serif] select-none"
    >
      {/* Section Header Matching Screenshot */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="relative min-w-0 pl-3.5 before:absolute before:inset-y-0 before:left-0 before:w-[4px] before:rounded-r-full before:bg-[#0073e6]">
          <h2
            id={headingId}
            className="text-[21px] font-semibold leading-[1.2] text-[#383838] sm:text-[26px]"
          >
            Role-Based Mock Test
          </h2>
          <p className="mt-0.5 text-[13px] font-normal leading-[20px] text-[#777] sm:text-[15px]">
            Unlock 360° prep with realistic, AI-powered mock exams.
          </p>
        </div>
        {/* View All Pill with Blue Circular Arrow Button */}
        <button
          type="button"
          className="inline-flex h-[38px] shrink-0 items-center justify-center gap-2 rounded-full border border-[#b8d8ff] bg-[#f3f8ff] px-4 text-[14px] font-medium text-[#0073e6] transition-colors hover:bg-[#e6f1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] sm:text-[15px] cursor-pointer"
        >
          <span>View All</span>
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#0073e6] text-white">
            <ArrowRight size={11} strokeWidth={2.5} aria-hidden="true" />
          </span>
        </button>
      </div>
      {/* Category Filter Pills: Tech | Management | General */}
      <div className="flex items-center gap-2.5 mb-5">
        {(['Tech', 'Management', 'General'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setActiveTab(tab);
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
              activeTab === tab
                ? 'border border-[#0073e6] text-slate-900 bg-white shadow-2xs'
                : 'border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800 bg-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Cards Row & Carousel Navigation matching Jobs Section arrow size */}
      <div className="relative group/carousel">
        {/* Left Arrow Button matching Jobs */}
        {canGoBack && (
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className={`${arrowClass} -left-2.5 sm:-left-3 xl:-left-[44px]`}
            title="Previous"
            aria-label="Previous role tests"
          >
            <ChevronLeft size={17} strokeWidth={2.2} aria-hidden="true" />
          </button>
        )}
        {/* Scroll Container (Showing 2 cards per view on desktop) */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-1 pt-0.5 w-full"
        >
          {filteredRoles.map((role) => (
            <article
              key={role.id}
              className="flex w-full min-w-0 shrink-0 flex-col overflow-hidden rounded-[18px] border border-[#e5e7eb] bg-[#f6f6f6] p-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] md:w-[calc(50%_-_10px)]"
            >
              <div className="flex flex-1 flex-col rounded-[15px] bg-white px-4 pb-4 pt-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <h3 className="m-0 text-[19px] font-medium leading-[25px] text-[#383838]">
                  {role.title}
                </h3>
                <p className="mb-0 mt-[6px] min-h-[44px] text-[14px] font-normal leading-[18px] text-[#777]">
                  {role.description}
                </p>
                <div className="mt-[10px] border-t border-[#dedede] bg-[#f5f7f9] pb-[15px] pr-[15px]">
                  <div className="flex min-h-[48px] flex-wrap items-center gap-x-4 gap-y-2 bg-white px-[5px] pb-[5px] pt-[15px]">
                    {role.companies.map((company) => (
                      <div key={company.name} className="flex shrink-0 items-center gap-[6px] whitespace-nowrap text-[12px] font-normal leading-5 text-[#494949]">
                        <span aria-hidden="true" className="flex h-[23px] w-[23px] shrink-0 items-center justify-center overflow-hidden rounded-[4px] border border-[#eee] bg-white [&>div]:scale-[1.2]">
                          {company.icon}
                        </span>
                        <span>{company.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex min-h-[60px] items-center justify-between gap-3 px-3 py-[8px]">
                <span title={role.tagsText} className="min-w-0 flex-1 truncate text-[12px] font-normal leading-5 text-[#7c7c7c]">
                  {role.tagsText}
                </span>
                <button
                  type="button"
                  onClick={(event) => { event.stopPropagation(); }}
                  aria-label={`Start ${role.title} mock test`}
                  className="flex h-[40px] shrink-0 items-center justify-center gap-[7px] rounded-full border-0 bg-[#0073e6] px-4 text-[15px] font-medium text-white transition-colors hover:bg-[#0060be] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] focus-visible:ring-offset-2 active:scale-95 cursor-pointer"
                >
                  <span>Start</span>
                  <ArrowUpRight size={19} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
        {/* Right Arrow Button matching Jobs */}
        {(canGoForward || filteredRoles.length > 2) && (
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className={`${arrowClass} -right-2.5 sm:-right-3 xl:-right-[44px]`}
            title="Next"
            aria-label="Next role tests"
          >
            <ChevronRight size={17} strokeWidth={2.2} aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
};
export default RoleBasedMockTestSection;
