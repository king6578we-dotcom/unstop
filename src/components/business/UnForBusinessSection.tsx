'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Building2,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Trophy,
  BrainCircuit,
  Briefcase,
  X,
  PhoneCall,
  Mail,
  ChevronDown,
  Plus,
  Check,
  ShieldCheck,
  GraduationCap,
  Target,
} from 'lucide-react';

export interface UnForBusinessSectionProps {
  onOpenPostModal?: () => void;
  className?: string;
  showTopNavbar?: boolean;
}

const TESTIMONIALS = [
  {
    name: 'Roshni Das',
    role: 'Head, Rewards & Talent Management, Marico',
    company: 'Marico',
    text: 'Unstop has helped streamline our nationwide campus engagements and connected us with top tier early-career talent seamlessly.',
  },
  {
    name: 'Shruti Joshi',
    role: 'Senior Manager - Talent Acquisition & Employer Branding',
    company: 'Asian Paints',
    text: 'Unstop has been instrumental in scaling Asian Paints Alchemy, creating high engagement and attracting exceptional research & engineering minds.',
  },
  {
    name: 'Zain Inhonvi',
    role: 'Senior Manager, University Relations',
    company: 'Flipkart',
    text: 'Flipkart GRiD on Unstop has consistently set benchmarks for engineering hackathons, reaching hundreds of thousands of student innovators.',
  },
  {
    name: 'Swati Patwardhan',
    role: 'Director Early Careers (APAC)',
    company: 'Optum',
    text: 'Unstop provides immense campus reach, robust assessment proctoring, and client-focused execution for our graduate hiring programs.',
  },
] as const;

const FAQS = [
  {
    q: 'What is Unstop for Business?',
    a: 'Unstop for Business is an enterprise talent acquisition and engagement platform that helps companies hire, assess, and engage early talent from 10,000+ colleges across India and beyond.',
  },
  {
    q: 'Can companies run custom hackathons and hiring challenges?',
    a: 'Yes! The platform supports full-lifecycle case competitions, coding hackathons, business simulations, and hiring challenges with customized employer branding.',
  },
  {
    q: 'How does Unstop ensure anti-cheating during assessments?',
    a: 'Unstop Assessments feature advanced AI proctoring, webcam monitoring, tab-switch detection, browser lockdown, plagiarism detection, and geo-IP tracking.',
  },
  {
    q: 'Can Unstop integrate with existing ATS and recruitment systems?',
    a: 'Yes. Enterprise integrations support Workday, Greenhouse, Lever, Darwinbox, and other recruitment workflows for seamless candidate syncing.',
  },
] as const;

