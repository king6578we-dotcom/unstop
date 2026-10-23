'use client';

import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronRight, ArrowUpRight } from 'lucide-react';

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
          <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 shrink-0">
            <span className="bg-[#f25022]" />
            <span className="bg-[#7fba00]" />
            <span className="bg-[#00a4ef]" />
            <span className="bg-[#ffb900]" />
          </div>
        ),
      },
      {
        name: 'Perplexity AI',
        icon: (
          <div className="w-3.5 h-3.5 rounded bg-black flex items-center justify-center text-white text-[8px] font-bold">
            ❄
          </div>
        ),
      },
      {
        name: 'Optum',
        icon: (
          <div className="w-3.5 h-3.5 rounded-full bg-[#f97316] flex items-center justify-center text-white text-[8px] font-bold">
            O
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
          <div className="w-3.5 h-3.5 rounded-sm bg-black text-white flex items-center justify-center text-[7px] font-black">
            U
          </div>
        ),
      },
      {
        name: 'Swiggy',
        icon: (
          <div className="w-3.5 h-3.5 rounded-sm bg-[#fc8019] text-white flex items-center justify-center text-[8px] font-black">
            📍
          </div>
        ),
      },
      {
        name: 'Meesho',
        icon: (
          <div className="w-3.5 h-3.5 rounded-sm bg-[#9c27b0] text-white flex items-center justify-center text-[7.5px] font-black">
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
          <div className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[7.5px] font-bold">
            G
          </div>
        ),
      },
      {
        name: 'CRED',
        icon: (
          <div className="w-3.5 h-3.5 rounded-sm bg-black text-white flex items-center justify-center text-[7px] font-mono">
            C
          </div>
        ),
      },
      {
        name: 'Amazon',
        icon: (
          <div className="w-3.5 h-3.5 rounded-sm bg-[#ff9900] text-black flex items-center justify-center text-[7px] font-bold">
            a
          </div>
        ),
      },
    ],
    tagsText: 'React, Node.js, Next.js, PostgreSQL, Docker, +9',
  },
  {
    id: 'role-4',
    category: 'Management',
    title: 'Product Management Associate',
    description: 'Defines user requirements and collaborates across cross-functional teams.',
    companies: [
      {
        name: 'Flipkart',
        icon: <span className="text-[#2874f0] font-black text-[10px]">F</span>,
      },
      {
        name: 'McKinsey',
        icon: <span className="text-slate-800 font-serif font-black text-[10px]">M</span>,
      },
    ],
    tagsText: 'Roadmapping, User Research, Agile, +8',
  },
];

export const RoleBasedMockTestSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Tech' | 'Management' | 'General'>('Tech');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredRoles = MOCK_ROLES.filter((r) =>
    activeTab === 'General' ? true : r.category === activeTab
  );

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-4 select-none">
      {/* Section Header Matching Screenshot */}
      <div className="flex items-center justify-between mb-3">
        <div className="border-l-[3.5px] border-[#0073e6] pl-3 py-0.5">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
            Role-Based Mock Test
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            Unlock 360° prep with realistic, AI-powered mock exams.
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

      {/* Category Filter Pills Matching Screenshot: Tech | Management | General */}
      <div className="flex items-center gap-2 mb-4">
        {(['Tech', 'Management', 'General'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === tab
                ? 'border border-slate-300 bg-white text-slate-900 shadow-2xs'
                : 'border border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Row & Carousel Navigation */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1"
        >
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="w-full md:w-[calc(50%-10px)] min-w-[320px] sm:min-w-[380px] shrink-0 md:shrink flex-1 rounded-2xl border border-slate-200/90 bg-white p-5 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
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
                <div className="my-3.5 px-3 py-2 rounded-xl bg-slate-50/90 border border-slate-100 flex items-center gap-4 flex-wrap">
                  {role.companies.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                      {c.icon}
                      <span className="text-[12px]">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Tags text & Blue Start Button with top-right arrow */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <span className="text-xs text-slate-500 font-medium truncate max-w-[280px]">
                  {role.tagsText}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Starting mock exam for: ${role.title}`);
                  }}
                  className="px-5 py-2 rounded-xl bg-[#0073e6] hover:bg-[#005bb5] text-white text-xs font-bold flex items-center gap-1 shadow-xs transition-colors cursor-pointer shrink-0 active:scale-95"
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
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 cursor-pointer z-10 hidden sm:flex"
          title="Next mock tests"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};

export default RoleBasedMockTestSection;
