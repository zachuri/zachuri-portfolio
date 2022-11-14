import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import { AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

const MyApp: AppType = ({ Component, pageProps }) => {
  // return <Component {...pageProps} />
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="light"
      storageKey="theme"
    >
      <DefaultSeo {...SEO} />
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
