import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiCpu, FiDatabase, FiZap, FiTrendingUp, FiPackage, FiLayers, FiBarChart2 } from 'react-icons/fi';

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

const products = [
  {
    id: 'insightai',
    icon: <FiBarChart2 size={40} className="text-primary" />,
    name: 'InsightAI Platform',
    description: 'An advanced analytics platform that uncovers deep insights from your data, enabling smarter, faster decision-making across your enterprise.',
    features: [
      'Advanced Data Visualization',
      'Real-time Analytics Dashboard',
      'Natural Language Processing (NLP) Queries',
      'Automated Anomaly Detection',
      'Custom Report Generation',
    ],
    benefits: 'Empowers teams with actionable intelligence, revealing hidden patterns and opportunities in complex datasets to drive strategic growth.',
  },
  {
    id: 'automatepro',
    icon: <FiZap size={40} className="text-primary" />,
    name: 'AutomatePro Suite',
    description: 'Intelligently automate repetitive tasks and complex workflows, freeing up your team to focus on high-value, strategic initiatives.',
    features: [
      'Robotic Process Automation (RPA)',
      'Intelligent Document Processing',
      'AI-powered Workflow Orchestration',
      'Integration with 100+ Enterprise Apps',
      'Performance & ROI Analytics',
    ],
    benefits: 'Dramatically increases operational efficiency, reduces human error, and accelerates business processes for a significant competitive advantage.',
  },
  {
    id: 'predictiveedge',
    icon: <FiTrendingUp size={40} className="text-primary" />,
    name: 'PredictiveEdge Engine',
    description: 'Forecast future trends, customer behavior, and operational outcomes with our cutting-edge predictive modeling engine.',
    features: [
      'Time-Series Forecasting Models',
      'Customer Churn Prediction',
      'Demand & Inventory Forecasting',
      'Predictive Maintenance Alerts',
      'Scenario Modeling & Simulation',
    ],
    benefits: 'Enables proactive, data-driven decision-making by providing accurate forecasts that mitigate risk and capitalize on future opportunities.',
  },
];

export default function ProductsPage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>Our AI-Powered Platforms - GrozAI</title>
        <meta name="description" content="Explore GrozAI's suite of intelligent platforms: InsightAI for analytics, AutomatePro for workflow automation, and PredictiveEdge for forecasting." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Our Suite of AI Platforms</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            Powerful, scalable, and built for the enterprise. Discover how our AI-powered products can transform your business from the ground up.
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
                    <h3 className="text-xl font-semibold text-accent-gray-800 mb-4">Key Features</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Ready to See Our Products in Action?</h2>
          <p className="text-lg text-accent-gray-700 max-w-2xl mx-auto mb-8">
            Schedule a personalized demo with one of our AI specialists and discover how GrozAI can address your unique challenges.
          </p>
          <Link href="/contact#request-demo" legacyBehavior>
            <a className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300">
              Request a Demo <FiArrowRight className="inline ml-2" />
            </a>
          </Link>
        </div>
      </motion.section>

    </motion.div>
  );
}
