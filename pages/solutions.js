import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FiArrowRight, FiCheckCircle, FiUsers, FiSettings, FiTrendingUp, FiShield } from 'react-icons/fi';

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

const solutions = [
  {
    icon: <FiUsers size={32} className="mb-4 text-primary" />,
    title: 'Enhance Customer Experience',
    description: 'Deliver personalized, proactive, and seamless experiences that build loyalty and drive growth.',
    challenges: ['Understanding customer behavior', 'Personalizing interactions at scale', 'Providing 24/7 support'],
    ourSolution: 'We leverage InsightAI to analyze customer data and AutomatePro to power intelligent chatbots and personalized communication workflows, creating a unified and delightful customer journey.',
    outcomes: ['Increased customer satisfaction & retention', 'Higher engagement and conversion rates', 'Reduced support costs'],
    relatedProducts: ['InsightAI', 'AutomatePro'],
  },
  {
    icon: <FiSettings size={32} className="mb-4 text-primary" />,
    title: 'Optimize Operational Efficiency',
    description: 'Streamline complex processes, eliminate bottlenecks, and reduce operational costs with intelligent automation.',
    challenges: ['Manual, repetitive tasks', 'Siloed data and systems', 'Inefficient resource allocation'],
    ourSolution: 'AutomatePro is deployed to handle routine tasks and orchestrate workflows across departments, while PredictiveEdge forecasts operational needs, ensuring resources are allocated effectively.',
    outcomes: ['Significant reduction in manual effort', 'Accelerated process cycle times', 'Improved data accuracy and compliance'],
    relatedProducts: ['AutomatePro', 'PredictiveEdge'],
  },
  {
    icon: <FiTrendingUp size={32} className="mb-4 text-primary" />,
    title: 'Accelerate Business Growth',
    description: 'Identify new market opportunities, forecast demand, and make strategic decisions with confidence.',
    challenges: ['Identifying market trends', 'Forecasting future demand accurately', 'Making high-stakes strategic bets'],
    ourSolution: 'Our PredictiveEdge engine analyzes market data to uncover growth opportunities, while InsightAI provides the deep competitive and customer intelligence needed to inform your strategy.',
    outcomes: ['Increased market share', 'Improved ROI on new initiatives', 'Data-driven strategic planning'],
    relatedProducts: ['PredictiveEdge', 'InsightAI'],
  },
  {
    icon: <FiShield size={32} className="mb-4 text-primary" />,
    title: 'Mitigate Risk & Ensure Compliance',
    description: 'Proactively identify potential risks, detect fraudulent activity, and navigate complex regulatory landscapes.',
    challenges: ['Evolving security threats', 'Complex regulatory requirements', 'Detecting sophisticated fraud'],
    ourSolution: 'We utilize InsightAI for advanced anomaly detection and PredictiveEdge to model potential risk scenarios, creating a robust framework for compliance and security.',
    outcomes: ['Reduced exposure to financial and security risks', 'Strengthened regulatory compliance', 'Increased trust and reliability'],
    relatedProducts: ['InsightAI', 'PredictiveEdge'],
  },
];

export default function SolutionsPage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>Business Solutions - GrozAI</title>
        <meta name="description" content="Discover how GrozAI's AI-powered solutions address key business challenges in customer experience, operational efficiency, growth, and risk management." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">From Challenge to Opportunity</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            We don&apos;t just build technology. We craft targeted solutions that solve your most pressing business problems and unlock new avenues for growth.
          </p>
        </div>
      </motion.section>

      {/* Solutions Grid */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Solutions for Your Enterprise</h2>
            <p className="text-lg text-accent-gray-700">
              Explore how our integrated AI capabilities can be applied to drive meaningful outcomes across your organization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-accent-gray-50 border border-accent-gray-200 rounded-lg p-6 md:p-8 flex flex-col"
              >
                {solution.icon}
                <h3 className="text-2xl font-bold text-primary mb-3">{solution.title}</h3>
                <p className="text-accent-gray-700 mb-6 flex-grow">{solution.description}</p>
                
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-accent-gray-800 mb-2">Common Challenges:</h4>
                        <ul className="list-disc list-inside text-sm text-accent-gray-600 space-y-1">
                            {solution.challenges.map(c => <li key={c}>{c}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-accent-gray-800 mb-2">Our Approach:</h4>
                        <p className="text-sm text-accent-gray-600">{solution.ourSolution}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-accent-gray-800 mb-2">Key Outcomes:</h4>
                        <ul className="list-disc list-inside text-sm text-accent-gray-600 space-y-1">
                            {solution.outcomes.map(o => <li key={o}>{o}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-accent-gray-200">
                    <p className="text-sm font-semibold text-accent-gray-800">Powered by:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {solution.relatedProducts.map(p => (
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
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Have a Specific Challenge in Mind?</h2>
          <p className="text-lg text-accent-gray-700 max-w-2xl mx-auto mb-8">
            Our experts are ready to discuss your unique requirements and design a custom AI strategy that aligns with your goals.
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300">
              Talk to an Expert <FiArrowRight className="inline ml-2" />
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
