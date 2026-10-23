import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Unstop | Unlock Your Career - Competitions, Jobs, Internships & Mentorship',
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
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#ebf3fd] text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
