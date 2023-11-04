'use client';

import * as React from 'react';
import Link from 'next/link';

import { MainNavItem } from '@/types';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/ui/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface MobileNavProps {
  items: MainNavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Icons.hamburger />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-8">
        <DropdownMenuLabel>
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo />
            <span className="font-medium uppercase">{siteConfig.name}</span>
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map(item => (
          <DropdownMenuItem key={item.title}>{item.title}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
