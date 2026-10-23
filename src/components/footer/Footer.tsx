'use client';

import React, { useState } from 'react';
import {
  Heart,
  Send,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Lock,
  CheckCircle2,
} from 'lucide-react';
import { UnstopLogo } from '@/components/ui/UnstopLogo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setIsSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="mt-14 w-full select-none">
      {/* 1. Upper Light-Blue Section (Photo 1 & Photo 2 & Photo 3 top half) with Chamfer Curve */}
      <div className="relative bg-[#f0f6fc] pt-8 sm:pt-9 pb-10 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        {/* Top Chamfered Cutout & Border matching screenshot */}
        <div className="absolute top-0 left-0 right-0 w-full h-[36px] pointer-events-none overflow-hidden z-10">
          <svg
            viewBox="0 0 1000 36"
            preserveAspectRatio="none"
            className="w-full h-full block"
          >
            {/* White cutout wedge on the upper right side */}
            <path
              d="M 370 0 L 1000 0 L 1000 32 L 440 32 Q 435 32 432 30 L 378 3 Q 375 1 370 0 Z"
              fill="#ffffff"
            />
            {/* Soft border line along the chamfer slope and top edges */}
            <path
              d="M 0 1 L 370 1 Q 375 1 378 3 L 432 30 Q 435 32 440 32 L 1000 32"
              fill="none"
              stroke="#cee2f5"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="max-w-[1360px] mx-auto">
          {/* Top Brand & Social Links Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 pt-1 sm:pt-0">
            <div>
              <div className="flex items-center gap-2">
                <UnstopLogo variant="full" className="h-7 sm:h-8 w-auto" />
              </div>
              <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1 font-normal">
                Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> in{' '}
                <strong className="font-semibold text-slate-700">India</strong> for the{' '}
                <strong className="font-semibold text-slate-700">world</strong>
              </p>
            </div>

            {/* Social Icons matching Photo 2: X, Instagram, LinkedIn, Facebook, Telegram, Discord, YouTube */}
            <div className="flex items-center gap-3.5 text-slate-800 pt-2 sm:pt-3">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center hover:text-[#0073e6] transition-colors"
                title="X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center hover:text-pink-600 transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center hover:text-[#0073e6] transition-colors"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center hover:text-blue-600 transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center hover:text-sky-500 transition-colors"
                title="Telegram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.196 1.006.128.832.942z" />
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center hover:text-indigo-600 transition-colors"
                title="Discord"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center hover:text-red-600 transition-colors"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Dotted separator line */}
          <div className="w-full border-b border-dashed border-[#c8ddf2] mb-8" />

          {/* 4 Multi-Level Columns Matching Photo 2 & Photo 3 Exactly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
            {/* Column 1: Products, Mentorship, Our Properties, Legal */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Products
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#unstop" className="hover:text-[#0073e6] transition-colors">Engage Talent</a></li>
                  <li><a href="#unstop" className="hover:text-[#0073e6] transition-colors">AI Sourcing Agent</a></li>
                  <li><a href="#unstop" className="hover:text-[#0073e6] transition-colors">AI Screening Agent</a></li>
                  <li><a href="#unstop" className="hover:text-[#0073e6] transition-colors">AI Assessment Agent</a></li>
                  <li><a href="#unstop" className="hover:text-[#0073e6] transition-colors">AI Interview Agent</a></li>
                  <li><a href="#unstop" className="hover:text-[#0073e6] transition-colors">AI Proctoring Agent</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Mentorship
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#mentorship" className="hover:text-[#0073e6] transition-colors">Be a Mentor</a></li>
                  <li><a href="#mentorship" className="hover:text-[#0073e6] transition-colors">Explore Mentors</a></li>
                  <li><a href="#mentorship" className="hover:text-[#0073e6] transition-colors">Mentorship FAQs</a></li>
                  <li><a href="#mentorship" className="hover:text-[#0073e6] transition-colors">Mentorship Blogs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Our Properties
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#awards" className="hover:text-[#0073e6] transition-colors">Unstop Talent Awards 2026</a></li>
                  <li><a href="#meet" className="hover:text-[#0073e6] transition-colors">Unstop Talent Meet 2026</a></li>
                  <li><a href="#report" className="hover:text-[#0073e6] transition-colors">Unstop Talent Report 2026</a></li>
                  <li><a href="#calculator" className="hover:text-[#0073e6] transition-colors">Education Loan EMI Calculator</a></li>
                  <li><a href="#club" className="hover:text-[#0073e6] transition-colors">Unstop Igniters Club</a></li>
                  <li><a href="#quizzing" className="hover:text-[#0073e6] transition-colors">Online Quizzing Festival</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Legal
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#terms" className="hover:text-[#0073e6] transition-colors">Terms &amp; Conditions</a></li>
                  <li><a href="#privacy" className="hover:text-[#0073e6] transition-colors">Privacy Policy</a></li>
                  <li><a href="#sitemap" className="hover:text-[#0073e6] transition-colors">Sitemap</a></li>
                </ul>
              </div>
            </div>

            {/* Column 2: Participate, Apply, For Business */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Participate
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#competitions" className="hover:text-[#0073e6] transition-colors">Competitions &amp; Challenges</a></li>
                  <li><a href="#assessments" className="hover:text-[#0073e6] transition-colors">Assessments</a></li>
                  <li><a href="#hackathons" className="hover:text-[#0073e6] transition-colors">Hackathons</a></li>
                  <li><a href="#workshops" className="hover:text-[#0073e6] transition-colors">Workshops &amp; Webinars</a></li>
                  <li><a href="#conferences" className="hover:text-[#0073e6] transition-colors">Conferences</a></li>
                  <li><a href="#cultural" className="hover:text-[#0073e6] transition-colors">Cultural Events</a></li>
                  <li><a href="#festivals" className="hover:text-[#0073e6] transition-colors">College Festivals</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Apply
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#internships" className="hover:text-[#0073e6] transition-colors">Internships</a></li>
                  <li><a href="#jobs" className="hover:text-[#0073e6] transition-colors">Jobs</a></li>
                  <li><a href="#scholarships" className="hover:text-[#0073e6] transition-colors">Scholarships</a></li>
                  <li><a href="#internships" className="hover:text-[#0073e6] transition-colors">Summer Internships</a></li>
                  <li><a href="#internships" className="hover:text-[#0073e6] transition-colors">PPO Internships</a></li>
                  <li><a href="#jobs" className="hover:text-[#0073e6] transition-colors">Government Jobs</a></li>
                  <li><a href="#internships" className="hover:text-[#0073e6] transition-colors">Government Internship</a></li>
                  <li><a href="#internships" className="hover:text-[#0073e6] transition-colors">International Internships</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  For Business
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#clientele" className="hover:text-[#0073e6] transition-colors">Clientele</a></li>
                  <li><a href="#partner" className="hover:text-[#0073e6] transition-colors">Partner With Us</a></li>
                  <li><a href="#partners" className="hover:text-[#0073e6] transition-colors">Partners</a></li>
                  <li><a href="#testimonials" className="hover:text-[#0073e6] transition-colors">Testimonials</a></li>
                  <li><a href="#casestudies" className="hover:text-[#0073e6] transition-colors">Case Studies</a></li>
                  <li><a href="#post" className="hover:text-[#0073e6] transition-colors">Post now</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Learn, Practice, Others */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Learn
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#courses" className="hover:text-[#0073e6] transition-colors">Courses</a></li>
                  <li><a href="#articles" className="hover:text-[#0073e6] transition-colors">Articles</a></li>
                  <li><a href="#blog" className="hover:text-[#0073e6] transition-colors">Blog Series</a></li>
                  <li><a href="#workshops" className="hover:text-[#0073e6] transition-colors">Workshops</a></li>
                  <li><a href="#resources" className="hover:text-[#0073e6] transition-colors">Resources</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Practice
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#practice" className="hover:text-[#0073e6] transition-colors">5 Days Interview Prep</a></li>
                  <li><a href="#practice" className="hover:text-[#0073e6] transition-colors">Code &amp; Ace Hiring Assessments</a></li>
                  <li><a href="#practice" className="hover:text-[#0073e6] transition-colors">100-Day of Coding Sprint</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2.5">
                  Others
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li><a href="#about" className="hover:text-[#0073e6] transition-colors">About Us</a></li>
                  <li><a href="#careers" className="hover:text-[#0073e6] transition-colors">Careers</a></li>
                  <li><a href="#life" className="hover:text-[#0073e6] transition-colors">Life at Unstop</a></li>
                  <li><a href="#faqs" className="hover:text-[#0073e6] transition-colors">FAQs</a></li>
                  <li><a href="#branding" className="hover:text-[#0073e6] transition-colors">Branding Guidelines</a></li>
                  <li><a href="#rewards" className="hover:text-[#0073e6] transition-colors">Unstop Rewards Program</a></li>
                  <li><a href="#sharktank" className="hover:text-[#0073e6] transition-colors">Unstop on Shark Tank</a></li>
                  <li><a href="#champions" className="hover:text-[#0073e6] transition-colors">Unstop Campus Champions</a></li>
                  <li><a href="#feature" className="hover:text-[#0073e6] transition-colors">Request a Feature</a></li>
                  <li><a href="#resume" className="hover:text-[#0073e6] transition-colors">Build your Resume</a></li>
                </ul>
              </div>
            </div>

            {/* Column 4: We're Hiring badge, Contact Us, Newsletter & App Badges */}
            <div className="space-y-5">
              {/* We're Hiring badge matching Photo 2 */}
              <div>
                <div className="inline-flex items-center gap-1.5">
                  <span className="text-2xl font-black text-[#0073e6] tracking-tight">We&apos;re</span>
                  <span className="w-16 h-8 rounded-full bg-[#ffc72c] text-slate-950 font-black text-xs flex items-center justify-center -rotate-6 shadow-xs border border-amber-400">
                    Hiring!
                  </span>
                </div>
              </div>

              {/* Dotted mini separator */}
              <div className="w-full border-b border-dashed border-[#c8ddf2]" />

              <div className="space-y-2 text-xs font-semibold text-slate-800">
                <a href="#contact" className="flex items-center gap-1 hover:text-[#0073e6] transition-colors">
                  <span>Contact Us</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="#story" className="flex items-center gap-1 hover:text-[#0073e6] transition-colors">
                  <span>Share Your Story Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Stay Updated & Newsletter Subscription */}
              <div>
                <h5 className="text-xs font-bold text-slate-800 mb-1">Stay Updated</h5>
                <p className="text-[11px] text-slate-500 leading-snug mb-2.5">
                  Get regular updates on opportunities/jobs to showcase your talent and get hired.
                </p>
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center rounded-xl bg-slate-200/80 p-1 border border-slate-300/80"
                >
                  <input
                    type="email"
                    required
                    placeholder="Subscribe to our newsletter!"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-transparent px-2.5 text-xs text-slate-800 placeholder:text-slate-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-lg bg-[#0073e6] hover:bg-[#005bb5] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                    title="Subscribe"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
                {isSubscribed && (
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 inline" /> Successfully subscribed!
                  </span>
                )}
              </div>

              {/* Google Play & App Store buttons matching Photo 2 */}
              <div className="flex flex-col gap-2 pt-1">
                {/* Google Play */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black hover:bg-slate-900 text-white transition-colors w-fit shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current text-[#00e676]" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-.92L3 2.734c0-.36.216-.69.609-.92zm11.233 11.234l2.122-2.122L5.43 2.378l9.412 10.67zm0 1.898L5.43 21.622l11.534-8.548-2.122-2.128zm3.208-3.208l2.678 1.488c.767.426.767 1.118 0 1.544l-2.678 1.488-1.554-1.554 1.554-1.566z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[8px] uppercase tracking-wider text-slate-300 leading-none">
                      GET IT ON
                    </span>
                    <span className="font-bold text-[11px] leading-tight block">Google Play</span>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black hover:bg-slate-900 text-white transition-colors w-fit shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.62-.76 1.05-1.81.93-2.87-.9.04-2 .6-2.64 1.36-.57.65-1.07 1.72-.94 2.76 1.01.08 2.03-.49 2.65-1.25z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[8px] uppercase tracking-wider text-slate-300 leading-none">
                      Available on the
                    </span>
                    <span className="font-bold text-[11px] leading-tight block">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Lower White Section: Jobs by Location & Collapsible "View More" (Photo 3 & Photo 4) */}
      <div className="bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-100">
        <div className="max-w-[1360px] mx-auto">
          {/* Jobs by Location matching Photo 3 */}
          <div>
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2">
              Jobs by Location
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-1.5 text-xs text-slate-500">
              <a href="#jobs-hyd" className="hover:text-[#0073e6] transition-colors">Jobs in Hyderabad</a>
              <a href="#jobs-blr" className="hover:text-[#0073e6] transition-colors">Jobs in Bangalore</a>
              <a href="#jobs-mum" className="hover:text-[#0073e6] transition-colors">Jobs in Mumbai</a>
              <a href="#jobs-del" className="hover:text-[#0073e6] transition-colors">Jobs in Delhi</a>
              <a href="#jobs-kol" className="hover:text-[#0073e6] transition-colors">Jobs in Kolkata</a>
              <a href="#jobs-che" className="hover:text-[#0073e6] transition-colors">Jobs in Chennai</a>
              <a href="#jobs-pun" className="hover:text-[#0073e6] transition-colors">Jobs in Pune</a>
              <a href="#jobs-ahm" className="hover:text-[#0073e6] transition-colors">Jobs in Ahmedabad</a>
              <a href="#jobs-jai" className="hover:text-[#0073e6] transition-colors">Jobs in Jaipur</a>
              <a href="#jobs-chd" className="hover:text-[#0073e6] transition-colors">Jobs in Chandigarh</a>
              <a href="#jobs-noi" className="hover:text-[#0073e6] transition-colors">Jobs in Noida</a>
              <a href="#jobs-gur" className="hover:text-[#0073e6] transition-colors">Jobs in Gurgaon</a>
            </div>

            {/* View More / View Less Toggle Button */}
            <button
              type="button"
              onClick={() => setIsViewMoreOpen((prev) => !prev)}
              className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-[#0073e6] transition-colors cursor-pointer py-1"
            >
              <span>{isViewMoreOpen ? 'View Less' : 'View More'}</span>
              {isViewMoreOpen ? (
                <ChevronUp className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              )}
            </button>
          </div>

          {/* 3. Photo 4 Contents: Collapsible Accordion Inside "View More" */}
          {isViewMoreOpen && (
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-7 animate-in fade-in duration-200">
              {/* Category 1: Skill based jobs */}
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2">
                  Skill based jobs
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-1.5 text-xs text-slate-500">
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Content Writing Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Digital Marketing Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Data Science Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Accounting Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Backend Developer Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Electrical Engineer Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Frontend Developer Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Graphic Designer Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Growth Marketing Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Machine Learning Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Mechanical Engineer Jobs</a>
                  <a href="#jobs-skill" className="hover:text-[#0073e6] transition-colors">Civil Engineer Jobs</a>
                </div>
              </div>

              {/* Category 2: Internships by Location */}
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2">
                  Internships by Location
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-1.5 text-xs text-slate-500">
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Bangalore</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Chennai</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Pune</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Hyderabad</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Delhi</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Mumbai</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Noida</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Jaipur</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Chandigarh</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Coimbatore</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Ahmedabad</a>
                  <a href="#intern-loc" className="hover:text-[#0073e6] transition-colors">Internship in Kolkata</a>
                </div>
              </div>

              {/* Category 3: Skill based internships */}
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2">
                  Skill based internships
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-1.5 text-xs text-slate-500">
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">Data Analysis Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">Data Science Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">Software Development Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">Digital Marketing Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">Web Development Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">UI/UX Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">HR Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">Finance Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">DevOps Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">AI Internships</a>
                  <a href="#intern-skill" className="hover:text-[#0073e6] transition-colors">Graphic Design Internship</a>
                </div>
              </div>

              {/* Category 4: Work from Home Jobs */}
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2">
                  Work from Home Jobs
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-1.5 text-xs text-slate-500">
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Bangalore</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Chennai</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Hyderabad</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Delhi</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Pune</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Mumbai</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Kolkata</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Ahmedabad</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Noida</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Jaipur</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Chandigarh</a>
                  <a href="#wfh" className="hover:text-[#0073e6] transition-colors">Work from Home Jobs in Coimbatore</a>
                </div>
              </div>

              {/* Category 5: Mentorship from Industry Experts */}
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2">
                  Mentorship from Industry Experts
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-1.5 text-xs text-slate-500">
                  <a href="#mentorship-cv" className="hover:text-[#0073e6] transition-colors">CV Review</a>
                  <a href="#mentorship-mba" className="hover:text-[#0073e6] transition-colors">MBA Preparation</a>
                  <a href="#mentorship-case" className="hover:text-[#0073e6] transition-colors">Case Competition</a>
                  <a href="#mentorship-placement" className="hover:text-[#0073e6] transition-colors">Placement Support</a>
                  <a href="#mentorship-interview" className="hover:text-[#0073e6] transition-colors">Interview Preparation</a>
                  <a href="#mentorship-career" className="hover:text-[#0073e6] transition-colors">Career Guidance</a>
                  <a href="#mentorship-brand" className="hover:text-[#0073e6] transition-colors">Personal Branding</a>
                  <a href="#mentorship-abroad" className="hover:text-[#0073e6] transition-colors">Study Abroad</a>
                  <a href="#mentorship-code" className="hover:text-[#0073e6] transition-colors">Coding &amp; Software</a>
                </div>
              </div>

              {/* Category 6: Practice */}
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 mb-2">
                  Practice
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-1.5 text-xs text-slate-500">
                  <a href="#practice-assess" className="hover:text-[#0073e6] transition-colors">Skill Based Mock Assessments</a>
                  <a href="#practice-comp" className="hover:text-[#0073e6] transition-colors">Company Preparation</a>
                  <a href="#practice-ml" className="hover:text-[#0073e6] transition-colors">Machine Learning Projects</a>
                  <a href="#practice-mock" className="hover:text-[#0073e6] transition-colors">AI-Powered Mock Tests</a>
                  <a href="#practice-interview" className="hover:text-[#0073e6] transition-colors">AI-Powered Mock Interview</a>
                  <a href="#practice-100" className="hover:text-[#0073e6] transition-colors">100 Days Coding Sprint</a>
                  <a href="#practice-ai-skill" className="hover:text-[#0073e6] transition-colors">AI-Powered Skill-Based Mock Tests</a>
                  <a href="#practice-conquest" className="hover:text-[#0073e6] transition-colors">Code Conquest</a>
                </div>
              </div>
            </div>
          )}

          {/* Copyright & Version Strip matching Photo 3 */}
          <div className="pt-8 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-slate-500 border-t border-slate-100 mt-6">
            <p>
              Copyright © 2026{' '}
              <a href="#flive" className="text-slate-700 font-semibold underline hover:text-[#0073e6]">
                FLIVE Consulting Pvt Ltd
              </a>{' '}
              - All rights reserved.
            </p>
            <div className="text-left sm:text-right">
              <p className="font-medium text-slate-600">Unstop Version: 9.25.2026.18.35</p>
              <p className="text-[10px] text-slate-400">
                Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera &amp; Safari.
              </p>
            </div>
          </div>

          {/* Payment Badges & ISO Certifications matching Photo 3 */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            {/* Safe payment, SSL, and Gateways */}
            <div className="flex flex-wrap items-center gap-3">
              {/* 100% Safe badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0073e6] text-white text-[11px] font-bold">
                <Lock className="w-3 h-3" />
                <span>100% safe &amp; secure payment</span>
              </span>

              {/* SECURE SSL badge */}
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-700 text-white text-[9.5px] font-black uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                SECURE SSL ENCRYPTION
              </span>

              {/* Razorpay */}
              <span className="font-extrabold text-xs text-[#0c2340] tracking-tight">
                Razorpay
              </span>

              {/* VISA */}
              <span className="font-black italic text-sm text-[#1a1f71] tracking-tighter">
                VISA
              </span>

              {/* UPI */}
              <span className="font-bold text-xs text-[#0f7c3c]">
                UPI
              </span>

              {/* Mastercard */}
              <div className="flex items-center -space-x-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#eb001b] inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] inline-block opacity-90" />
              </div>

              {/* RuPay */}
              <span className="font-extrabold text-xs text-[#006cb7]">
                RuPay<span className="text-[#f37021]">❯</span>
              </span>

              {/* Maestro */}
              <div className="flex items-center gap-1">
                <div className="flex items-center -space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0099df] inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#eb001b] inline-block opacity-90" />
                </div>
                <span className="text-[10px] font-bold text-slate-700">Maestro</span>
              </div>
            </div>

            {/* GDPR & ISO Badges matching Photo 3 right side */}
            <div className="flex items-center gap-3">
              {/* GDPR Ready Stamp */}
              <div className="w-9 h-9 rounded-full border border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-[7px] font-black text-slate-700 leading-none shadow-2xs">
                <span>★★★★★</span>
                <span className="font-bold text-[6.5px]">GDPR</span>
                <span className="text-[5.5px] text-slate-500">READY</span>
              </div>

              {/* ISO 27001 Stamp */}
              <div className="w-9 h-9 rounded-full border border-blue-400 bg-blue-50/70 flex flex-col items-center justify-center text-[7px] font-black text-[#0073e6] leading-none shadow-2xs">
                <span>ISO</span>
                <span className="text-[6px] font-bold">27001</span>
                <span className="text-[5px] text-blue-500">Certified</span>
              </div>

              {/* ISO 9001:2015 Stamp */}
              <div className="w-9 h-9 rounded-full border border-blue-500 bg-blue-50/70 flex flex-col items-center justify-center text-[7px] font-black text-[#005bb5] leading-none shadow-2xs">
                <span>ISO</span>
                <span className="text-[5.5px] font-bold">9001:2015</span>
                <span className="text-[5px] text-blue-500">COMPANY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
