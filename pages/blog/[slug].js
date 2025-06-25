import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const BlogPostPage = ({ post }) => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, summary, content, date } = post;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <Head>
        <title>{title} - GrozAI</title>
        <meta name="description" content={summary} />
      </Head>

      <article className="max-w-3xl mx-auto">
        <motion.header variants={fadeInUp} className="text-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{title}</h1>
          <div className="flex items-center text-accent-gray-500 text-sm mb-8">
            {date && (
              <div className="flex items-center me-6">
                <FiCalendar className="me-2" />
                <span>{new Date(date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            )}
          </div>
        </motion.header>

        {content ? (
          <motion.div 
            variants={fadeInUp}
            className="prose lg:prose-xl max-w-none text-accent-gray-800"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <motion.p variants={fadeInUp} className="text-accent-gray-700">
            {t('blog_content_not_available', 'The content for this post is not available in the selected language.')}
          </motion.p>
        )}
      </article>
    </motion.div>
  );
};



export async function getStaticPaths({ locales }) {
  const enTranslations = require('../../public/locales/en/common.json');
  const slugs = Object.keys(enTranslations.blog_posts);

  const paths = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      paths.push({ params: { slug }, locale });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;

  const blogPostMetadata = {
    'personalization-at-scale': { 
      date: '2024-05-20', 
      image: '/images/blog/personalization-at-scale.jpg', 
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

  const translations = require(`../../public/locales/${locale}/common.json`);
  const postContent = translations.blog_posts[slug] || {};
  const postMetaData = blogPostMetadata[slug] || {};

  const post = {
    slug,
    ...postContent,
    ...postMetaData,
  };

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      post,
    },
  };
}

export default BlogPostPage;
