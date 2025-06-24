import Head from 'next/head';
import { motion } from 'framer-motion';
import { solutions } from '../../data/solutions';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function SolutionPage({ solution }) {
  if (!solution) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>{`${solution.title} - GrozAI Solutions`}</title>
        <meta name="description" content={solution.heroSubtitle} />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{solution.title}</h1>
            <p className="text-lg sm:text-xl text-accent-gray-200">
              {solution.heroSubtitle}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none text-accent-gray-700" dangerouslySetInnerHTML={{ __html: solution.content }} />
            
            <div className="mt-12 pt-8 border-t border-accent-gray-200">
              <Link href="/services" legacyBehavior>
                <a className="inline-flex items-center text-primary font-semibold group">
                  <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to All Services
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}

export async function getStaticPaths() {
  const paths = solutions.map((solution) => ({
    params: { slug: solution.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const solution = solutions.find((s) => s.slug === params.slug);
  return {
    props: { solution },
  };
}
