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

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || (isSignUp && !name)) {
      setError('Please fill in all required fields');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Success
    onLoginSuccess({
      name: isSignUp ? name : email.split('@')[0],
      email,
    });
    onClose();
  };

  const handleDemoSignIn = (role: 'Student' | 'Recruiter') => {
    onLoginSuccess({
      name: role === 'Student' ? 'Aditya Verma' : 'Neha Kapur (Recruiter)',
      email: role === 'Student' ? 'aditya@example.com' : 'neha@company.com',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Background decoration (dots and nodes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full border border-slate-200 border-dashed" />
        <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full border border-slate-200 border-dashed" />
        <div className="absolute bottom-10 left-1/4 w-[250px] h-[250px] rounded-full border border-slate-200 border-dashed" />
        {/* Placeholder nodes */}
        <div className="absolute top-20 right-1/4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-[10px]">un</div>
        <div className="absolute bottom-20 left-10 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-[10px]">un</div>
      </div>

      <div className="relative w-full max-w-[850px] bg-white rounded-3xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex overflow-hidden min-h-[550px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: Yellow Branding */}
        <div className="w-[45%] bg-[#ffc107] p-8 flex flex-col relative hidden md:flex rounded-l-3xl rounded-r-[40px] m-1.5 overflow-hidden">
          {/* Logo */}
          <div className="z-10">
            <span className="text-[26px] font-black text-[#1c4980] flex items-center tracking-tight">
              unstop<span className="w-2.5 h-2.5 rounded-full bg-[#0073e6] ml-0.5 mt-2"></span>
            </span>
          </div>
          
          {/* Decorative badges (recreated from screenshot) */}
          <div className="flex-1 flex flex-col items-center justify-center relative mt-4">
            {/* Using a placeholder for the person to match the layout intent */}
            <div className="relative w-full h-[280px] flex items-end justify-center">
               <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent bottom-0 rounded-t-3xl" />
               <div className="absolute top-4 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm text-center transform rotate-3">
                 <div className="w-6 h-6 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-1">
                   <div className="w-3 h-3 bg-[#0073e6] rounded-full" />
                 </div>
                 <span className="block text-[10px] font-bold text-slate-800 leading-tight">5-Day<br/>Interview Prep</span>
               </div>
               <div className="absolute top-16 right-16 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm text-center transform -rotate-3">
                 <div className="w-6 h-6 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-1">
                   <div className="w-3 h-3 bg-purple-600 rounded-full" />
                 </div>
                 <span className="block text-[10px] font-bold text-slate-800 leading-tight">Mock<br/>Interviews</span>
               </div>
               <div className="absolute bottom-12 right-0 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-sm text-center">
                 <div className="w-6 h-6 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-1">
                   <div className="w-3 h-3 bg-indigo-600 rounded-full" />
                 </div>
                 <span className="block text-[10px] font-bold text-slate-800 leading-tight">100-Day<br/>Coding Sprint</span>
               </div>
               
               {/* Practice Text inside the white container */}
               <div className="relative z-10 w-[85%] bg-white p-4 rounded-2xl shadow-sm text-center mb-4">
                 <h3 className="text-xl font-bold text-[#1c4980]">Practice</h3>
                 <p className="text-sm text-slate-600 font-medium">easy to complex problems</p>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Login Form */}
        <div className="w-full md:w-[55%] p-8 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Your Next Opportunity Starts Here</h2>
          <p className="text-[13px] text-slate-500 mt-1.5 mb-6 font-medium">
            Log in to discover competitions, jobs, and internships built for you.
          </p>

          {/* Toggle Candidate/Employer */}
          <div className="flex bg-[#f3f4f6] rounded-xl p-1 mb-6">
            <button
              type="button"
              className="flex-1 py-2 text-[13px] font-bold text-[#0073e6] bg-white rounded-lg shadow-sm transition-all"
            >
              I'm a Candidate
            </button>
            <button
              type="button"
              className="flex-1 py-2 text-[13px] font-medium text-slate-500 hover:text-slate-700 transition-all"
            >
              I'm an Employer
            </button>
          </div>

          {/* Social Logins */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
            
            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5"/>
              </svg>
              Continue with LinkedIn
            </button>

            <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700">
              <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
                <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
                <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
                <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
              </svg>
              Continue with Microsoft
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-100"></div>
            <span className="text-[11px] font-medium text-slate-400">OR</span>
            <div className="flex-1 h-px bg-slate-100"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full h-11 px-4 rounded-xl border border-slate-200 text-sm focus:border-[#0073e6] focus:ring-2 focus:ring-blue-100 outline-none"
              />
              <div className="text-right mt-1.5">
                <button type="button" className="text-[12px] font-bold text-[#0073e6] hover:underline cursor-pointer">
                  Login via Password
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                email 
                  ? 'bg-[#0073e6] hover:bg-[#005bb5] text-white shadow-md active:scale-99 cursor-pointer' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Continue with OTP
            </button>
          </form>

          {/* Footer Terms */}
          <p className="text-[11px] text-center text-slate-500 mt-6 max-w-xs mx-auto leading-relaxed">
            By signing in, you accept the <a href="#" className="text-[#0073e6] hover:underline">Terms of Service</a> and acknowledge our <a href="#" className="text-[#0073e6] hover:underline">Privacy Policy</a>.
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
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
