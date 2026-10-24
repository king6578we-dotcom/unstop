'use client';

import React, { useState } from 'react';
import { Bookmark, MapPin, Clock } from 'lucide-react';
import { ALL_OPPORTUNITIES } from '@/data/mockData';
import { Opportunity } from '@/types';

/* ==========================================================================
   1. OPPORTUNITY CARD SUBCOMPONENT
   ========================================================================== */

export interface OpportunityCardProps {
  opp: Opportunity;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onSelect: (opp: Opportunity) => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opp,
  isBookmarked,
  onToggleBookmark,
  onSelect,
}) => {
  const getCategoryColor = (category: Opportunity['category']) => {
    switch (category) {
      case 'internship':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'job':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'hackathon':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'competition':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div
      onClick={() => onSelect(opp)}
      className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group select-none"
    >
      {/* Top row: Company logo, name, category pill, bookmark */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-linear-to-tr from-slate-800 to-slate-950 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
              {opp.logo}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                {opp.company}
              </h4>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {opp.location} ({opp.type})
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => onToggleBookmark(opp.id, e)}
            className={`p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer ${
              isBookmarked ? 'text-blue-600 fill-blue-600' : 'text-slate-400 hover:text-blue-600'
            }`}
            title={isBookmarked ? 'Bookmarked' : 'Save opportunity'}
            aria-label="Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
          </button>
        </div>

        {/* Opportunity Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0073e6] transition-colors mt-3 line-clamp-1">
          {opp.title}
        </h3>

        {/* Description Snippet */}
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {opp.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span
            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border ${getCategoryColor(
              opp.category
            )}`}
          >
            {opp.category.toUpperCase()}
          </span>
          {opp.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Info: Stipend / Salary & Deadline */}
      <div className="border-t border-slate-100 mt-4 pt-3 flex items-center justify-between">
        <div>
          <span className="text-[11px] text-slate-400 uppercase font-medium tracking-wider block">
            Stipend / Package
          </span>
          <span className="text-sm font-bold text-emerald-700">
            {opp.salaryOrStipend}
          </span>
        </div>

        <div className="text-right">
          <span className="text-[11px] text-slate-400 flex items-center gap-1 justify-end">
            <Clock className="w-3 h-3 text-amber-500" />
            {opp.deadline}
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            {opp.applicantsCount.toLocaleString()} applied
          </span>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. MAIN OPPORTUNITIES SECTION COMPONENT
   ========================================================================== */

export interface OpportunitiesSectionProps {
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onSelectOpportunity: (opp: Opportunity) => void;
  selectedCategoryFilter?: string;
}

const TABS = [
  { id: 'all', label: 'All Opportunities' },
  { id: 'internship', label: 'Internships' },
  { id: 'job', label: 'Jobs' },
  { id: 'competition', label: 'Competitions' },
  { id: 'hackathon', label: 'Hackathons' },
];

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  bookmarkedIds,
  onToggleBookmark,
  onSelectOpportunity,
  selectedCategoryFilter = 'all',
}) => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [workTypeFilter, setWorkTypeFilter] = useState<string>('all');

  // Derive active tab from user selection or fallback to selectedCategoryFilter
  const activeTab =
    selectedTab !== 'all'
      ? selectedTab
      : selectedCategoryFilter && selectedCategoryFilter !== 'all'
      ? selectedCategoryFilter
      : 'all';

  const filteredList = ALL_OPPORTUNITIES.filter((item) => {
    const matchesTab =
      activeTab === 'all' ||
      item.category === activeTab ||
      item.category.includes(activeTab) ||
      activeTab.includes(item.category);
    const matchesWorkType =
      workTypeFilter === 'all' ||
      item.type.toLowerCase() === workTypeFilter.toLowerCase();
    return matchesTab && matchesWorkType;
  });

  return (
    <section
      id="opportunities"
      className="mx-auto w-full min-w-0 max-w-[980px] bg-white py-5 px-2 sm:px-4 font-[Arial,Helvetica,sans-serif] select-none"
    >
      {/* Section Header Matching Role-Based Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div className="relative min-w-0 pl-3.5 before:absolute before:inset-y-0 before:left-0 before:w-[4px] before:rounded-r-full before:bg-[#0073e6]">
          <h2 className="text-[21px] font-semibold leading-[1.2] text-[#383838] sm:text-[26px]">
            Explore Top Opportunities
          </h2>
          <p className="mt-0.5 text-[13px] font-normal leading-[20px] text-[#777] sm:text-[15px]">
            Handpicked roles and high-impact challenges from leading tech &amp; consulting giants.
          </p>
        </div>

        {/* Work Type Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
          {['all', 'Remote', 'Hybrid', 'On-site'].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setWorkTypeFilter(type)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                workTypeFilter === type
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {type === 'all' ? 'All Types' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Tabs Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 no-scrollbar">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#1c4980] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Opportunities */}
      {filteredList.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-500">
          <p className="text-sm font-semibold">No opportunities match this filter.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedTab('all');
              setWorkTypeFilter('all');
            }}
            className="mt-3 text-xs text-[#0073e6] font-bold hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredList.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opp={opp}
              isBookmarked={bookmarkedIds.has(opp.id)}
              onToggleBookmark={onToggleBookmark}
              onSelect={onSelectOpportunity}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default OpportunitiesSection;
