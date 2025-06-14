import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { posts } from '../../data/posts';

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

const BlogPage = ({ featuredPost, recentPosts }) => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>GrozAI Blog - AI Insights, News, and Trends</title>
        <meta name="description" content="Explore the latest in AI, machine learning, and data strategy from the experts at GrozAI. Read our articles, tutorials, and industry analysis." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">GrozAI Insights</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            Your expert source for the latest in artificial intelligence, data strategy, and the future of technology in the enterprise.
          </p>
        </div>
      </motion.section>

      {/* Featured Post Section */}
      {featuredPost && (
        <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div variants={fadeInUp} className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.alt} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/images/placeholder-blog.jpg';
                          e.target.alt = 'Default blog post image';
                        }}
                      />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                      <p className="text-primary font-semibold mb-2">Featured Article</p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{featuredPost.title}</h2>
                      <p className="text-accent-gray-600 mb-4">{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="text-lg text-accent-gray-700 mb-6">{featuredPost.summary}</p>
                      <Link href={`/blog/${featuredPost.slug}`} legacyBehavior>
                          <a className="inline-flex items-center text-primary font-bold text-lg hover:underline">
                              Read Full Story <FiArrowRight className="ml-2" />
                          </a>
                      </Link>
                  </motion.div>
              </div>
          </div>
        </motion.section>
      )}

      {/* Recent Posts Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-accent-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Latest Articles</h2>
            <p className="text-lg text-accent-gray-700">Explore more insights from our team of experts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeInUp} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-48 bg-gray-200">
                    <img 
                      src={post.image} 
                      alt={post.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-blog.jpg';
                        e.target.alt = 'Default blog post image';
                      }}
                    />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                    <p className="text-sm text-accent-gray-500 mb-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-accent-gray-700 mb-4 flex-grow">{post.summary}</p>
                    <Link href={`/blog/${post.slug}`} legacyBehavior>
                        <a className="inline-flex items-center text-primary font-semibold mt-auto hover:underline">
                            Read More <FiArrowRight className="ml-2" />
                        </a>
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export async function getStaticProps() {
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredPost = sortedPosts[0] || null;
  const recentPosts = sortedPosts.slice(1);

  return {
    props: {
      featuredPost,
      recentPosts,
    },
  };
}

export default BlogPage;
