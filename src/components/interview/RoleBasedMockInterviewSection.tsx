'use client';

import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';

interface Company {
  name: string;
  logo: React.ReactNode;
}

interface MockInterviewRole {
  id: string;
  category: 'Tech' | 'Management' | 'General';
  title: string;
  description: string;
  companies: Company[];
  tagsText: string;
}

const MOCK_INTERVIEW_ROLES: MockInterviewRole[] = [
  {
    id: 'interview-1',
    category: 'Tech',
    title: 'AI Engineer',
    description: 'Builds and deploys machine learning models and AI-powered systems.',
    companies: [
      {
        name: 'Microsoft',
        logo: (
          <div className="grid grid-cols-2 gap-[2px] w-4 h-4 shrink-0">
            <span className="bg-[#f25022] w-[7px] h-[7px]" />
            <span className="bg-[#7fba00] w-[7px] h-[7px]" />
            <span className="bg-[#00a4ef] w-[7px] h-[7px]" />
            <span className="bg-[#ffb900] w-[7px] h-[7px]" />
          </div>
        ),
      },
      {
        name: 'Perplexity AI',
        logo: (
          <div className="w-4 h-4 rounded bg-black flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current">
              <path d="M12 2L4 6.5V11L12 7.5L20 11V6.5L12 2ZM4 13V17.5L12 22L20 17.5V13L12 16.5L4 13Z" />
            </svg>
          </div>
        ),
      },
      {
        name: 'Optum',
        logo: (
          <div className="flex items-center gap-0.5 shrink-0">
            <span className="w-3.5 h-3.5 rounded-full bg-[#f97316] flex items-center justify-center text-white text-[8px] font-black leading-none">
              O
            </span>
          </div>
        ),
      },
    ],
    tagsText: 'Artificial Intelligence (AI), +14',
  },
  {
    id: 'interview-2',
    category: 'Tech',
    title: 'Android App Developer',
    description: 'Builds Android applications and mobile experiences.',
    companies: [
      {
        name: 'Uber',
        logo: (
          <div className="w-4 h-4 rounded bg-black flex items-center justify-center text-white text-[7px] font-black shrink-0 tracking-tighter">
            Uber
          </div>
        ),
      },
      {
        name: 'Swiggy',
        logo: (
          <div className="w-4 h-4 rounded-full bg-[#fc8019] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-current">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        ),
      },
      {
        name: 'Meesho',
        logo: (
          <div className="w-4 h-4 rounded bg-[#84226b] flex items-center justify-center text-white text-[8px] font-black shrink-0">
            m
          </div>
        ),
      },
    ],
    tagsText: 'Debugging, Git Version Control, Firebase, Swift, +11',
  },
  {
    id: 'interview-3',
    category: 'Tech',
    title: 'Full Stack Web Developer',
    description: 'Architects scalable client-facing applications and high-throughput microservices.',
    companies: [
      {
        name: 'Google',
        logo: (
          <div className="w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[9px] font-bold text-[#4285f4] shrink-0">
            G
          </div>
        ),
      },
      {
        name: 'Amazon',
        logo: (
          <div className="w-4 h-4 rounded bg-[#232f3e] flex items-center justify-center text-[#ff9900] text-[8px] font-black shrink-0">
            a
          </div>
        ),
      },
      {
        name: 'Atlassian',
        logo: (
          <div className="w-4 h-4 rounded bg-[#0052cc] flex items-center justify-center text-white text-[8px] font-bold shrink-0">
            A
          </div>
        ),
      },
    ],
    tagsText: 'Next.js, TypeScript, PostgreSQL, Docker, +18',
  },
  {
    id: 'interview-4',
    category: 'Management',
    title: 'Product Manager - Growth',
    description: 'Drives product strategy, customer retention funnels, and data experimentation.',
    companies: [
      {
        name: 'Zomato',
        logo: (
          <div className="w-4 h-4 rounded bg-[#cb202d] flex items-center justify-center text-white text-[8px] font-black shrink-0">
            z
          </div>
        ),
      },
      {
        name: 'CRED',
        logo: (
          <div className="w-4 h-4 rounded bg-black flex items-center justify-center text-white text-[8px] font-mono font-bold shrink-0">
            C
          </div>
        ),
      },
      {
        name: 'Razorpay',
        logo: (
          <div className="w-4 h-4 rounded bg-[#0c2340] flex items-center justify-center text-[#528ff0] text-[8px] font-black shrink-0">
            R
          </div>
        ),
      },
    ],
    tagsText: 'Product Analytics, OKRs, Wireframing, SQL, +12',
  },
  {
    id: 'interview-5',
    category: 'General',
    title: 'Business Analyst',
    description: 'Uncovers actionable business insights using business intelligence tools and predictive modeling.',
    companies: [
      {
        name: 'Deloitte',
        logo: (
          <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-[#86bc25] text-[10px] font-black shrink-0">
            •
          </div>
        ),
      },
      {
        name: 'McKinsey',
        logo: (
          <div className="w-4 h-4 rounded bg-[#002244] flex items-center justify-center text-white text-[7px] font-serif font-bold shrink-0">
            M
          </div>
        ),
      },
      {
        name: 'EY',
        logo: (
          <div className="w-4 h-4 rounded bg-[#ffe600] flex items-center justify-center text-black text-[7px] font-black shrink-0">
            EY
          </div>
        ),
      },
    ],
    tagsText: 'PowerBI, Tableau, Advanced Excel, Statistics, +9',
  },
];

export const RoleBasedMockInterviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Tech' | 'Management' | 'General'>('Tech');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredRoles = MOCK_INTERVIEW_ROLES.filter((r) =>
    activeTab === 'General' ? true : r.category === activeTab
  );

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-4 select-none w-full">
      {/* Section Header Matching Screenshot: Role-Based Mock Interview */}
      <div className="flex items-center justify-between mb-3 gap-2">
        <div className="border-l-[3.5px] border-[#0073e6] pl-3 py-0.5">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
            Role-Based Mock Interview
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            Unravel the art of cracking interviews with AI-powered guided practice.
          </p>
        </div>

        {/* View All Pill with Blue Circular Arrow Button */}
        <button
          type="button"
          onClick={() => alert('Viewing all 150+ Role-Based Mock Interviews')}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eef5fc] hover:bg-[#deecfa] text-[#0073e6] font-semibold text-xs sm:text-[13px] transition-colors cursor-pointer group shrink-0"
        >
          <span>View All</span>
          <span className="w-4 h-4 rounded-full bg-[#0073e6] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
          </span>
        </button>
      </div>

      {/* Category Filter Pills: Tech | Management | General */}
      <div className="flex items-center gap-2 mb-4">
        {(['Tech', 'Management', 'General'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeTab === tab
                ? 'border border-slate-800 bg-white text-slate-900 font-semibold shadow-xs'
                : 'border border-slate-300 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Row & Carousel Navigation - 50% Full-Width per card on desktop */}
      <div className="relative group/carousel">
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1 w-full"
        >
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="w-full md:w-[calc(50%-10px)] min-w-[300px] sm:min-w-[360px] shrink-0 md:shrink flex-1 rounded-2xl border border-slate-200/90 bg-white p-5 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              {/* Top part: Title & Description */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0073e6] transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 mt-1 leading-snug line-clamp-2">
                  {role.description}
                </p>

                {/* Company Logo Strip matching Screenshot */}
                <div className="my-3.5 px-3 py-2.5 rounded-xl bg-[#f8fafc] border border-slate-100 flex items-center gap-5 flex-wrap">
                  {role.companies.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      {c.logo}
                      <span className="text-[12px] font-medium text-slate-800">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Tags text & Blue Start Button with top-right arrow */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <span className="text-xs text-slate-500 font-normal truncate max-w-[280px]">
                  {role.tagsText}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Starting mock interview for: ${role.title}`);
                  }}
                  className="px-5 py-2 rounded-xl bg-[#0073e6] hover:bg-[#005bb5] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer shrink-0 active:scale-95"
                >
                  <span>Start</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Right Arrow Button matching Screenshot */}
        <button
          type="button"
          onClick={() => handleScroll('right')}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 cursor-pointer z-10 hidden sm:flex"
          title="Next mock interviews"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};

export default RoleBasedMockInterviewSection;
