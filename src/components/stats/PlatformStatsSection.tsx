'use client';

import React from 'react';

const stats = [
  { label: 'Assessments', number: '22.3', suffix: 'M+' },
  { label: 'Opportunities', number: '140', suffix: 'K+' },
  { label: 'Organisations', number: '42', suffix: 'K+' },
  { label: 'Brands trust us', number: '800', suffix: '+' },
  { label: 'Countries', number: '78', suffix: '+' },
];

export const PlatformStatsSection: React.FC = () => {
  return (
    <section
      aria-labelledby="platform-profiles-title"
      className="mx-auto pt-10 sm:pt-16 pb-8 sm:pb-10 w-full min-w-0 max-w-[980px] px-2 sm:px-4 select-none bg-white font-sans"
    >
      <div className="w-full">
        {/* Profiles Section Header */}
        <h2
          id="platform-profiles-title"
          className="text-[14px] sm:text-[15px] md:text-[16px] font-normal text-[#383838] m-0"
        >
          Profiles
        </h2>

        {/* 32 + Total Users graphic from official Unstop CloudFront CDN */}
        <div className="mt-1 sm:mt-2 flex items-center select-none overflow-hidden">
          <span className="text-[#0073e6] font-extrabold text-[42px] xs:text-[54px] sm:text-[80px] md:text-[104px] leading-none tracking-tight shrink-0">
            32
          </span>
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/unstop_total_users_new.png?d=700x225"
            alt="Million+"
            className="h-[44px] xs:h-[58px] sm:h-[86px] md:h-[112px] max-w-[65%] w-auto object-contain block select-none pointer-events-none"
            loading="eager"
          />
        </div>

        {/* Platform statistics */}
        <dl className="mt-8 sm:mt-10 grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-3 md:flex md:justify-between md:gap-0">
          {stats.map(({ label, number, suffix }) => (
            <div key={label} className="min-w-0">
              <dt className="text-[13px] sm:text-[14px] md:text-[15px] font-normal text-[#475569] leading-tight">
                {label}
              </dt>
              <dd className="mt-1.5 sm:mt-2 text-[24px] sm:text-[30px] md:text-[34px] font-bold tracking-tight text-[#1c1c1c] leading-none">
                {number}
                <span className="text-[#0073e6]">{suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default PlatformStatsSection;