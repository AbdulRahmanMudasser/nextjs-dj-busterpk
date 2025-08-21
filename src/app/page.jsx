// src/app/(electronics)/page.jsx
'use client'

import { CartProvider } from '@/context/CartContext';
import Page from '@/app/(electronics)/Page';
import PromoSection from '@/features/promotions/components/promoSection';
import InfoBar from '@/features/promotions/components/InfoBar';
import ShopByCat from '@/components/shared/ShopByCat';
import RecommendedProduct from '@/features/products/components/RecommendedProduct';
import BrandSlider from '@/components/shared/BrandSlider';
import HotSales from './(electronics)/components/HotSales';

export default function Home() {
  return (
    <CartProvider>
      <main className="bg-gray-50">
        
        {/* Promotional Section */}
        <PromoSection />
        {/* Brand Slider */}
        <BrandSlider/>
        {/* Main Homepage Layout */}
        <Page />
        
        {/* Info Bar with shipping/return info */}
        <InfoBar />
        {/* Shop by Category */}
        <ShopByCat />
        {/* Hot Sales Section */}
        <HotSales />
        {/* Recommended Products */}
        <RecommendedProduct />
      </main>
    </CartProvider>
  );
}