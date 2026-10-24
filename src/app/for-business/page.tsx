'use client';

import React from 'react';
import { UnForBusinessSection } from '@/components/business/UnForBusinessSection';
import { Footer } from '@/components/footer/Footer';

export default function ForBusinessPage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <main className="w-full flex-1">
        <UnForBusinessSection showTopNavbar={true} />
      </main>

      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
