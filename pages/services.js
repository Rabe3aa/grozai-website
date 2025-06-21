import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBarChart2, FiMessageSquare, FiEye, FiCpu, FiDatabase, FiBriefcase, FiCode, FiLayers, FiShield, FiCloud, FiCpu as FiChip, FiZap } from 'react-icons/fi';
import Link from 'next/link';
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

const services = [
  {
    icon: <FiBarChart2 size={32} className="text-primary" />,
    title: 'Predictive Analytics & Forecasting',
    description: 'Leverage your historical data to predict future trends, optimize operations, and make proactive, data-driven decisions. From demand forecasting to customer churn prediction, we build models that deliver measurable results.',
    link: '/solutions/predictive-analytics',
  },
  {
    icon: <FiMessageSquare size={32} className="text-primary" />,
    title: 'Natural Language Processing (NLP)',
    description: 'Unlock insights from unstructured text data. We build custom NLP solutions for sentiment analysis, document summarization, intelligent chatbots, and information extraction to automate processes and enhance customer interactions.',
    link: '/solutions/nlp',
  },
  {
    icon: <FiEye size={32} className="text-primary" />,
    title: 'Computer Vision Solutions',
    description: 'Turn images and videos into valuable data. Our computer vision services include object detection, image classification, and facial recognition to improve quality control, enhance security, and create innovative user experiences.',
    link: '/solutions/computer-vision',
  },
];

export default function ServicesPage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>Our AI Services - GrozAI Solutions</title>
        <meta name="description" content="Explore GrozAI's suite of AI services, including predictive analytics, natural language processing (NLP), and computer vision solutions." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">AI-Powered Services</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            We deliver end-to-end AI solutions designed to solve your most complex business challenges and drive sustainable growth.
          </p>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Core Capabilities</h2>
            <p className="text-lg text-accent-gray-700">Our expertise spans the most critical domains of artificial intelligence, allowing us to build tailored solutions that fit your unique needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div 
                key={service.title} 
                variants={fadeInUp} 
                className="bg-accent-gray-50 rounded-lg p-8 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-accent-gray-600 flex-grow mb-6">{service.description}</p>
                <Link href={service.link} legacyBehavior>
                  <a className="text-primary font-semibold inline-flex items-center group">
                    Learn More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Core Capabilities Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Cutting-Edge AI Technologies</h2>
            <p className="text-lg text-accent-gray-700">We leverage the latest advancements in artificial intelligence to deliver innovative solutions that drive business transformation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-accent-gray-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FiCode className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Generative AI</h3>
              <p className="text-accent-gray-600 mb-4">Create original content, designs, and solutions using advanced generative models that push the boundaries of AI creativity.</p>
              <ul className="space-y-2 text-sm text-accent-gray-500">
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Content generation & augmentation</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Creative design assistance</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Code generation & automation</span></li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-accent-gray-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FiLayers className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Multimodal AI</h3>
              <p className="text-accent-gray-600 mb-4">Combine text, images, audio, and video for more comprehensive AI solutions that understand and process multiple data types.</p>
              <ul className="space-y-2 text-sm text-accent-gray-500">
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Cross-modal understanding</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Content-based retrieval</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Interactive AI experiences</span></li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-accent-gray-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FiShield className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Responsible AI</h3>
              <p className="text-accent-gray-600 mb-4">Ensure your AI systems are fair, transparent, and aligned with ethical guidelines through our comprehensive responsible AI practices.</p>
              <ul className="space-y-2 text-sm text-accent-gray-500">
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Bias detection & mitigation</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Explainable AI (XAI)</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>AI governance & compliance</span></li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-accent-gray-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FiCloud className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Cloud-Native AI</h3>
              <p className="text-accent-gray-600 mb-4">Deploy scalable, high-performance AI solutions using cloud-native architectures and serverless technologies.</p>
              <ul className="space-y-2 text-sm text-accent-gray-500">
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Distributed model training</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Auto-scaling inference</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Hybrid cloud deployments</span></li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-accent-gray-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FiChip className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Edge AI</h3>
              <p className="text-accent-gray-600 mb-4">Bring AI to the edge with optimized models that run efficiently on resource-constrained devices.</p>
              <ul className="space-y-2 text-sm text-accent-gray-500">
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Model optimization & quantization</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Real-time inference</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Federated learning</span></li>
              </ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-accent-gray-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FiZap className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">AI Automation</h3>
              <p className="text-accent-gray-600 mb-4">Streamline operations and enhance productivity with intelligent automation solutions powered by AI and machine learning.</p>
              <ul className="space-y-2 text-sm text-accent-gray-500">
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Intelligent process automation</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Document processing</span></li>
                <li className="flex items-start"><FiZap className="text-primary mt-1 mr-2 flex-shrink-0" /> <span>Workflow optimization</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-16 md:py-24 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have a Specific Challenge?</h2>
          <p className="text-lg text-accent-gray-200 max-w-2xl mx-auto mb-8">
            Our team is ready to discuss your project. Let&apos;s build a custom AI strategy to help you achieve your goals.
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg text-lg hover:bg-accent-gray-100 transition-colors duration-300">
              Contact Us Today <FiArrowRight className="inline ml-2" />
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
