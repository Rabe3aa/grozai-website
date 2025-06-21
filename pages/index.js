import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiPlayCircle, FiCpu, FiDatabase, FiZap, FiBriefcase, FiUsers, FiBarChart2, FiSmile, FiPackage, FiLayers, FiTrendingUp } from 'react-icons/fi';
import Image from 'next/image';
import CountUp from 'react-countup';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>GrozAI - AI and Data Science for Enterprise</title>
        
      </Head>

      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-4 md:px-6 py-20 pt-32 md:pt-20 hero-pattern" style={{ backgroundColor: '#00127a' }}
      >
        {/* The hero-pattern class now handles the background pattern */}
        
        <motion.div variants={stagger} className="z-10">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Intelligent Solutions, <br />Real-World Impact.
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-accent-gray-200 mb-12 max-w-3xl mx-auto"
          >
            GrozAI empowers enterprises with cutting-edge AI and Data Science to solve complex challenges and drive transformative growth.
          </motion.p>
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link href="/solutions" legacyBehavior>
              <a className="bg-white text-primary font-semibold px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-accent-gray-100 transition-colors duration-300 flex items-center group">
                Explore Our Solutions <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <Link href="/contact#request-demo" legacyBehavior>
              <a className="border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-white hover:text-primary transition-colors duration-300 flex items-center group">
                Request a Demo <FiPlayCircle className="ml-2 group-hover:scale-110 transition-transform" />
              </a>
            </Link>
          </motion.div>
        </motion.div>
        {/* Curved Bottom Shape */}
        <div className="absolute bottom-0 left-0 w-full text-secondary pointer-events-none overflow-hidden" style={{ height: 'clamp(50px, 7vw, 150px)' }}>
          <svg
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none"
            className="w-full h-full fill-current"
            aria-hidden="true"
          >
            <path d="M0,20 C360,100 1080,100 1440,20 L1440,100 L0,100 Z" />
          </svg>
        </div>
        {/* Optional: Scroll down indicator */}
        <motion.div 
          variants={fadeInUp}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5M4.5 12.75l7.5 7.5 7.5-7.5" />
          </svg>
        </motion.div>
      </section>

      {/* Section 1: What GrozAI Does */}
      <motion.section 
        variants={fadeInUp}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Transforming Businesses with Intelligent AI
          </h2>
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-accent-gray-700 max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            GrozAI specializes in developing bespoke Artificial Intelligence and Data Science solutions that empower enterprises to unlock new efficiencies, gain deeper insights from their data, and create innovative products and services. We bridge the gap between complex AI capabilities and real-world business value.
          </motion.p>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-left max-w-5xl mx-auto"
          >
            {[{
              icon: <FiCpu size={36} />,
              title: "Custom AI Models",
              description: "Tailored machine learning models for predictive analytics, NLP, computer vision, and more to solve your unique challenges."
            }, {
              icon: <FiDatabase size={36} />,
              title: "Data Strategy & Engineering",
              description: "Building robust data pipelines and infrastructure to support scalable AI applications and data-driven decisions."
            }, {
              icon: <FiZap size={36} />,
              title: "AI-Powered Automation",
              description: "Streamlining complex business processes and enhancing decision-making capabilities with intelligent automation solutions."
            }, {
              icon: <FiBriefcase size={36} />,
              title: "Strategic AI Consulting",
              description: "Guiding your business through its AI adoption journey, from ideation and strategy to implementation and scaling."
            }].map((item, index) => (
              <motion.div 
                variants={fadeInUp} 
                key={index} 
                className="group bg-white border-2 border-primary p-6 rounded-lg shadow-sm hover:bg-primary hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div className="mb-4 text-primary group-hover:text-white transition-colors duration-300 ease-in-out">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 group-hover:text-white transition-colors duration-300 ease-in-out">{item.title}</h3>
                <p className="text-accent-gray-600 text-sm group-hover:text-accent-gray-200 transition-colors duration-300 ease-in-out">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industries We Serve Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
            <p className="text-lg text-accent-gray-700">At Groz AI, we bring cutting-edge AI solutions to life across multiple industries—tailored, scalable, and built for real-world impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {require('../data/industries').default.map((industry) => (
  <Link
    key={industry.slug}
    href={`/industries/${industry.slug}`}
    legacyBehavior
  >
    <a className="border-2 border-primary rounded-xl transition-all duration-300 group bg-white hover:bg-primary hover:text-white cursor-pointer shadow p-6 flex flex-col" style={{ textDecoration: 'none' }}>
      <div className="text-4xl text-primary mb-4 transition-colors duration-300 group-hover:text-white">
        <industry.icon />
      </div>
      <h3 className="text-xl font-bold text-primary mb-4 transition-colors duration-300 group-hover:text-white">{industry.title}</h3>
      <ul className="list-disc list-inside text-accent-gray-700 mb-2 transition-colors duration-300 group-hover:text-white">
        {industry.details.solutions.map((sol, idx) => (
          <li key={idx}>{sol.title}</li>
        ))}
      </ul>
    </a>
  </Link>
))}
          </div>
        </div>
      </motion.section>

      {/* Key Stats & Clients Section */}
      <motion.section 
        variants={fadeInUp}
        className="py-16 md:py-24 bg-accent-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Driven by Data, Trusted by Leaders
          </h2>
          <motion.p 
            variants={fadeInUp} 
            className="text-base sm:text-lg md:text-xl text-accent-gray-700 max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            Our commitment to excellence and innovation has earned us the trust of forward-thinking enterprises. We deliver measurable results and foster long-term partnerships.
          </motion.p>

          {/* Animated Stats */}
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20"
          >
            {[{
              icon: <FiBarChart2 size={40} className="mx-auto mb-3 text-primary" />,
              value: 4,
              suffix: "+",
              label: "Projects Delivered"
            }, {
              icon: <FiUsers size={40} className="mx-auto mb-3 text-primary" />,
              value: 2,
              suffix: "+",
              label: "Satisfied Clients"
            }, {
              icon: <FiSmile size={40} className="mx-auto mb-3 text-primary" />,
              value: 98,
              suffix: "%",
              label: "Client Retention"
            }].map((stat, index) => (
              <motion.div variants={fadeInUp} key={index} className="p-6 bg-white border-2 border-primary rounded-lg shadow-md">
                {stat.icon}
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  <CountUp end={stat.value} duration={3} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                </div>
                <p className="text-accent-gray-600 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Client Logos Placeholder */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl sm:text-2xl font-semibold text-accent-gray-800 mb-8">Powering Innovation For</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
              {[
                { src: '/images/clients/client-one.png', alt: 'Client One Logo' },
                { src: '/images/clients/client-two.png', alt: 'Client Two Logo' },
              ].map((logo, i) => (
                <div key={i} className="relative h-16 w-40 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Preview / Demo Section */}
      <motion.section 
        variants={fadeInUp}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Explore Our AI-Powered Platforms</h2>
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-accent-gray-700 max-w-2xl mx-auto"
            >
              Leverage our suite of intelligent platforms designed to tackle your most pressing business needs and unlock new opportunities for growth.
            </motion.p>
          </div>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[{
              Icon: FiPackage,
              title: "InsightAI Platform",
              description: "An advanced analytics platform that uncovers deep insights from your data, enabling smarter, faster decision-making.",
              link: "/products#insightai"
            }, {
              Icon: FiLayers,
              title: "AutomatePro Suite",
              description: "Intelligently automate repetitive tasks and complex workflows, freeing up your team to focus on strategic initiatives.",
              link: "/products#automatepro"
            }, {
              Icon: FiTrendingUp,
              title: "PredictiveEdge Engine",
              description: "Forecast future trends, customer behavior, and operational outcomes with our cutting-edge predictive modeling engine.",
              link: "/products#predictiveedge"
            }].map((product, index) => (
              <motion.div 
                variants={fadeInUp} 
                key={index} 
                className="group bg-white border-2 border-primary p-8 rounded-xl shadow-lg hover:shadow-2xl hover:bg-primary transition-all duration-300 flex flex-col cursor-pointer"
              >
                <product.Icon size={40} className="mb-4 text-primary group-hover:text-white transition-colors duration-300" />
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 group-hover:text-white transition-colors duration-300">{product.title}</h3>
                <p className="text-accent-gray-600 mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300">{product.description}</p>
                <Link href={product.link} legacyBehavior>
                  <a className="inline-block mt-auto bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 self-start group-hover:bg-white group-hover:text-primary">
                    Learn More <FiArrowRight className="inline ml-2" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white" style={{ clipPath: 'polygon(0 0, 50% 5vw, 100% 0, 100% calc(100% - 5vw), 50% 100%, 0 calc(100% - 5vw))' }}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</motion.h2>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-accent-gray-200 mb-10 max-w-xl mx-auto">
            Let GrozAI be your partner in navigating the complexities of the digital age with intelligent, data-driven solutions.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact#request-demo" legacyBehavior>
              <a className="bg-white text-primary font-semibold px-10 py-4 rounded-lg text-xl hover:bg-accent-gray-100 transition-colors duration-300">
                Get Started Today
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
}
