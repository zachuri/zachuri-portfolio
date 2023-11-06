import MainContainer from '@/components/layout/main-container';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MainLayoutProps) {
  return <MainContainer>{children}</MainContainer>;
}
