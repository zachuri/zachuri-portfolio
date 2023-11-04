import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-proivder';
import { TailwindIndicator } from '@/components/tailwind-indicator';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zachary Punsalang ',
  description: 'Personal Website'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
