import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from 'next-themes'
import Navbar from "../components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  // return <Component {...pageProps} />
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme='dark'
    >
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default MyApp;
