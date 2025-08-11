// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Electronics Store',
  description: 'Your one stop electronics shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Header/> */}
        {children} 
        {/* <Footer/>   */}
      </body>
    </html>
  );
}
