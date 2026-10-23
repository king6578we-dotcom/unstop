'use client';

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  GraduationCap, Briefcase, Trophy, ChevronsLeft, Plus, Puzzle,
  ChevronRight, ChevronDown, Video, BookOpen, Code, FileText, Brain, PartyPopper,
} from 'lucide-react';

const FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] focus-visible:ring-offset-2';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
}

function HomeIcon({ className, fill, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MockTestIcon({ className, fill, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill={fill || 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9M8 2v4m5-4v4M8 13h6m-6 4h5" />
      <path d="m19 2 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </svg>
  );
}

function MockInterviewIcon({ className, fill, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill={fill || 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 4h18v16h-5M8 20H3V4m4 3h10v9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M7 21v-1a5 5 0 0 1 10 0v1" />
    </svg>
  );
}

function MentorshipIcon({ className, fill, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill={fill || 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="6" r="4" />
      <path d="M5 19a7 7 0 0 1 14 0m-7-9-2 8 2 4 2-4-2-8Z" />
    </svg>
  );
}

function SparkleSquareIcon({ className, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="17" height="17" x="3.5" y="3.5" rx="3" />
      <path d="m12 7.5.8 2.5 2.5.8-2.5.8-.8 2.5-.8-2.5-2.5-.8 2.5-.8.8-2.5Z" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="7.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

function WorkshopIcon({ className, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 4h3.5v16H5zM5 8h2M5 12h3M5 16h2" />
      <path d="M14 4h3.5v12l-1.75 4L14 16z" />
    </svg>
  );
}

function PlaySquareIcon({ className, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="17" height="17" x="3.5" y="3.5" rx="3" />
      <polygon points="10 8.5 15.5 12 10 15.5 10 8.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BracesIcon({ className, ...props }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8 4H6a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2" />
    </svg>
  );
}

interface NavItemDef {
  label: string;
  icon: React.ComponentType<any>;
  hasChevron?: boolean;
}

const NAV_ITEMS: NavItemDef[] = [
  { label: 'Home', icon: HomeIcon },
  { label: 'Internships', icon: GraduationCap },
  { label: 'Jobs', icon: Briefcase },
  { label: 'Competitions', icon: Trophy },
  { label: 'Mock Tests', icon: MockTestIcon },
  { label: 'Mock Interview', icon: MockInterviewIcon },
  { label: 'Mentorship', icon: MentorshipIcon, hasChevron: true },
  { label: 'Prep Zone', icon: Puzzle, hasChevron: true },
];

export interface SubmenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

export const MENTORSHIP_SUBMENU: SubmenuItem[] = [
  { id: 'explore-mentorship', label: 'Explore Mentorship', icon: SparkleSquareIcon },
  { id: 'become-mentor', label: 'Become a Mentor', icon: SparkleSquareIcon },
];

export const PREP_ZONE_SUBMENU: SubmenuItem[] = [
  { id: 'courses', label: 'Courses', icon: SparkleSquareIcon },
  { id: 'scholarships', label: 'Scholarships', icon: GraduationCap },
  { id: 'workshops', label: 'Workshops', icon: WorkshopIcon },
  { id: 'practice', label: 'Practice', icon: Brain },
  { id: 'college-festivals', label: 'College Festivals', icon: PartyPopper },
  { id: 'resources', label: 'Resources', icon: PlaySquareIcon },
  { id: 'articles', label: 'Articles', icon: BookOpen },
  { id: '5d-prep', label: '5D Interview Prep', icon: Video },
  { id: '100-days-code', label: '100 Days to Code', icon: Code },
  { id: 'coding-conquest', label: 'Coding Conquest', icon: BracesIcon },
  { id: 'resume-builder', label: 'Resume Builder', icon: FileText },
];

function UnstopLogo() {
  return (
    <div role="img" aria-label="Unstop" className="flex items-center select-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
        alt="Unstop"
        className="h-7 w-auto object-contain"
      />
    </div>
  );
}

interface NavItemProps {
  label: string;
  icon: React.ComponentType<any>;
  isActive?: boolean;
  hasChevron?: boolean;
  isSubmenuOpen?: boolean;
  isExpanded?: boolean;
  isCollapsed?: boolean;
  badge?: string;
  submenuId?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: () => void;
}

function NavItem({
  label,
  icon: Icon,
  isActive = false,
  hasChevron = false,
  isSubmenuOpen = false,
  isExpanded = false,
  isCollapsed = false,
  badge,
  submenuId,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: NavItemProps) {
  const highlighted = isActive;
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title={isCollapsed ? label : undefined}
      aria-label={isCollapsed ? label : undefined}
      aria-current={isActive ? 'page' : undefined}
      aria-expanded={hasChevron ? (isExpanded || isSubmenuOpen) : undefined}
      aria-controls={isSubmenuOpen || isExpanded ? submenuId : undefined}
      className={`group flex h-[42px] shrink-0 items-center rounded-[14px] text-left transition-all duration-300 cursor-pointer overflow-hidden ${FOCUS} ${
        isCollapsed ? 'w-10 px-2.5 mx-auto justify-center' : 'w-full px-3.5'
      } ${
        highlighted
          ? 'bg-[#eaedf1] text-[#2d3748] font-medium shadow-2xs'
          : 'text-[#334155] hover:bg-[#eaedf1]/60 hover:text-slate-900'
      }`}
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 transition-colors ${
            highlighted && label.toLowerCase() === 'home'
              ? 'text-[#133c70] stroke-[2.2]'
              : highlighted
              ? 'text-[#0073e6] stroke-[2]'
              : 'text-[#334155] group-hover:text-slate-800 stroke-[1.8]'
          }`}
        />
      )}
      
      <div 
        className={`flex items-center whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          isCollapsed ? 'max-w-0 opacity-0' : 'max-w-[150px] opacity-100 ml-3'
        }`}
      >
        <span
          className={`min-w-0 flex-1 truncate text-[14.5px] leading-snug ${
            highlighted ? 'font-medium text-[#2d3748]' : 'font-normal text-[#334155]'
          }`}
        >
          {label}
        </span>
        {badge != null && (
          <span className="rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 ml-2">
            {badge}
          </span>
        )}
        {hasChevron && (
          isExpanded ? (
            <ChevronDown
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-slate-500 group-hover:text-slate-700 transition-transform duration-200 ml-2"
            />
          ) : (
            <ChevronRight
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ml-2"
            />
          )
        )}
      </div>
    </button>
  );
}

function PromoIcon({ isJob }: { isJob: boolean }) {
  return isJob ? (
    <svg aria-hidden="true" viewBox="0 0 28 28" className="h-7 w-7 shrink-0" fill="none">
      <path d="m17 17 8 8" stroke="#ff7900" strokeWidth="6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" fill="#0073e6" />
      <path d="m17 17 3 3" stroke="#174478" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 28 28" className="h-7 w-7 shrink-0" fill="none">
      <path d="m3 4 9 3-5 6L3 4Zm22 0-9 3 5 6 4-9Z" fill="#9775fa" />
      <path d="m11 6 3 3 3-3-3 9-3-9Z" fill="#6941e8" />
      <path d="m14 12-3 10 3 5 3-5-3-10Z" fill="#0073e6" />
    </svg>
  );
}

interface SidebarCardProps {
  title: string;
  description: string;
  variant?: 'job' | 'mentor';
  onClick?: () => void;
  isCollapsed?: boolean;
}

function SidebarCard({ title, description, variant = 'job', onClick, isCollapsed }: SidebarCardProps) {
  const isJob = variant === 'job';
  return (
    <button
      type="button"
      onClick={onClick}
      title={isCollapsed ? title : undefined}
      aria-label={isCollapsed ? title : undefined}
      className={`flex shrink-0 rounded-2xl border text-left transition-all ${FOCUS} ${
        isCollapsed ? 'mx-auto h-10 w-10 items-center justify-center p-0' : 'w-full items-center justify-between gap-2 p-3'
      } ${
        isJob
          ? 'border-[#d6e9ff] bg-[#f2f8ff] hover:bg-[#e6f2ff] hover:border-[#b8d8ff]'
          : 'border-[#ebe0ff] bg-[#f8f5ff] hover:bg-[#f0e8ff] hover:border-[#dbc7ff]'
      }`}
    >
      {!isCollapsed && (
        <span className="min-w-0 flex-1">
          <span className="block text-[12.5px] font-semibold leading-tight text-slate-800">{title}</span>
          <span className="mt-1 block text-[11px] font-normal leading-tight text-slate-500">{description}</span>
        </span>
      )}
      <PromoIcon isJob={isJob} />
    </button>
  );
}

interface SidebarSubmenuProps {
  id: string;
  type: string;
  anchorRef: React.RefObject<HTMLElement | null>;
  panelRef: React.RefObject<HTMLDivElement | null>;
  onSelect: (item: SubmenuItem) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// Portal positioning keeps the submenu outside the scrollable sidebar.
function SidebarSubmenu({ id, type, anchorRef, panelRef, onSelect, onMouseEnter, onMouseLeave }: SidebarSubmenuProps) {
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null);
  const items = type === 'Mentorship' ? MENTORSHIP_SUBMENU : PREP_ZONE_SUBMENU;

  useLayoutEffect(() => {
    const updatePosition = () => {
      const anchor = anchorRef.current;
      const panel = panelRef.current;
      if (!anchor || !panel) return;
      const rect = anchor.getBoundingClientRect();
      const width = panel.offsetWidth;
      const height = panel.offsetHeight;
      const left = rect.right + 12 + width <= window.innerWidth - 8
        ? rect.right + 12
        : Math.max(8, rect.left - width - 12);
      setPosition({
        left,
        top: Math.max(8, Math.min(rect.top, window.innerHeight - height - 8)),
      });
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [type, anchorRef, panelRef]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      id={id}
      ref={panelRef}
      role="group"
      aria-label={`${type} options`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed z-[60] max-h-[calc(100dvh-10px)] w-[230px] max-w-[calc(100vw-10px)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2.5 shadow-xl [font-family:Arial,Helvetica,sans-serif] before:absolute before:-left-3 before:top-0 before:bottom-0 before:w-3 before:content-['']"
      style={{ left: position?.left ?? 0, top: position?.top ?? 0, visibility: position ? 'visible' : 'hidden' }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            className={`flex min-h-9 w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-[13px] font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600 ${FOCUS}`}
          >
            <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-500" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>,
    document.body,
  );
}

export interface SidebarProps {
  activeNav?: string;
  setActiveNav?: (nav: string) => void;
  isCollapsed?: boolean;
  setIsCollapsed?: (collapsed: boolean) => void;
  onOpenPostModal?: () => void;
  onOpenMentorModal?: () => void;
  onSelectSubmenu?: (sub: any, parentLabel: string) => void;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export function Sidebar({
  activeNav,
  setActiveNav,
  isCollapsed,
  setIsCollapsed,
  onOpenPostModal,
  onOpenMentorModal,
  onSelectSubmenu,
  isMobileOpen,
  setIsMobileOpen,
}: SidebarProps) {
  const [localActiveNav, setLocalActiveNav] = useState('Home');
  const [localCollapsed, setLocalCollapsed] = useState(false);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [expandedNavs, setExpandedNavs] = useState<Record<string, boolean>>({});
  const sidebarRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const submenuId = useId();
  const selectedNav = activeNav ?? localActiveNav;
  
  // The sidebar is considered "collapsed" only if it's explicitly collapsed AND not currently being hovered
  const isExplicitlyCollapsed = isCollapsed ?? localCollapsed;
  const collapsed = isExplicitlyCollapsed && !isHoverExpanded;

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  useEffect(() => {
    if (!openSubmenu) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (target && !sidebarRef.current?.contains(target) && !panelRef.current?.contains(target)) {
        clearCloseTimeout();
        setOpenSubmenu(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        clearCloseTimeout();
        setOpenSubmenu(null);
        anchorRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openSubmenu]);

  const selectNav = (label: string) => {
    setLocalActiveNav(label);
    setActiveNav?.(label);
  };

  const toggleCollapsed = () => {
    clearCloseTimeout();
    setOpenSubmenu(null);
    setLocalCollapsed(!collapsed);
    setIsCollapsed?.(!collapsed);
  };

  const handleItemClick = (item: NavItemDef, event: React.MouseEvent<HTMLButtonElement>) => {
    if (collapsed) {
      setLocalCollapsed(false);
      setIsCollapsed?.(false);
    }

    selectNav(item.label);
    if (item.label.toLowerCase() === 'home') {
      const mainContainer = document.getElementById('main-scroll-container');
      if (mainContainer) {
        mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    if (item.hasChevron) {
      clearCloseTimeout();
      if (collapsed) {
        anchorRef.current = event.currentTarget;
        setOpenSubmenu((current) => (current === item.label ? null : item.label));
      } else {
        setOpenSubmenu(null);
        setExpandedNavs((prev) => ({
          ...prev,
          [item.label]: !prev[item.label],
        }));
      }
    } else {
      clearCloseTimeout();
      setOpenSubmenu(null);
    }
  };

  const handleItemMouseEnter = (item: NavItemDef, event: React.MouseEvent<HTMLButtonElement>) => {
    clearCloseTimeout();
    if (item.hasChevron) {
      if (!collapsed && expandedNavs[item.label]) {
        return;
      }
      anchorRef.current = event.currentTarget;
      setOpenSubmenu(item.label);
    } else {
      closeTimeoutRef.current = setTimeout(() => {
        setOpenSubmenu(null);
      }, 150);
    }
  };

  const handleItemMouseLeave = (item: NavItemDef) => {
    if (item.hasChevron) {
      clearCloseTimeout();
      closeTimeoutRef.current = setTimeout(() => {
        setOpenSubmenu(null);
      }, 200);
    }
  };

  const handleSubmenuMouseEnter = () => {
    clearCloseTimeout();
  };

  const handleSubmenuMouseLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 200);
  };

  const handleSubItemClick = (sub: SubmenuItem, parentLabel: string) => {
    selectNav(sub.label);
    if (sub.id === 'become-mentor') {
      onOpenMentorModal?.();
    }
    onSelectSubmenu?.(sub, parentLabel);
  };

  return (
    <>
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen?.(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-30 lg:hidden"
        />
      )}
      <aside
        ref={sidebarRef}
        aria-label="Main sidebar"
        onMouseEnter={() => {
          if (isExplicitlyCollapsed) setIsHoverExpanded(true);
        }}
        onMouseLeave={() => {
          if (isExplicitlyCollapsed) setIsHoverExpanded(false);
        }}
        className={`fixed bottom-[5px] left-[5px] top-[5px] z-40 flex flex-col rounded-[14px] border border-[#cee2f7] bg-[#f0f6fd] shadow-[0_2px_12px_rgba(28,73,128,0.05)] transition-all duration-300 motion-reduce:transition-none ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'w-[64px]' : 'w-[220px]'}`}
      >
        {/* Top Header with Logo and Collapse Toggle */}
        <div className="flex h-[64px] shrink-0 items-center rounded-t-[14px] relative px-3.5">
          {/* Collapsed 'un' Logo button */}
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label="Expand sidebar"
            title="Expand sidebar"
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1c4980] text-sm font-black text-white transition-all duration-300 ${
              collapsed ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
            } ${FOCUS}`}
          >
            un
          </button>
          
          {/* Expanded Logo and Toggle */}
          <div className={`flex items-center justify-between w-full transition-all duration-300 ${
            collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
          }`}>
            <UnstopLogo />
            <button
              type="button"
              onClick={toggleCollapsed}
              aria-label="Collapse sidebar"
              className={`rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors ${FOCUS}`}
            >
              <ChevronsLeft aria-hidden="true" className="h-4 w-4 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* "+ Post" Button - Inner rim glow design without outer shadow, matching user screenshot */}
        <div className={collapsed ? 'px-2 mb-2.5 transition-all duration-300' : 'px-3.5 mb-2.5 transition-all duration-300'}>
          <button
            type="button"
            onClick={(e) => {
              if (collapsed) {
                setLocalCollapsed(false);
                setIsCollapsed?.(false);
              } else {
                onOpenPostModal?.();
              }
            }}
            aria-label="Post opportunity"
            title={collapsed ? 'Post opportunity' : undefined}
            className={`flex h-[42px] shrink-0 items-center justify-center rounded-full border border-[#c4b5fd] bg-linear-to-b from-[#f5effe] via-white to-[#f5effe] text-[#3730a3] font-bold text-[15.5px] shadow-[inset_0_2px_5px_rgba(168,85,247,0.22),inset_0_-2px_5px_rgba(168,85,247,0.22)] hover:from-[#efe4fe] hover:to-[#efe4fe] transition-all duration-300 active:scale-98 cursor-pointer overflow-hidden ${FOCUS} ${
              collapsed ? 'mx-auto w-10 px-0' : 'w-full px-4 gap-2'
            }`}
          >
            <Plus aria-hidden="true" className="h-4.5 w-4.5 shrink-0 stroke-[2.8] text-[#3730a3]" />
            <div className={`flex items-center whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? 'max-w-0 opacity-0' : 'max-w-[100px] opacity-100'}`}>
              <span className="tracking-tight">Post</span>
            </div>
          </button>
        </div>

        {/* Scrollable Nav Items */}
        <nav aria-label="Main navigation" className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-2.5 py-0.5">
          {NAV_ITEMS.map((item) => {
            const isExpanded = !collapsed && !!expandedNavs[item.label];
            const subItems =
              item.label === 'Mentorship'
                ? MENTORSHIP_SUBMENU
                : item.label === 'Prep Zone'
                ? PREP_ZONE_SUBMENU
                : null;

            return (
              <React.Fragment key={item.label}>
                <NavItem
                  {...item}
                  isActive={selectedNav?.toLowerCase() === item.label.toLowerCase()}
                  isSubmenuOpen={openSubmenu === item.label}
                  isExpanded={isExpanded}
                  isCollapsed={collapsed}
                  submenuId={`${submenuId}-${item.label}`}
                  onClick={(event) => handleItemClick(item, event)}
                  onMouseEnter={(event) => handleItemMouseEnter(item, event)}
                  onMouseLeave={() => handleItemMouseLeave(item)}
                />

                {/* Inline nested options list */}
                {isExpanded && subItems && (
                  <div
                    id={`${submenuId}-${item.label}`}
                    className="relative ml-[21px] flex flex-col gap-0.5 border-l border-slate-300/80 my-0.5 pl-3 transition-all animate-in fade-in duration-200"
                  >
                    {subItems.map((sub) => {
                      const SubIcon = sub.icon;
                      const isSubActive = selectedNav === sub.label || selectedNav === sub.id;
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => handleSubItemClick(sub, item.label)}
                          className={`group flex h-[34px] w-full items-center gap-2.5 rounded-lg px-2 text-left transition-colors ${FOCUS} ${
                            isSubActive
                              ? 'bg-[#eaedf0] text-slate-900 font-semibold shadow-xs'
                              : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'
                          }`}
                        >
                          {SubIcon && (
                            <SubIcon
                              aria-hidden="true"
                              className={`h-4 w-4 shrink-0 transition-colors ${
                                isSubActive ? 'text-[#0073e6]' : 'text-slate-500 group-hover:text-slate-700'
                              }`}
                            />
                          )}
                          <span className="truncate text-[13.5px] leading-snug">{sub.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
            );
          })}

          {/* Floating submenu for hover preview when NOT expanded inline */}
          {openSubmenu && (!expandedNavs[openSubmenu] || collapsed) && (
            <SidebarSubmenu
              id={submenuId}
              type={openSubmenu}
              anchorRef={anchorRef}
              panelRef={panelRef}
              onMouseEnter={handleSubmenuMouseEnter}
              onMouseLeave={handleSubmenuMouseLeave}
              onSelect={(item) => {
                clearCloseTimeout();
                selectNav(openSubmenu);
                setOpenSubmenu(null);
                anchorRef.current?.focus();
                if (item.id === 'become-mentor') onOpenMentorModal?.();
                onSelectSubmenu?.(item, openSubmenu);
              }}
            />
          )}
        </nav>

    

        {/* Bottom Promo Cards */}
        <div className="mt-auto flex shrink-0 flex-col gap-2 p-3 pt-1">
          <SidebarCard
            variant="job"
            title="Post a Job or Internship"
            description="Hire through jobs & challenges."
            isCollapsed={collapsed}
            onClick={onOpenPostModal}
          />
          <SidebarCard
            variant="mentor"
            title="Become a Mentor"
            description="Shape the next generation and build your legacy."
            isCollapsed={collapsed}
            onClick={onOpenMentorModal}
          />
        </div>

        {/* Straight Light Blue Line at the very bottom of sidebar */}
        {/* <div className="w-full h-[1.5px] bg-[#d2e4f7] shrink-0 rounded-b-[16px]" /> */}
      </aside>
    </>
  );
}

export default Sidebar;