export const UnForBusinessSection: React.FC<UnForBusinessSectionProps> = ({
  onOpenPostModal,
  className = '',
  showTopNavbar = true,
}) => {
  const router = useRouter();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBackToMain = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      sessionStorage.setItem('skipSplash', 'true');
      sessionStorage.setItem('hasSeenSplash', 'true');
    } catch {}

    if (
      typeof window !== 'undefined' &&
      window.history.length > 1 &&
      document.referrer &&
      document.referrer.includes(window.location.host)
    ) {
      window.history.back();
    } else {
      router.push('/?nosplash=true');
    }
  };
  const [demoFormData, setDemoFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    phone: '',
    teamSize: '100-500',
    needs: 'Campus Engagements & Hackathons',
  });

  const handleSubmitDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsDemoModalOpen(false);
      setDemoFormData({
        name: '',
        workEmail: '',
        company: '',
        phone: '',
        teamSize: '100-500',
        needs: 'Campus Engagements & Hackathons',
      });
    }, 2000);
  };

  return (
    <div className={`w-full min-w-0 bg-white font-sans ${className}`}>
      {/* ================================================================
          1. EXACT UNSTOP FOR BUSINESS NAVIGATION HEADER (Matching Photo)
         ================================================================ */}
      {showTopNavbar && (
        <header className="sticky top-0 z-40 w-full border-b border-[#e5e7eb] bg-white shadow-xs">
          <div className="mx-auto flex h-[62px] sm:h-[68px] w-full max-w-[1360px] items-center justify-between px-3 sm:px-6 lg:px-8">
            {/* Left: Unstop Brand Logo (Redirects to previous/main website without splash) */}
            <div className="flex shrink-0 items-center">
              <Link
                href="/?nosplash=true"
                onClick={handleBackToMain}
                className="flex items-center gap-2.5 group cursor-pointer"
                title="Back to Unstop (Main Website)"
                aria-label="Back to Unstop Main Website"
              >
                <img
                  src="/unstop-logo.svg"
                  alt="Unstop"
                  className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <span className="h-5 w-px bg-[#cbd5e1]" aria-hidden="true" />
                <span className="text-[13px] sm:text-[14.5px] font-bold tracking-tight text-[#1c4980] transition-colors group-hover:text-[#0073e6]">
                  for business
                </span>
              </Link>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#2d3748]">
              <div className="relative group cursor-pointer">
                <button
                  type="button"
                  className="flex items-center gap-1 py-2 hover:text-[#0073e6] transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#718096] transition group-hover:rotate-180" />
                </button>
              </div>

              <div className="relative group cursor-pointer">
                <button
                  type="button"
                  className="flex items-center gap-1 py-2 hover:text-[#0073e6] transition-colors"
                >
                  <span>Resources</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#718096] transition group-hover:rotate-180" />
                </button>
              </div>

              <a
                href="#business-clients"
                className="hover:text-[#0073e6] transition-colors py-2"
              >
                Clients
              </a>

              <a
                href="#business-testimonials"
                className="hover:text-[#0073e6] transition-colors py-2"
              >
                Testimonials
              </a>

              <div className="relative group cursor-pointer">
                <button
                  type="button"
                  className="flex items-center gap-1 py-2 hover:text-[#0073e6] transition-colors"
                >
                  <span>Hire Talent</span>
                  <ChevronDown className="h-3.5 w-3.5 text-[#718096] transition group-hover:rotate-180" />
                </button>
              </div>
            </nav>

            {/* Right: Actions & Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Divider visible on desktop */}
              <div className="hidden xl:block h-6 w-px bg-[#d1d5db] mx-1" />

              {/* 1. Request a demo (Blue pill with calendar icon) */}
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex h-[38px] sm:h-[40px] items-center gap-1.5 sm:gap-2 rounded-full bg-[#0073e6] px-3.5 sm:px-4 text-[12.5px] sm:text-[13px] font-semibold text-white shadow-xs transition hover:bg-[#005fb8] hover:shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="h-4 w-4 shrink-0" />
                <span>Request a demo</span>
              </button>

              {/* 2. + Host (White pill with border) */}
              <button
                type="button"
                onClick={onOpenPostModal || (() => setIsDemoModalOpen(true))}
                className="inline-flex h-[38px] sm:h-[40px] items-center gap-1 rounded-full border border-[#1c4980] bg-white px-3.5 sm:px-4 text-[12.5px] sm:text-[13px] font-medium text-[#1c4980] shadow-2xs transition hover:bg-[#f0f6ff] active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Plus className="h-3.5 w-3.5 stroke-[2.5]" />
                <span>Host</span>
              </button>

              {/* 3. For Candidate (Pale yellow/gold tinted pill button) */}
              <Link
                href="/?nosplash=true"
                onClick={handleBackToMain}
                className="hidden md:inline-flex h-[38px] sm:h-[40px] items-center gap-1.5 rounded-full border border-[#f59e0b]/40 bg-[#fffbeb] hover:bg-[#fef3c7] px-3 sm:px-3.5 text-[12.5px] sm:text-[13px] font-medium text-[#1f2937] transition active:scale-95 whitespace-nowrap"
                title="Switch to Unstop Candidate Portal"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-[4px] border border-[#d97706]/60 bg-white text-[9.5px] font-black text-[#1c4980] leading-none">
                  un
                </div>
                <span>For Candidate</span>
              </Link>

              {/* 4. Login (Blue pill button) */}
              <a
                href="/login"
                className="inline-flex h-[38px] sm:h-[40px] items-center justify-center rounded-full bg-[#0073e6] px-4 sm:px-5 text-[12.5px] sm:text-[13px] font-semibold text-white shadow-xs transition hover:bg-[#005fb8] active:scale-95 whitespace-nowrap"
              >
                <span>Login</span>
              </a>
            </div>
          </div>
        </header>
      )}


      {/* ================================================================
          3. HERO SECTION & VALUE PROPOSITION
         ================================================================ */}
      <section className="mx-auto w-full max-w-[1360px] px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-4 py-1 text-[12px] font-semibold text-[#0066cc] shadow-xs mb-4">
            <Building2 className="h-3.5 w-3.5 text-[#0073e6]" />
            <span>ENTERPRISE RECRUITMENT &amp; CAMPUS ENGAGEMENT</span>
          </div>

          <h1 className="text-[32px] sm:text-[42px] md:text-[48px] font-extrabold leading-[1.15] tracking-tight text-[#1a202c]">
            Hire, Assess &amp; Engage{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0073e6] via-[#0052cc] to-[#003d99]">
              32M+ Early Talent
            </span>
          </h1>

          <p className="mt-4 text-[15px] sm:text-[17px] text-[#4a5568] leading-relaxed">
            Accelerate your employer brand on 10,000+ campuses, screen engineering and business candidates with AI assessments, and hire verified top performers.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0073e6] px-7 text-[14px] font-bold text-white shadow-md hover:bg-[#005fb8] hover:shadow-lg transition active:scale-95 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule a Live Demo</span>
            </button>

            <button
              type="button"
              onClick={onOpenPostModal || (() => setIsDemoModalOpen(true))}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#cbd5e1] bg-white px-6 text-[14px] font-semibold text-[#1e293b] shadow-2xs hover:bg-[#f8fafc] hover:border-[#94a3b8] transition active:scale-95 cursor-pointer"
            >
              <span>+ Post a Competition</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border border-[#dbeafe] bg-gradient-to-r from-[#f0f7ff] via-white to-[#f0f7ff] p-4 sm:p-6 shadow-xs">
            <div>
              <div className="text-[24px] sm:text-[30px] font-black text-[#0073e6]">32M+</div>
              <div className="text-[12px] sm:text-[13px] font-medium text-[#64748b]">Active Students</div>
            </div>
            <div>
              <div className="text-[24px] sm:text-[30px] font-black text-[#0073e6]">10,000+</div>
              <div className="text-[12px] sm:text-[13px] font-medium text-[#64748b]">College Campuses</div>
            </div>
            <div>
              <div className="text-[24px] sm:text-[30px] font-black text-[#0073e6]">800+</div>
              <div className="text-[12px] sm:text-[13px] font-medium text-[#64748b]">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-[24px] sm:text-[30px] font-black text-[#0073e6]">70%</div>
              <div className="text-[12px] sm:text-[13px] font-medium text-[#64748b]">Faster Time-to-Hire</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          4. AI-POWERED HIRING FUNNEL SHOWCASE (User-Uploaded Funnel Graphic)
         ================================================================ */}
      <section className="mx-auto w-full max-w-[1240px] px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#cbe1fc] bg-gradient-to-b from-[#f8fbff] via-white to-[#f0f6ff] p-4 sm:p-8 md:p-10 shadow-[0_10px_40px_rgba(0,115,230,0.08)] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#e6f2ff] px-4 py-1 text-[12px] font-bold text-[#0060c2] shadow-2xs mb-3">
            <BrainCircuit className="h-4 w-4 text-[#0073e6]" />
            <span>END-TO-END AI RECRUITMENT WORKFLOW</span>
          </div>

          <h2 className="text-[26px] sm:text-[36px] md:text-[40px] font-extrabold text-[#1a202c] tracking-tight">
            From Sourcing to Selection —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0073e6] via-[#0052cc] to-[#cf2e4c]">
              Powered by AI Agents
            </span>
          </h2>
          <p className="mt-2 text-[14px] sm:text-[16px] text-[#4a5568] max-w-2xl mx-auto">
            Transform recruitment with autonomous agentic workflows: AI Sourcing, AI Screening, AI Calling, 360° Proctored Assessments, and Smart Interview Scheduling.
          </p>

          {/* User-Uploaded Hiring Funnel Graphic */}
          <div className="mt-8 relative mx-auto w-full max-w-[880px] overflow-hidden rounded-2xl bg-white p-2 sm:p-4 shadow-sm border border-[#e2e8f0]">
            <img
              src="/images/unstop-ai-hiring-funnel.png"
              alt="Unstop AI-Powered Hiring Funnel - Sourcing, Screening, Calling, Assessments, Interviews, and Hiring"
              className="w-full h-auto object-contain block mx-auto select-none"
              loading="eager"
            />
          </div>

          {/* Action Button below graphic */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0073e6] px-8 text-[14px] font-bold text-white shadow-md hover:bg-[#005fb8] hover:shadow-lg transition active:scale-95 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Book a Free Demo Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          5. CORE ENTERPRISE PILLARS
         ================================================================ */}
      <section id="business-products" className="bg-[#f8fbfe] py-12 sm:py-16 border-y border-[#e2edf8]">
        <div className="mx-auto w-full max-w-[1360px] px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0073e6] uppercase tracking-wider">Comprehensive Solutions</span>
            <h2 className="mt-1 text-[26px] sm:text-[34px] font-bold text-[#1e293b]">
              Everything You Need to Scale Campus &amp; Early Talent Hiring
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#d6e7fc] bg-white p-6 shadow-xs hover:shadow-md transition">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6f2ff] text-[#0073e6] mb-4">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#1e293b]">Campus Engagements &amp; Hackathons</h3>
                <p className="mt-2 text-[13.5px] text-[#64748b] leading-relaxed">
                  Ignite campus brand recall with custom case competitions, engineering hackathons, and treasure hunts.
                </p>
                <ul className="mt-4 space-y-2.5 text-[13px] text-[#475569]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>Nationwide reach across Tier 1, 2 &amp; 3 colleges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>Pre-Placement Interview (PPI) shortlists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>Dedicated event marketing &amp; campus ambassadors</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0073e6] hover:text-[#0056b3] cursor-pointer"
              >
                <span>Learn More About Engagements</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#d6e7fc] bg-white p-6 shadow-xs hover:shadow-md transition">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ede9fe] text-[#7c3aed] mb-4">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#1e293b]">AI-Proctored Assessments</h3>
                <p className="mt-2 text-[13.5px] text-[#64748b] leading-relaxed">
                  Evaluate technical skills, aptitude, and domain knowledge with automated proctoring and fraud prevention.
                </p>
                <ul className="mt-4 space-y-2.5 text-[13px] text-[#475569]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>50+ coding languages &amp; live test sandbox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>Webcam, audio &amp; tab-switch proctoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>Instant automated scoring &amp; benchmark analytics</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#7c3aed] hover:text-[#5b21b6] cursor-pointer"
              >
                <span>Explore Assessment Suite</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#d6e7fc] bg-white p-6 shadow-xs hover:shadow-md transition">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#059669] mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#1e293b]">Direct Hiring &amp; Internships</h3>
                <p className="mt-2 text-[13.5px] text-[#64748b] leading-relaxed">
                  Post jobs, search pre-verified talent profiles, and hire top graduates directly without recruiter agency overhead.
                </p>
                <ul className="mt-4 space-y-2.5 text-[13px] text-[#475569]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>Filter by CGPA, college tier &amp; graduation year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>Candidate response rates 3x higher than LinkedIn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#10b981] shrink-0" />
                    <span>Direct messaging and interview slot scheduling</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#059669] hover:text-[#047857] cursor-pointer"
              >
                <span>Discover Direct Hiring</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          5. CLIENTS & TESTIMONIALS
         ================================================================ */}
      <section id="business-testimonials" className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1360px] px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0073e6] uppercase tracking-wider">Enterprise Stories</span>
            <h2 className="mt-1 text-[26px] sm:text-[34px] font-bold text-[#1e293b]">
              Trusted by 30,000+ Recruiters &amp; Global Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-xs hover:border-[#93c5fd] hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded bg-[#eff6ff] px-2.5 py-1 text-[11px] font-bold text-[#0066cc]">
                      {t.company}
                    </span>
                    <Sparkles className="h-4 w-4 text-amber-400" />
                  </div>
                  <p className="text-[13px] text-[#475569] leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-3">
                  <div className="text-[13px] font-bold text-[#1e293b]">{t.name}</div>
                  <div className="text-[11px] text-[#64748b] leading-tight mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          6. FAQ SECTION
         ================================================================ */}
      <section id="business-faq" className="bg-[#f8fbfe] py-12 sm:py-16 border-t border-[#e2edf8]">
        <div className="mx-auto w-full max-w-[900px] px-3 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#0073e6] uppercase tracking-wider">Got Questions?</span>
            <h2 className="mt-1 text-[26px] sm:text-[32px] font-bold text-[#1e293b]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#cbd5e1] bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left font-semibold text-[#1e293b] hover:bg-slate-50 transition"
                  >
                    <span className="text-[14px] sm:text-[15px]">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#64748b] transition-transform ${
                        isOpen ? 'rotate-180 text-[#0073e6]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-[13px] text-[#475569] leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          7. BOTTOM CTA
         ================================================================ */}
      <div className="mx-auto w-full max-w-[1360px] px-3 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#1c4980] via-[#0f3460] to-[#0a2342] p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
              Ready to Transform Campus Hiring?
            </span>
            <h3 className="mt-1 text-[24px] sm:text-[30px] font-bold text-white">
              Connect with 32M+ Ambitious Candidates Today
            </h3>
            <p className="mt-2 text-[14px] text-slate-300 max-w-xl">
              Talk to our university relations experts and see how leading brands drive 10x talent ROI on Unstop.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="rounded-full bg-white px-6 py-3 text-[13px] font-bold text-[#1c4980] shadow-md hover:bg-slate-100 transition active:scale-95 cursor-pointer"
            >
              Request a Live Demo
            </button>
            <a
              href="mailto:business@unstop.com"
              className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-[13px] font-semibold text-white hover:bg-white/20 transition active:scale-95"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* ================================================================
          8. REQUEST A DEMO MODAL
         ================================================================ */}
      {isDemoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Demo Request Submitted!</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Thank you, {demoFormData.name}. An Unstop enterprise advisor will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-[#0073e6] mb-1">
                  <Building2 className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Unstop for Business</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Request an Enterprise Demo
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Fill in your details below to schedule a walkthrough with our solution engineers.
                </p>

                <form onSubmit={handleSubmitDemo} className="mt-4 space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={demoFormData.name}
                        onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-[#0073e6] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={demoFormData.workEmail}
                        onChange={(e) => setDemoFormData({ ...demoFormData, workEmail: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-[#0073e6] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={demoFormData.company}
                        onChange={(e) => setDemoFormData({ ...demoFormData, company: e.target.value })}
                        placeholder="e.g. Walmart, Asian Paints"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-[#0073e6] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={demoFormData.phone}
                        onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-[#0073e6] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Need
                    </label>
                    <select
                      value={demoFormData.needs}
                      onChange={(e) => setDemoFormData({ ...demoFormData, needs: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-[#0073e6] focus:outline-none"
                    >
                      <option value="Campus Engagements & Hackathons">Campus Engagements &amp; Hackathons</option>
                      <option value="AI Proctoring & Skill Assessments">AI Proctoring &amp; Skill Assessments</option>
                      <option value="Direct Early Talent / Graduate Hiring">Direct Early Talent / Graduate Hiring</option>
                      <option value="Internship Recruitment & PPI Drives">Internship Recruitment &amp; PPI Drives</option>
                      <option value="End-to-End Enterprise Solution">End-to-End Enterprise Solution</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[#0073e6] py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#005fb8] active:scale-98 cursor-pointer"
                    >
                      Schedule Platform Demo
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UnForBusinessSection;
