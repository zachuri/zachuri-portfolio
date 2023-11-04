import { ContactItem } from '@/types';
import React from 'react';
import { Icons } from '@/components/ui/icons';

interface Props {
  items?: ContactItem[];
}

const MainContact: React.FC<Props> = ({ items }) => {
  return (
    <div className="mx-auto grid justify-center gap-4 md:max-w-[64rem] sm:grid-cols-2 lg:grid-cols-3">
      {items?.map(item => {
        const Icon = Icons[item.icon || 'arrowRight'];
        return (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg border bg-background md:p-2"
            style={{ width: '100%' }} // Set the width to 100%
          >
            <div className="flex h-[100x] flex-col justify-between rounded-md p-4 md:p-6">
              <div className="space-y-2">
                <div className="grid grid-cols-6 items-center">
                  {/* @ts-ignore */}
                  <Icon
                    className="mr-2 h-6 w-6 md:h-7 md:w-7"
                    strokeWidth={1.5}
                  />
                  <div className="col-span-4 flex flex-col items-center justify-center">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="max-sm:text-xs text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainContact;
