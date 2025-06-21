import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiAward, FiUsers, FiTrendingUp, FiCpu } from 'react-icons/fi';
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

export default function AboutPage() {
  const { t } = useTranslation('common');

  const leadership = [
    {
      name: t('about_leader1_name'),
      title: t('about_leader1_title'),
      bio: t('about_leader1_bio'),
      image: '/images/leader-1.jpg',
    },
    {
      name: t('about_leader2_name'),
      title: t('about_leader2_title'),
      bio: t('about_leader2_bio'),
      image: '/images/leader-3.jpg',
    },
    {
      name: t('about_leader3_name'),
      title: t('about_leader3_title'),
      bio: t('about_leader3_bio'),
      image: '/images/leader-2.jpg',
    },
  ];

  const values = [
    { icon: <FiCpu size={28} />, title: t('about_value1_title'), description: t('about_value1_desc') },
    { icon: <FiUsers size={28} />, title: t('about_value2_title'), description: t('about_value2_desc') },
    { icon: <FiAward size={28} />, title: t('about_value3_title'), description: t('about_value3_desc') },
  ];

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>{t('about_page_title')}</title>
        <meta name="description" content={t('about_page_description')} />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t('about_hero_title')}</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            {t('about_hero_subtitle')}
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('about_mission_title')}</h2>
            <p className="text-lg text-accent-gray-700 leading-relaxed">
              {t('about_mission_text')}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('about_story_title')}</h2>
            <p className="text-lg text-accent-gray-700 leading-relaxed">
              {t('about_story_text')}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('about_values_title')}</h2>
            <p className="text-lg text-accent-gray-700">{t('about_values_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="p-6 border-2 border-primary rounded-xl transition-all duration-300 group bg-white hover:bg-primary hover:text-white cursor-pointer"
              >
                <div className="inline-block p-4 rounded-full mb-4 border-2 border-primary transition-all duration-300 group-hover:bg-white group-hover:border-white">
                  {React.cloneElement(value.icon, {
                    className: 'text-primary group-hover:text-primary',
                    style: { stroke: '#00127a', color: 'inherit' },
                  })}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-white">{value.title}</h3>
                <p className="text-accent-gray-600 transition-colors duration-300 group-hover:text-white">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('about_leadership_title')}</h2>
            <p className="text-lg text-accent-gray-700">{t('about_leadership_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {leadership.map((leader) => (
              <motion.div key={leader.name} variants={fadeInUp} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                <p className="text-primary font-semibold mb-2">{leader.title}</p>
                <p className="text-sm text-accent-gray-600 max-w-xs mx-auto">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Success Partners Section */}
      <motion.section variants={fadeInUp} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('about_partners_title')}</h2>
            <p className="text-lg text-accent-gray-700">{t('about_partners_subtitle')}</p>
          </div>
          <div className="flex flex-col items-center">
            <motion.div variants={fadeInUp} className="text-center max-w-md">
              <div className="relative w-36 h-36 mx-auto mb-4">
                <Image
                  src="/images/partner-adel-fawzy.jpg"
                  alt={t('about_partner1_name')}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-primary">{t('about_partner1_name')}</h3>
              <p className="text-primary font-semibold mb-2">{t('about_partner1_title')}</p>
              <p className="text-sm text-accent-gray-600 max-w-xs mx-auto">
                {t('about_partner1_bio')}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-16 md:py-24 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('about_cta_title')}</h2>
          <p className="text-lg text-accent-gray-200 max-w-2xl mx-auto mb-8">
            {t('about_cta_subtitle')}
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg text-lg hover:bg-accent-gray-100 transition-colors duration-300">
              {t('about_cta_button')} <FiArrowRight className="inline ml-2" />
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
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}
