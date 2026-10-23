'use client';

import React from 'react';
import { Zap } from 'lucide-react';
import { CATEGORIES } from '@/data/mockData';
import { CategoryItem } from '@/types';

/* ==========================================================================
   1. HERO HEADER COMPONENT (Matching User Screenshot Exactly)
   ========================================================================== */

export const HeroHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1 pb-4 select-none">
      {/* Main Title: Unlock Your Career! */}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-[40px] font-black tracking-tight text-slate-900 leading-tight">
          Unlock Your{' '}
          <span className="text-[#0073e6]">Career!</span>
        </h1>
      </div>

      {/* Access to 32M+ profiles pill badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f3e8ff] border border-purple-200/80 shadow-2xs shrink-0 select-none">
        <Zap className="w-3.5 h-3.5 fill-[#7c3aed] text-[#7c3aed]" />
        <span className="text-[12.5px] sm:text-[13px] text-[#6b21a8] font-medium">
          Access to <strong className="font-bold text-[#581c87]">32M+</strong> profiles
        </span>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. CATEGORY CARDS COMPONENT (Same to same like Photo)
   ========================================================================== */

export interface CategoryCardsProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  // Render exact 3D vector illustration for each card matching the photo
  const render3DIcon = (type: CategoryItem['iconType']) => {
    switch (type) {
      /* ----------------------------------------------------------------- */
      /* 1. Internships: Briefcase + Papers + 3 Gold Coins                  */
      /* ----------------------------------------------------------------- */
      case 'internships':
        return (
          <div className="relative w-[76px] h-[58px] flex items-center justify-center">
            {/* White Documents with blue tabs behind briefcase */}
            <div className="absolute left-1 bottom-2 w-7 h-9 bg-white rounded-md border border-slate-200 shadow-xs rotate-[-8deg] flex flex-col p-1 gap-1">
              <div className="w-3.5 h-1 bg-blue-400 rounded-full" />
              <div className="w-4 h-0.5 bg-slate-200 rounded" />
              <div className="w-3.5 h-0.5 bg-slate-200 rounded" />
              <div className="w-4 h-0.5 bg-slate-200 rounded" />
              {/* Blue binder tab */}
              <div className="absolute -left-1 top-1.5 w-1.5 h-2.5 bg-blue-500 rounded-r-xs" />
            </div>

            {/* 3D Brown Leather Briefcase */}
            <div className="relative left-[-2px] bottom-0 w-[42px] h-[32px] bg-gradient-to-b from-[#d97706] via-[#b45309] to-[#78350f] rounded-lg shadow-md border-t border-amber-300 flex flex-col items-center justify-center">
              {/* Leather handle */}
              <div className="absolute -top-2 w-4 h-2 rounded-t-md border-2 border-[#92400e] bg-amber-900/30" />
              {/* Center gold lock */}
              <div className="w-3 h-1.5 bg-gradient-to-b from-amber-200 to-amber-400 rounded-xs shadow-inner border border-amber-500 flex items-center justify-center">
                <div className="w-1 h-0.5 bg-amber-800 rounded-full" />
              </div>
              {/* Stitch line */}
              <div className="absolute bottom-1 inset-x-2 h-0.5 bg-amber-950/25" />
            </div>

            {/* Stack of 3 Gold Coins on the right */}
            <div className="absolute right-1 bottom-0 flex flex-col items-center">
              {/* Top Coin */}
              <div className="w-4.5 h-2.5 rounded-full bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 border border-amber-500 shadow-xs flex items-center justify-center">
                <div className="w-2.5 h-1 rounded-full border border-amber-400/80" />
              </div>
              {/* Middle Coin */}
              <div className="-mt-1.5 w-4.5 h-2.5 rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 border border-amber-600 shadow-xs flex items-center justify-center">
                <div className="w-2.5 h-1 rounded-full border border-amber-500/80" />
              </div>
              {/* Bottom Coin */}
              <div className="-mt-1.5 w-4.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 border border-amber-700 shadow-xs" />
            </div>
          </div>
        );

      /* ----------------------------------------------------------------- */
      /* 2. Jobs: Purple/Navy Briefcase + Yellow Magnifying Glass           */
      /* ----------------------------------------------------------------- */
      case 'jobs':
        return (
          <div className="relative w-[76px] h-[58px] flex items-center justify-center">
            {/* 3D Modern Briefcase */}
            <div className="relative w-[44px] h-[34px] flex flex-col items-center shadow-md rounded-lg overflow-hidden">
              {/* Briefcase Handle */}
              <div className="absolute -top-2 w-4 h-2 rounded-t-md border-2 border-indigo-700 bg-indigo-950/40 z-10" />
              {/* Top Purple Flap */}
              <div className="w-full h-[15px] bg-gradient-to-b from-[#818cf8] via-[#6366f1] to-[#4f46e5] border-t border-indigo-200 relative flex items-center justify-center">
                {/* Silver latch */}
                <div className="absolute bottom-0 w-3 h-1 bg-gradient-to-b from-white to-slate-300 rounded-b-xs shadow-xs" />
              </div>
              {/* Body (Dark Slate Navy) */}
              <div className="w-full flex-1 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] border-t border-slate-700" />
            </div>

            {/* Large Yellow Magnifying Glass leaning on right */}
            <div className="absolute right-2 -bottom-1 flex flex-col items-center rotate-[-30deg] z-20 filter drop-shadow-md">
              {/* Lens Frame */}
              <div className="w-6 h-6 rounded-full border-[3px] border-[#f59e0b] bg-gradient-to-br from-sky-200/90 via-sky-400/60 to-blue-500/80 p-0.5 flex items-center justify-center shadow-inner">
                {/* Light reflection glare */}
                <div className="w-2 h-1 rounded-t-full bg-white/90 rotate-[-45deg] -mt-1 -ml-1" />
              </div>
              {/* Handle */}
              <div className="-mt-0.5 w-1.5 h-3.5 rounded-b-sm bg-gradient-to-b from-[#d97706] to-[#b45309] border border-amber-700 shadow-xs" />
            </div>
          </div>
        );

      /* ----------------------------------------------------------------- */
      /* 3. Competitions: 3D Gold Trophy on round black pedestal            */
      /* ----------------------------------------------------------------- */
      case 'competitions':
        return (
          <div className="relative w-[76px] h-[58px] flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              {/* Trophy Cup */}
              <div className="relative w-[32px] h-[26px] bg-gradient-to-b from-[#fef08a] via-[#f59e0b] to-[#b45309] rounded-b-2xl border-t-2 border-yellow-200 shadow-md flex items-center justify-center">
                {/* Left Handle */}
                <div className="absolute -left-2 top-0.5 w-2.5 h-4.5 rounded-l-full border-2 border-[#f59e0b] shadow-xs" />
                {/* Right Handle */}
                <div className="absolute -right-2 top-0.5 w-2.5 h-4.5 rounded-r-full border-2 border-[#f59e0b] shadow-xs" />
                {/* Star emboss on cup */}
                <span className="text-amber-200 text-[10px] font-black drop-shadow-xs">★</span>
                {/* Gold highlight shine */}
                <div className="absolute left-1 top-0.5 w-1 h-4 rounded-full bg-white/40" />
              </div>

              {/* Trophy Stem */}
              <div className="w-2 h-2.5 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 shadow-inner" />

              {/* Red ring wrap */}
              <div className="w-6 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 rounded-xs shadow-xs" />

              {/* Round Black Pedestal */}
              <div className="w-8 h-2.5 rounded-b-sm bg-gradient-to-b from-slate-900 via-black to-slate-950 border-t border-slate-700 shadow-md" />
            </div>
          </div>
        );

      /* ----------------------------------------------------------------- */
      /* 4. Mock Tests: Blue booklet + Pencil + Netflix N + Google G logos */
      /* ----------------------------------------------------------------- */
      case 'mock-tests':
        return (
          <div className="relative w-[76px] h-[58px] flex items-center justify-center">
            {/* Sparkles on top-left matching photo */}
            <div className="absolute -top-1 left-1 text-indigo-500 font-bold text-xs animate-pulse">
              ✨
            </div>

            {/* Blue Test Booklet */}
            <div className="relative w-[34px] h-[40px] rounded-lg bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] to-[#1d4ed8] p-1 shadow-md border-t border-blue-200 flex flex-col justify-between rotate-[-4deg]">
              {/* Inner white paper with lines */}
              <div className="w-full h-full rounded bg-white p-1 flex flex-col gap-1 shadow-xs">
                <div className="w-3.5 h-0.5 rounded-full bg-blue-300" />
                <div className="w-4 h-0.5 rounded bg-slate-200" />
                <div className="w-3.5 h-0.5 rounded bg-slate-200" />
                <div className="w-4 h-0.5 rounded bg-slate-200" />
              </div>
            </div>

            {/* Pencil angled across */}
            <div className="absolute left-1 bottom-0 flex flex-col items-center rotate-[-40deg] z-20 filter drop-shadow-sm">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-t-xs" />
              <div className="w-1.5 h-6 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500" />
              <div className="w-0 h-0 border-x-[3px] border-x-transparent border-t-[5px] border-t-amber-800" />
              <div className="-mt-1 w-0.5 h-1 bg-slate-900 rounded-b-full" />
            </div>

            {/* Netflix Logo circular badge (top right) */}
            <div className="absolute right-2 top-0.5 w-4.5 h-4.5 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-20">
              <span className="text-[8.5px] font-black text-[#e50914] leading-none">N</span>
            </div>

            {/* Google Logo circular badge (bottom right) */}
            <div className="absolute right-1 bottom-1 w-4.5 h-4.5 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-20">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"/>
              </svg>
            </div>
          </div>
        );

      /* ----------------------------------------------------------------- */
      /* 5. Mock Interviews: Open Laptop + Two Video Avatars + Sparkle     */
      /* ----------------------------------------------------------------- */
      case 'mock-interviews':
        return (
          <div className="relative w-[76px] h-[58px] flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              {/* Laptop Screen */}
              <div className="relative w-[44px] h-[30px] rounded-t-md bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] p-1 border-2 border-indigo-400/80 shadow-md flex items-center justify-center gap-1.5">
                {/* Left video call circle (Boy avatar in purple ring) */}
                <div className="relative w-4.5 h-4.5 rounded-full overflow-hidden border border-pink-300 ring-1 ring-purple-400 bg-pink-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64" alt="" className="w-full h-full object-cover" />
                </div>

                {/* Sparkle in between */}
                <span className="text-[7.5px] text-yellow-300 font-bold animate-pulse">✦</span>

                {/* Right video call circle (Girl avatar in blue ring) */}
                <div className="relative w-4.5 h-4.5 rounded-full overflow-hidden border border-cyan-300 ring-1 ring-blue-400 bg-blue-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64" alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Laptop Base & Trackpad */}
              <div className="relative w-[52px] h-[4px] rounded-b-md bg-gradient-to-b from-slate-400 via-slate-300 to-slate-500 shadow-md flex justify-center items-center">
                <div className="w-3.5 h-1 bg-slate-400 rounded-b-xs" />
              </div>
            </div>
          </div>
        );

      /* ----------------------------------------------------------------- */
      /* 6. Hackathons: 3D Code Window with </> + Circuit Cards            */
      /* ----------------------------------------------------------------- */
      case 'hackathons':
        return (
          <div className="relative w-[76px] h-[58px] flex items-center justify-center">
            {/* Left floating circuit card */}
            <div className="absolute -left-1 bottom-2.5 w-4.5 h-6.5 rounded bg-gradient-to-br from-indigo-900 to-slate-900 border border-cyan-400/60 shadow-xs flex flex-col p-0.5 gap-0.5 rotate-[-12deg]">
              <div className="w-2.5 h-0.5 bg-cyan-400 rounded" />
              <div className="w-2 h-0.5 bg-pink-400 rounded" />
              <div className="w-2.5 h-0.5 bg-cyan-400 rounded" />
            </div>

            {/* Main 3D Browser/IDE window */}
            <div className="relative z-10 w-[40px] h-[30px] rounded-lg bg-gradient-to-b from-[#1e1e38] via-[#0f172a] to-[#020617] border border-indigo-400/80 shadow-md flex flex-col overflow-hidden">
              {/* Title bar with dots */}
              <div className="w-full h-2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-1 flex items-center gap-0.5">
                <span className="w-0.5 h-0.5 rounded-full bg-rose-300" />
                <span className="w-0.5 h-0.5 rounded-full bg-amber-300" />
                <span className="w-0.5 h-0.5 rounded-full bg-emerald-300" />
              </div>
              {/* Code bracket symbol in center */}
              <div className="flex-1 flex items-center justify-center">
                <span className="text-white font-mono text-[11px] font-black tracking-tight drop-shadow-xs">
                  &lt;/&gt;
                </span>
              </div>
            </div>

            {/* Right floating code card */}
            <div className="absolute -right-1 bottom-2 w-4.5 h-5.5 rounded bg-gradient-to-br from-blue-900 to-indigo-950 border border-blue-400/60 shadow-xs flex flex-col p-0.5 gap-0.5 rotate-[15deg]">
              <div className="w-2.5 h-0.5 bg-blue-300 rounded" />
              <div className="w-2 h-0.5 bg-emerald-400 rounded" />
            </div>
          </div>
        );

      /* ----------------------------------------------------------------- */
      /* 7. Mentorships: Avatars Cluster + ⭐ 5 Badge                       */
      /* ----------------------------------------------------------------- */
      case 'mentorships':
        return (
          <div className="relative w-[76px] h-[58px] flex items-center justify-center">
            {/* Avatars Cluster matching photo */}
            <div className="relative w-[48px] h-[38px] flex items-center justify-center">
              {/* Center top avatar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5.5 h-5.5 rounded-full border-2 border-amber-300 bg-amber-100 overflow-hidden shadow-xs z-10">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Left avatar */}
              <div className="absolute left-0 bottom-1 w-4.5 h-4.5 rounded-full border-2 border-blue-400 bg-blue-100 overflow-hidden shadow-xs">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Right avatar */}
              <div className="absolute right-0 bottom-1 w-4.5 h-4.5 rounded-full border-2 border-purple-400 bg-purple-100 overflow-hidden shadow-xs">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Far top right avatar */}
              <div className="absolute right-0.5 -top-1 w-3.5 h-3.5 rounded-full border border-amber-400 bg-yellow-200 overflow-hidden shadow-2xs">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Bottom tiny avatars */}
              <div className="absolute left-2.5 -bottom-1 w-3.5 h-3.5 rounded-full border border-rose-300 bg-rose-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute right-2.5 -bottom-1 w-3.5 h-3.5 rounded-full border border-emerald-300 bg-emerald-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64" alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* ⭐ 5 Star Rating Badge on the left */}
            <div className="absolute -left-1 bottom-1 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-white border border-amber-300 shadow-md z-20">
              <span className="text-amber-400 text-[9.5px]">★</span>
              <span className="text-[9.5px] font-black text-slate-800 leading-none">5</span>
            </div>
          </div>
        );

      /* ----------------------------------------------------------------- */
      /* 8. Prep Zone / Practice (Partial on right in photo)               */
      /* ----------------------------------------------------------------- */
      default:
        return (
          <div className="relative w-[76px] h-[58px] flex items-center justify-center">
            {/* Sparkles on top left */}
            <div className="absolute -top-1 left-1 text-indigo-500 font-bold text-xs animate-pulse">
              ✨
            </div>
            {/* 3D Target / Brain / Practice Box */}
            <div className="relative w-[38px] h-[34px] rounded-lg bg-gradient-to-br from-violet-500 via-indigo-600 to-purple-700 border border-violet-300 shadow-md flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                <span className="text-white text-xs">🎯</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full select-none overflow-x-auto no-scrollbar pb-1">
      {/* Cards Row matching the uploaded user photo */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2.5 sm:gap-3 min-w-[720px] md:min-w-0">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center justify-between pt-3.5 pb-2.5 px-2 rounded-[22px] bg-gradient-to-b from-[#e8f2fe] via-[#f0f6ff] to-[#f8fbff] border transition-colors duration-200 cursor-pointer text-center group hover:bg-[#e4effd] hover:border-blue-300 h-[138px] sm:h-[148px] ${
                isSelected
                  ? 'border-[#0073e6] ring-2 ring-blue-100 shadow-[0_4px_16px_rgba(0,115,230,0.18)] bg-white'
                  : 'border-[#cfe2fa] shadow-2xs'
              }`}
            >
              {/* Title at top */}
              <div className="h-[32px] flex items-center justify-center">
                {cat.id === 'mock-interviews' ? (
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-slate-800 group-hover:text-[#0073e6] transition-colors leading-[1.15] text-center">
                    Mock<br />Interviews
                  </span>
                ) : (
                  <span className="text-[12.5px] sm:text-[13px] font-bold text-slate-800 group-hover:text-[#0073e6] transition-colors leading-tight text-center">
                    {cat.title}
                  </span>
                )}
              </div>

              {/* 3D Illustration centered in bottom portion - static, no scale */}
              <div className="my-auto">
                {render3DIcon(cat.iconType)}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ==========================================================================
   3. COMBINED HERO SECTION
   ========================================================================== */

export type HeroProps = CategoryCardsProps;

export const Hero: React.FC<HeroProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full space-y-1">
      <HeroHeader />
      <CategoryCards
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
    </div>
  );
};
