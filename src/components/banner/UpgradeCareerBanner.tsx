'use client';

import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const UpgradeCareerBanner: React.FC = () => {
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleOpenPro = () => {
    setIsProModalOpen(true);
  };

  const handleSubscribe = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // fallback if canvas not available
    }
    setIsSubscribed(true);
    setTimeout(() => {
      setIsProModalOpen(false);
      setIsSubscribed(false);
    }, 2200);
  };

  return (
    <>
      <section className="my-5 sm:my-6 select-none w-full">
        {/* Banner Container: 100% full-width responsive with subtle hover lift and glow */}
        <div
          onClick={handleOpenPro}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-[0_4px_22px_rgba(75,28,198,0.22)] hover:shadow-[0_8px_32px_rgba(75,28,198,0.35)] transition-all duration-300 border border-purple-300/30 bg-[#3d14bd]"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpenPro();
            }
          }}
          aria-label="Upgrade Your Career with AI - Unstop Pro"
        >
          {/* Authentic High-Fidelity Banner matching User's Screenshot */}
          <div className="relative w-full aspect-[784/124] min-h-[92px] sm:min-h-[115px] flex items-center justify-center bg-gradient-to-r from-[#3e14be] via-[#4d1bd8] to-[#3a0fb5]">
            <img
              src="/images/unstop-pro-banner-clean.png"
              alt="Upgrade Your Career with AI - Unstop Pro"
              className="w-full h-full object-cover sm:object-fill rounded-2xl sm:rounded-3xl block transition-transform duration-300 group-hover:scale-[1.006]"
              loading="eager"
            />

            {/* Interactive subtle sheen overlay on hover */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors pointer-events-none rounded-2xl sm:rounded-3xl" />

            {/* Clickable Go Pro interactive hotspot */}
            <div
              className="absolute bottom-[9%] left-1/2 -translate-x-1/2 w-[110px] sm:w-[130px] h-[28px] sm:h-[34px] rounded-full cursor-pointer z-10 opacity-0"
              title="Go Pro"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenPro();
              }}
            />
          </div>
        </div>
      </section>

      {/* Unstop Pro Membership Modal */}
      {isProModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsProModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl bg-white border border-purple-100 shadow-2xl p-6 sm:p-7 overflow-hidden"
          >
            {/* Ambient Purple Glow */}
            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsProModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header with Pro badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-xs shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                UNSTOP PRO
              </span>
              <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                AI-Powered
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Upgrade Your Career with AI
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Unlock guided practice, AI mock interviews, full mock assessments, and personalized career roadmaps.
            </p>

            {/* Feature List */}
            <div className="my-5 space-y-3">
              {[
                {
                  title: 'AI-Powered Guided Mock Interviews',
                  desc: 'Real-time role-based questions with instant feedback and voice evaluation.',
                },
                {
                  title: '150+ Role-Based Mock Tests',
                  desc: 'Comprehensive tests mapped to top companies (Google, Microsoft, Uber, Meesho).',
                },
                {
                  title: 'Career-Ready Courses & Masterclasses',
                  desc: 'Curated curriculum to crack tech, product, and consulting interviews.',
                },
                {
                  title: 'Priority 1:1 Mentorship Access',
                  desc: 'Direct booking discounts with leaders from FAANG & top tech unicorns.',
                },
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{feat.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing / Action */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 line-through">₹4,999</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-slate-900">₹1,499</span>
                  <span className="text-xs text-slate-500 font-medium">/ year</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubscribe}
                disabled={isSubscribed}
                className="flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-[#4b1cc6] to-[#3a0fb5] hover:from-[#4016ae] hover:to-[#2e0b92] text-white font-bold text-sm shadow-md hover:shadow-purple-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
              >
                {isSubscribed ? (
                  <>
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>Pro Unlocked! Welcome 🎉</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                    <span>Get Unstop Pro</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpgradeCareerBanner;
