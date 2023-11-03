import { ContactItem } from '@/types';
import React from 'react';
import { Icons } from '@/components/ui/icons';

interface Props {
  items?: ContactItem[];
}

const MainContact: React.FC<Props> = ({ items }) => {
  return (
    <div className="mx-auto grid justify-center gap-4 md:max-w-[64rem] grid-cols-2 lg:grid-cols-3">
      {items?.map(item => {
        const Icon = Icons[item.icon || 'arrowRight'];
        return (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg border bg-background p-2"
            style={{ width: '100%' }}
          >
            <div className="flex flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  {/* @ts-ignore */}
                  <Icon
                    className="mr-2 h-6 w-6 md:h-7 md:w-7"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground max-sm:hidden">
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
