// src/app/(seller)/layout.jsx
'use client';

import SellerHeader from '@/components/seller/sellerheader.jsx';
import SellerSidebar from '@/components/seller/sellerslider.jsx';

export default function SellerLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <SellerSidebar />
        <div className="flex-1">
          <SellerHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
