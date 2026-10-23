'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import Header from '@/components/header/Header';
import { HeroHeader, CategoryCards } from '@/components/hero/Hero';
import { FeaturedSection } from '@/components/featured/FeaturedSection';
import { TrustedVeterans } from '@/components/trusted/TrustedVeterans';
import { CompetitionsSection } from '@/components/competitions/CompetitionsSection';
import { InternshipsSection } from '@/components/internships/InternshipsSection';
import { JobsSection } from '@/components/jobs/JobsSection';
import { RoleBasedMockTestSection } from '@/components/mocktest/RoleBasedMockTestSection';
import { RoleBasedMockInterviewSection } from '@/components/interview/RoleBasedMockInterviewSection';
import { UpgradeCareerBanner } from '@/components/banner/UpgradeCareerBanner';
import { CodingSprintSection } from '@/components/sprint/CodingSprintSection';
import { PlatformStatsSection } from '@/components/stats/PlatformStatsSection';
import { OpportunitiesSection } from '@/components/opportunities/OpportunitiesSection';
import { MentorshipSection } from '@/components/mentorship/MentorshipSection';
import { PracticeSection } from '@/components/practice/PracticeSection';
import { HiringCompanies } from '@/components/companies/HiringCompanies';
import { Footer } from '@/components/footer/Footer';
import { AuthModal, OpportunityDetailModal, PostJobModal } from '@/components/modals/Modals';
import { SplashScreen } from '@/components/splash';
import { Opportunity, FeaturedItem, Mentor, PracticeTest } from '@/types';
import { ALL_OPPORTUNITIES } from '@/data/mockData';

export default function HomePage() {
  // Splash screen state (shown on initial load)
  const [showSplash, setShowSplash] = useState(true);

  // Sidebar state
  const [activeNav, setActiveNav] = useState('Home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Selected category state from CategoryCards
  const [selectedCategory, setSelectedCategory] = useState('internships');

  // Bookmarks state
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set(['featured-2']));

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<Opportunity | FeaturedItem | null>(null);

  // User state
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Opportunities list state (supports dynamically adding new opportunities via Post modal)
  const [opportunitiesList, setOpportunitiesList] = useState<Opportunity[]>(ALL_OPPORTUNITIES);

  // Bookmark toggle
  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Select Opportunity / Featured Item
  const handleSelectItem = (item: Opportunity | FeaturedItem) => {
    setSelectedItemForDetail(item);
  };

  // Add Opportunity from Post Modal
  const handleAddOpportunity = (newOpp: Opportunity) => {
    setOpportunitiesList((prev) => [newOpp, ...prev]);
  };

  // Quick category selection
  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const element = document.getElementById('opportunities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Explore dropdown selection
  const handleSelectExploreCategory = (catId: string) => {
    if (catId === 'mentors') {
      const el = document.getElementById('mentorship');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (catId === 'quizzes') {
      const el = document.getElementById('mock-tests');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedCategory(catId);
      const el = document.getElementById('opportunities');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mentor click
  const handleBookMentor = (mentor: Mentor) => {
    if (!user) {
      setIsAuthOpen(true);
    } else {
      alert(`Booking 1:1 session with ${mentor.name} (${mentor.company}). An invite will be sent to ${user.email}`);
    }
  };

  // Practice test start
  const handleStartTest = (test: PracticeTest) => {
    alert(`Starting timed assessment: ${test.title} (${test.questionsCount} questions, ${test.durationMinutes} mins)`);
  };

  return (
    <div className="h-dvh max-h-dvh w-screen overflow-hidden bg-[#ebf3fd] text-slate-900 flex font-sans p-[5px] select-none">
      {/* Splash Screen: loads first before Unstop UI is revealed */}
      {showSplash && (
        <SplashScreen
          duration={1800}
          onFinish={() => setShowSplash(false)}
        />
      )}

      {/* Left Collapsible Sidebar */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenPostModal={() => setIsPostJobOpen(true)}
        onOpenMentorModal={() => {
          const mentorEl = document.getElementById('mentorship');
          mentorEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />

      {/* Main Content Area (Rounded white container nested inside light blue frame, scrollable internally so header remains fixed) */}
      <div
        id="main-scroll-container"
        className={`flex-1 flex flex-col rounded-[14px] bg-white border border-[#cee2f7] shadow-[0_2px_12px_rgba(28,73,128,0.05)] h-[calc(100dvh-10px)] max-h-[calc(100dvh-10px)] overflow-y-auto no-scrollbar transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'lg:ml-[69px]' : 'lg:ml-[225px]'
        }`}
      >
        {/* Top Navigation Bar */}
        <Header
          onOpenAuthModal={() => setIsAuthOpen(true)}
          onOpenPostModal={() => setIsPostJobOpen(true)}
          onSelectOpportunity={handleSelectItem}
          onSelectExploreCategory={handleSelectExploreCategory}
          isMobileOpen={isMobileSidebarOpen}
          setIsMobileOpen={setIsMobileSidebarOpen}
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          user={user}
          onLogout={() => setUser(null)}
        />

        {/* Page Inner Container - full screen width */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 py-6 w-full space-y-6">
          {/* Hero Headline & Live Profiles Badge */}
          <HeroHeader />

          {/* 3D Visual Category Cards Row */}
          <CategoryCards
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* Featured Section with Horizontal Carousel & 4 Exact Screenshot Cards */}
          <FeaturedSection
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onSelectFeatured={handleSelectItem}
          />

          {/* 1. Trusted by Industry Veterans (Continuous Right-to-Left Logo Marquee) */}
          <TrustedVeterans />

          {/* 2. Competitions Section matching user screenshot */}
          <CompetitionsSection />

          {/* 3. Internships Section matching user screenshot */}
          <InternshipsSection />

          {/* 4. Jobs Section matching user screenshot */}
          <JobsSection />

          {/* 5. Role-Based Mock Test Section matching user screenshot */}
          <RoleBasedMockTestSection />

          {/* 6. Role-Based Mock Interview Section matching user screenshot */}
          <RoleBasedMockInterviewSection />

          {/* 7. Upgrade Your Career with AI (Unstop Pro Banner) matching user screenshot */}
          <UpgradeCareerBanner />

          {/* 8. 100 Days Coding Sprint & Code Conquest Challenge Cards */}
          <CodingSprintSection />

          {/* 9. 32 Million+ Profiles & Platform Stats (Centered) */}
          <PlatformStatsSection />

          {/* Opportunities Section with Filter Tabs */}
          <OpportunitiesSection
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            onSelectOpportunity={handleSelectItem}
            selectedCategoryFilter={selectedCategory}
          />

          {/* 1-on-1 Mentorship Section */}
          <MentorshipSection onBookMentor={handleBookMentor} />

          {/* Mock Tests & Prep Zone */}
          <PracticeSection onStartTest={handleStartTest} />

          {/* Top Companies Showcase */}
          <HiringCompanies
            onSelectCompany={(name) => {
              const oppsSection = document.getElementById('opportunities');
              oppsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={(userData) => setUser(userData)}
      />

      <OpportunityDetailModal
        item={selectedItemForDetail}
        isOpen={!!selectedItemForDetail}
        onClose={() => setSelectedItemForDetail(null)}
      />

      <PostJobModal
        isOpen={isPostJobOpen}
        onClose={() => setIsPostJobOpen(false)}
        onAddOpportunity={handleAddOpportunity}
      />
    </div>
  );
}
