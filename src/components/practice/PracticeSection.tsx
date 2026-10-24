'use client';

import React from 'react';
import { PRACTICE_TESTS } from '@/data/mockData';
import { FileCheck, Clock, PlayCircle, ArrowRight } from 'lucide-react';
import { PracticeTest } from '@/types';

interface PracticeSectionProps {
  onStartTest: (test: PracticeTest) => void;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({ onStartTest }) => {
  const getDifficultyBadge = (difficulty: PracticeTest['difficulty']) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Intermediate':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Advanced':
        return 'bg-purple-50 text-purple-700 border-purple-200';
    }
  };

  return (
    <section
      id="mock-tests"
      className="mx-auto w-full min-w-0 max-w-[980px] bg-white py-5 px-2 sm:px-4 font-[Arial,Helvetica,sans-serif] select-none border-t border-slate-200/80"
    >
      {/* Header Matching Role-Based Section */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="relative min-w-0 pl-3.5 before:absolute before:inset-y-0 before:left-0 before:w-[4px] before:rounded-r-full before:bg-[#0073e6]">
          <h2 className="text-[21px] font-semibold leading-[1.2] text-[#383838] sm:text-[26px]">
            Mock Tests &amp; Prep Zone
          </h2>
          <p className="mt-0.5 text-[13px] font-normal leading-[20px] text-[#777] sm:text-[15px]">
            Sharpen your coding skills, aptitude speed, and system design intuition with timed practice tests.
          </p>
        </div>

        {/* View All Pill with Blue Circular Arrow Button */}
        <button
          type="button"
          onClick={() => alert('Viewing all 200+ Practice Tests & Assessments')}
          className="inline-flex h-[38px] shrink-0 items-center justify-center gap-2 rounded-full border border-[#b8d8ff] bg-[#f3f8ff] px-4 text-[14px] font-medium text-[#0073e6] transition-colors hover:bg-[#e6f1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] sm:text-[15px] cursor-pointer"
        >
          <span>View All</span>
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#0073e6] text-white">
            <ArrowRight size={11} strokeWidth={2.5} aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRACTICE_TESTS.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between select-none"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-[#0073e6] bg-blue-50 px-2 py-0.5 rounded-md">
                  {test.category}
                </span>
                <span
                  className={`text-[10.5px] font-bold px-2 py-0.5 rounded-md border ${getDifficultyBadge(
                    test.difficulty
                  )}`}
                >
                  {test.difficulty}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mt-3 line-clamp-2">
                {test.title}
              </h3>

              <div className="flex items-center gap-3 mt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-blue-500" />
                  {test.questionsCount} Questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {test.durationMinutes} mins
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 mt-4 pt-3 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">
                {test.participantsCount.toLocaleString()} taken
              </span>
              <button
                onClick={() => onStartTest(test)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-[#0073e6] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <PlayCircle className="w-3.5 h-3.5" />
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
