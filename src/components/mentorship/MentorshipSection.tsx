'use client';

import React from 'react';
import { TOP_MENTORS } from '@/data/mockData';
import { Star, CheckCircle2 } from 'lucide-react';
import { Mentor } from '@/types';

interface MentorshipSectionProps {
  onBookMentor: (mentor: Mentor) => void;
}

export const MentorshipSection: React.FC<MentorshipSectionProps> = ({ onBookMentor }) => {
  return (
    <section id="mentorship" className="py-6 border-t border-slate-200/80">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#0073e6] rounded-full"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              1-on-1 Mentorship Sessions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Learn directly from senior engineers and engineering leaders at FAANG &amp; top unicorns.
          </p>
        </div>
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
