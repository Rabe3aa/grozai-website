import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function SolutionPage({ solution }) {
  const { t } = useTranslation('common');

  if (!solution) {
    return <div>{t('loading', 'Loading...')}</div>;
  }

  const solutionTitle = t(`solutions.${solution.slug}.title`);
  const solutionHeroSubtitle = t(`solutions.${solution.slug}.heroSubtitle`);
  const solutionContent = t(`solutions.${solution.slug}.content`);

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>{`${solutionTitle} - ${t('grozai_solutions', 'GrozAI Solutions')}`}</title>
        <meta name="description" content={solutionHeroSubtitle} />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{solutionTitle}</h1>
            <p className="text-lg sm:text-xl text-accent-gray-200">
              {solutionHeroSubtitle}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-accent-gray-700" dangerouslySetInnerHTML={{ __html: solutionContent }} />
            
            <div className="mt-12 pt-8 border-t border-accent-gray-200">
              <Link href="/solutions" legacyBehavior>
                <a className="inline-flex items-center text-primary font-semibold group">
                  <FiArrowLeft className="me-2 rtl:-scale-x-100 group-hover:-translate-x-1 transition-transform" />
                  {t('back_to_all_solutions', 'Back to All Solutions')}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}

export async function getStaticPaths({ locales }) {
  const enTranslations = require('../../public/locales/en/common.json');
  const slugs = Object.keys(enTranslations.solutions);

  const paths = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      paths.push({ params: { slug }, locale });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  
  const enTranslations = require(`../../public/locales/en/common.json`);
  const solutionData = enTranslations.solutions[slug] || {};

  const solution = {
    slug,
    ...solutionData
  };

  return {
    props: { 
      ...(await serverSideTranslations(locale, ['common'])),
      solution 
    },
  };
}
