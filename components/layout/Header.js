import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: '0%', transition: { type: 'spring', stiffness: 120, damping: 20 } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const isSolid = scrolled || isMobileMenuOpen || router.pathname === '/terms-of-service';

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
              objectFit="contain"
              className="transition-all duration-300"
            />
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} legacyBehavior>
              <a className={`text-sm font-medium transition-colors ${navLinkTextColor} hover:text-accent-gray-200`}>
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact#request-demo" legacyBehavior>
            <a className="bg-white text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-accent-gray-100 transition-colors">
              Request a Demo
            </a>
          </Link>
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
              <Link key={`mobile-${link.name}`} href={link.path} legacyBehavior>
                <a 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-2xl font-medium text-white hover:text-accent-gray-200 transition-colors w-full text-center py-2"
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact#request-demo" legacyBehavior>
              <a 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="bg-white text-primary px-8 py-3 rounded-md text-xl font-medium hover:bg-accent-gray-100 transition-colors w-full text-center mt-6"
              >
                Request a Demo
              </a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
