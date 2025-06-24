import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import { AnimatePresence } from 'framer-motion'; // For page transitions
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps, router: appRouter }) {
  const router = useRouter();
  
  useEffect(() => {
    // Set initial language and direction based on the current route
    const { locale } = router;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [router]);
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Layout>
  )
}

export default appWithTranslation(App);
