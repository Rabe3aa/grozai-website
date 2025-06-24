import Head from 'next/head';
import { motion } from 'framer-motion';
import { posts } from '../../data/posts';
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
    return <div>{t('loading', 'Loading...')}</div>;
  }

  const postTitle = t(`blog_posts.${post.slug}.title`, post.title);
  const postSummary = t(`blog_posts.${post.slug}.summary`, post.summary);
  const postContent = t(`blog_posts.${post.slug}.content`, post.content);


  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16 md:py-24"
    >
            <Head>
        <title>{postTitle} - GrozAI</title>
        <meta name="description" content={postSummary} />
      </Head>

      <article className="max-w-3xl mx-auto">
        <motion.header variants={fadeInUp} className="text-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{postTitle}</h1>
          <div className="flex items-center text-accent-gray-500 text-sm mb-8">
            <div className="flex items-center me-6">
              <FiCalendar className="me-2" />
              <span>{new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </motion.header>

        <motion.div 
          variants={fadeInUp}
          className="prose lg:prose-xl max-w-none text-accent-gray-800"
                    dangerouslySetInnerHTML={{ __html: postContent }}
        />
      </article>
    </motion.div>
  );
};

export async function getStaticPaths() {
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const post = posts.find(p => p.slug === params.slug);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      post,
    },
  };
}

export default BlogPostPage;
