'use client';

import React, { useState, useEffect, useRef } from 'react';

import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

import { FEATURED_ITEMS } from '@/data/mockData';

import type { FeaturedItem } from '@/types';

/* ==========================================================================

   1. FEATURED CARD COMPONENT

   ========================================================================== */

export interface FeaturedCardProps {

  item: FeaturedItem;

  isClone?: boolean;

  isBookmarked: boolean;

  onToggleBookmark: (id: string, e: React.MouseEvent) => void;

  onSelect?: (item: FeaturedItem) => void;

}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({

  item,

  isClone = false,

  isBookmarked,

  onToggleBookmark,

  onSelect,

}) => {

  // Keep your existing poster artwork; use the reference's taller dimensions.

  const renderVisualPoster = () => {

    switch (item.bannerType) {

      case 'asian-paints':

        return (

          <div className="relative h-[300px] sm:h-[330px] w-full bg-gradient-to-b from-[#2b134d] via-[#3a1b63] to-[#1c0d38] text-white overflow-hidden flex flex-col justify-between p-3 select-none">

            {/* Top Brand & ALCHEMY logos */}

            <div className="relative z-10 flex items-center justify-between">

              {/* Asian Paints logo */}

              <div className="flex items-center gap-1.5">

                <svg viewBox="0 0 32 32" className="w-6 h-6 shrink-0" fill="none">

                  <path d="M7 21 C7 14, 15 11, 16 16 C17 11, 25 14, 25 21 C22 25, 18 20, 16 23 C14 20, 10 25, 7 21 Z" fill="#ff5722" />

                  <path d="M12 9 C15 5, 20 6, 21 11 C17 10, 15 13, 12 9 Z" fill="#ffeb3b" />

                  <path d="M11 11 C8 6, 13 4, 16 8 C14 10, 12 9, 11 11 Z" fill="#e91e63" />

                </svg>

                <span className="text-[12px] font-bold tracking-tight text-white font-sans">asianpaints</span>

              </div>

              {/* Alchemy logo */}

              <div className="flex flex-col items-center">

                <svg viewBox="0 0 24 20" className="w-5 h-4" fill="none">

                  <polygon points="12,2 22,18 2,18" stroke="#f59e0b" strokeWidth="1.6" fill="none" />

                  <circle cx="12" cy="12" r="2.5" fill="#fef08a" />

                  <line x1="12" y1="2" x2="12" y2="18" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="1,1" />

                </svg>

                <span className="text-[7.5px] font-extrabold tracking-[0.16em] text-[#f59e0b] uppercase font-sans">ALCHEMY</span>

              </div>

            </div>

            {/* Floating golden lab coin badges */}

            <div className="absolute left-2.5 top-16 w-5 h-5 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-md flex items-center justify-center text-[10px] text-amber-950 font-bold">

              ⚗

            </div>

            <div className="absolute right-2.5 top-20 w-5 h-5 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 shadow-md flex items-center justify-center text-[10px] text-amber-950 font-bold">

              ⚛

            </div>

            {/* Headline */}

            <div className="relative z-10 text-center mt-1 px-1">

              <h4 className="text-[12.5px] sm:text-[13.5px] font-semibold text-white leading-tight">

                Elevate Your Career with

              </h4>

              <p className="text-[14px] sm:text-[15px] font-black text-white tracking-tight mt-0.5">

                Scientific Excellence

              </p>

              {/* Purple PhD Sponsorships Pill */}

              <div className="mt-2 mx-auto max-w-[210px] rounded-full border border-purple-400/50 bg-[#1e0e37]/90 px-2 py-1 shadow-inner">

                <p className="text-[8px] sm:text-[8.5px] font-semibold text-amber-200 leading-tight">

                  PhD Sponsorships, Cash Rewards<br />

                  <span className="text-white">&amp; Internship Opportunities in offer</span>

                </p>

              </div>

              {/* Register Now Yellow Button */}

              <div className="mt-2 inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#fbc02d] hover:bg-[#fdd835] text-[#2c104d] font-black text-[9.5px] shadow-md uppercase tracking-wider">

                Register Now

              </div>

            </div>

            {/* Lower Researcher & Molecule Graphic */}

            <div className="relative flex-1 mt-1 overflow-hidden flex items-end justify-between">

              {/* Laboratory Scientist illustration */}

              <div className="relative z-10 w-28 sm:w-32 flex flex-col items-center">

                <svg viewBox="0 0 100 120" className="w-full h-auto drop-shadow-md">

                  <path d="M25 80 L35 48 C38 42, 62 42, 65 48 L75 80 L80 120 L20 120 Z" fill="#f8fafc" />

                  <path d="M42 48 L50 82 L38 120" stroke="#cbd5e1" strokeWidth="1.5" />

                  <path d="M58 48 L50 82 L62 120" stroke="#cbd5e1" strokeWidth="1.5" />

                  <path d="M44 60 L56 60 L50 75 Z" fill="#7e22ce" />

                  <path d="M46 72 L46 88 L54 88 L54 72" fill="#3b82f6" />

                  <circle cx="50" cy="30" r="14" fill="#d97706" />

                  <path d="M36 28 C36 16, 64 16, 64 28 C64 20, 58 14, 50 14 C42 14, 36 20, 36 28 Z" fill="#1e1b4b" />

                  <circle cx="50" cy="32" r="11" fill="#fcd34d" />

                  <rect x="40" y="27" width="9" height="6" rx="2" fill="#c084fc" opacity="0.8" stroke="#581c87" strokeWidth="1" />

                  <rect x="51" y="27" width="9" height="6" rx="2" fill="#c084fc" opacity="0.8" stroke="#581c87" strokeWidth="1" />

                  <line x1="49" y1="30" x2="51" y2="30" stroke="#581c87" strokeWidth="1" />

                  <path d="M68 62 C78 58, 86 50, 92 42" stroke="#fcd34d" strokeWidth="4.5" strokeLinecap="round" />

                </svg>

              </div>

              {/* Glowing Golden Molecular Lattice */}

              <div className="absolute right-0 bottom-2 w-32 h-32 pointer-events-none">

                <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">

                  <line x1="20" y1="80" x2="45" y2="55" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="45" y1="55" x2="75" y2="65" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="45" y1="55" x2="35" y2="25" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="35" y1="25" x2="68" y2="20" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="68" y1="20" x2="75" y2="65" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="75" y1="65" x2="105" y2="50" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="68" y1="20" x2="98" y2="22" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="98" y1="22" x2="105" y2="50" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="75" y1="65" x2="85" y2="95" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="45" y1="55" x2="52" y2="90" stroke="#fcd34d" strokeWidth="2.5" />

                  <line x1="52" y1="90" x2="85" y2="95" stroke="#fcd34d" strokeWidth="2.5" />

                  <circle cx="20" cy="80" r="5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />

                  <circle cx="45" cy="55" r="6.5" fill="#fef08a" stroke="#d97706" strokeWidth="2" />

                  <circle cx="35" cy="25" r="5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />

                  <circle cx="68" cy="20" r="6" fill="#fef08a" stroke="#d97706" strokeWidth="2" />

                  <circle cx="98" cy="22" r="4.5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />

                  <circle cx="105" cy="50" r="5.5" fill="#fef08a" stroke="#d97706" strokeWidth="2" />

                  <circle cx="75" cy="65" r="7" fill="#ffffff" stroke="#f59e0b" strokeWidth="2.5" />

                  <circle cx="52" cy="90" r="5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />

                  <circle cx="85" cy="95" r="5.5" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />

                </svg>

              </div>

              {/* Bottom right: Platform Partner unstop */}

              <div className="absolute right-1 bottom-1 z-20 flex items-center gap-1 bg-[#190a31]/80 backdrop-blur-xs px-1.5 py-0.5 rounded-full border border-purple-900/60">

                <span className="text-[7px] text-purple-200">Platform Partner</span>

                <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-[#1c4980] text-[6.5px] font-black text-white">u</span>

                <span className="text-[8px] font-black text-white">unstop</span>

              </div>

            </div>

          </div>

        );

      case 'hp-power-lab':

        return (

          <div className="relative h-[300px] sm:h-[330px] w-full bg-gradient-to-b from-[#03112a] via-[#071f49] to-[#04122d] text-white overflow-hidden flex flex-col justify-between p-3 select-none">

            {/* Tech grid overlay */}

            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:16px_16px]"></div>

            {/* Top Industrial Refinery skyline & floating hex icons */}

            <div className="relative z-10 flex items-center justify-between">

              {/* Mini refinery image preview */}

              <div className="w-16 h-10 rounded-sm border border-cyan-500/40 overflow-hidden bg-slate-900/80">

                <svg viewBox="0 0 60 40" className="w-full h-full opacity-80" fill="none">

                  <rect x="6" y="10" width="8" height="30" fill="#0284c7" />

                  <rect x="18" y="5" width="10" height="35" fill="#38bdf8" />

                  <rect x="32" y="15" width="12" height="25" fill="#0369a1" />

                  <circle cx="23" cy="4" r="2" fill="#f87171" />

                  <line x1="0" y1="40" x2="60" y2="40" stroke="#0ea5e9" strokeWidth="2" />

                </svg>

              </div>

              {/* Floating hex icons */}

              <div className="flex flex-col gap-1 items-end">

                <div className="w-5 h-5 rounded-xs border border-cyan-400/60 bg-cyan-950/60 flex items-center justify-center text-[9px] text-cyan-300">

                  ⚙

                </div>

                <div className="w-5 h-5 rounded-xs border border-cyan-400/60 bg-cyan-950/60 flex items-center justify-center text-[9px] text-cyan-300">

                  ⛽

                </div>

              </div>

            </div>

            {/* Center Luminous Ring Portal & HP Logo */}

            <div className="relative z-10 text-center my-auto flex flex-col items-center">

              <div className="relative w-16 h-16 rounded-full border-2 border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.7)] flex items-center justify-center bg-[#072457]/90 mb-1">

                <div className="w-11 h-11 rounded-full bg-white flex flex-col items-center justify-center p-1 shadow-sm border border-red-500">

                  <div className="w-full h-full rounded-full bg-[#da291c] flex items-center justify-center text-white font-black text-xs tracking-tighter">

                    <span className="text-white font-black font-sans text-sm">HP</span>

                  </div>

                </div>

              </div>

              {/* power Lab 3.0 Title */}

              <div className="inline-flex items-baseline gap-1 mt-1">

                <span className="text-xl sm:text-2xl font-black text-[#fbc02d] tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-sans">

                  power

                </span>

                <span className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-sans">

                  Lab

                </span>

                <span className="text-xs font-bold text-red-500 bg-white/90 px-1 rounded-xs leading-none">

                  3.0

                </span>

              </div>

              {/* Taglines */}

              <p className="text-[12.5px] sm:text-[13.5px] font-semibold text-white tracking-tight mt-1 leading-snug">

                Your perspective.<br />

                Our next possibility.

              </p>

              {/* Register Now Red Pill Button */}

              <div className="mt-2.5 inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#e52d27] hover:bg-[#d6241e] text-white font-black text-[10px] shadow-lg tracking-wider uppercase">

                Register Now

              </div>

            </div>

            {/* Bottom refinery station & platform partner */}

            <div className="relative z-10 flex items-end justify-between pt-1">

              <div className="flex items-center gap-1 bg-[#020b1b]/80 backdrop-blur-xs px-2 py-0.5 rounded-full border border-cyan-900/60">

                <span className="text-[7px] text-cyan-200">Platform Partner</span>

                <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-[#1c4980] text-[6.5px] font-black text-white">u</span>

                <span className="text-[8px] font-black text-white">unstop</span>

              </div>

              <div className="flex gap-1">

                <div className="w-10 h-8 rounded-xs border border-cyan-500/50 bg-[#072457] overflow-hidden">

                  <svg viewBox="0 0 30 24" className="w-full h-full" fill="none">

                    <rect x="2" y="8" width="26" height="14" rx="2" fill="#0284c7" />

                    <line x1="8" y1="12" x2="8" y2="22" stroke="#ffffff" strokeWidth="1.5" />

                    <line x1="22" y1="12" x2="22" y2="22" stroke="#ffffff" strokeWidth="1.5" />

                  </svg>

                </div>

              </div>

            </div>

          </div>

        );

      case 'eurogrip-torq':

        return (

          <div className="relative h-[300px] sm:h-[330px] w-full bg-gradient-to-b from-[#103783] via-[#164bb5] to-[#0c2c6d] text-white overflow-hidden flex flex-col justify-between p-3 select-none">

            {/* Top EUROGRIP Brand */}

            <div className="relative z-10 flex items-center justify-between">

              <div className="flex flex-col">

                <div className="flex items-center gap-1">

                  <span className="text-[#e52d27] font-black text-base italic tracking-tighter">///</span>

                  <span className="text-sm font-black italic tracking-wider text-white">EUROGRIP</span>

                </div>

                <span className="text-[6.5px] font-bold tracking-widest text-slate-200 uppercase -mt-0.5">

                  THE BIKE TYRE SPECIALIST

                </span>

              </div>

            </div>

            {/* TORQ 4.0 Big Red 3D Headline */}

            <div className="relative z-10 text-center mt-0.5">

              <div className="inline-flex items-baseline gap-1">

                <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-[#e52d27] drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] font-sans">

                  TORQ

                </span>

                <span className="text-xl sm:text-2xl font-black italic text-cyan-200 drop-shadow-md">

                  4.0

                </span>

              </div>

              <p className="text-[7.5px] font-bold tracking-wider text-slate-100 uppercase">

                NATIONAL CASE-STUDY COMPETITION

              </p>

              {/* Catchy Subtitle */}

              <div className="mt-1 px-1">

                <p className="text-[12px] sm:text-[13px] font-black text-white italic leading-tight">

                  Write a great case study.<br />

                  Make a case for your career!

                </p>

                <p className="text-[8px] sm:text-[8.5px] text-cyan-100 font-medium leading-tight mt-1 max-w-[200px] mx-auto">

                  Take the action further with a Treasure Hunt and fun social challenges.

                  <span className="block font-bold text-white mt-0.5">

                    Win up to ₹3 Lakhs + PPIs with the Case Study Competition.

                  </span>

                  And 150 Amazon vouchers worth ₹1 Lakh through other contests.

                </p>

              </div>

              {/* REGISTER NOW Red Pill Button */}

              <div className="mt-2 inline-flex items-center justify-center px-4 py-0.5 rounded-full bg-[#e52d27] border border-white/60 text-white font-black text-[9px] shadow-md tracking-wider uppercase">

                REGISTER NOW

              </div>

            </div>

            {/* Lower 3D Isometric TORQ Letters with Stylized Students with Laptops */}

            <div className="relative flex-1 mt-1 overflow-hidden flex items-end justify-center">

              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:18px_18px] [transform:rotateX(60deg)]"></div>

              <svg viewBox="0 0 200 80" className="w-full h-auto drop-shadow-lg" fill="none">

                <path d="M25 35 L45 22 L65 35 L55 42 L55 65 L40 68 L40 42 L25 48 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />

                <path d="M45 22 L55 16 L75 28 L65 35 Z" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />

                <path d="M65 35 L75 28 L75 52 L65 58 Z" fill="#94a3b8" stroke="#0f172a" strokeWidth="1.5" />

                <circle cx="48" cy="14" r="4" fill="#fcd34d" />

                <path d="M44 18 L52 18 L50 26 L42 26 Z" fill="#0284c7" />

                <rect x="48" y="22" width="6" height="4" rx="0.5" fill="#1e293b" />

                <ellipse cx="90" cy="45" rx="18" ry="12" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />

                <ellipse cx="90" cy="45" rx="10" ry="6" fill="#164bb5" stroke="#0f172a" strokeWidth="1.5" />

                <circle cx="82" cy="32" r="3.5" fill="#fcd34d" />

                <path d="M78 35 L86 35 L88 44 L80 44 Z" fill="#f59e0b" />

                <path d="M120 40 L135 30 L150 40 L145 52 L152 68 L140 70 L134 56 L130 56 L130 68 L120 70 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />

                <circle cx="138" cy="24" r="3.5" fill="#fcd34d" />

                <path d="M134 27 L142 27 L140 34 L132 34 Z" fill="#ef4444" />

                <rect x="139" y="30" width="5" height="3" rx="0.5" fill="#f8fafc" />

                <ellipse cx="170" cy="48" rx="16" ry="11" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />

                <ellipse cx="170" cy="48" rx="9" ry="5.5" fill="#164bb5" stroke="#0f172a" strokeWidth="1.5" />

                <path d="M174 52 L185 64 L178 68 L168 56 Z" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1.5" />

              </svg>

            </div>

          </div>

        );

      case 'iit-future':

        return (

          <div className="relative h-[300px] sm:h-[330px] w-full bg-white text-slate-900 overflow-hidden flex flex-col justify-between select-none">

            {/* Top White Section: IIT Emblems & NIRF badge */}

            <div className="p-2 pb-1 bg-white">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-1">

                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-slate-50 text-[7px] font-serif font-black text-slate-800">

                    IIT

                  </div>

                  <div className="flex flex-col text-[6.5px] leading-tight text-slate-700">

                    <span className="font-semibold text-[6px]">IIIT Ranchi</span>

                  </div>

                </div>

                <div className="flex items-center gap-1">

                  <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center bg-slate-50 text-[7px] font-serif font-black text-slate-800">

                    IITP

                  </div>

                  <div className="flex flex-col text-[6.5px] leading-tight text-slate-700">

                    <span className="font-semibold text-[6px]">IIT Patna</span>

                  </div>

                </div>

                <div className="px-1 py-0.5 rounded-xs bg-[#e2e8f0] text-[6.5px] font-black text-slate-800 flex items-center gap-0.5">

                  <span className="text-[#0284c7]">nirf</span>

                  <span>Rank 6</span>

                </div>

              </div>

              {/* Orange partnership pill */}

              <div className="mt-1 inline-block px-2 py-0.2 rounded-full bg-[#ffefe5] border border-[#ffcfb0] text-[7.5px] font-bold text-[#ea580c]">

                IIT Ranchi in association with IIT Patna

              </div>

              {/* Build Your Future */}

              <div className="mt-1">

                <h4 className="text-[13px] sm:text-[14px] font-extrabold text-[#0f172a] leading-tight tracking-tight">

                  Build Your Future

                </h4>

                <p className="text-[11px] sm:text-[12px] font-bold text-[#0f172a] leading-tight">

                  with Two Leading <span className="text-[#ea580c]">Institutions.</span>

                </p>

                <div className="mt-1 inline-block px-2 py-0.5 rounded-xs bg-[#0f2d4a] text-white text-[7.5px] font-semibold">

                  Regular (Full-Time) Degree Programmes in Hybrid Mode

                </div>

              </div>

            </div>

            {/* Split Lower Section: Programs & Smiling Student */}

            <div className="relative flex-1 bg-gradient-to-br from-[#0c394b] via-[#092937] to-[#061e29] text-white p-2.5 flex items-stretch justify-between overflow-hidden">

              <div className="z-10 flex flex-col justify-between max-w-[130px]">

                <div className="space-y-0.5">

                  <div className="text-[14px] font-black tracking-tight text-white leading-none">

                    MBA

                  </div>

                  <div className="text-[11px] font-extrabold text-white leading-tight">

                    MCA <span className="text-[8px] font-normal text-cyan-200">in Cloud Spec.</span>

                  </div>

                  <div className="text-[11px] font-extrabold text-white leading-tight">

                    M.Tech <span className="text-[8px] font-normal text-cyan-200">in AI &amp; DSE</span>

                  </div>

                </div>

                <div className="mt-1">

                  <div className="inline-block px-1.5 py-0.5 rounded-xs bg-[#f59e0b] text-[#1c1917] text-[7px] font-extrabold">

                    240 Seats* per Prog.

                  </div>

                  <p className="text-[7.5px] text-cyan-100 font-medium mt-0.5">

                    📅 Reg. open 2026-27 | Spring Intake

                  </p>

                </div>

              </div>

              {/* Smiling Male Student */}

              <div className="relative z-10 w-24 sm:w-28 flex flex-col justify-end">

                <svg viewBox="0 0 90 110" className="w-full h-auto drop-shadow-md">

                  <path d="M15 65 L28 42 C34 38, 56 38, 62 42 L75 65 L82 110 L8 110 Z" fill="#38bdf8" />

                  <path d="M38 42 L45 70 L34 110" stroke="#0284c7" strokeWidth="1.5" />

                  <path d="M52 42 L45 70 L56 110" stroke="#0284c7" strokeWidth="1.5" />

                  <path d="M40 42 C40 50, 50 50, 50 42 Z" fill="#ffffff" />

                  <rect x="22" y="70" width="46" height="16" rx="6" fill="#0284c7" />

                  <rect x="24" y="72" width="42" height="12" rx="4" fill="#38bdf8" />

                  <circle cx="28" cy="78" r="4" fill="#fcd34d" />

                  <circle cx="62" cy="78" r="4" fill="#fcd34d" />

                  <circle cx="45" cy="24" r="13" fill="#1e293b" />

                  <circle cx="45" cy="27" r="10.5" fill="#fcd34d" />

                  <path d="M34 23 C34 12, 56 12, 56 23 C56 16, 51 13, 45 13 C39 13, 34 16, 34 23 Z" fill="#0f172a" />

                  <path d="M38 31 C38 38, 52 38, 52 31 Z" fill="#1e293b" opacity="0.6" />

                  <path d="M42 32 Q45 35 48 32" stroke="#78350f" strokeWidth="1" fill="none" />

                </svg>

              </div>

            </div>

            {/* Bottom Dark Blue Ribbon Footer */}

            <div className="bg-[#0b2847] px-2 py-1 flex items-center justify-between text-[6.5px] text-white">

              <span className="truncate">Campus Immersion | 100% Placement Support*</span>

              <span className="font-bold text-amber-300">Apply Now</span>

            </div>

          </div>

        );

      case 'infosys':

        return (

          <div className="relative h-[300px] sm:h-[330px] w-full overflow-hidden flex flex-col justify-between select-none">

            {/* Top Navy Content Section */}

            <div className="relative z-10 bg-[#071736] p-3 pb-2 flex flex-col justify-between">

              {/* Infosys | Ingenious 2026 >> */}

              <div className="flex items-center gap-1.5 text-white">

                <span className="text-[13px] font-bold tracking-tight">Infosys</span>

                <span className="text-slate-400 text-xs">|</span>

                <span className="text-[#38bdf8] text-[11px] font-semibold">Ingenious 2026</span>

                <span className="text-[#38bdf8] text-[11px] font-bold tracking-tighter">&gt;&gt;</span>

              </div>

              {/* Main Headline */}

              <div className="mt-1.5">

                <h4 className="text-[14.5px] sm:text-[15.5px] font-black uppercase text-white leading-[1.15] tracking-tight">

                  THIS ISN&apos;T A CHALLENGE.<br />

                  IT&apos;S A CAREER MOVE.

                </h4>

                <p className="text-[9.5px] text-slate-300 font-normal leading-tight mt-1">

                  Participate in Ingenious 2026<br />

                  and get a chance to work with Infosys.

                </p>

              </div>

              {/* Orange Register Now pill button */}

              <div className="mt-2 self-start inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[4px] bg-[#f59e0b] text-[#1c1917] font-extrabold text-[9px] uppercase tracking-wide shadow-xs">

                <span className="text-[10px] font-black leading-none">➔</span>

                <span>REGISTER NOW</span>

              </div>

            </div>

            {/* Bottom Graphic Section: Sunrise & Chart of Towers */}

            <div className="relative flex-1 bg-gradient-to-b from-[#b86d11] via-[#d97706] to-[#b45309] overflow-hidden flex items-end justify-center">

              {/* Subtle background graph lines */}

              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]"></div>

              {/* Vector illustration of towers and glowing blue building */}

              <svg className="w-full h-[145px] sm:h-[165px]" viewBox="0 0 240 160" fill="none" preserveAspectRatio="xMidYMax meet">

                {/* Background skyline silhouettes */}

                <rect x="15" y="110" width="30" height="50" fill="#92400e" opacity="0.5" rx="3" />

                <rect x="195" y="105" width="35" height="55" fill="#92400e" opacity="0.5" rx="3" />

                {/* Dark brown stepped column buildings */}

                {/* Column 1 */}

                <rect x="35" y="105" width="22" height="55" fill="#451a03" rx="2" />

                <rect x="37" y="105" width="18" height="3" fill="#78350f" />

                {/* Column 2 */}

                <rect x="62" y="85" width="22" height="75" fill="#451a03" rx="2" />

                <rect x="64" y="85" width="18" height="3" fill="#78350f" />

                {/* Column 3 */}

                <rect x="89" y="68" width="22" height="92" fill="#451a03" rx="2" />

                <rect x="91" y="68" width="18" height="3" fill="#78350f" />

                {/* Column 5 */}

                <rect x="143" y="85" width="22" height="75" fill="#451a03" rx="2" />

                <rect x="145" y="85" width="18" height="3" fill="#78350f" />

                {/* Column 6 */}

                <rect x="170" y="98" width="22" height="62" fill="#451a03" rx="2" />

                <rect x="172" y="98" width="18" height="3" fill="#78350f" />

                {/* Shadows of columns */}

                <path d="M57 160 L85 160 L57 140 Z" fill="#290e02" opacity="0.6" />

                <path d="M84 160 L115 160 L84 135 Z" fill="#290e02" opacity="0.6" />

                <path d="M111 160 L145 160 L111 130 Z" fill="#290e02" opacity="0.6" />

                <path d="M138 160 L175 160 L138 125 Z" fill="#290e02" opacity="0.6" />

                {/* Tall glowing illuminated blue tower (Center) */}

                <rect x="116" y="44" width="22" height="116" fill="url(#blueTowerGrad)" rx="3" />

                <rect x="117" y="45" width="20" height="2" fill="#bae6fd" />

                {/* Tower antenna */}

                <line x1="127" y1="44" x2="127" y2="28" stroke="#ffffff" strokeWidth="1.5" />

                {/* Glowing beacon at top */}

                <circle cx="127" cy="28" r="4" fill="#ffffff" />

                <circle cx="127" cy="28" r="8" fill="#38bdf8" opacity="0.5" />

                {/* Windows in blue tower */}

                <g fill="#ffffff" opacity="0.85">

                  <rect x="119" y="52" width="2.5" height="4" rx="0.5" />

                  <rect x="123" y="52" width="2.5" height="4" rx="0.5" />

                  <rect x="127" y="52" width="2.5" height="4" rx="0.5" fill="#fef08a" />

                  <rect x="131" y="52" width="2.5" height="4" rx="0.5" />

                  <rect x="119" y="60" width="2.5" height="4" rx="0.5" fill="#fef08a" />

                  <rect x="123" y="60" width="2.5" height="4" rx="0.5" />

                  <rect x="127" y="60" width="2.5" height="4" rx="0.5" />

                  <rect x="131" y="60" width="2.5" height="4" rx="0.5" fill="#fef08a" />

                  <rect x="119" y="68" width="2.5" height="4" rx="0.5" />

                  <rect x="123" y="68" width="2.5" height="4" rx="0.5" fill="#fef08a" />

                  <rect x="127" y="68" width="2.5" height="4" rx="0.5" />

                  <rect x="131" y="68" width="2.5" height="4" rx="0.5" />

                  <rect x="119" y="76" width="2.5" height="4" rx="0.5" />

                  <rect x="123" y="76" width="2.5" height="4" rx="0.5" />

                  <rect x="127" y="76" width="2.5" height="4" rx="0.5" fill="#fef08a" />

                  <rect x="131" y="76" width="2.5" height="4" rx="0.5" />

                  <rect x="119" y="84" width="2.5" height="4" rx="0.5" fill="#fef08a" />

                  <rect x="123" y="84" width="2.5" height="4" rx="0.5" />

                  <rect x="127" y="84" width="2.5" height="4" rx="0.5" />

                  <rect x="131" y="84" width="2.5" height="4" rx="0.5" />

                  <rect x="119" y="92" width="2.5" height="4" rx="0.5" />

                  <rect x="123" y="92" width="2.5" height="4" rx="0.5" fill="#fef08a" />

                  <rect x="127" y="92" width="2.5" height="4" rx="0.5" />

                  <rect x="131" y="92" width="2.5" height="4" rx="0.5" />

                </g>

                {/* Trajectory upward white line connecting graph nodes */}

                <path

                  d="M46 104 L73 84 L100 67 L127 28"

                  stroke="#ffffff"

                  strokeWidth="1.8"

                  strokeLinecap="round"

                  strokeLinejoin="round"

                />

                <circle cx="46" cy="104" r="2.5" fill="#ffffff" />

                <circle cx="73" cy="84" r="2.5" fill="#ffffff" />

                <circle cx="100" cy="67" r="2.5" fill="#ffffff" />

                {/* Ground base line */}

                <line x1="0" y1="160" x2="240" y2="160" stroke="#78350f" strokeWidth="4" />

                <defs>

                  <linearGradient id="blueTowerGrad" x1="0" y1="0" x2="1" y2="0">

                    <stop offset="0%" stopColor="#0284c7" />

                    <stop offset="50%" stopColor="#38bdf8" />

                    <stop offset="100%" stopColor="#0369a1" />

                  </linearGradient>

                </defs>

              </svg>

            </div>

          </div>

        );

      case 'nykaa':

        return (

          <div className="relative h-[375px] w-full bg-[#f8f5ee] border-b border-stone-200 text-stone-900 overflow-hidden flex flex-col justify-between p-3 select-none">

            {/* Top WANTED black banner */}

            <div className="w-full bg-black py-1 px-3 text-center rounded-xs shadow-xs">

              <span className="text-xl font-black tracking-widest text-[#ff1493] uppercase font-mono">

                WANTED

              </span>

            </div>

            {/* Heading: THE NEXT FACE OF NYKAA */}

            <div className="text-center mt-1">

              <h4 className="text-[13px] font-black tracking-wider text-black uppercase leading-tight">

                THE NEXT FACE <br />

                OF <span className="text-[#ff1493] italic font-serif font-black text-sm tracking-normal">NYKAA</span>

              </h4>

            </div>

            {/* Silhouette & Makeup brushes center illustration */}

            <div className="relative my-auto flex items-center justify-center h-28">

              {/* Silhouette head & neck */}

              <div className="relative flex items-center justify-center">

                <svg className="w-24 h-24 text-black drop-shadow-xs" viewBox="0 0 100 100" fill="currentColor">

                  <path d="M50 20 C42 20 36 26 36 34 C36 41 39 46 44 48 C43 51 40 55 38 60 C36 65 37 72 40 76 L44 86 C46 89 54 89 56 86 L60 76 C63 72 64 65 62 60 C60 55 57 51 56 48 C61 46 64 41 64 34 C64 26 58 20 50 20 Z" />

                  <path d="M38 34 C38 30 43 25 50 25 C57 25 62 30 62 34 C62 38 58 42 50 42 C42 42 38 38 38 34 Z" fill="#111" />

                </svg>

                {/* Makeup hands / brushes around head */}

                <div className="absolute -left-3 top-2 rotate-[-40deg] flex items-center">

                  <div className="w-8 h-1 bg-black rounded-l"></div>

                  <div className="w-3 h-2 bg-stone-400 rounded-xs"></div>

                  <div className="w-3.5 h-3 bg-stone-800 rounded-r-full"></div>

                </div>

                <div className="absolute -left-4 top-10 rotate-[-15deg] flex items-center">

                  <div className="w-9 h-1 bg-black rounded-l"></div>

                  <div className="w-3.5 h-2.5 bg-pink-400 rounded-r-md"></div>

                </div>

                <div className="absolute -left-3 bottom-3 rotate-[20deg] flex items-center">

                  <div className="w-7 h-1.5 bg-black rounded"></div>

                  <div className="w-4 h-4 rounded-full border-2 border-black bg-stone-300"></div>

                </div>

                <div className="absolute -right-3 top-2 rotate-[40deg] flex items-center">

                  <div className="w-3.5 h-2 bg-[#ff1493] rounded-l-xs"></div>

                  <div className="w-2.5 h-2.5 bg-amber-400"></div>

                  <div className="w-7 h-2 bg-black rounded-r"></div>

                </div>

                <div className="absolute -right-4 top-10 rotate-[15deg] flex items-center">

                  <div className="w-4 h-3 bg-stone-800 rounded-l-full"></div>

                  <div className="w-2 h-2 bg-stone-400"></div>

                  <div className="w-8 h-1 bg-black rounded-r"></div>

                </div>

                <div className="absolute -right-3 bottom-3 rotate-[-20deg] flex items-center">

                  <div className="w-4 h-4 rounded-full bg-pink-200 border border-pink-400"></div>

                  <div className="w-7 h-1.5 bg-black rounded-r"></div>

                </div>

              </div>

            </div>

            {/* REWARD? FACE SEEN EVERYWHERE */}

            <div className="text-center">

              <h3 className="text-base font-black tracking-tight text-black leading-tight">

                REWARD?

              </h3>

              <p className="text-[11px] font-black tracking-wider text-black uppercase">

                FACE SEEN EVERYWHERE

              </p>

              <p className="text-[8.5px] text-stone-600 font-medium mt-0.5">

                Search &apos;Be The Face Of Nykaa&apos; <br />

                On The Nykaa App

              </p>

            </div>

            {/* APPLY NOW Button & *T&C APPLY */}

            <div className="mt-1 flex items-center justify-between">

              <div className="w-10"></div>

              <div className="px-4 py-1 rounded-sm bg-black text-[#ff1493] font-black text-[11px] tracking-wider uppercase shadow-xs">

                APPLY NOW

              </div>

              <span className="text-[7px] text-stone-500 font-mono">*T&amp;C APPLY</span>

            </div>

          </div>

        );

      case 'coursera':

        return (

          <div className="relative h-[375px] w-full bg-linear-to-b from-[#1565c0] via-[#1e88e5] to-[#1976d2] text-white overflow-hidden flex flex-col justify-between p-3 select-none">

            {/* Sparkles */}

            <span className="absolute top-8 left-3 text-cyan-200 text-xs">✦</span>

            <span className="absolute bottom-6 left-4 text-cyan-200 text-sm">✦</span>

            <span className="absolute top-16 right-3 text-cyan-200 text-xs">★</span>

            {/* Coursera Plus Header */}

            <div className="text-center pt-1">

              <div className="inline-flex items-center gap-1">

                <span className="text-sm font-black tracking-tight text-white lowercase">coursera</span>

                <span className="px-1 py-0.2 rounded-xs bg-[#0056d2] border border-blue-300/40 text-[9px] font-bold text-white uppercase">

                  PLUS

                </span>

              </div>

              <h4 className="text-[13px] font-bold text-white mt-1 leading-snug px-2">

                Set your routine <br />

                and save on skills

              </h4>

            </div>

            {/* Tablet Mockup with Partner Logos */}

            <div className="relative mx-auto w-[200px] h-[135px] bg-white rounded-lg shadow-xl border border-blue-200/80 p-2 flex flex-col justify-between text-slate-800">

              {/* Window dots */}

              <div className="flex items-center gap-1 pb-1 border-b border-slate-100">

                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>

                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>

                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>

              </div>

              {/* Logos grid inside tablet */}

              <div className="grid grid-cols-2 gap-2 pl-14 pt-1">

                <div className="flex items-center gap-1.5">

                  <div className="grid grid-cols-2 gap-0.5 w-3 h-3">

                    <div className="bg-[#f25022]"></div>

                    <div className="bg-[#7fba00]"></div>

                    <div className="bg-[#00a4ef]"></div>

                    <div className="bg-[#ffb900]"></div>

                  </div>

                  <span className="text-[9px] font-semibold text-slate-700">Microsoft</span>

                </div>

                <div className="flex items-center gap-1">

                  <div className="w-3.5 h-3.5 rounded-full border border-slate-200 flex items-center justify-center font-bold text-[8px] text-blue-600 bg-white">

                    G

                  </div>

                  <span className="text-[9px] font-semibold text-slate-700">Google</span>

                </div>

                <div className="flex items-center gap-1">

                  <span className="text-[#0668e1] font-bold text-xs">∞</span >

                  <span className="text-[9px] font-semibold text-slate-700">Meta</span>

                </div>

                <div className="flex items-center gap-1">

                  <span className="text-[#0f62fe] font-black text-[9px] tracking-tight">IBM</span>

                </div>

                <div className="col-span-2 flex items-center gap-1">

                  <span className="text-[#8c1515] font-serif font-black text-[8.5px]">Stanford</span>

                  <span className="text-[7.5px] px-1 bg-red-50 text-red-700 rounded font-mono">ONLINE</span>

                </div>

              </div>

              {/* Pink Overlay Pricing Card on Left */}

              <div className="absolute -left-3 top-4 w-[105px] bg-linear-to-b from-[#e91e63] to-[#c2185b] rounded-md shadow-lg p-2 text-white border border-pink-300/40">

                <div className="flex items-center gap-1">

                  <div className="w-1 h-1 rounded-full bg-white/70"></div>

                  <div className="w-1 h-1 rounded-full bg-white/70"></div>

                  <div className="w-1 h-1 rounded-full bg-white/70"></div>

                </div>

                <p className="text-[9px] text-pink-200 line-through mt-0.5">₹13,999</p>

                <p className="text-base font-black leading-tight tracking-tight">₹7,499</p>

                <p className="text-[8.5px] text-pink-100 font-medium">/year</p>

              </div>

              {/* Effectively ₹625/month yellow pill */}

              <div className="self-end px-2 py-0.5 rounded-sm bg-[#ffeb3b] border border-amber-300 text-slate-900 text-[8.5px] font-bold shadow-xs text-center leading-tight">

                <div>Effectively</div>

                <div className="font-extrabold text-[9.5px]">₹625/month</div>

              </div>

            </div>

          </div>

        );

      case 'maruti':

        return (

          <div className="relative h-[375px] w-full bg-linear-to-b from-[#050e26] via-[#09183d] to-[#040a1d] text-white overflow-hidden flex flex-col justify-between p-3 select-none">

            {/* Tech grid road and glowing nodes */}

            <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#00d2ff_1px,transparent_1px),linear-gradient(to_bottom,#00d2ff_1px,transparent_1px)] bg-[size:14px_14px]"></div>

            {/* Maruti Suzuki Logo */}

            <div className="relative z-10 flex items-center justify-between">

              <div className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-xs">

                <span className="text-[10px] font-black text-slate-900 tracking-tight">MARUTI</span>

                <span className="text-[10px] font-black text-red-600 tracking-tight">SUZUKI</span>

              </div>

              <div className="w-5 h-5 rounded-full border border-cyan-400/60 flex items-center justify-center text-[10px] text-cyan-300">

                ⚡

              </div>

            </div>

            {/* XCELerate 2026 Title */}

            <div className="relative z-10 text-center my-1">

              <div className="inline-flex items-center gap-1">

                <span className="text-xl font-black italic tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-white to-cyan-400 drop-shadow-md">

                  &gt;&gt;CELerate

                </span>

                <span className="px-1.5 py-0.5 rounded-xs bg-cyan-950 border border-cyan-400 text-cyan-300 font-bold text-[10px]">

                  2026

                </span>

              </div>

              <p className="text-[11px] text-cyan-100 font-medium mt-1">

                Powering the Future of Mobility!

              </p>

              {/* Register Now button */}

              <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-sm bg-white text-[#050e26] font-extrabold text-[10px] tracking-wider uppercase shadow-md hover:bg-cyan-50">

                <span>Register Now</span>

                <span className="text-cyan-600">&gt;&gt;</span>

              </div>

            </div>

            {/* Glowing Electric Concept Car Illustration */}

            <div className="relative z-10 mx-auto w-full flex items-center justify-center">

              <div className="relative w-40 h-16 flex items-center justify-center">

                <svg className="w-full h-full text-cyan-400 drop-shadow-[0_0_8px_rgba(0,210,255,0.7)]" viewBox="0 0 160 64" fill="none">

                  <path

                    d="M10 46 L28 42 L52 26 L112 26 L136 38 L152 44 L150 52 L12 52 Z"

                    stroke="#00d2ff"

                    strokeWidth="1.5"

                    fill="rgba(0, 150, 255, 0.15)"

                  />

                  <path d="M48 26 L64 14 L102 14 L118 26 Z" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(56, 189, 248, 0.2)" />

                  <circle cx="36" cy="50" r="10" stroke="#00d2ff" strokeWidth="2" fill="#040d21" />

                  <circle cx="36" cy="50" r="4" fill="#00d2ff" />

                  <circle cx="126" cy="50" r="10" stroke="#00d2ff" strokeWidth="2" fill="#040d21" />

                  <circle cx="126" cy="50" r="4" fill="#00d2ff" />

                  <line x1="146" y1="44" x2="160" y2="46" stroke="#ffffff" strokeWidth="2" />

                  <line x1="10" y1="46" x2="2" y2="47" stroke="#ef4444" strokeWidth="2" />

                </svg>

              </div>

            </div>

            {/* Platform Partner Unstop */}

            <div className="relative z-10 flex items-center justify-end gap-1.5 text-[9.5px] text-slate-300 pt-1 border-t border-cyan-900/40">

              <span>Platform Partner</span>

              <div className="inline-flex items-center gap-1 font-bold text-white bg-blue-900/60 px-1.5 py-0.5 rounded-full border border-blue-400/40">

                <span className="w-2 h-2 rounded-full bg-blue-500"></span>

                <span>unstop</span>

              </div>

            </div>

          </div>

        );

      case 'reliance-tup':

        return (

          <div className="relative h-[375px] w-full bg-[#fbfbfe] border-b border-slate-200 text-slate-900 overflow-hidden flex flex-col justify-between p-3 select-none">

            {/* Grid paper background */}

            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:16px_16px]"></div>

            {/* Top row: The Ultimate Pitch badge & Reliance logo */}

            <div className="relative z-10 flex items-center justify-between">

              <div className="flex items-center gap-1.5">

                <div className="w-7 h-7 rounded-full bg-[#1c3d5a] border-2 border-amber-400 flex items-center justify-center text-amber-300 font-serif font-black text-[9px] shadow-xs">

                  T.U.P

                </div>

                <div className="flex flex-col">

                  <span className="text-[10px] font-extrabold text-[#1c3d5a] uppercase tracking-tight leading-none">

                    The Ultimate

                  </span>

                  <span className="text-[9px] font-serif font-bold text-amber-600 leading-tight">

                    Pitch <span className="bg-amber-400 text-slate-950 px-1 rounded-xs font-mono text-[7.5px]">SEASON 10</span>

                  </span>

                </div>

              </div>

              {/* Reliance Logo */}

              <div className="flex items-center gap-1">

                <div className="w-5 h-5 rounded-full bg-linear-to-tr from-amber-600 to-red-600 flex items-center justify-center text-white text-[9px] font-black">

                  R

                </div>

              </div>

            </div>

            {/* Center: Different BY design on purple angled banner */}

            <div className="relative z-10 my-auto">

              <div className="absolute -top-3 left-1 text-slate-700 rotate-[-15deg] font-mono text-sm">

                ✈

              </div>

              <div className="w-[190px] mx-auto bg-[#6b21a8] rounded-xl p-3 shadow-md border-2 border-purple-400/40 rotate-[-3deg] text-center">

                <div className="text-amber-300 font-extrabold text-xl tracking-tight leading-none drop-shadow-xs font-serif">

                  Different

                </div>

                <div className="flex items-center justify-center gap-1 mt-0.5">

                  <span className="text-white text-[11px] font-bold tracking-widest uppercase">BY</span>

                  <span className="text-amber-200 font-serif italic text-lg leading-none font-bold">

                    design

                  </span>

                </div>

              </div>

            </div>

            {/* Bottom: Megaphone and Apply Now */}

            <div className="relative z-10 flex items-center justify-between pt-1">

              <div className="px-3.5 py-1 rounded-sm bg-[#ffeb3b] border border-amber-400 shadow-sm">

                <span className="text-[#6b21a8] font-black text-xs uppercase tracking-wider">

                  Apply Now

                </span>

              </div>

              <div className="flex items-center gap-1">

                <div className="w-8 h-8 rounded-full bg-[#00e676] flex items-center justify-center text-black text-sm shadow-sm rotate-[-15deg]">

                  📢

                </div>

              </div>

            </div>

          </div>

        );

      case 'retro-game':

        return (

          <div className="relative h-[375px] w-full bg-linear-to-b from-amber-500 via-amber-600 to-amber-700 p-4 text-white overflow-hidden flex flex-col justify-between select-none">

            <div className="relative z-10 my-auto text-center py-2">

              <h3 className="text-xl font-black uppercase text-white">Unlock Your Offer</h3>

            </div>

          </div>

        );

      default:

        return (

          <div className="h-[375px] w-full bg-linear-to-br from-indigo-600 to-purple-800 p-4 text-white flex flex-col justify-between">

            <h3 className="text-lg font-bold">{item.title}</h3>

            <p className="text-xs text-indigo-100">{item.headline}</p>

          </div>

        );

    }

  };

  return (

    <div

      className="group flex w-[210px] sm:w-[225px] md:w-[230px] lg:w-[236px] shrink-0 select-none flex-col bg-white"

    >

      {/* Top Banner Poster */}

      <div

        className="relative block w-full overflow-hidden rounded-[20px] border border-[#e5e5e5] text-left [&>div]:h-[300px] sm:[&>div]:h-[330px]"

      >

        {renderVisualPoster()}

      </div>

      {/* Card Footer Matching Screenshot */}

      <div className="flex flex-col gap-1.5 bg-white px-1 pb-1 pt-2.5">

        {/* Pills & Heart Save button */}

        <div className="flex items-center justify-between gap-2 min-h-6">

          <div className="flex items-center gap-1.5 flex-wrap">

            {item.tags.map((t, idx) => (

              <span

                key={idx}

                className="rounded-full border border-[#dedede] bg-white px-2.5 py-1 text-[13px] font-normal leading-5 text-[#707070]"

              >

                {t}

              </span>

            ))}

          </div>

          {/* Heart favorite button */}

          {item.hasHeart !== false && (

            <button

              type="button"

              tabIndex={isClone ? -1 : 0}

              aria-pressed={isBookmarked}

              onClick={(e) => {

                e.stopPropagation();

                onToggleBookmark(item.id, e);

              }}

              className={`p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ${

                isBookmarked ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-500'

              }`}

              title={isBookmarked ? 'Saved to bookmarks' : 'Save opportunity'}

              aria-label={isBookmarked ? `Remove ${item.title} from bookmarks` : `Bookmark ${item.title}`}

            >

              <Heart className={`w-[22px] h-[22px] ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />

            </button>

          )}

        </div>

        {/* Card Title */}

        <div>

          <h3 className="line-clamp-2 min-h-[46px] text-[15px] font-semibold leading-[23px] text-[#383838] transition-colors group-hover:text-[#0073e6] sm:text-[16px]">

            {item.title}

          </h3>

        </div>

      </div>

    </div>

  );

};

/* ==========================================================================
   2. FEATURED SECTION COMPONENT
   ========================================================================== */

export interface FeaturedSectionProps {
  bookmarkedIds: Set<string>;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onSelectFeatured?: (item: FeaturedItem) => void;
}

const PAUSE_DURATION_MS = 5000; // 5 seconds pause matching TrustedVeterans
const TRANSITION_DURATION_MS = 750; // 750ms smooth sliding glide
const EXTENDED_ITEMS = [...FEATURED_ITEMS, ...FEATURED_ITEMS, ...FEATURED_ITEMS];

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  bookmarkedIds,
  onToggleBookmark,
  onSelectFeatured,
}) => {
  // Start at the middle duplicate set for seamless 2-way infinite looping
  const [currentIndex, setCurrentIndex] = useState(FEATURED_ITEMS.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const [stepWidth, setStepWidth] = useState(246);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Measure card step width dynamically (card width + gap 10px)
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && trackRef.current.firstElementChild) {
        const card = trackRef.current.firstElementChild as HTMLElement;
        const rect = card.getBoundingClientRect();
        if (rect.width > 0) {
          setStepWidth(rect.width + 10);
        }
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', updateWidth);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  // Auto-advance every 5 seconds (pausing 5 sec, then sliding)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, PAUSE_DURATION_MS);

    return () => clearInterval(timer);
  }, [isPaused, trigger]);

  // Handle re-enabling transitions after a silent reposition
  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  // Seamless boundary wrap when reaching boundary clones
  const handleTransitionEnd = () => {
    if (currentIndex >= FEATURED_ITEMS.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(FEATURED_ITEMS.length);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(FEATURED_ITEMS.length);
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setTrigger((t) => t + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTrigger((t) => t + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  if (!FEATURED_ITEMS.length) return null;

  return (
    <section className="w-full min-w-0 rounded-b-[16px] bg-white px-2 pb-1 pt-1 sm:px-4">
      <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-10 md:px-14">
        <div className="mb-3.5 flex items-center gap-2.5 sm:mb-4">
          <span
            aria-hidden="true"
            className="h-9 w-[5px] shrink-0 rounded-r-full bg-[#0073e6]"
          />
          <h2 className="text-[26px] font-semibold leading-9 tracking-tight text-[#252525] sm:text-[30px]">
            Featured
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous opportunities"
            className="absolute -left-5 top-[140px] z-20 flex h-[38px] w-[38px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#d2d2d2] bg-white text-[#444] shadow-md transition hover:scale-105 hover:border-[#0073e6] hover:text-[#0073e6] active:scale-95 focus-visible:outline-2 focus-visible:outline-blue-500 sm:-left-8 sm:top-[155px] md:-left-11 lg:-left-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            role="region"
            aria-label="Featured opportunities. Pause on hover."
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="overflow-hidden py-1 select-none"
          >
            <div
              ref={trackRef}
              className="flex items-stretch gap-2.5"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translate3d(-${currentIndex * stepWidth}px, 0, 0)`,
                transition: isTransitioning
                  ? `transform ${TRANSITION_DURATION_MS}ms cubic-bezier(0.25, 1, 0.5, 1)`
                  : 'none',
                willChange: 'transform',
              }}
            >
              {EXTENDED_ITEMS.map((item, index) => (
                <FeaturedCard
                  key={`${item.id}-${index}`}
                  item={item}
                  isClone={index < FEATURED_ITEMS.length || index >= FEATURED_ITEMS.length * 2}
                  isBookmarked={bookmarkedIds.has(item.id)}
                  onToggleBookmark={onToggleBookmark}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next opportunities"
            className="absolute -right-5 top-[140px] z-20 flex h-[38px] w-[38px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#d2d2d2] bg-white text-[#444] shadow-md transition hover:scale-105 hover:border-[#0073e6] hover:text-[#0073e6] active:scale-95 focus-visible:outline-2 focus-visible:outline-blue-500 sm:-right-8 sm:top-[155px] md:-right-11 lg:-right-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
