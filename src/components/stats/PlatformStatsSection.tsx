'use client';

import React from 'react';

interface MetricItem {
  label: string;
  number: string;
  unit: string;
}

const METRICS: MetricItem[] = [
  {
    label: 'Assessments',
    number: '22.3',
    unit: 'M+',
  },
  {
    label: 'Opportunities',
    number: '140',
    unit: 'K+',
  },
  {
    label: 'Organisations',
    number: '42',
    unit: 'K+',
  },
  {
    label: 'Brands trust us',
    number: '800',
    unit: '+',
  },
  {
    label: 'Countries',
    number: '78',
    unit: '+',
  },
];

export const PlatformStatsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 select-none w-full flex flex-col items-center justify-center text-center">
      {/* 32 Million+ Profiles Centered Headline with Candidate Avatars & Orbit */}
      <div className="w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-[700px] w-full px-4 flex items-center justify-center">
          <img
            src="/images/headline-32m-tight.png"
            alt="Profiles 32 Million+"
            className="w-full max-w-[620px] h-auto object-contain mx-auto block drop-shadow-xs"
            loading="lazy"
          />
        </div>
      </div>

      {/* 5 Key Platform Stats Row - Completely Centered Matching Screenshot */}
      <div className="w-full flex items-center justify-center mt-8 sm:mt-10 px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-5xl w-full text-center">
          {METRICS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center min-w-[110px]">
              <span className="text-xs sm:text-[13px] text-slate-500 font-medium mb-1.5 whitespace-nowrap">
                {stat.label}
              </span>
              <div className="flex items-baseline justify-center font-black tracking-tight leading-none">
                <span className="text-2xl sm:text-3xl md:text-4xl text-slate-900 font-black">
                  {stat.number}
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl text-[#0073e6] font-black ml-0.5">
                  {stat.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStatsSection;
