'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-10">
        {children}
      </main>
      <Footer />
      
    </div>
  );
}
