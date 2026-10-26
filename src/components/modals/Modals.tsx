'use client';

import React, { useState } from 'react';
import {
  X,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  Info,
  Briefcase,
  Trophy,
  Compass,
  ChevronRight,
  ArrowLeft,
  PlusCircle,
  Target,
  FileText,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Opportunity, FeaturedItem } from '@/types';

/* ==========================================================================
   1. AUTH MODAL
   ========================================================================== */

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string }) => void;
}

const MODAL_CANDIDATE_BANNERS = [
  {
    id: 'practice',
    alt: 'Unstop Practice easy to complex problems',
    src: '/images/unstop-login-practice-panel.png',
  },
  {
    id: 'mentorship',
    alt: 'Unstop Mentorship from top mentors',
    src: '/images/unstop-login-mentorship-panel.png',
  },
  {
    id: 'compete',
    alt: 'Unstop Compete in 130k+ opportunities',
    src: '/images/unstop-login-compete-panel.png',
  },
];

const MODAL_EMPLOYER_BANNERS = [
  {
    id: 'host',
    alt: 'Unstop Host jobs and internships for free',
    src: '/images/unstop-employer-host-panel.png',
  },
  {
    id: 'assessments',
    alt: 'Unstop Assessments with advance proctoring features',
    src: '/images/unstop-employer-assessments-panel.png',
  },
];

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [userRole, setUserRole] = useState<'candidate' | 'employer'>('candidate');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'otp' | 'password'>('otp');
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  const banners = userRole === 'employer' ? MODAL_EMPLOYER_BANNERS : MODAL_CANDIDATE_BANNERS;

  React.useEffect(() => {
    setActiveBannerIndex(0);
  }, [userRole]);

  React.useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isOpen, banners.length]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    onLoginSuccess({
      name: email.split('@')[0] || 'User',
      email,
    });
    onClose();
  };

  const handleSocialClick = (provider: string) => {
    const mockEmail = `user@${provider.toLowerCase()}.com`;
    onLoginSuccess({
      name: provider + ' User',
      email: mockEmail,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-14 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Background decoration (dots and nodes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full border border-slate-200 border-dashed" />
        <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full border border-slate-200 border-dashed" />
        <div className="absolute bottom-10 left-1/4 w-[250px] h-[250px] rounded-full border border-slate-200 border-dashed" />
        <div className="absolute top-20 right-1/4 w-8 h-8 bg-[#1c4980] text-white rounded-full flex items-center justify-center font-bold text-[10px]">un</div>
        <div className="absolute bottom-20 left-10 w-8 h-8 bg-[#1c4980] text-white rounded-full flex items-center justify-center font-bold text-[10px]">un</div>
      </div>

      <div className="relative w-full max-w-[710px] max-h-[92vh] bg-white rounded-[20px] shadow-[0_20px_50px_-10px_rgba(15,23,42,0.18)] border border-[#edf0f4] flex overflow-hidden p-[6px] sm:p-[8px] md:h-[480px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer z-20"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LEFT COLUMN: Branding Banner (Candidate: Yellow, Employer: Blue) */}
        <div
          className={`w-[270px] shrink-0 relative hidden md:block rounded-l-[15px] rounded-r-[32px] overflow-hidden select-none transition-colors duration-300 ${
            userRole === 'employer' ? 'bg-[#092955]' : 'bg-[#ffc700]'
          }`}
        >
          {banners.map((b, idx) => (
            <img
              key={b.id}
              src={b.src}
              alt={b.alt}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out ${
                idx === activeBannerIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'
              }`}
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/25 px-2 py-0.5">
            {banners.map((b, idx) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setActiveBannerIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeBannerIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Login Form (Proportionally Scaled) */}
        <div className="flex-1 px-5 py-3 sm:px-5.5 sm:py-3.5 flex flex-col justify-between min-w-0 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#cfd5dd_transparent]">
          <div>
            <h2 className="text-[17px] sm:text-[18px] font-bold text-[#1a202c] tracking-[-0.3px] leading-tight">
              {userRole === 'employer'
                ? 'Hire the Best Campus Talent'
                : 'Your Next Opportunity Starts Here'}
            </h2>
            <p className="text-[11px] text-[#64748b] mt-0.5 leading-relaxed">
              {userRole === 'employer'
                ? 'Log in to manage campaigns, events, and hiring pipeline.'
                : 'Log in to discover competitions, jobs, and internships.'}
            </p>

            {/* Toggle Candidate/Employer */}
            <div className="mt-2.5 flex h-[32px] sm:h-[34px] items-center rounded-xl border border-[#e5e7eb] bg-[#f3f4f6] p-[2px]">
              <button
                type="button"
                onClick={() => setUserRole('candidate')}
                className={`h-full flex-1 rounded-[8px] text-[11px] sm:text-[11.5px] transition ${
                  userRole === 'candidate'
                    ? 'font-semibold text-[#0066f5] bg-white shadow-xs'
                    : 'font-medium text-[#4b5563] hover:text-[#111]'
                }`}
              >
                I&apos;m a Candidate
              </button>
              <button
                type="button"
                onClick={() => setUserRole('employer')}
                className={`h-full flex-1 rounded-[8px] text-[11px] sm:text-[11.5px] transition ${
                  userRole === 'employer'
                    ? 'font-semibold text-[#0066f5] bg-white shadow-xs'
                    : 'font-medium text-[#4b5563] hover:text-[#111]'
                }`}
              >
                I&apos;m an Employer
              </button>
            </div>

            {/* Social Logins */}
            <div className="mt-2 space-y-1.5">
              <button
                type="button"
                onClick={() => handleSocialClick('Google')}
                className="relative flex h-[32px] sm:h-[33px] w-full items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[11px] sm:text-[11.5px] font-medium text-[#374151] transition hover:bg-slate-50 cursor-pointer"
              >
                <span className="absolute left-[13px] grid h-4 w-4 place-items-center">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </span>
                Continue with Google
              </button>
              
              <button
                type="button"
                onClick={() => handleSocialClick('LinkedIn')}
                className="relative flex h-[32px] sm:h-[33px] w-full items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[11px] sm:text-[11.5px] font-medium text-[#374151] transition hover:bg-slate-50 cursor-pointer"
              >
                <span className="absolute left-[13px] flex h-[15px] w-[15px] items-center justify-center rounded-[2px] bg-[#0a66c2] text-[9.5px] font-bold leading-none text-white">
                  in
                </span>
                Continue with LinkedIn
              </button>

              <button
                type="button"
                onClick={() => handleSocialClick('Microsoft')}
                className="relative flex h-[32px] sm:h-[33px] w-full items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[11px] sm:text-[11.5px] font-medium text-[#374151] transition hover:bg-slate-50 cursor-pointer"
              >
                <span className="absolute left-[13px] grid h-[13px] w-[13px] grid-cols-2 gap-[1.5px]">
                  <span className="bg-[#f25022]" />
                  <span className="bg-[#7fba00]" />
                  <span className="bg-[#00a4ef]" />
                  <span className="bg-[#ffb900]" />
                </span>
                Continue with Microsoft
              </button>
            </div>

            {/* Divider */}
            <div className="my-1.5 flex items-center gap-2 text-[9.5px] font-medium text-[#9ca3af]">
              <div className="flex-1 h-px bg-[#e5e7eb]" />
              <span>OR</span>
              <div className="flex-1 h-px bg-[#e5e7eb]" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-0.5 flex items-center justify-between">
                  <label className="block text-[10.5px] font-medium text-[#374151]">
                    Email <span className="text-[#e74c3c]">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setLoginMethod(m => m === 'otp' ? 'password' : 'otp')}
                    className="text-[10px] font-medium text-[#0066f5] hover:underline cursor-pointer"
                  >
                    {loginMethod === 'otp' ? 'Login via Password' : 'Login via OTP'}
                  </button>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="h-[32px] sm:h-[33px] w-full rounded-xl border border-[#e5e7eb] bg-white px-3 text-[11.5px] text-[#1f2937] outline-none transition placeholder:text-[#9ca3af] focus:border-[#0066f5] focus:ring-1 focus:ring-[#0066f5]"
                />

                {loginMethod === 'password' && (
                  <div className="mt-1.5">
                    <label className="mb-0.5 block text-[10.5px] font-medium text-[#374151]">
                      Password <span className="text-[#e74c3c]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="h-[32px] sm:h-[33px] w-full rounded-xl border border-[#e5e7eb] bg-white px-3 pr-8 text-[11.5px] outline-none transition placeholder:text-[#9ca3af] focus:border-[#0066f5] focus:ring-1 focus:ring-[#0066f5]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(v => !v)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#4b5563] cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={!email}
                className="mt-2 flex h-[32px] sm:h-[34px] w-full items-center justify-center rounded-xl bg-[#0066f5] text-[11.5px] font-semibold text-white transition hover:bg-[#0057d4] disabled:bg-[#f3f4f6] disabled:text-[#9ca3af] disabled:cursor-not-allowed cursor-pointer"
              >
                {loginMethod === 'otp' ? 'Continue with OTP' : 'Log In'}
              </button>
            </form>
          </div>

          {/* Footer Terms */}
          <p className="mt-1.5 text-center text-[9.5px] leading-tight text-[#6b7280]">
            By signing in, you accept the{' '}
            <a href="/terms" className="text-[#0066f5] hover:underline">
              Terms of Service
            </a>{' '}
            and acknowledge our{' '}
            <a href="/privacy" className="text-[#0066f5] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   2. OPPORTUNITY DETAIL MODAL
   ========================================================================== */

export interface OpportunityDetailModalProps {
  item: Opportunity | FeaturedItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OpportunityDetailModal: React.FC<OpportunityDetailModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  const [hasApplied, setHasApplied] = useState(false);

  if (!isOpen || !item) return null;

  const isFeatured = 'bannerType' in item;
  const title = item.title;
  const company = isFeatured ? item.companyName : item.company;
  const stipend = isFeatured ? item.stipendOrPrize : item.salaryOrStipend;
  const location = item.location;
  const deadline = item.deadline;
  const description = item.description;
  const eligibility = item.eligibility;
  const perks = isFeatured
    ? item.perks
    : ['Certificate of Completion', 'Letter of Recommendation', 'Flexible Work Schedule'];

  const handleApply = () => {
    // Trigger confetti celebration!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setHasApplied(true);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Header with sticky close button */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              Actively Accepting Applications
            </span>
          </div>
          <button
            onClick={() => {
              setHasApplied(false);
              onClose();
            }}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 space-y-6">
          {/* Company & Title Header */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0073e6]">
              <Building2 className="w-3.5 h-3.5" />
              <span>{company}</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mt-1 leading-tight">
              {title}
            </h2>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-400 block font-medium">Stipend / Prize</span>
                <span className="text-sm font-bold text-emerald-600 mt-0.5 block truncate">
                  {stipend || 'Competitive'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-400 block font-medium">Location</span>
                <span className="text-sm font-bold text-slate-800 mt-0.5 block truncate">
                  {location}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-slate-400 block font-medium">Deadline</span>
                <span className="text-sm font-bold text-amber-800 mt-0.5 block truncate">
                  {deadline}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              About the Opportunity
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Eligibility Criteria
            </h4>
            <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700 leading-relaxed">
              {eligibility}
            </div>
          </div>

          {/* Perks & Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Perks &amp; Highlights
            </h4>
            <div className="space-y-2">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-400 hidden sm:block">
            Verified by Unstop Trust &amp; Safety
          </div>

          {hasApplied ? (
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Application Submitted Successfully!</span>
            </div>
          ) : (
            <button
              onClick={handleApply}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0073e6] hover:bg-[#005bb5] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer ml-auto"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply Now</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   3. POST JOB MODAL
   ========================================================================== */

export interface PostJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddOpportunity: (opp: Opportunity) => void;
}

export type ModalView = 'menu' | 'form';

export const PostJobModal: React.FC<PostJobModalProps> = ({
  isOpen,
  onClose,
  onAddOpportunity,
}) => {
  const [view, setView] = useState<ModalView>('menu');
  const [selectedType, setSelectedType] = useState<'job' | 'internship' | 'opportunity'>('job');

  // Form states
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState<'internship' | 'job' | 'competition' | 'hackathon'>('job');
  const [type, setType] = useState<'Remote' | 'On-site' | 'Hybrid'>('Remote');
  const [location, setLocation] = useState('');
  const [stipend, setStipend] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [organizerNotice, setOrganizerNotice] = useState(false);

  if (!isOpen) return null;

  const handleOpenForm = (postingType: 'job' | 'internship' | 'opportunity') => {
    setSelectedType(postingType);
    if (postingType === 'job') {
      setCategory('job');
      setStipend('₹12 - 18 LPA');
    } else if (postingType === 'internship') {
      setCategory('internship');
      setStipend('₹25,000 / month');
    } else {
      setCategory('competition');
      setStipend('₹1,00,000 Prize Pool');
    }
    setView('form');
  };

  const handleClose = () => {
    setView('menu');
    setOrganizerNotice(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !company) return;

    const newOpp: Opportunity = {
      id: `custom-${Date.now()}`,
      title,
      company,
      logo: company.slice(0, 2).toUpperCase(),
      category,
      type,
      location: location || 'Multiple Locations',
      salaryOrStipend: stipend || 'Competitive',
      postedDate: 'Just now',
      deadline: '14 days left',
      applicantsCount: 1,
      tags: tags ? tags.split(',').map((t) => t.trim()) : ['Hiring', category],
      description: description || 'Exciting role posted via Unstop recruiter console.',
      eligibility: 'Open to college students and early-career job seekers.',
    };

    onAddOpportunity(newOpp);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      handleClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-[520px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-7 max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex items-center gap-3.5 pb-2">
          <button
            onClick={view === 'form' ? () => setView('menu') : handleClose}
            className="p-1 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={view === 'form' ? 'Back to menu' : 'Close modal'}
          >
            {view === 'form' ? (
              <ArrowLeft className="w-[18px] h-[18px] text-slate-700" />
            ) : (
              <X className="w-[18px] h-[18px] text-slate-700" />
            )}
          </button>
          <h2 className="text-[17px] font-medium text-slate-900">
            {view === 'form'
              ? selectedType === 'job'
                ? 'Post a Job'
                : selectedType === 'internship'
                ? 'Post an Internship'
                : 'Post an Opportunity'
              : 'Post'}
          </h2>
        </div>

        {/* VIEW 1: MENU (Exact match to Photo 2) */}
        {view === 'menu' && (
          <div className="mt-4 space-y-4">
            {/* Info Banner */}
            <div className="flex items-center gap-3 px-4 py-3.5 rounded-[10px] bg-[#eff6ff] text-[#1e40af]">
              <Info className="w-[18px] h-[18px] text-[#2563eb] shrink-0" />
              <p className="text-[13px] leading-snug">
                Looking to hire? <span className="text-[#1d4ed8]">Start by posting a job or internship.</span>
              </p>
            </div>

            {/* Organizer Notice toast if clicked */}
            {organizerNotice && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-center justify-between animate-in fade-in">
                <span>Organizer dashboard is ready for your registered events &amp; listings.</span>
                <button
                  onClick={() => setOrganizerNotice(false)}
                  className="font-bold ml-2 text-amber-900 hover:underline cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* List of 4 Actions matching Screenshot 2 */}
            <div className="divide-y divide-slate-100 pt-1">
              {/* 1. Post a Job */}
              <button
                type="button"
                onClick={() => handleOpenForm('job')}
                className="w-full flex items-center gap-4 py-3.5 px-2 rounded-xl text-left hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#555555] shrink-0">
                  <Briefcase className="w-[18px] h-[18px] stroke-[1.5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-medium text-[#222222]">
                    Post a Job
                  </h3>
                  <p className="text-[13px] text-slate-500 mt-0.5">
                    Fill permanent positions with qualified professionals
                  </p>
                </div>
              </button>

              {/* 2. Post an Internship */}
              <button
                type="button"
                onClick={() => handleOpenForm('internship')}
                className="w-full flex items-center gap-4 py-3.5 px-2 rounded-xl text-left hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#555555] shrink-0">
                  <FileText className="w-[18px] h-[18px] stroke-[1.5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-medium text-[#222222]">
                    Post an Internship
                  </h3>
                  <p className="text-[13px] text-slate-500 mt-0.5">
                    Build your talent pipeline with emerging prospects
                  </p>
                </div>
              </button>

              {/* 3. Opportunity */}
              <button
                type="button"
                onClick={() => handleOpenForm('opportunity')}
                className="w-full flex items-center justify-between gap-4 py-3.5 px-2 rounded-xl text-left hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#555555] shrink-0">
                    <Trophy className="w-[18px] h-[18px] stroke-[1.5]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-medium text-[#222222]">
                      Opportunity
                    </h3>
                    <p className="text-[13px] text-slate-500 mt-0.5">
                      Engage your target audience
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 shrink-0" />
              </button>

              {/* 4. Go to organizer dashboard */}
              <button
                type="button"
                onClick={() => setOrganizerNotice(true)}
                className="w-full flex items-center justify-between gap-4 py-3.5 px-2 rounded-xl text-left hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#555555] shrink-0">
                    <Target className="w-[18px] h-[18px] stroke-[1.5]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-medium text-[#222222]">
                      Go to organizer dashboard
                    </h3>
                    <p className="text-[13px] text-slate-500 mt-0.5">
                      Manage listing, Festivals, Assessments
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 shrink-0" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: FORM TO PUBLISH (Interactive Flow) */}
        {view === 'form' && (
          <div className="mt-5">
            {isSuccess ? (
              <div className="py-12 text-center text-emerald-600">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500 mb-2 animate-bounce" />
                <h4 className="text-lg font-bold">Opportunity Published!</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Your opening is now live and accepting applications on Unstop.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {selectedType === 'opportunity' ? 'Event / Competition Title *' : 'Role Title *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={
                      selectedType === 'job'
                        ? 'e.g. Senior Software Engineer'
                        : selectedType === 'internship'
                        ? 'e.g. Product Design Intern'
                        : 'e.g. National Hackathon 2026'
                    }
                    className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#0073e6] focus:ring-2 focus:ring-blue-100 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Google India / Acme"
                      className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#0073e6] focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Mode / Format
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value as 'Remote' | 'On-site' | 'Hybrid')}
                      className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#0073e6] focus:ring-2 focus:ring-blue-100 outline-none bg-white"
                    >
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {selectedType === 'opportunity' ? 'Prize Pool / Rewards' : 'Salary / Stipend'}
                    </label>
                    <input
                      type="text"
                      value={stipend}
                      onChange={(e) => setStipend(e.target.value)}
                      placeholder="e.g. ₹25,000 / month"
                      className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#0073e6] focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Bengaluru / Pan-India"
                      className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#0073e6] focus:ring-2 focus:ring-blue-100 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="React, AI, Python, Fresher"
                    className="w-full h-10 px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#0073e6] focus:ring-2 focus:ring-blue-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Description &amp; Highlights
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide responsibilities, eligibility and application instructions..."
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#0073e6] focus:ring-2 focus:ring-blue-100 outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setView('menu')}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#0073e6] hover:bg-[#005bb5] text-white text-sm font-bold shadow-md transition-all cursor-pointer active:scale-99 flex items-center justify-center gap-2"
                  >
                    <PlusCircle className="w-4 h-4" />
                    Publish {selectedType === 'opportunity' ? 'Opportunity' : 'Opening'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
