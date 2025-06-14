import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiDollarSign, FiHeart, FiShoppingCart, FiTool } from 'react-icons/fi';

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

const industries = [
  {
    id: 'financial-services',
    icon: <FiDollarSign size={40} className="text-primary" />,
    name: 'Financial Services',
    description: 'Empowering financial institutions with AI for enhanced security, personalized customer experiences, and data-driven investment strategies.',
    challenges: ['Algorithmic Trading', 'Fraud Detection & Risk Management', 'Personalized Banking', 'Regulatory Compliance'],
    caseStudy: {
      client: 'Global Bank Inc.',
      story: 'Reduced fraudulent transactions by 40% in the first year by implementing our real-time anomaly detection models powered by InsightAI.',
    },
  },
  {
    id: 'healthcare',
    icon: <FiHeart size={40} className="text-primary" />,
    name: 'Healthcare',
    description: 'Transforming patient care and hospital operations with AI-driven diagnostics, personalized treatment plans, and streamlined administrative workflows.',
    challenges: ['Predictive Diagnostics', 'Personalized Medicine', 'Hospital Operations Management', 'Medical Record Analysis'],
    caseStudy: {
      client: 'Metro Health System',
      story: 'Improved diagnostic accuracy for early-stage diseases by 25% and optimized patient scheduling, reducing wait times by 30% with PredictiveEdge.',
    },
  },
  {
    id: 'retail-ecommerce',
    icon: <FiShoppingCart size={40} className="text-primary" />,
    name: 'Retail & E-commerce',
    description: 'Creating hyper-personalized shopping experiences, optimizing supply chains, and forecasting demand to maximize revenue and customer loyalty.',
    challenges: ['Demand Forecasting', 'Personalized Recommendations', 'Supply Chain Optimization', 'Customer Churn Prediction'],
    caseStudy: {
      client: 'Shopify Plus Retailer',
      story: 'Increased average order value by 15% through our AI-powered recommendation engine and reduced inventory costs with accurate demand forecasting.',
    },
  },
  {
    id: 'manufacturing',
    icon: <FiTool size={40} className="text-primary" />,
    name: 'Manufacturing',
    description: 'Building the smart factories of the future with AI-powered predictive maintenance, quality control, and supply chain automation.',
    challenges: ['Predictive Maintenance', 'Quality Assurance Automation', 'Supply Chain Logistics', 'Robotics & Automation'],
    caseStudy: {
      client: 'AutoParts Manufacturing Co.',
      story: 'Decreased machine downtime by 50% with our PredictiveEdge maintenance alerts and improved production quality using AI-vision for defect detection.',
    },
  },
];

export default function IndustriesPage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>Industries We Serve - GrozAI</title>
        <meta name="description" content="Discover how GrozAI provides tailored AI solutions for Financial Services, Healthcare, Retail, and Manufacturing." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">AI Solutions, Industry-Tuned</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            We combine deep AI expertise with industry-specific knowledge to solve your most complex challenges and unlock unparalleled value.
          </p>
        </div>
      </motion.section>

      {/* Industries Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {industries.map((industry, index) => (
            <motion.section
              key={industry.id}
              id={industry.id}
              variants={fadeInUp}
              className={`py-12 md:py-16 ${index < industries.length - 1 ? 'border-b border-accent-gray-200' : ''}`}
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div className="mb-4">{industry.icon}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{industry.name}</h2>
                  <p className="text-lg text-accent-gray-700 mb-6">{industry.description}</p>
                  <div className="bg-accent-gray-50 p-6 rounded-lg border border-accent-gray-200">
                    <h4 className="font-bold text-accent-gray-800">Case Study: {industry.caseStudy.client}</h4>
                    <p className="text-accent-gray-600 italic mt-2">\"{industry.caseStudy.story}\"</p>
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-accent-gray-800 mb-4">Key Application Areas</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {industry.challenges.map((challenge, i) => (
                        <div key={i} className="bg-accent-gray-100 p-3 rounded-md text-center">
                          <p className="text-sm font-medium text-accent-gray-800">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.section variants={fadeInUp} className="bg-accent-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Let's Build Your Industry's Future</h2>
          <p className="text-lg text-accent-gray-700 max-w-2xl mx-auto mb-8">
            Contact us to learn how GrozAI can develop a bespoke AI strategy for your specific sector and business needs.
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300">
              Speak with an Industry Expert <FiArrowRight className="inline ml-2" />
            </a>
          </Link>
        </div>
      </motion.section>

    </motion.div>
  );
}
