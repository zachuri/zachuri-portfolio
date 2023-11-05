import { SiteFooter } from '@/components/site-footer';
import Navbar from '@/components/navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="grow sm:container sm:flex-1">
        <main className="relative flex w-full flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
