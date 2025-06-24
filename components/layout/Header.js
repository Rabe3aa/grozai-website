import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';

const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: '0%', transition: { type: 'spring', stiffness: 120, damping: 20 } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  const navLinks = [
    { key: 'home', path: '/', label: t('nav_home') },
    { key: 'about', path: '/about', label: t('nav_about') },
    { key: 'services', path: '/services', label: t('nav_services') },
    { key: 'solutions', path: '/solutions', label: t('nav_solutions') },
    { key: 'blog', path: '/blog', label: t('nav_blog') },
    { key: 'contact', path: '/contact', label: t('nav_contact') },
  ];

  const handleLanguageChange = () => {
    const newLocale = i18n.language === 'en' ? 'ar' : 'en';
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: newLocale });
  };

  const isSolid = scrolled || isMobileMenuOpen || 
    router.pathname === '/terms-of-service' || 
    (router.pathname !== '/' && 
     router.pathname !== '/blog' && 
     router.pathname.startsWith('/blog'));

  // Effect for handling scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Effect for closing mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ 
    isSolid 
      ? 'bg-primary shadow-lg text-white'
      : 'bg-transparent text-white'
  }`;

  const logoTextColor = 'text-white';
  const navLinkTextColor = 'text-white';
  const mobileIconColor = 'text-white';

  return (
    <motion.header 
      className={headerClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-2 md:py-3 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="flex items-center h-12">
            <Image
              src="/images/groz-ai-logo-white-png.png"
              alt="GrozAI Logo"
              width={150}
              height={40}
              style={{ objectFit: 'contain' }}
              className="transition-all duration-300"
            />
          </a>
        </Link>
        
        {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.key} href={link.path} legacyBehavior>
                            <a className={`text-sm transition-colors ${navLinkTextColor} hover:text-accent-gray-200 ${i18n.language === 'ar' ? 'font-bold' : 'font-medium'}`}>
                {t(`nav_${link.key}`)}
              </a>
            </Link>
          ))}
          <Link href="/contact#request-demo" legacyBehavior>
            <a className="bg-white text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-accent-gray-100 transition-colors">
              {t('request_a_demo')}
            </a>
          </Link>
          <button 
            onClick={handleLanguageChange} 
            className={`ml-4 text-sm font-medium transition-colors ${navLinkTextColor} hover:text-accent-gray-200`}
          >
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className={`focus:outline-none ${mobileIconColor} z-50 relative`}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />} 
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 top-[72px] bg-primary p-6 pt-10 space-y-6 z-40 flex flex-col items-center"
          >
            {navLinks.map((link) => (
              <Link key={`mobile-${link.key}`} href={link.path} legacyBehavior>
                <a 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`text-2xl text-white hover:text-accent-gray-200 transition-colors w-full text-center py-2 ${i18n.language === 'ar' ? 'font-bold' : 'font-medium'}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact#request-demo" legacyBehavior>
              <a 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="bg-white text-primary px-8 py-3 rounded-md text-xl font-medium hover:bg-accent-gray-100 transition-colors w-full text-center mt-6"
              >
                {t('request_a_demo')}
              </a>
            </Link>
            <button
              onClick={() => {
                handleLanguageChange();
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-medium text-white hover:text-accent-gray-200 transition-colors w-full text-center py-2 mt-4"
            >
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
