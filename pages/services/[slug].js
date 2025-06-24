import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FiShoppingCart, FiHeart, FiBookOpen, FiDollarSign, FiTruck, FiPhoneCall, FiSettings, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

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

const serviceSlugs = [
  'retail-ecommerce',
  'healthcare-diagnostics',
  'education-edtech',
  'finance-banking',
  'manufacturing-logistics',
  'call-center-quality-assurance',
  'software-engineering',
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ServiceDetailPage() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { slug } = router.query;

  if (router.isFallback) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <Head><title>Loading Service... | GrozAI</title></Head>
        <h1 className="text-3xl font-bold mb-4 text-primary">Loading...</h1>
      </div>
    );
  }

  // Placeholder data - this will be replaced with data from translation files
  const service = {
    title: t(`solutions_${slug.replace(/-/g, '_')}_title`),
    project: t(`solutions_${slug.replace(/-/g, '_')}_project`),
    overview: t(`solutions_${slug.replace(/-/g, '_')}_desc`),
    details: {
        overview: `This is a detailed overview for ${slug}. We provide comprehensive solutions to tackle the most complex challenges in this industry. Our team of experts leverages cutting-edge AI and data science to deliver measurable results and drive innovation.`,
        key_benefits: [
            { title: "Increased Efficiency", description: "Automate processes and optimize workflows." },
            { title: "Deeper Insights", description: "Unlock valuable insights from your data." },
            { title: "Enhanced Decision-Making", description: "Make smarter, data-driven decisions." }
        ],
        case_study: {
            title: "Success Story: Transforming Operations",
            description: "Learn how we helped a leading company in this sector achieve a 200% ROI through our custom AI solutions."
        }
    }
  };

  const ServiceIcon = iconMap[slug] || iconMap['default'];

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>{`${service.title} | GrozAI Services`}</title>
        <meta name="description" content={service.overview} />
      </Head>
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={fadeInUp} className="flex justify-center items-center mb-6">
            <span className="text-5xl text-white mr-4"><ServiceIcon /></span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{service.title}</motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            {service.project}
          </motion.p>
        </div>
      </motion.section>

      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="prose lg:prose-xl max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-4">Overview</h2>
            <p>{service.details.overview}</p>
            
            <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Key Benefits</h3>
            <ul>
              {service.details.key_benefits.map((benefit, index) => (
                <li key={index}><strong>{benefit.title}:</strong> {benefit.description}</li>
              ))}
            </ul>

            <div className="bg-accent-gray-50 rounded-xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-primary mb-4">{service.details.case_study.title}</h3>
                <p>{service.details.case_study.description}</p>
                <Link href="/contact" legacyBehavior>
                    <a className="text-primary font-semibold hover:underline mt-4 inline-block">Request a Demo &rarr;</a>
                </Link>
            </div>
          </div>
           <div className="mt-12 text-center">
             <Link href="/services" legacyBehavior>
                <a className="text-primary hover:underline">&larr; Back to All Services</a>
             </Link>
           </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];
  for (const locale of locales) {
    for (const slug of serviceSlugs) {
      paths.push({ params: { slug }, locale });
    }
  }

  return {
    paths,
    fallback: false, // All paths are pre-rendered
  };
}

export async function getStaticProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      slug: params.slug,
    },
  };
}
