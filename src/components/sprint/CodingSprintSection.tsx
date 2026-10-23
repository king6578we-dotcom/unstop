'use client';

import React from 'react';

export const CodingSprintSection: React.FC = () => {
  return (
    <section className="my-6 select-none w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
        {/* Card 1: 100 Days Coding Sprint */}
        <div
          onClick={() => alert('Starting 100-Day Coding Sprint! Solve daily algorithmic problems and climb the leaderboard.')}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-sky-100/80 shadow-[0_4px_20px_rgba(0,115,230,0.08)] hover:shadow-[0_8px_30px_rgba(0,115,230,0.18)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group bg-gradient-to-br from-[#ebf5ff] via-[#dbeafe] to-[#c7e2fe]"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              alert('Starting 100-Day Coding Sprint!');
            }
          }}
          aria-label="100 Days Coding Sprint"
        >
          <div className="relative w-full aspect-[500/277]">
            <img
              src="/images/card-coding-sprint-tight.png"
              alt="100 Days Coding Sprint - Level up your skills daily with our 100-Day Coding Sprint"
              className="w-full h-full object-fill block transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
            {/* Subtle sheen on hover */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors pointer-events-none" />

            {/* Clickable Start Now hotspot */}
            <div
              className="absolute left-[4%] bottom-[12%] w-[120px] h-[38px] rounded-full cursor-pointer z-10 opacity-0"
              title="Start Now"
            />
          </div>
        </div>

        {/* Card 2: Code Conquest */}
        <div
          onClick={() => alert('Launching Code Conquest! Pick your topics, difficulty, and master key algorithms.')}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-100/80 shadow-[0_4px_20px_rgba(217,119,6,0.08)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.18)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group bg-gradient-to-br from-[#fffbeb] via-[#fef3c7] to-[#fde68a]"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              alert('Launching Code Conquest!');
            }
          }}
          aria-label="Code Conquest"
        >
          <div className="relative w-full aspect-[500/277]">
            <img
              src="/images/card-code-conquest-tight.png"
              alt="Code Conquest - Pick your topics, set your difficulty, and master key concepts with ease!"
              className="w-full h-full object-fill block transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
            />
            {/* Subtle sheen on hover */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors pointer-events-none" />

            {/* Clickable Start Now hotspot */}
            <div
              className="absolute left-[4%] bottom-[12%] w-[120px] h-[38px] rounded-full cursor-pointer z-10 opacity-0"
              title="Start Now"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingSprintSection;
