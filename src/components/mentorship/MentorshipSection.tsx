'use client';

import React from 'react';
import { TOP_MENTORS } from '@/data/mockData';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { Mentor } from '@/types';

interface MentorshipSectionProps {
  onBookMentor: (mentor: Mentor) => void;
}

export const MentorshipSection: React.FC<MentorshipSectionProps> = ({ onBookMentor }) => {
  return (
    <section
      id="mentorship"
      className="mx-auto w-full min-w-0 max-w-[980px] bg-white py-5 px-2 sm:px-4 font-[Arial,Helvetica,sans-serif] select-none border-t border-slate-200/80"
    >
      {/* Header Matching Role-Based Section */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="relative min-w-0 pl-3.5 before:absolute before:inset-y-0 before:left-0 before:w-[4px] before:rounded-r-full before:bg-[#0073e6]">
          <h2 className="text-[21px] font-semibold leading-[1.2] text-[#383838] sm:text-[26px]">
            1-on-1 Mentorship Sessions
          </h2>
          <p className="mt-0.5 text-[13px] font-normal leading-[20px] text-[#777] sm:text-[15px]">
            Learn directly from senior engineers and engineering leaders at FAANG &amp; top unicorns.
          </p>
        </div>

        {/* View All Pill with Blue Circular Arrow Button */}
        <button
          type="button"
          onClick={() => alert('Viewing all 500+ Mentors across Tech, Product & Management')}
          className="inline-flex h-[38px] shrink-0 items-center justify-center gap-2 rounded-full border border-[#b8d8ff] bg-[#f3f8ff] px-4 text-[14px] font-medium text-[#0073e6] transition-colors hover:bg-[#e6f1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] sm:text-[15px] cursor-pointer"
        >
          <span>View All</span>
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#0073e6] text-white">
            <ArrowRight size={11} strokeWidth={2.5} aria-hidden="true" />
          </span>
        </button>
      </div>

      {/* Grid of Mentors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {TOP_MENTORS.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between select-none"
          >
            <div>
              {/* Mentor Photo & Verified Badge */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1">{mentor.role}</p>
                  <p className="text-xs font-semibold text-[#0073e6]">{mentor.company}</p>
                </div>
              </div>

              {/* Rating and sessions */}
              <div className="flex items-center gap-3 mt-3 py-2 px-2.5 rounded-xl bg-slate-50 text-xs">
                <span className="flex items-center gap-1 font-bold text-amber-800">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  {mentor.rating}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 font-medium">
                  {mentor.sessionsCount} sessions completed
                </span>
              </div>

              {/* Expertise tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {mentor.expertise.slice(0, 3).map((exp, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-blue-50/70 text-blue-700 text-[10.5px] font-medium"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Price & Book Button */}
            <div className="border-t border-slate-100 mt-4 pt-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">Fee</span>
                <span className="text-xs font-bold text-slate-900">{mentor.hourlyRate}</span>
              </div>
              <button
                onClick={() => onBookMentor(mentor)}
                className="px-3.5 py-1.5 rounded-full bg-[#0073e6] hover:bg-[#005bb5] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Book 1:1
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
