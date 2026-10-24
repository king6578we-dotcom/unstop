'use client';

import React from 'react';
import { HIRING_COMPANIES } from '@/data/mockData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface HiringCompaniesProps {
  onSelectCompany?: (companyName: string) => void;
}

export const HiringCompanies: React.FC<HiringCompaniesProps> = ({ onSelectCompany }) => {
  return (
    <section className="mx-auto w-full min-w-0 max-w-[980px] bg-white py-5 px-2 sm:px-4 font-[Arial,Helvetica,sans-serif] select-none border-t border-slate-200/80">
      {/* Header Matching Role-Based Section */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="relative min-w-0 pl-3.5 before:absolute before:inset-y-0 before:left-0 before:w-[4px] before:rounded-r-full before:bg-[#0073e6]">
          <h2 className="text-[21px] font-semibold leading-[1.2] text-[#383838] sm:text-[26px]">
            Top Companies Actively Hiring
          </h2>
          <p className="mt-0.5 text-[13px] font-normal leading-[20px] text-[#777] sm:text-[15px]">
            Browse verified openings from the most admired employers.
          </p>
        </div>

        {/* View All Pill with Blue Circular Arrow Button */}
        <button
          type="button"
          onClick={() => onSelectCompany?.('All Companies')}
          className="inline-flex h-[38px] shrink-0 items-center justify-center gap-2 rounded-full border border-[#b8d8ff] bg-[#f3f8ff] px-4 text-[14px] font-medium text-[#0073e6] transition-colors hover:bg-[#e6f1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0073e6] sm:text-[15px] cursor-pointer"
        >
          <span>View All</span>
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#0073e6] text-white">
            <ArrowRight size={11} strokeWidth={2.5} aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
        {HIRING_COMPANIES.map((company, index) => (
          <div
            key={index}
            onClick={() => onSelectCompany?.(company.name)}
            className="p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group select-none"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {company.name.slice(0, 2).toUpperCase()}
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 transition-colors" />
            </div>

            <div className="mt-3">
              <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {company.name}
              </h4>
              <p className="text-[11px] text-slate-400 truncate">{company.category}</p>
              <p className="text-[11px] font-semibold text-emerald-600 mt-1">
                {company.jobs} open roles
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
