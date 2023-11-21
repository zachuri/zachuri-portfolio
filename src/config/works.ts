export type WorkConfig = {
  works: WorkItem[];
};

export type WorkItem = {
  id: string;
  title: string;
  desc: string;
  src: string;
};

export const worksConfig: WorkConfig = {
  works: [
    {
      id: 'befit-v2',
      title: 'BeFit-v2',
      desc: 'Enhanced Fitness Tracker: Building with Next.js and Supabase (Version 2) - In Progress',
      src: '/assets/projects/befit-v2.png'
    },
    {
      id: 'next13-supabase-stripe',
      title: 'Next.js 13 + Supabase + Stripe: SaaS Starter',
      desc: 'A boilerplate project that combines Next 13, Supabase, and Stripe to create a foundation for building SaaS applications',
      src: '/assets/projects/next13-supabase-stripe.png'
    },
    {
      id: 'arceldesign',
      title: 'ArcelDesign, Inc.',
      desc: 'Redesigned key elements of clients website, such as the landing page and navigation menu',
      src: '/assets/projects/arceldesign.png'
    },
    {
      id: 'be-fit',
      title: 'BeFit',
      desc: 'Full Stack Fitness tracker that allows users to keep track of their diet, weight, and workouts',
      src: '/assets/projects/be-fit.png'
    },
    {
      id: 'twitch-clone',
      title: 'Twitch Clone',
      desc: 'Clone of Twitch using next.js and tailwind.css to help my understanding of design',
      src: '/assets/projects/twitch-clone.png'
    },
    {
      id: 'ecommerce-movie',
      title: 'Ecommerce Movie',
      desc: 'Full Stack ecommerce movie shop where users are able to buy movies',
      src: '/assets/projects/ecommerce-movie.png'
    },
    {
      id: 'diversity-hotline',
      title: 'Diversity Hotline',
      desc: 'Hotline for individuals to discuss topics regarding diversity, equity, inclusion, and discrimination',
      src: '/assets/projects/diversity-hotline.png'
    }
  ]
};
