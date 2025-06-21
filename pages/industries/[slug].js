import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FiShoppingCart, FiHeart, FiBookOpen, FiDollarSign, FiTruck, FiBriefcase, FiCpu, FiDatabase, FiZap, FiBarChart, FiCheckSquare, FiShield, FiUserCheck, FiTrendingUp, FiAward, FiClipboard, FiUsers, FiTarget, FiCreditCard, FiShuffle, FiMonitor, FiTool } from 'react-icons/fi';

const iconMap = {
  'retail-ecommerce': FiShoppingCart,
  'healthcare-diagnostics': FiHeart,
  'education-edtech': FiBookOpen,
  'finance-banking': FiDollarSign,
  'manufacturing-logistics': FiTruck,
  'default': FiBriefcase,
  'custom-ai-models': FiCpu,
  'data-strategy': FiDatabase,
  'ai-automation': FiZap,
  'strategic-ai-consulting': FiBriefcase,
  'personalized-recommendations': FiUserCheck,
  'demand-forecasting': FiTrendingUp,
  'shelf-monitoring': FiMonitor,
  'churn-prediction': FiUsers,
  'medical-doc-ocr': FiClipboard,
  'ai-powered-diagnostics': FiAward,
  'insurance-fraud-detection': FiShield,
  'real-time-patient-analysis': FiBarChart,
  'ai-powered-tutors': FiUsers,
  'automated-assessments': FiCheckSquare,
  'interactive-learning-platforms': FiBookOpen,
  'curriculum-analytics': FiTarget,
  'real-time-fraud-detection': FiShield,
  'algorithmic-trading': FiShuffle,
  'ai-credit-scoring': FiCreditCard,
  'robo-advisory-services': FiDollarSign,
  'predictive-maintenance': FiTool,
  'automated-quality-control': FiCheckSquare,
  'supply-chain-optimization': FiTruck,
  'robotic-process-automation': FiCpu
};

export default function IndustryDetailPage() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { slug } = router.query;

  const industries = t('industries', { returnObjects: true });
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
      <section className="min-h-screen bg-accent-gray-50 py-24 px-4 md:px-0">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <Link href="/" legacyBehavior>
            <a className="text-primary text-sm hover:underline mb-8 inline-block">&larr; {t('back_to_home', 'Back to Home')}</a>
          </Link>
          <div className="flex items-center mb-6">
            <span className="text-5xl text-primary mr-4"><IndustryIcon /></span>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">{industry.title}</h1>
          </div>
          <p className="text-lg text-accent-gray-700 mb-8">{industry.details.overview}</p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">{t('key_ai_solutions', 'Key AI Solutions')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.details.solutions.map((solution, idx) => {
                const SolutionIcon = iconMap[solution.title.toLowerCase().replace(/\s+/g, '-')] || FiBriefcase;
                return (
                  <div key={idx} className="bg-accent-gray-50 rounded-lg p-6 flex">
                    <span className="text-3xl text-primary mr-4 mt-1"><SolutionIcon /></span>
                    <div>
                      <h3 className="font-bold text-lg text-accent-gray-800 mb-1">{solution.title}</h3>
                      <p className="text-accent-gray-600">{solution.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="bg-accent-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">{t('how_grozai_delivers', 'How GrozAI Delivers')}</h2>
            <p className="text-accent-gray-700">{industry.details.howWePerform}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const ar = await import('../../public/locales/ar/common.json');
  const industries = ar.industries;
  
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
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      slug: params.slug,
    },
    revalidate: 1, 
  };
}
