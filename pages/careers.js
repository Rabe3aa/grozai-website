import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiBriefcase, FiGift, FiCoffee, FiTrendingUp } from 'react-icons/fi';

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

const benefits = [
    { icon: <FiTrendingUp size={28} />, title: 'High-Impact Work', description: 'Work on challenging problems that have a real-world impact across major industries.' },
    { icon: <FiGift size={28} />, title: 'Competitive Compensation', description: 'We offer a competitive salary, equity, and comprehensive health benefits.' },
    { icon: <FiBriefcase size={28} />, title: 'Flexible Work Culture', description: 'We trust our team and offer flexible hours and remote work options to suit your lifestyle.' },
    { icon: <FiCoffee size={28} />, title: 'Continuous Learning', description: 'Stay ahead of the curve with a generous budget for conferences, courses, and books.' },
];

const jobOpenings = [
    {
        title: 'Senior AI Engineer (NLP)',
        department: 'Engineering',
        location: 'Remote',
        url: '#',
    },
    {
        title: 'Product Manager, AI Platforms',
        department: 'Product',
        location: 'Tech Valley, CA',
        url: '#',
    },
    {
        title: 'Data Scientist, Predictive Analytics',
        department: 'Data Science',
        location: 'Remote',
        url: '#',
    },
    {
        title: 'Enterprise Account Executive',
        department: 'Sales',
        location: 'New York, NY',
        url: '#',
    },
];

export default function CareersPage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>Careers at GrozAI - Shape the Future of AI</title>
        <meta name="description" content="Explore exciting career opportunities at GrozAI. Join our team of innovators and help build the future of enterprise AI." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Build the Future With Us</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            We&apos;re looking for brilliant minds to join our mission. If you&apos;re passionate about solving complex problems with AI, you&apos;ve come to the right place.
          </p>
        </div>
      </motion.section>

      {/* Why Join Us Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Why Join GrozAI?</h2>
            <p className="text-lg text-accent-gray-700">We&apos;re more than just a tech company. We&apos;re a team dedicated to growth, innovation, and making a difference.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeInUp} className="text-center p-6 bg-accent-gray-50 rounded-lg">
                <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-accent-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Current Openings Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Current Openings</h2>
            <p className="text-lg text-accent-gray-700">Find your next challenge. We&apos;re hiring across multiple departments.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-accent-gray-200">
              {jobOpenings.map((job) => (
                <motion.li key={job.title} variants={fadeInUp}>
                  <Link href={job.url} legacyBehavior>
                    <a className="block p-6 hover:bg-accent-gray-50 transition-colors duration-200">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <div>
                          <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                          <p className="text-md text-accent-gray-600 mt-1">
                            {job.department} &middot; {job.location}
                          </p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <span className="inline-flex items-center text-primary font-semibold">
                                Apply Now <FiArrowRight className="ml-2" />
                            </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
           <div className="text-center mt-12">
                <p className="text-lg text-accent-gray-600">Don&apos;t see a role that fits? <Link href="/contact"><a className="text-primary font-semibold hover:underline">Get in touch</a></Link>, we&apos;d still love to hear from you.</p>
            </div>
        </div>
      </motion.section>

    </motion.div>
  );
}
