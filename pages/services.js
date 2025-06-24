import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShoppingCart, FaHeartbeat, FaBookOpen, FaLandmark, FaIndustry, FaHeadset, FaCode } from 'react-icons/fa';
import { FiBarChart2, FiMessageSquare, FiEye, FiCpu, FiDatabase, FiBriefcase, FiLayers, FiShield, FiCloud, FiCpu as FiChip, FiZap, FiDollarSign, FiTruck, FiPhoneCall, FiSettings, FiCode, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

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

export default function ServicesPage() {
  const { t, i18n } = useTranslation('common');
  const isRTL = i18n.dir() === 'rtl';

  const industries = [
    { slug: 'retail-ecommerce', icon: FaShoppingCart },
    { slug: 'healthcare-diagnostics', icon: FaHeartbeat },
    { slug: 'education-edtech', icon: FaBookOpen },
    { slug: 'finance-banking', icon: FaLandmark },
    { slug: 'manufacturing-logistics', icon: FaIndustry },
    { slug: 'call-center-quality-assurance', icon: FaHeadset },
    { slug: 'software-engineering', icon: FaCode },
  ];

  const technologies = [
    { key: 'tech1', icon: FiBarChart2 },
    { key: 'tech2', icon: FiMessageSquare },
    { key: 'tech3', icon: FiEye },
    { key: 'tech4', icon: FiZap },
    { key: 'tech5', icon: FiSettings },
    { key: 'tech6', icon: FiLayers },
    { key: 'tech7', icon: FiDatabase },
    { key: 'tech8', icon: FiCloud },
  ];

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>{t('services_page_title')}</title>
        <meta name="description" content={t('services_page_description')} />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t('services_hero_title')}</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            {t('services_hero_subtitle')}
          </p>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t('industries_title')}
            </h2>
            <p className="text-lg text-accent-gray-700">
              {t('industries_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link href={`/industries/${industry.slug}`} key={industry.slug} legacyBehavior>
                  <a className="group block bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                    <div className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                          <Icon className="text-primary text-3xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {t(`industries.${industry.slug}.title`)}
                          </h3>
                          <p className="text-accent-gray-600 text-sm">
                            {t(`industries.${industry.slug}.shortDescription`)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-5 mt-auto">
                      <span className="text-primary font-bold text-sm group-hover:underline">
                        {t('learn_more')} <FaArrowRight className={`inline ml-1 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                      </span>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* AI Technologies Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t('ai_technologies_title')}
            </h2>
            <p className="text-lg text-accent-gray-700">
              {t('ai_technologies_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div key={tech.key} variants={fadeInUp} className="bg-white rounded-lg shadow-md p-6 flex items-start border-l-4 border-primary">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                    <Icon className="text-primary text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t(`${tech.key}_title`)}
                    </h3>
                    <p className="text-accent-gray-600 text-base leading-relaxed">
                      {t(`${tech.key}_desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-16 md:py-24 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('services_cta_title')}</h2>
          <p className="text-lg text-accent-gray-200 max-w-2xl mx-auto mb-8">
            {t('services_cta_subtitle')}
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg text-lg hover:bg-accent-gray-100 transition-colors duration-300">
              {t('services_cta_button')} <FiArrowRight className="inline ml-2" />
            </a>
          </Link>
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
