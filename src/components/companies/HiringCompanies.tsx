'use client';

import React from 'react';
import { HIRING_COMPANIES } from '@/data/mockData';
import { ArrowUpRight } from 'lucide-react';

interface HiringCompaniesProps {
  onSelectCompany?: (companyName: string) => void;
}

export const HiringCompanies: React.FC<HiringCompaniesProps> = ({ onSelectCompany }) => {
  return (
    <section className="py-6 border-t border-slate-200/80">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#0073e6] rounded-full"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Top Companies Actively Hiring
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse verified openings from the most admired employers.
          </p>
        </div>
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
