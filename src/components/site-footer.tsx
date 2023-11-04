'use client';

import * as React from 'react';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { ModeToggle } from '@/components/mode-toggle';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const date = new Date();

  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            ©{date.getFullYear()} Zachary Punsalang. All Rights Reserved.
          </p>
          <div className="flex flex-row space-x-5">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.github size={20} strokeWidth={1} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.linkedin size={20} strokeWidth={1} />
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.twitter size={20} strokeWidth={1} />
            </a>
            <a
              href={siteConfig.links.mail}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.mail size={20} strokeWidth={1} />
            </a>
          </div>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
