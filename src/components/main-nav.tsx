'use client';

// NavigationBar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from './ui/icons';
import { mainConfig } from '@/config/main';

export function MainNav() {
  const items = mainConfig.mainNav;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex items-center gap-x-7">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="text-sm font-medium"
          onClick={() => handleItemClick(index)}
        >
          {item.title}
        </motion.div>
      ))}
      <motion.div
        className="bg-background absolute text-sm font-medium text-primary rounded-[8px] px-2 py-1 "
        initial={{ x: -7 }}
        animate={{ x: items[activeIndex].position }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, duration: 0.5 }}
      >
        {items[activeIndex].title}
      </motion.div>
    </div>
  );
}

// 'use client';

// import * as React from 'react';
// import Link from 'next/link';
// import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

// import { MainNavItem } from '@/types';
// import { siteConfig } from '@/config/site';
// import { cn } from '@/lib/utils';
// import { MobileNav } from '@/components/mobile-nav';
// import { Icons } from './ui/icons';
// import { motion } from 'framer-motion';

// interface MainNavProps {
//   items?: MainNavItem[];
//   displayLogo?: boolean;
//   children?: React.ReactNode;
// }

// export function MainNav({ items, displayLogo = true, children }: MainNavProps) {
//   const segment = useSelectedLayoutSegment();

//   const path = usePathname();

//   return (
//     <div className="flex gap-6 md:gap-10">
//       {displayLogo && (
//         <Link href="/" className="hidden items-center space-x-2 md:flex">
//           <Icons.logo />
//           <span className="hidden font-medium sm:inline-block uppercase">
//             {siteConfig.name}
//           </span>
//         </Link>
//       )}
//       <motion.div>
//         {items?.length ? (
//           <nav className="hidden gap-6 md:flex">
//             {items?.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.disabled ? '#' : item.href}
//                 className={cn(
//                   'bg-white rounded-lg',
//                   'text-primary',
//                   'flex items-center text-lg transition-colors hover:text-foreground/80 sm:text-sm',
//                   item.disabled && 'cursor-not-allowed opacity-80'
//                 )}
//               >
//                 {item.title}
//               </Link>
//             ))}
//           </nav>
//         ) : null}
//       </motion.div>
//       <div className="flex items-center space-x-2 md:hidden">
//         {items && <MobileNav items={items} />}
//         <span className="max-sm:hidden font-medium uppercase">
//           {siteConfig.name}
//         </span>
//       </div>
//     </div>
//     // <div className="flex gap-6 md:gap-10">
//     //   {displayLogo && (
//     //     <Link href="/" className="hidden items-center space-x-2 md:flex">
//     //       <Icons.logo />
//     //       <span className="hidden font-medium sm:inline-block uppercase">
//     //         {siteConfig.name}
//     //       </span>
//     //     </Link>
//     //   )}
//     //   {items?.length ? (
//     //     <nav className="hidden gap-6 md:flex">
//     //       {items?.map((item, index) => (
//     //         <Link
//     //           key={index}
//     //           href={item.disabled ? '#' : item.href}
//     //           className={cn(
//     //             'flex items-center text-lg transition-colors hover:text-foreground/80 sm:text-sm',
//     //             item.href.startsWith(`/${segment}`)
//     //               ? 'text-foreground'
//     //               : 'text-foreground/60',
//     //             item.disabled && 'cursor-not-allowed opacity-80'
//     //           )}
//     //         >
//     //           {item.title}
//     //         </Link>
//     //       ))}
//     //     </nav>
//     //   ) : null}
//     //   <div className="flex items-center space-x-2 md:hidden">
//     //     {items && <MobileNav items={items} />}
//     //     <span className="max-sm:hidden font-medium uppercase">
//     //       {siteConfig.name}
//     //     </span>
//     //   </div>
//     // </div>
//   );
// }
