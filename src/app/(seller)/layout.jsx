'use client';
import { useState } from 'react';
import SellerHeader from '@/components/seller/sellerheader.jsx';
import SellerSidebar from '@/components/seller/sellerslider.jsx';

export default function SellerLayout({ children }) {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  return (
    <div className="bg-gray-50 flex min-h-screen">
      <div className="w-64 fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50">
        <SellerSidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      <div className="flex-1 ml-64 flex flex-col">
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
          <SellerHeader currentPage={currentPage} />
        </div>

        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
