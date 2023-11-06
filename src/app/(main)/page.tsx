'use client';

import MainContact from '@/components/main-contact';
import { Button } from '@/components/ui/button';
import { contactConfig } from '@/config/contact';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 max-md:my-10">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          <section
            id="Me"
            className="container space-y-6 lg:space-y-14 dark:bg-transparent md:py-12 lg:py-24 "
          >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center">
              <h2 className="font-heading font-semibold leading-[1.1] text-6xl">
                Zachary Punsalang
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7 text-lg md:text-xl">
                Full Stack Developer
              </p>
            </div>

            <div className="flex flex-row justify-center items-center space-x-4">
              <Button className="p-6">My Portfolio</Button>
              <Button className="p-6" variant={'secondary'}>
                About me
              </Button>
            </div>

            <MainContact items={contactConfig.contactItems} />

            <div className="mx-auto text-center md:max-w-[58rem] space-y-3">
              <p className="leading-normal text-muted-foreground text-2xl sm:text-3xl sm:leading-7">
                Hi I&apos;m{' '}
                <span className="text-foreground font-medium">ZACHURI</span>.
              </p>
              <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I&apos;m a Computer Science graduate from the University of
                California, Irvine. What inspires me to code is being able to
                build valuable projects that can help individuals with their
                lives, my curiosity on wanting to know how things are built from
                the ground up, and how one is able to express their ideas
                through code. I am a developer that is willing to learn new
                ideas and technologies.
              </p>
              <p className="leading-normal text-foreground font-medium text-lg sm:text-xl sm:leading-7">
                Let&apos;s build together!
              </p>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
