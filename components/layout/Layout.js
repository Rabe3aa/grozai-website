// components/layout/Layout.js
import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="flex flex-col min-h-screen" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
