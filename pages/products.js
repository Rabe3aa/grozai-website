import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiBarChart2, FiZap, FiTrendingUp } from 'react-icons/fi';
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

export default function ProductsPage() {
  const { t } = useTranslation('common');

  const products = [
    {
      id: 'insightai',
      icon: <FiBarChart2 size={40} className="text-primary" />,
      name: t('product_insightai_name'),
      description: t('product_insightai_description'),
      features: [
        t('product_insightai_feature1'),
        t('product_insightai_feature2'),
        t('product_insightai_feature3'),
        t('product_insightai_feature4'),
        t('product_insightai_feature5'),
      ],
      benefits: t('product_insightai_benefits'),
    },
    {
      id: 'automatepro',
      icon: <FiZap size={40} className="text-primary" />,
      name: t('product_automatepro_name'),
      description: t('product_automatepro_description'),
      features: [
        t('product_automatepro_feature1'),
        t('product_automatepro_feature2'),
        t('product_automatepro_feature3'),
        t('product_automatepro_feature4'),
        t('product_automatepro_feature5'),
      ],
      benefits: t('product_automatepro_benefits'),
    },
    {
      id: 'predictiveedge',
      icon: <FiTrendingUp size={40} className="text-primary" />,
      name: t('product_predictiveedge_name'),
      description: t('product_predictiveedge_description'),
      features: [
        t('product_predictiveedge_feature1'),
        t('product_predictiveedge_feature2'),
        t('product_predictiveedge_feature3'),
        t('product_predictiveedge_feature4'),
        t('product_predictiveedge_feature5'),
      ],
      benefits: t('product_predictiveedge_benefits'),
    },
  ];

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>{t('products_meta_title')}</title>
        <meta name="description" content={t('products_meta_description')} />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t('products_hero_title')}</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            {t('products_hero_subtitle')}
          </p>
        </div>
      </motion.section>

      {/* Products Section */}
      <div className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {products.map((product, index) => (
            <motion.section
              key={product.id}
              id={product.id}
              variants={fadeInUp}
              className={`py-12 md:py-16 ${index < products.length - 1 ? 'border-b border-accent-gray-200' : ''}`}
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div className="mb-4">{product.icon}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{product.name}</h2>
                  <p className="text-lg text-accent-gray-700 mb-6">{product.description}</p>
                  <p className="text-base text-accent-gray-600 italic">{product.benefits}</p>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-accent-gray-200">
                    <h3 className="text-xl font-semibold text-accent-gray-800 mb-4">{t('products_features_title')}</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-accent-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.section variants={fadeInUp} className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('products_cta_title')}</h2>
          <p className="text-lg text-accent-gray-700 max-w-2xl mx-auto mb-8">
            {t('products_cta_subtitle')}
          </p>
          <Link href="/contact#request-demo" legacyBehavior>
            <a className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300">
              {t('request_demo')} <FiArrowRight className="inline ml-2" />
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
