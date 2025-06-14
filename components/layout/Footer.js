import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Example icons

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-gray-50 text-accent-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex items-center justify-center md:justify-start mb-4 h-10">
              <img 
                src="/images/groz-ai-logo-gray-png.png" 
                alt="GrozAI Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-sm mb-4 max-w-sm">
              AI and Data Science for Enterprise. Driving innovation and efficiency through intelligent solutions.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent-gray-700 hover:text-primary"><FaTwitter size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent-gray-700 hover:text-primary"><FaLinkedin size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-accent-gray-700 hover:text-primary"><FaGithub size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-accent-gray-900 mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" legacyBehavior><a className="text-accent-gray-700 hover:text-primary">About Us</a></Link></li>
              <li><Link href="/services" legacyBehavior><a className="text-accent-gray-700 hover:text-primary">Services</a></Link></li>
              <li><Link href="/solutions" legacyBehavior><a className="text-accent-gray-700 hover:text-primary">Solutions</a></Link></li>
              <li><Link href="/blog" legacyBehavior><a className="text-accent-gray-700 hover:text-primary">Blog</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a className="text-accent-gray-700 hover:text-primary">Contact</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-accent-gray-900 mb-3">Contact</h4>
            <p className="text-sm mb-2">Email: <a href="mailto:info@grozai.net" className="text-accent-gray-700 hover:text-primary">info@grozai.net</a></p>
            <p className="text-sm">Phone: <a href="tel:+201097459765" className="text-accent-gray-700 hover:text-primary">+201097459765</a></p>
          </div>
        </div>
        <div className="border-t border-accent-gray-300 pt-8 text-center text-sm flex flex-col sm:flex-row sm:justify-between items-center">
          <p>&copy; {currentYear} GrozAI. All rights reserved.</p>
          <div className="mt-2 sm:mt-0">
            <Link href="/terms-of-service" legacyBehavior><a className="text-accent-gray-700 hover:text-primary py-1">Terms of Service</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
