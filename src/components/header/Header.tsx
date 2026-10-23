'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  LogIn,
  Menu,
  X,
  ChevronsRight,
  Briefcase,
  Trophy,
  Puzzle,
  Terminal,
  Sparkles,
  GraduationCap,
  Mic,
  PenTool,
  PartyPopper,
  UserCheck,
  BookOpen,
} from 'lucide-react';
const FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] focus-visible:ring-offset-2';

function UnstopLogo() {
  return (
    <img
      src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
      alt="Unstop"
      className="h-7 w-auto object-contain"
    />
  );
}

function BusinessIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] text-[#1c4980]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="16" rx="3" />
        <path d="M8 5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[7.5px] font-black text-[#1c4980] pt-1">
        un
      </span>
    </div>
  );
}

// Search category icons
// Exact Search category icons in deep navy #1c4980 matching photo
const JobsDropdownIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-[#1c4980]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <path d="M12 11v2" />
  </svg>
);

const InternshipDropdownIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-[#1c4980]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
    <GraduationCap className="w-3 h-3 text-[#1c4980] absolute -bottom-0.5 -right-1 bg-[#f0f4f9] rounded-full" strokeWidth={2.2} />
  </div>
);

const CompetitionsDropdownIcon = () => (
  <Trophy className="w-[22px] h-[22px] text-[#1c4980]" strokeWidth={1.8} />
);

const QuizzesDropdownIcon = () => (
  <Puzzle className="w-[22px] h-[22px] text-[#1c4980]" strokeWidth={1.8} />
);

const HackathonsDropdownIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-[#1c4980]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m8 10 2.5 2.5L8 15" />
    <path d="M12.5 15h3.5" />
  </svg>
);

const CulturalEventsDropdownIcon = () => (
  <div className="relative flex items-center justify-center">
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-[#1c4980]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11.5" cy="12" r="7.5" />
      <path d="M11.5 4.5a11 11 0 0 0 0 15" />
      <path d="M11.5 4.5a11 11 0 0 1 0 15" />
      <path d="M4 12h15" />
    </svg>
    <Sparkles className="w-3.5 h-3.5 text-[#1c4980] absolute -top-1 -right-1" strokeWidth={2} />
  </div>
);

const ScholarshipsDropdownIcon = () => (
  <GraduationCap className="w-[22px] h-[22px] text-[#1c4980]" strokeWidth={1.8} />
);

const ConferencesDropdownIcon = () => (
  <Mic className="w-[22px] h-[22px] text-[#1c4980]" strokeWidth={1.8} />
);

const WorkshopsDropdownIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-[#1c4980]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v12l3 3 3-3V3H6Z" />
    <path d="M15 3v12l2.5 3 2.5-3V3H15Z" />
  </svg>
);

const CollegeFestivalsDropdownIcon = () => (
  <PartyPopper className="w-[22px] h-[22px] text-[#1c4980]" strokeWidth={1.8} />
);

const MentorsDropdownIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-[22px] h-[22px] text-[#1c4980]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="3.5" />
    <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    <path d="M12 11v4" />
    <path d="m10.5 15 1.5 3 1.5-3" />
  </svg>
);

const ArticlesDropdownIcon = () => (
  <BookOpen className="w-[22px] h-[22px] text-[#1c4980]" strokeWidth={1.8} />
);

interface SearchCategoryItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  multiLine?: string[];
}

interface SearchDropdownProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: any) => void;
}

