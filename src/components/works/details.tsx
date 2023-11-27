import { BadgeCent } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { Button } from '../ui/button';

type Detail = {
  title?: string;
  href?: string;
  technologies?: string[];
};

export type DetailProps = {
  badges: {
    badgeName: string;
    detail: Detail;
  }[];
};

const Details: React.FC<DetailProps> = ({ badges }) => {
  return (
    <div className="space-y-2">
      {badges.map((badge, index) => (
        <section key={index} className="grid grid-cols-5 space-x-5">
          <Badge className="flex items-center justify-center col-span-1 capitalize text-xs">
            {badge.badgeName}
          </Badge>
          <div className="col-span-4">
            {badge.detail.title && badge.detail.href && (
              <Button variant={'link'} className={'-px-4 -py-2 -h-9'}>
                <Link href={badge.detail.href}>{badge.detail.title}</Link>
              </Button>
            )}
            {badge.detail.technologies &&
              badge.detail.technologies.length > 0 && (
                <p>{badge.detail.technologies.join(', ')}</p>
              )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Details;
