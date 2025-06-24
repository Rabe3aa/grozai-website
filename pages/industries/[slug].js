import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { 
  FiShoppingCart, FiHeart, FiBookOpen, FiDollarSign, FiTruck, FiBriefcase, 
  FiPhoneCall, FiSettings, FiCheckCircle 
} from 'react-icons/fi';

const iconMap = {
  'retail-ecommerce': FiShoppingCart,
  'healthcare-diagnostics': FiHeart,
  'education-edtech': FiBookOpen,
  'finance-banking': FiDollarSign,
  'manufacturing-logistics': FiTruck,
  'call-center-quality-assurance': FiPhoneCall,
  'software-engineering': FiSettings,
  'default': FiBriefcase,
};

export default function IndustryDetailPage() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { slug } = router.query;

  const industries = t('industries', { returnObjects: true }) || {};
  const industry = industries[slug];

  if (router.isFallback || !industry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <Head><title>Loading Industry... | GrozAI</title></Head>
        <h1 className="text-3xl font-bold mb-4 text-primary">Loading...</h1>
      </div>
    );
  }

  const IndustryIcon = iconMap[slug] || iconMap['default'];

  return (
    <>
      <Head>
        <title>{industry.title} | GrozAI</title>
        <meta name="description" content={industry.shortDescription} />
      </Head>
      <section className="min-h-screen bg-gray-50 py-24 px-4 md:px-0">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <Link href="/services" legacyBehavior>
              <a className="text-primary text-sm hover:underline mb-8 inline-block">&larr; {t('back_to_services', 'Back to All Services')}</a>
            </Link>
            <div className="flex items-center mb-6">
              <span className="text-5xl text-primary mr-4"><IndustryIcon /></span>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary">{industry.title}</h1>
            </div>
            <p className="text-lg text-gray-700 mb-10">{industry.detailedOverview}</p>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-6">{t('key_features', 'Key Features')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {industry.keyFeatures && industry.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <FiCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {industry.caseStudy && (
            <div className="bg-primary-light bg-opacity-20 p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">{industry.caseStudy.title}</h2>
              <p className="text-gray-700 leading-relaxed">{industry.caseStudy.text}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const en = await import('../../public/locales/en/common.json');
  const industries = en.industries || {};
  
  const paths = [];
  for (const locale of locales) {
    for (const slug in industries) {
      paths.push({ params: { slug }, locale });
    }
  }

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      slug: params.slug,
    },
    revalidate: 10, 
  };
}