function SearchDropdown({ id, isOpen, onClose, onSelectItem }: SearchDropdownProps) {
  if (!isOpen) return null;

  const exploreItems: SearchCategoryItem[] = [
    { id: 'jobs', label: 'Jobs', icon: <JobsDropdownIcon /> },
    { id: 'internships', label: 'Internships', icon: <InternshipDropdownIcon /> },
    { id: 'competitions', label: 'Competitions', icon: <CompetitionsDropdownIcon /> },
    { id: 'quizzes', label: 'Quizzes', icon: <QuizzesDropdownIcon /> },
    { id: 'hackathons', label: 'Hackathons', icon: <HackathonsDropdownIcon /> },
    { id: 'cultural-events', label: 'Cultural Events', icon: <CulturalEventsDropdownIcon />, multiLine: ['Cultural', 'Events'] },
    { id: 'scholarships', label: 'Scholarships', icon: <ScholarshipsDropdownIcon /> },
    { id: 'conferences', label: 'Conferences', icon: <ConferencesDropdownIcon /> },
    { id: 'workshops', label: 'Workshops', icon: <WorkshopsDropdownIcon /> },
    { id: 'college-festivals', label: 'College Festivals', icon: <CollegeFestivalsDropdownIcon />, multiLine: ['College', 'Festivals'] },
    { id: 'mentors', label: 'Mentors', icon: <MentorsDropdownIcon /> },
    { id: 'articles', label: 'Articles', icon: <ArticlesDropdownIcon /> },
  ];

  return (
    <div
      id={id}
      role="group"
      aria-label="Explore search categories"
      className="absolute left-0 top-full z-50 mt-2.5 w-[540px] sm:w-[580px] md:w-[600px] max-w-[calc(100vw-32px)] overflow-hidden rounded-[24px] border border-slate-200/90 bg-white p-5 shadow-[0_12px_36px_rgba(0,0,0,0.12)]"
      onMouseDown={(e) => e.stopPropagation()}
    >
      {/* "Explore" Header matching photo */}
      <h3 className="text-[13px] font-medium text-slate-700 tracking-tight mb-4">
        Explore
      </h3>

      {/* 6x2 Icon Grid matching photo */}
      <div className="grid grid-cols-6 gap-y-4 gap-x-2">
        {exploreItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              if (onSelectItem) onSelectItem(item);
              if (onClose) onClose();
            }}
            className={`group flex cursor-pointer flex-col items-center gap-2 rounded-lg text-center ${FOCUS}`}
          >
            {/* Soft blue-grey circular icon background matching photo */}
            <div className="w-[48px] h-[48px] rounded-full bg-[#f0f4f9] group-hover:bg-[#e2eef9] flex items-center justify-center transition-colors">
              {item.icon}
            </div>

            {/* Label in 12px font-medium text-slate-800 */}
            <span className="text-[11.5px] sm:text-[12px] font-medium text-slate-800 group-hover:text-[#1c4980] transition-colors leading-[1.25] text-center">
              {item.multiLine ? (
                <>
                  {item.multiLine[0]}
                  <br />
                  {item.multiLine[1]}
                </>
              ) : (
                item.label
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export interface HeaderProps {
  searchQuery?: string;
  setSearchQuery?: (val: string) => void;
  onOpenLoginModal?: () => void;
  onOpenAuthModal?: () => void;
  onOpenBusinessModal?: () => void;
  onOpenPostModal?: () => void;
  isSidebarCollapsed?: boolean;
  setIsSidebarCollapsed?: (val: boolean) => void;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (val: boolean) => void;
  onToggleSidebar?: () => void;
  onSelectSearchCategory?: (cat: any) => void;
  onSelectOpportunity?: (item: any) => void;
  onSelectExploreCategory?: (catId: string) => void;
  onClearSearch?: () => void;
  user?: { name: string; email: string } | null;
  onLogout?: () => void;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  onOpenLoginModal,
  onOpenAuthModal,
  onOpenBusinessModal,
  onOpenPostModal,
  isSidebarCollapsed = false,
  onToggleSidebar,
  onSelectSearchCategory,
  onClearSearch,
  user,
  onLogout,
}: HeaderProps) {
  const router = useRouter();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [localQuery, setLocalQuery] = useState('');
  const query = searchQuery ?? localQuery;
  const dropdownId = React.useId();
  const updateQuery = (value: string) => {
    setLocalQuery(value);
    setSearchQuery?.(value);
  };
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const businessMenuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isBusinessMenuOpen, setIsBusinessMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      if (businessMenuRef.current && !businessMenuRef.current.contains(event.target as Node)) {
        setIsBusinessMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClear = (event?: React.SyntheticEvent) => {
    event?.stopPropagation();
    updateQuery('');
    if (onClearSearch) onClearSearch();
    if (inputRef.current) inputRef.current.focus();
  };

  const handleSelectItem = (item: any) => {
    const label = item?.label || item?.name || item;
    updateQuery(label);
    if (onSelectSearchCategory) onSelectSearchCategory(item);
    setIsSearchFocused(false);
  };

  return (
    <div className="sticky top-0 z-30">
      <header className="h-[58px] rounded-t-[14px] border-b border-slate-100 bg-white px-4 sm:px-6 md:px-8">
        <div className="w-full h-full flex items-center justify-between gap-2 sm:gap-4">
        {/* Left section: Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile menu & logo */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleSidebar}
              type="button"
              aria-label="Toggle navigation"
              className={`rounded-lg p-1.5 text-[#777777] hover:bg-slate-100 ${FOCUS}`}
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
            <UnstopLogo />
          </div>

          {isSidebarCollapsed && (
            <button
              onClick={onToggleSidebar}
              type="button"
              title="Expand sidebar"
              aria-label="Expand sidebar"
              className={`hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#888888] transition-colors hover:bg-slate-100 hover:text-[#444444] md:flex ${FOCUS}`}
            >
              <ChevronsRight aria-hidden="true" className="h-[18px] w-[18px]" />
            </button>
          )}
        </div>

        {/* Center search field matching user screenshot */}
        <div
          ref={searchContainerRef}
          className="flex-1 max-w-[460px] mx-2 sm:mx-auto"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              handleClear(event);
              setIsSearchFocused(false);
            }
          }}
        >
          <div
            className={`flex h-[42px] w-full items-center rounded-full bg-white transition-all ${
              isSearchFocused
                ? 'border-2 border-[#0073e6]'
                : 'border border-[#d0d5dd] hover:border-[#98a2b3]'
            }`}
          >
            <Search aria-hidden="true" strokeWidth={2.4} className="ml-3.5 h-[17px] w-[17px] shrink-0 text-[#2d3748]" />
            <input
              ref={inputRef}
              type="text"
              aria-label="Search opportunities"
              aria-expanded={isSearchFocused}
              aria-controls={isSearchFocused ? dropdownId : undefined}
              autoComplete="off"
              placeholder="Search.."
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onClick={() => setIsSearchFocused(true)}
              className="h-full min-w-0 flex-1 rounded-full border-0 bg-transparent pl-2.5 pr-3 text-[14.5px] font-normal text-[#1e293b] outline-none placeholder:text-[#8c9ba5] focus:ring-0"
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                title="Clear search"
                aria-label="Clear search"
                className={`mr-2.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 ${FOCUS}`}
              >
                <X aria-hidden="true" className="h-3 w-3" />
              </button>
            )}
          </div>

          <SearchDropdown
            id={dropdownId}
            isOpen={isSearchFocused}
            onClose={() => setIsSearchFocused(false)}
            onSelectItem={handleSelectItem}
          />
        </div>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center justify-end gap-2.5">
          {/* For Business with Popover Menu */}
          <div ref={businessMenuRef} className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setIsBusinessMenuOpen(!isBusinessMenuOpen)}
              onMouseEnter={() => setIsBusinessMenuOpen(true)}
              className={`h-[36px] shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#80baff] bg-[#deedfc] px-3.5 text-[13px] font-normal text-[#1c4980] transition-colors hover:bg-[#cfe5fc] flex cursor-pointer ${FOCUS}`}
            >
              <BusinessIcon />
              <span>For <span className="font-semibold">Business</span></span>
            </button>

            {/* Business Feature Preview Popover */}
            {isBusinessMenuOpen && (
              <div
                onMouseLeave={() => setIsBusinessMenuOpen(false)}
                className="absolute right-0 top-full mt-2 w-[340px] rounded-2xl bg-white p-4 shadow-2xl border border-slate-200 z-50 animate-fadeIn"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0073e6] animate-pulse" />
                    <span className="text-xs font-bold text-[#1c4980]">Unstop for Business</span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    AI Agentic Suite
                  </span>
                </div>

                <p className="text-xs font-bold text-slate-800 leading-snug">
                  AI-Powered Hiring Platform &amp; Recruitment Software
                </p>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Streamline sourcing to selection with 7 autonomous recruiting agents &amp; 32M+ verified profiles.
                </p>

                {/* Agent chips */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {['AI Sourcing', 'AI Screening', 'AI Calling', 'AI Assessment', 'AI Interview'].map((agent, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 font-medium text-slate-700">
                      {agent}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsBusinessMenuOpen(false);
                      const el = document.getElementById('unstop-business');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        router.push('/business');
                      }
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#0073e6] hover:bg-[#005fb8] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>⚡ View AI Hiring Section</span>
                  </button>

                  <Link
                    href="/business"
                    onClick={() => setIsBusinessMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 transition-colors text-center"
                  >
                    <span>Open Business Portal (/business)</span>
                    <span className="text-[10px]">↗</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-[36px] shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#0073e6] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#0062c4] ${FOCUS}`}
          >
            <LogIn aria-hidden="true" strokeWidth={2.2} className="h-4 w-4" />
            <span>Login</span>
          </a>
        </div>
        </div>
      </header>
    </div>
  );
}
