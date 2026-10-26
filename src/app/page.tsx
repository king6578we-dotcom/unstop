'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import Header from '@/components/header/Header';
import { HeroHeader, CategoryCards } from '@/components/hero/Hero';
import { FeaturedSection } from '@/components/featured/FeaturedSection';
// Trusted by Industry Veterans logo marquee
import { TrustedVeterans } from '@/components/trusted/TrustedVeterans';
import { CompetitionsSection } from '@/components/competitions/CompetitionsSection';
import { InternshipsSection } from '@/components/internships/InternshipsSection';
import { JobsSection } from '@/components/jobs/JobsSection';
import { RoleBasedMockTestSection } from '@/components/mocktest/RoleBasedMockTestSection';
import { RoleBasedMockInterviewSection } from '@/components/interview/RoleBasedMockInterviewSection';
import { UpgradeCareerBanner } from '@/components/banner/UpgradeCareerBanner';
import { CodingSprintSection } from '@/components/sprint/CodingSprintSection';
import { PlatformStatsSection } from '@/components/stats/PlatformStatsSection';
import { Footer } from '@/components/footer/Footer';
import { AuthModal, OpportunityDetailModal, PostJobModal } from '@/components/modals/Modals';
import { SplashScreen } from '@/components/splash';
import { Opportunity, FeaturedItem } from '@/types';
import { ALL_OPPORTUNITIES } from '@/data/mockData';
export default function HomePage() {
  // Splash screen state (shown only on initial fresh visit of session)
  const [showSplash, setShowSplash] = useState(false);

  React.useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const isNoSplashQuery =
        urlParams.get('nosplash') === 'true' || urlParams.get('splash') === 'false';
      const skipSplashSession = sessionStorage.getItem('skipSplash') === 'true';
      const hasSeenSplashSession = sessionStorage.getItem('hasSeenSplash') === 'true';

      if (isNoSplashQuery || skipSplashSession || hasSeenSplashSession) {
        setShowSplash(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      } else {
        // Show splash only on fresh initial load
        setShowSplash(true);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }
    } catch {
      setShowSplash(false);
    }
  }, []);

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


    return (
    <div className="flex h-dvh w-full overflow-hidden bg-[#ebf3fd] p-[6px] font-sans text-slate-900">
      {/* Splash screen */}
      {showSplash && (
        <SplashScreen
          duration={1800}
          onFinish={() => setShowSplash(false)}
        />
      )}

      {/* Existing sidebar */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenPostModal={() => setIsPostJobOpen(true)}
        onOpenMentorModal={() => {
          document
            .getElementById('mentorship')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />

      {/* Header, page sections and footer share this scroll container */}
      <div
        id="main-scroll-container"
        className={`
          flex h-full min-h-0 min-w-0 flex-1 flex-col
          overflow-y-auto overflow-x-hidden
          rounded-[14px] border border-[#cee2f7] bg-white
          shadow-[0_2px_12px_rgba(28,73,128,0.05)]
          transition-[margin] duration-300 ease-in-out
          ${
            isSidebarCollapsed
              ? 'lg:ml-[70px]'
              : 'lg:ml-[226px]'
          }
        `}
      >
        {/* Header stays visible while the content scrolls */}
        <div className="sticky top-0 z-30 w-full shrink-0 bg-white">
          <Header
            onOpenAuthModal={() => setIsAuthOpen(true)}
            onOpenPostModal={() => setIsPostJobOpen(true)}
            onSelectOpportunity={handleSelectItem}
            onSelectExploreCategory={handleSelectExploreCategory}
            isMobileOpen={isMobileSidebarOpen}
            setIsMobileOpen={setIsMobileSidebarOpen}
            isSidebarCollapsed={isSidebarCollapsed}
            setIsSidebarCollapsed={setIsSidebarCollapsed}
            onToggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)}
            user={user}
            onLogout={() => setUser(null)}
          />
        </div>

        {/* shrink-0 keeps the page content at its natural height */}
        <main className="w-full min-w-0 shrink-0 space-y-6 px-2 xs:px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <HeroHeader />

          <CategoryCards
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />

          <FeaturedSection
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
          />

          <TrustedVeterans />

          <CompetitionsSection />

          <InternshipsSection />

          <JobsSection />

          <RoleBasedMockTestSection />

          <RoleBasedMockInterviewSection />

          <UpgradeCareerBanner />

          <CodingSprintSection />

          <PlatformStatsSection />
        </main>

        {/* Footer with full-width expanded light blue background and centered 980px inner content, static at page bottom */}
        <div
          id="home-footer"
          className="w-full min-w-0 shrink-0 mt-auto static"
        >
          <Footer />
        </div>
      </div>

      {/* Existing modals */}
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