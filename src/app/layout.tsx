import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-proivder";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import PageAnimatePresence from "@/components/animation/page-animate-presence";

const font = Inter({ subsets: ["latin"] });
// const font = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
	title: "Zachary Punsalang ",
	description:
		"I'm a Computer Science graduate from the University of California, Irvine. What inspires me to code is \
    being able to build valuable projects that can help individuals with their lives, my curiosity on wanting \
    to know how things are built from the ground up, and how one is able to express their ideas through code. \
    I am a developer that is willing to learn new ideas and technologies.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${font.className}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<Navbar />
					<PageAnimatePresence>{children}</PageAnimatePresence>
					{/* {children} */}
					<TailwindIndicator />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
