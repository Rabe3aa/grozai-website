import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { FaThumbsUp } from 'react-icons/fa';
import { FiArrowRight, FiCheckCircle, FiUsers, FiSettings, FiTrendingUp, FiShield, FiPhoneCall, FiBarChart2 } from 'react-icons/fi';

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



export default function SolutionsPage() {
  const { t } = useTranslation('common');

  const solutions = [
    { key: 'customer_experience', icon: <FiUsers size={32} className="mb-4 text-primary" /> },
    { key: 'operational_efficiency', icon: <FiSettings size={32} className="mb-4 text-primary" /> },
    { key: 'business_growth', icon: <FiTrendingUp size={32} className="mb-4 text-primary" /> },
    { key: 'risk_mitigation', icon: <FiShield size={32} className="mb-4 text-primary" /> },
  ];

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>{`${t('solutions_page_meta_title')} - GrozAI`}</title>
        <meta name="description" content={t('solutions_page_meta_description')} />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {t('solutions_hero_title')}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            {t('solutions_hero_subtitle')}
          </p>
        </div>
      </motion.section>

      {/* Quality Assurance Product Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t('qa_system_title')}
            </h2>
            <p className="text-lg text-accent-gray-700">
              {t('qa_system_subtitle')}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-10 text-center">
                <div className="feature">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-primary/20">
                    <FiPhoneCall className="text-primary text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t('qa_system_feature1_title')}</h3>
                  <p className="text-accent-gray-600">{t('qa_system_feature1_desc')}</p>
                </div>
                <div className="feature">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-primary/20">
                    <FiBarChart2 className="text-primary text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t('qa_system_feature2_title')}</h3>
                  <p className="text-accent-gray-600">{t('qa_system_feature2_desc')}</p>
                </div>
                <div className="feature">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-primary/20">
                    <FaThumbsUp className="text-primary text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{t('qa_system_feature3_title')}</h3>
                  <p className="text-accent-gray-600">{t('qa_system_feature3_desc')}</p>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link href="/contact" legacyBehavior>
                  <a className="inline-block bg-primary text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {t('qa_system_learn_more')} <FiArrowRight className="inline ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solutions Grid */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('solutions_grid_title')}</h2>
            <p className="text-lg text-accent-gray-700">
              {t('solutions_grid_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <motion.div
                key={solution.key}
                variants={fadeInUp}
                className="bg-accent-gray-50 border border-accent-gray-200 rounded-lg p-6 md:p-8 flex flex-col"
              >
                {solution.icon}
                <h3 className="text-2xl font-bold text-primary mb-3">{t(`solutions_page.${solution.key}.title`)}</h3>
                <p className="text-accent-gray-700 mb-6 flex-grow">{t(`solutions_page.${solution.key}.description`)}</p>
                
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-accent-gray-800 mb-2">{t('solutions_page_challenges_title')}</h4>
                        <ul className="list-disc list-inside text-sm text-accent-gray-600 space-y-1">
                            {t(`solutions_page.${solution.key}.challenges`, { returnObjects: true }).map(c => <li key={c}>{c}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-accent-gray-800 mb-2">{t('solutions_page_approach_title')}</h4>
                        <p className="text-sm text-accent-gray-600">{t(`solutions_page.${solution.key}.ourSolution`)}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-accent-gray-800 mb-2">{t('solutions_page_outcomes_title')}</h4>
                        <ul className="list-disc list-inside text-sm text-accent-gray-600 space-y-1">
                            {t(`solutions_page.${solution.key}.outcomes`, { returnObjects: true }).map(o => <li key={o}>{o}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-accent-gray-200">
                    <p className="text-sm font-semibold text-accent-gray-800">{t('solutions_page_powered_by_title')}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {t(`solutions_page.${solution.key}.relatedProducts`, { returnObjects: true }).map(p => (
                            <Link key={p} href={`/products#${p.toLowerCase()}`} legacyBehavior>
                                <a className="text-xs bg-primary text-white px-2 py-1 rounded-full hover:bg-blue-700 transition-colors">{p}</a>
                            </Link>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={fadeInUp} className="bg-accent-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('solutions_cta_title')}</h2>
          <p className="text-lg text-accent-gray-700 max-w-2xl mx-auto mb-8">
            {t('solutions_cta_subtitle')}
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300">
              {t('solutions_cta_button')} <FiArrowRight className="inline ml-2" />
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
