import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Unstop | Unlock Your Career - Competitions, Jobs, Internships & Mentorship',
  description:
    'Discover jobs, internships, coding challenges, hackathons, and 1-on-1 mentorship from top companies. Join 32M+ students & professionals on Unstop.',
  keywords: [
    'Unstop',
    'Dare2Compete',
    'Internships',
    'Jobs for Freshers',
    'Hackathons 2026',
    'Competitions',
    'Mentorship',
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body
        className={`${inter.className} m-0 min-h-dvh bg-[#ebf3fd] text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}