import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { key: 'about', path: '/about', label: t('footer_nav_about') },
    { key: 'services', path: '/services', label: t('footer_nav_services') },
    { key: 'solutions', path: '/solutions', label: t('footer_nav_solutions') },
    { key: 'blog', path: '/blog', label: t('footer_nav_blog') },
    { key: 'contact', path: '/contact', label: t('footer_nav_contact') },
  ];

  return (
    <footer className="bg-accent-gray-50 text-accent-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start mb-4 h-10">
              <Image 
                src="/images/groz-ai-logo-gray-png.png" 
                alt="GrozAI Logo" 
                width={150} 
                height={40} 
                objectFit="contain"
              />
            </div>
            <p className="text-sm mb-4 max-w-sm">
              {t('footer_description')}
            </p>
                        <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent-gray-700 hover:text-primary"><FaTwitter size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent-gray-700 hover:text-primary"><FaLinkedin size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent-gray-700 hover:text-primary"><FaGithub size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-accent-gray-900 mb-3">{t('footer_navigate')}</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map(link => (
                <li key={link.key}><Link href={link.path} legacyBehavior><a className="text-accent-gray-700 hover:text-primary">{link.label}</a></Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-accent-gray-900 mb-3">{t('footer_contact')}</h4>
            <p className="text-sm mb-2">{t('footer_email')}: <a href="mailto:info@grozai.net" className="text-accent-gray-700 hover:text-primary">info@grozai.net</a></p>
            <p className="text-sm">{t('footer_phone')}: <a href="tel:+201097459765" className="text-accent-gray-700 hover:text-primary">+201097459765</a></p>
          </div>
        </div>
        <div className="border-t border-accent-gray-300 pt-8 text-center text-sm flex flex-col sm:flex-row sm:justify-between items-center">
          <p>&copy; {currentYear} GrozAI. {t('footer_rights')}</p>
          <div className="mt-2 sm:mt-0">
            <Link href="/terms-of-service" legacyBehavior><a className="text-accent-gray-700 hover:text-primary py-1">{t('footer_terms')}</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
