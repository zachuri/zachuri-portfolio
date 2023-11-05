'use client';

import { ContactItem } from '@/types';
import React from 'react';
import { Icons } from '@/components/ui/icons';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { toast } from './ui/use-toast';

interface Props {
  items?: ContactItem[];
}

const MainContact: React.FC<Props> = ({ items }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 flex gap-5 justify-center md:max-w-[64rem]">
      {items?.map(item => {
        const Icon = Icons[item.icon || 'arrowRight'];
        return (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg sm:border bg-background hover:border-foreground transition-colors duration-300"
          >
            <HoverCard>
              <HoverCardTrigger href={item.href}>
                <div className="flex flex-col items-center justify-center sm:p-8">
                  <div className="space-y-2">
                    {/* @ts-ignore */}
                    <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{item.name}</h4>
                    <p className="text-sm">{item.description}</p>
                    <button
                      onClick={() => {
                        toast({
                          title: 'Copied to clipboard',
                          description: 'Successfully copied info to clipboard'
                        });
                      }}
                      className="text-xs text-foreground flex flex-row space-x-3"
                    >
                      {item.info}
                      <div className="opacity-0 hover:opacity-100 transition-all duration-500">
                        <Icons.clipboard size={20} />
                      </div>
                    </button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        );
      })}
    </div>
  );
  // return (
  //   <div className="grid justify-center gap- md:max-w-[64rem] grid-cols-2 sm:grid-cols-3">
  //     {items?.map(item => {
  //       const Icon = Icons[item.icon || 'arrowRight'];
  //       return (
  //         <div
  //           key={item.name}
  //           className="relative overflow-hidden rounded-lg border bg-background hover:border-foreground transition-colors duration-300"
  //         >
  //           <HoverCard>
  //             <HoverCardTrigger href={item.href}>
  //               <div className="flex flex-col items-center justify-center rounded-md p-4 md:p-8">
  //                 <div className="space-y-2">
  //                   {/* @ts-ignore */}
  //                   <Icon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
  //                 </div>
  //               </div>
  //             </HoverCardTrigger>
  //             <HoverCardContent>
  //               <div className="flex justify-between space-x-4">
  //                 <div className="space-y-1">
  //                   <h4 className="text-sm font-semibold">{item.name}</h4>
  //                   <p className="text-sm">{item.description}</p>
  //                   <button
  //                     onClick={() => {
  //                       toast({
  //                         title: 'Copied to clipboard',
  //                         description: 'Successfully copied info to clipboard'
  //                       });
  //                     }}
  //                     className="text-xs text-foreground flex flex-row space-x-3"
  //                   >
  //                     {item.info}
  //                     <div className="opacity-0 hover:opacity-100 transition-all duration-500">
  //                       <Icons.clipboard size={20} />
  //                     </div>
  //                   </button>
  //                 </div>
  //               </div>
  //             </HoverCardContent>
  //           </HoverCard>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default MainContact;
