import PageAnimation from '@/components/animation/page-animation';
import MainContainer from '@/components/layout/main-container';
import { SiteFooter } from '@/components/site-footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const features = [
  {
    title: 'Technical Skills',
    id: 'Technical Skills'
  },
  {
    title: 'Wolk Flow',
    id: 'work-flow'
  },
  {
    title: 'Personal Interests',
    id: 'personal-interests'
  }
];

export default async function Layout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="container grid flex-1 items-start lg:grid-cols-[20pc_80pc]">
        {/* Left side takes 20% of the width */}
        <aside className="flex aspect-w-5 md:hidden lg:flex sticky top-16 w-full flex-col">
          <ul>
            {features.map(feature => {
              return <li key={feature.id}>{feature.title}</li>;
            })}
          </ul>
        </aside>
        {/* Right side takes 80% of the width */}
        <main className="relative flex w-full flex-col">
          <div className="flex flex-col justify-center items-center w-full max-md:my-10">
            <PageAnimation>{children}</PageAnimation>
          </div>
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
