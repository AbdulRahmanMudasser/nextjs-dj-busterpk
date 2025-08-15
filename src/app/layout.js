// src/app/layout.js
import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Electronics Store',
  description: 'Your one stop electronics shop',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif" }}>
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
