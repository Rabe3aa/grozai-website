import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiAward, FiUsers, FiTrendingUp, FiCpu } from 'react-icons/fi';

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

const leadership = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Founder & Chief AI Scientist',
    bio: 'With a Ph.D. in Machine Learning and two decades at the forefront of AI research, Dr. Reed founded GrozAI to translate theoretical breakthroughs into tangible enterprise value.',
    image: '/images/leader-1.jpg', // Placeholder image
  },
  {
    name: 'Marcus Thorne',
    title: 'Chief Executive Officer',
    bio: 'A seasoned executive with a track record of scaling tech companies, Marcus leads our strategic vision, ensuring our innovations align with market needs and drive customer success.',
    image: '/images/leader-2.jpg', // Placeholder image
  },
  {
    name: 'Jian Li',
    title: 'VP of Engineering',
    bio: 'Jian is the architect of our robust, scalable AI platforms. She leads a world-class engineering team dedicated to building reliable and performant solutions.',
    image: '/images/leader-3.jpg', // Placeholder image
  },
];

const values = [
    { icon: <FiCpu size={28} />, title: 'Innovation at Core', description: 'We are driven by a relentless curiosity to explore new ideas and push the boundaries of what AI can achieve.' },
    { icon: <FiUsers size={28} />, title: 'Customer Partnership', description: 'We succeed when our clients succeed. We build lasting relationships based on trust, transparency, and shared goals.' },
    { icon: <FiAward size={28} />, title: 'Uncompromising Integrity', description: 'We are committed to the highest ethical standards in our work, from data privacy to algorithmic fairness.' },
];

export default function AboutPage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>About GrozAI - Our Mission, Story, and Team</title>
        <meta name="description" content="Learn about GrozAI's mission to democratize AI, our story of innovation, and the leadership team driving our success." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">The People Behind the Platforms</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            We are a team of researchers, engineers, and strategists united by a single mission: to make artificial intelligence a powerful force for good in the enterprise.
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-xl text-accent-gray-700">To empower organizations of all sizes to harness the transformative power of artificial intelligence, turning complex data into actionable intelligence and tangible business outcomes.</p>
            </div>
            <div className="text-center md:text-left border-t-2 md:border-t-0 md:border-l-2 border-primary pt-8 md:pt-0 md:pl-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-xl text-accent-gray-700">To be the most trusted partner for applied AI, creating a future where intelligent technology seamlessly integrates with human expertise to solve humanity's biggest challenges.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-accent-gray-700 mb-4">
                Founded in 2021 by a group of data scientists and enterprise software veterans, GrozAI was born from a shared observation: while the promise of AI was immense, its practical application was often out of reach for many businesses. We saw a gap between cutting-edge academic research and scalable, reliable, and user-friendly enterprise solutions.
            </p>
            <p className="text-lg text-accent-gray-700">
                We set out to change that. Our journey began with a commitment to first principles—understanding our clients' core challenges before writing a single line of code. This client-centric approach, combined with our deep technical expertise, allowed us to build the flexible, powerful platforms we offer today. We are proud to be a bootstrapped, independent company, driven solely by our passion for technology and our clients' success.
            </p>
        </div>
      </motion.section>

      {/* Our Values Section */}
       <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-accent-gray-700">The principles that guide our work, our partnerships, and our culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeInUp} className="p-6">
                <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-accent-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-accent-gray-700">The experienced team guiding our mission and strategy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {leadership.map((leader) => (
              <motion.div key={leader.name} variants={fadeInUp} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                <p className="text-primary font-semibold mb-2">{leader.title}</p>
                <p className="text-sm text-accent-gray-600 max-w-xs mx-auto">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-16 md:py-24 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-accent-gray-200 max-w-2xl mx-auto mb-8">
            Let's explore how GrozAI's platforms can unlock new opportunities for your organization. Contact our team for a personalized consultation and demo.
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg text-lg hover:bg-accent-gray-100 transition-colors duration-300">
              Get in Touch <FiArrowRight className="inline ml-2" />
            </a>
          </Link>
        </div>
      </motion.section>

    </motion.div>
  );
}
