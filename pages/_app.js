import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import { AnimatePresence } from 'framer-motion'; // For page transitions

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </Layout>
  )
}
