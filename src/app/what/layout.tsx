import PageAnimation from '@/components/animation/page-animation';
import { SiteFooter } from '@/components/site-footer';
import SectionTitle from '@/components/what/section-title';
import { sections } from '@/config/what-sections';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: MainLayoutProps) {
  return (
    <div>
      <div className="flex w-full min-h-screen md:items-start grow">
        <div className="w-1/5 sticky top-16 hidden md:block">
          <div className="relative w-full pl-[8vw]">
            <ul>
              {sections.map(section => (
                <SectionTitle id={section.id} key={section.id}>
                  {section.title}
                </SectionTitle>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-4/5 relative flex w-full flex-col">
          <div className="md:w-3/4 flex flex-col justify-center items-center max-md:my-10 max-md:container">
            <PageAnimation>{children}</PageAnimation>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
