'use client';

import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Code2,
  Eye,
  EyeOff,
  ArrowLeft,
  KeyRound,
} from 'lucide-react';
import { UnstopLogo } from '@/components/ui/UnstopLogo';

interface LoginPageProps {
  onClose?: () => void;
  onSuccess?: (user: { email: string; role: string }) => void;
}

export default function LoginPage({ onClose, onSuccess }: LoginPageProps) {
  const [userRole, setUserRole] = useState<'candidate' | 'employer'>('candidate');
  const [loginMethod, setLoginMethod] = useState<'otp' | 'password'>('otp');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    if (loginMethod === 'otp' && !otpSent) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setOtpSent(true);
      }, 500);
      return;
    }

    // Direct password login or OTP completed
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess({ email, role: userRole });
      }
    }, 600);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[value.length - 1];
    }
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSocialLogin = (provider: 'Google' | 'LinkedIn' | 'Microsoft') => {
    const mockEmail = `user@${provider.toLowerCase()}.com`;
    setEmail(mockEmail);
    setIsSubmitted(true);
    if (onSuccess) {
      onSuccess({ email: mockEmail, role: userRole });
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
      return;
    }
    if (typeof window !== 'undefined') {
      if (window.opener) {
        window.close();
      } else {
        window.location.href = '/';
      }
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#f8fafc] text-slate-800 flex items-center justify-center p-3 sm:p-6 md:p-8 relative overflow-hidden select-none">
      {/* ========================================================= */}
      {/* Background: Constellation Network & Floating Nodes        */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbital Network Arcs matching screenshot */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-Right concentric arcs */}
          <circle
            cx="85%"
            cy="15%"
            r="380"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <circle
            cx="85%"
            cy="15%"
            r="230"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="85%"
            cy="15%"
            r="110"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="3 3"
          />

          {/* Bottom-Left concentric arcs */}
          <circle
            cx="12%"
            cy="82%"
            r="380"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <circle
            cx="12%"
            cy="82%"
            r="220"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle
            cx="12%"
            cy="82%"
            r="120"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="3 3"
          />

          {/* Cross connecting arcs */}
          <path
            d="M 50,680 Q 280,480 620,760"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M 780,140 Q 1100,280 1480,120"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Top-Right Floating Avatar Nodes matching screenshot */}
        <div className="hidden lg:block absolute top-6 right-36 z-0">
          <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Candidate avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute top-14 right-72 z-0">
          <div className="w-7 h-7 rounded-full border border-white shadow-xs overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="Candidate avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute top-38 right-24 z-0">
          <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
              alt="Candidate avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute top-26 right-8 z-0">
          <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
              alt="Candidate avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute top-64 right-16 z-0">
          <div className="w-8 h-8 rounded-full bg-[#1c4980] text-white flex items-center justify-center text-xs font-black shadow-md border-2 border-white">
            un
          </div>
        </div>

        {/* Bottom-Left Floating Avatar Nodes matching screenshot */}
        <div className="hidden lg:block absolute bottom-10 left-32 z-0">
          <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80"
              alt="Candidate avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-44 left-10 z-0">
          <div className="w-8 h-8 rounded-full bg-[#1c4980] text-white flex items-center justify-center text-xs font-black shadow-md border-2 border-white">
            un
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-36 left-48 z-0">
          <div className="w-7 h-7 rounded-full border border-white shadow-xs overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
              alt="Candidate avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-64 left-20 z-0">
          <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Candidate avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-20 left-72 z-0">
          <div className="w-6 h-6 rounded-full border border-white shadow-xs overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80"
              alt="Candidate avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* Center 2-Column Unstop Login Card                         */}
      {/* ========================================================= */}
      <div className="relative bg-white rounded-3xl sm:rounded-[36px] max-w-[880px] w-full shadow-2xl shadow-slate-200/90 border border-slate-200/80 overflow-hidden flex flex-col md:flex-row z-10 animate-in zoom-in-95 duration-200">
        {/* Subtle Close / Exit Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close"
          className="absolute top-4 right-4 z-30 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="w-full py-20 px-8 flex flex-col items-center justify-center text-center bg-white">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce mb-3" />
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Welcome to Unstop!
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-sm">
              You are signed in as{' '}
              <span className="font-semibold text-slate-800">{email}</span> ({userRole}).
            </p>
            <button
              onClick={() => {
                if (onClose) onClose();
                else window.location.href = '/';
              }}
              type="button"
              className="mt-6 px-6 py-2.5 rounded-full bg-[#0073e6] text-white text-xs font-bold hover:bg-[#005bb5] transition-colors shadow-xs cursor-pointer"
            >
              Continue to Dashboard
            </button>
          </div>
        ) : (
          <>
            {/* ========================================================= */}
            {/* LEFT COLUMN: Golden Yellow Illustrated Banner             */}
            {/* ========================================================= */}
            <div className="w-full md:w-[44%] bg-[#ffc629] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle background concentric orbital arcs on yellow */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10%" cy="50%" r="180" fill="none" stroke="#b45309" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="10%" cy="50%" r="280" fill="none" stroke="#b45309" strokeWidth="1.2" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Unstop Logo at top left matching screenshot */}
              <div className="z-10">
                <UnstopLogo color="#1c4980" className="h-7 w-auto" />
              </div>

              {/* Center Hero Section: Persona pointing to Badges */}
              <div className="relative w-full flex-1 flex flex-col items-center justify-end my-4 z-10 min-h-[290px] sm:min-h-[320px]">
                {/* Hand-drawn style pointing arrows (SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-15"
                  viewBox="0 0 320 320"
                  fill="none"
                >
                  {/* Arrow 1: Pointing upwards towards "5-Day Interview Prep" */}
                  <path
                    d="M 172 165 C 172 145, 178 125, 172 108"
                    stroke="#334155"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <polygon points="172,104 168,111 176,111" fill="#334155" />

                  {/* Arrow 2: Pointing down towards "100-Day Coding Sprint" */}
                  <path
                    d="M 186 210 C 195 224, 185 242, 172 254"
                    stroke="#334155"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <polygon points="168,257 175,251 176,259" fill="#334155" />
                </svg>

                {/* Young man cutout portrait pointing to the right */}
                <div className="absolute left-0 bottom-4 w-[190px] sm:w-[210px] z-10">
                  <img
                    src="/images/login-hero.png"
                    alt="Unstop Candidate"
                    className="w-full h-auto object-contain drop-shadow-sm pointer-events-none select-none"
                  />
                </div>

                {/* 3 Floating Badges on the right matching screenshot */}
                {/* Badge 1: 5-Day Interview Prep */}
                <div className="absolute top-2 right-0 sm:right-1 bg-white/90 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-md border border-purple-100/80 flex flex-col items-center text-center w-[92px] sm:w-[100px] z-20">
                  <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white mb-1 shadow-2xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-900 leading-tight">
                    5-Day
                  </span>
                  <span className="text-[9.5px] font-medium text-slate-600 leading-tight">
                    Interview Prep
                  </span>
                </div>

                {/* Badge 2: Mock Interviews */}
                <div className="absolute top-22 right-2 sm:right-3 bg-white/90 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-md border border-purple-100/80 flex flex-col items-center text-center w-[92px] sm:w-[100px] z-20">
                  <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white mb-1 shadow-2xs">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-900 leading-tight">
                    Mock
                  </span>
                  <span className="text-[9.5px] font-medium text-slate-600 leading-tight">
                    Interviews
                  </span>
                </div>

                {/* Badge 3: 100-Day Coding Sprint */}
                <div className="absolute bottom-6 right-0 sm:right-1 bg-white/90 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-md border border-purple-100/80 flex flex-col items-center text-center w-[96px] sm:w-[104px] z-20">
                  <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white mb-1 shadow-2xs">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-900 leading-tight">
                    100-Day
                  </span>
                  <span className="text-[9.5px] font-medium text-slate-600 leading-tight">
                    Coding Sprint
                  </span>
                </div>
              </div>

              {/* Bottom White Card: Practice - easy to complex problems */}
              <div className="z-20 w-full bg-white rounded-2xl sm:rounded-3xl py-3 px-4 shadow-sm text-center">
                <h3 className="text-xl font-black text-[#1c4980] tracking-tight">
                  Practice
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  easy to complex problems
                </p>
              </div>
            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: Candidate/Employer Form                     */}
            {/* ========================================================= */}
            <div className="w-full md:w-[56%] p-6 sm:p-8 md:p-10 bg-white flex flex-col justify-between">
              <div>
                {/* Headline & Subtitle matching screenshot */}
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  Your Next Opportunity Starts Here
                </h1>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Log in to discover competitions, jobs, and internships built for you.
                </p>

                {/* Candidate / Employer Tab Switcher */}
                <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/80 mt-5 mb-4">
                  <button
                    type="button"
                    onClick={() => setUserRole('candidate')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      userRole === 'candidate'
                        ? 'bg-white text-[#0073e6] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    I&apos;m a Candidate
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserRole('employer')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      userRole === 'employer'
                        ? 'bg-white text-[#0073e6] shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    I&apos;m an Employer
                  </button>
                </div>

                {/* Social Login Buttons matching screenshot */}
                <div className="flex flex-col gap-2.5">
                  {/* Continue with Google */}
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('Google')}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200/90 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-3 shadow-2xs transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  {/* Continue with LinkedIn */}
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('LinkedIn')}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200/90 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-3 shadow-2xs transition-all cursor-pointer"
                  >
                    <span className="w-4 h-4 bg-[#0a66c2] text-white font-bold text-[9px] rounded-xs flex items-center justify-center">
                      in
                    </span>
                    <span>Continue with LinkedIn</span>
                  </button>

                  {/* Continue with Microsoft */}
                  <button
                    type="button"
                    onClick={() => handleSocialLogin('Microsoft')}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200/90 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center justify-center gap-3 shadow-2xs transition-all cursor-pointer"
                  >
                    <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                      <div className="bg-[#f25022] w-1.5 h-1.5" />
                      <div className="bg-[#7fba00] w-1.5 h-1.5" />
                      <div className="bg-[#00a4ef] w-1.5 h-1.5" />
                      <div className="bg-[#ffb900] w-1.5 h-1.5" />
                    </div>
                    <span>Continue with Microsoft</span>
                  </button>
                </div>

                {/* OR Divider */}
                <div className="relative my-4 flex items-center justify-center">
                  <div className="border-t border-slate-200 w-full" />
                  <span className="bg-white px-3 text-[11px] text-slate-400 font-bold uppercase">
                    OR
                  </span>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {otpSent ? (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <KeyRound className="w-3.5 h-3.5 text-[#0073e6]" />
                          Enter 6-digit OTP sent to {email}
                        </span>
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="text-xs text-[#0073e6] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                        >
                          <ArrowLeft className="w-3 h-3" /> Change
                        </button>
                      </div>

                      {/* 6 Digit OTP input boxes */}
                      <div className="flex items-center justify-between gap-2 my-3">
                        {otpValues.map((digit, idx) => (
                          <input
                            key={idx}
                            id={`otp-input-${idx}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                            className="w-10 h-11 text-center font-bold text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#0073e6] transition-all text-slate-800"
                          />
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2">
                        <span>Didn&apos;t receive OTP?</span>
                        <button
                          type="button"
                          onClick={() => alert('New OTP sent to ' + email)}
                          className="text-[#0073e6] font-semibold hover:underline cursor-pointer"
                        >
                          Resend OTP
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                        className="w-full px-4 py-2.5 text-xs bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#0073e6] transition-all text-slate-800"
                      />

                      {/* Toggle Login via Password / OTP matching screenshot */}
                      <div className="flex justify-end mt-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            setLoginMethod(loginMethod === 'otp' ? 'password' : 'otp')
                          }
                          className="text-xs font-medium text-[#0073e6] hover:underline cursor-pointer"
                        >
                          {loginMethod === 'otp' ? 'Login via Password' : 'Login via OTP'}
                        </button>
                      </div>

                      {loginMethod === 'password' && (
                        <div className="mt-2.5">
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Password <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              required
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPassword(e.target.value)
                              }
                              className="w-full px-4 py-2.5 pr-10 text-xs bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#0073e6] transition-all text-slate-800"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                              {showPassword ? (
                                <EyeOff className="w-4 h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* "Continue with OTP" / "Verify OTP" Button matching screenshot */}
                  <button
                    type="submit"
                    disabled={!email || isLoading}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 mt-2 ${
                      email
                        ? 'bg-[#0073e6] hover:bg-[#0060c0] text-white shadow-xs hover:shadow-md cursor-pointer active:scale-[0.99]'
                        : 'bg-[#eceff2] text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : otpSent ? (
                      <span>Verify &amp; Continue</span>
                    ) : loginMethod === 'otp' ? (
                      <span>Continue with OTP</span>
                    ) : (
                      <span>Log In</span>
                    )}
                  </button>
                </form>
              </div>

              {/* Terms of Service & Privacy Policy matching screenshot */}
              <p className="text-[11px] text-slate-500 text-center mt-5 leading-relaxed">
                By signing in, you accept the{' '}
                <a href="#" className="text-[#0073e6] hover:underline">
                  Terms of Service
                </a>{' '}
                and acknowledge our{' '}
                <a href="#" className="text-[#0073e6] hover:underline">
                  Privacy Policy
                </a>{' '}
                .
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
