import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const inquiryOptions = [
  'general',
  'sales',
  'demo',
  'partnership',
  'press',
];

export default function ContactPage() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    inquiry: 'general',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ success: true, message: t('contact_form_success_message') });
        setFormData({ name: '', email: '', company: '', title: '', phone: '', inquiry: 'general', message: '' });
      } else {
        throw new Error(data.message || t('contact_form_error_message'));
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        success: false, 
        message: error.message || t('contact_form_error_message') 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>{t('contact_meta_title')}</title>
        <meta name="description" content={t('contact_meta_description')} />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t('contact_hero_title')}</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            {t('contact_hero_subtitle')}
          </p>
        </div>
      </motion.section>

      {/* Contact Grid Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left Column: Contact Info & Map */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">{t('contact_info_title')}</h2>
              <p className="text-lg text-accent-gray-700 mb-8">{t('contact_info_subtitle')}</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMapPin className="text-primary h-6 w-6 mt-1 me-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{t('contact_office_title')}</h3>
                    <p className="text-accent-gray-600">{t('contact_office_address')}</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <FiMail className="text-primary h-6 w-6 mt-1 me-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{t('contact_email_title')}</h3>
                    <a href={`mailto:${t('contact_email_address')}`} className="text-accent-gray-600 hover:text-primary transition-colors">{t('contact_email_address')}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="text-primary h-6 w-6 mt-1 me-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{t('contact_phone_title')}</h3>
                    <a href={`tel:${t('contact_phone_number').replace(/ /g, '')}`} className="text-accent-gray-600 hover:text-primary transition-colors">{t('contact_phone_number')}</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 h-80 bg-accent-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d624.7050885969336!2d31.311548632673706!3d29.96339987642314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458397619ec6895%3A0x1763db598e7c73b2!2z2KjYsdisINmB2YrZhtmK2LPZitinINiy2YfYsdin2KEg2KfZhNmF2LnYp9iv2Yk!5e1!3m2!1sen!2seg!4v1750778612253!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div variants={fadeInUp} className="bg-accent-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-primary mb-6">{t('contact_form_heading')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accent-gray-700 mb-1">{t('contact_form_name')}</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accent-gray-700 mb-1">{t('contact_form_email')}</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-accent-gray-700 mb-1">{t('contact_form_company')}</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-accent-gray-700 mb-1">{t('contact_form_title')}</label>
                  <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-accent-gray-700 mb-1">{t('contact_form_phone')}</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                </div>
                 <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-accent-gray-700 mb-1">{t('contact_form_inquiry_type')}</label>
                  <select id="inquiry" name="inquiry" value={formData.inquiry} onChange={handleChange} className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white">
                    {inquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {t(`contact_inquiry_option_${option}`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accent-gray-700 mb-1">{t('contact_form_message')}</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
                </div>
                <div id="request-demo" className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary text-white font-semibold px-6 py-3 rounded-lg text-lg transition-colors duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact_button_sending')}
                      </>
                    ) : (
                      <>
                        {t('contact_button_send')} <FiSend className="ms-2 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                  
                  {submitStatus.message && (
                    <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
