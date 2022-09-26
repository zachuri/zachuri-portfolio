import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from 'next-themes'
import Navbar from "../components/Navbar";
import { AnimatePresence } from 'framer-motion'


const MyApp: AppType = ({ Component, pageProps }) => {
  // return <Component {...pageProps} />
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme='system'
      storageKey="theme"
    >
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  )
};

export default MyApp;
