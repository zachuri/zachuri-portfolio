import MainContainer from '@/components/layout/main-container';
import { Metadata } from 'next';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Zachary Punsalang ",
	description:
		"I'm a Computer Science graduate from the University of California, Irvine. What inspires me to code is \
    being able to build valuable projects that can help individuals with their lives, my curiosity on wanting \
    to know how things are built from the ground up, and how one is able to express their ideas through code. \
    I am a developer that is willing to learn new ideas and technologies.",
};

export default async function MainLayout({ children }: MainLayoutProps) {
  return <MainContainer>{children}</MainContainer>;
}
