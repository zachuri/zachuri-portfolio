import MainContact from '@/components/main-contact';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { contactConfig } from '@/config/contact';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      <section
        id="Me"
        className="container space-y-6 dark:bg-transparent md:py-12 lg:py-24 "
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading font-semibold text-4xl leading-[1.1] md:text-6xl">
            Zachary Punsalang
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
            Full Stack Developer
          </p>
        </div>

        <MainContact items={contactConfig.contactItems} />

        <div className="flex flex-row justify-center items-center space-x-4">
          <Button>My Portfolio</Button>
          <Button variant={'outline'}>About me</Button>
        </div>

        <div className="mx-auto text-center md:max-w-[58rem] space-y-3 pt-3">
          <p className="leading-normal text-muted-foreground text-2xl sm:text-3xl sm:leading-7">
            Hi I&apos;m <span className="text-foreground">ZACHURI</span>.
          </p>
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I&apos;m a Computer Science graduate from the University of
            California, Irvine. What inspires me to code is being able to build
            valuable projects that can help individuals with their lives, my
            curiosity on wanting to know how things are built from the ground
            up, and how one is able to express their ideas through code. I am a
            developer that is willing to learn new ideas and technologies.
          </p>
          <p className="leading-normal text-foreground sm:text-xl sm:leading-7">
            Let&apos;s build together!
          </p>
        </div>
      </section>
    </div>
  );
}