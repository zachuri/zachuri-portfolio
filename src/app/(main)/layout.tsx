import { SiteFooter } from '@/components/site-footer';
import Navbar from '@/components/navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      {/* <Navbar /> */}
      <main className="container flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
      <SiteFooter className="border-t" />
    </div>
  );
}
