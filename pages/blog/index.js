import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';
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

const BlogPage = ({ featuredPost, recentPosts }) => {
  const { t } = useTranslation('common');

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>{t('blog_title')}</title>
        <meta name="description" content={t('blog_description')} />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{t('blog_title')}</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            {t('blog_subtitle')}
          </p>
        </div>
      </motion.section>

      {/* Featured Post Section */}
      {featuredPost && (
        <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.alt || 'Featured blog post image'}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    e.target.src = '/images/placeholder-blog.jpg';
                    e.target.alt = 'Default blog post image';
                  }}
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="text-start">
                <p className="text-primary font-semibold mb-2">{t('blog_featured_post')}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t(`blog_posts.${featuredPost.slug}.title`)}</h2>
                <p className="text-accent-gray-600 mb-4">{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-lg text-accent-gray-700 mb-6">{t(`blog_posts.${featuredPost.slug}.summary`)}</p>
                <Link href={`/blog/${featuredPost.slug}`} legacyBehavior>
                  <a className="inline-flex items-center text-primary font-bold text-lg hover:underline">
                    {t('blog_read_more')} <FiArrowRight className="ms-2 rtl:rotate-180" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{t('blog_latest_articles')}</h2>
            <p className="text-lg text-accent-gray-700">{t('blog_explore_more')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeInUp} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-48 bg-gray-200">
                  <Image 
                    src={post.image} 
                    alt={post.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = '/images/placeholder-blog.jpg';
                      e.target.alt = 'Default blog post image';
                    }}
                  />
                </div>
                                <div className="p-6 flex-grow flex flex-col text-start">
                  <h3 className="text-xl font-bold text-primary mb-2">{t(`blog_posts.${post.slug}.title`)}</h3>
                  <p className="text-sm text-accent-gray-500 mb-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="text-accent-gray-700 mb-4 flex-grow">{t(`blog_posts.${post.slug}.summary`)}</p>
                  <Link href={`/blog/${post.slug}`} legacyBehavior>
                    <a className="inline-flex items-center text-primary font-semibold mt-auto hover:underline">
                      {t('blog_read_more')} <FiArrowRight className="ms-2 rtl:rotate-180" />
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

export async function getStaticProps({ locale }) {
  const translations = require(`../../public/locales/${locale}/common.json`);
  const blogPostsT = translations.blog_posts;

  const blogPostMetadata = {
    'personalization-at-scale': { 
      date: '2024-05-20', 
      image: '/images/blog/personalization-at-scale.jpg', // This will fallback to placeholder
      alt: 'An abstract image representing personalization and AI' 
    },
    'ai-driven-customer-experience': { 
      date: '2024-04-15', 
      image: '/images/blog/ai-customer-experience.jpg', 
      alt: 'Customer journey mapping with AI elements' 
    },
    'predictive-analytics-forecasting-trends': { 
      date: '2024-03-10', 
      image: '/images/blog/predictive-analytics.jpg', 
      alt: 'Graphs and charts showing future trends' 
    },
    'ethical-ai-in-enterprise': { 
      date: '2024-02-05', 
      image: '/images/blog/ethical-ai.jpg', 
      alt: 'A balanced scale symbolizing ethics in AI' 
    },
    'the-rise-of-generative-ai': { 
        date: '2024-01-15', 
        image: '/images/blog/generative-ai.jpg', 
        alt: 'AI generating art and code' 
    }
  };

  const allPosts = Object.keys(blogPostsT).map(slug => ({
    slug,
    ...blogPostsT[slug],
    ...(blogPostMetadata[slug] || {}),
  }));

  const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const featuredSlug = 'personalization-at-scale';
  const featuredPost = sortedPosts.find(p => p.slug === featuredSlug) || sortedPosts[0] || null;
  const recentPosts = sortedPosts.filter(p => p.slug !== featuredSlug);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      featuredPost,
      recentPosts: recentPosts.slice(0, 3), // Show the 3 most recent non-featured posts
    },
  };
}

export default BlogPage;
