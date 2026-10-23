'use client';

import React from 'react';
import { PRACTICE_TESTS } from '@/data/mockData';
import { FileCheck, Clock, PlayCircle } from 'lucide-react';
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
    <section id="mock-tests" className="py-6 border-t border-slate-200/80">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#0073e6] rounded-full"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Mock Tests &amp; Prep Zone
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Sharpen your coding skills, aptitude speed, and system design intuition with timed practice tests.
          </p>
        </div>
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
