import { User } from '@prisma/client';

import { Icons } from '@/components/ui/icons';

export enum SkillType {
  Frontend = 1,
  Tools = 2,
  Other = 3,
  Database = 4,
  Backend = 5
}

export type SkillItem = {
  name: string;
  proficiency?: string;
  type: SkillType;
};

export type SkillConfig = {
  skills: SkillItem[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    twitter: string;
    mail: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MainConfig = {
  mainNav: MainNavItem[];
};

export type ContactItem = {
  icon?: keyof typeof Icons;
  name: string;
  href: string;
  description: string;
  info: string;
};

export type ContactConfig = {
  contactItems: ContactItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};
