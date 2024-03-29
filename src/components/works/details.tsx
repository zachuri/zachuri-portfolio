import React from 'react';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { Button } from '../ui/button';

type Detail = {
  title?: string;
  href?: string;
  data?: string[];
};

export type DetailProps = {
  badges: {
    badgeName: string;
    detail?: Detail;
    details?: Detail[];
  }[];
};

const Details: React.FC<DetailProps> = ({ badges }) => {
  return (
    <div className="space-y-2">
      {badges.map((badge, index) => (
        <section
          key={index}
          className="flex flex-row items-center justify-normal space-x-5"
        >
          <Badge className="flex capitalize text-xs hover:none">
            {badge.badgeName}
          </Badge>
          {/* Single */}
          {badge.detail && badge.detail.title && badge.detail.href && (
            <Button variant={'link'} className={'-px-4 -py-2 -h-9'}>
              <Link href={badge.detail.href}>{badge.detail.title}</Link>
            </Button>
          )}
          {badge.detail &&
            badge.detail.data &&
            badge.detail.data.length > 0 && (
              <p>{badge.detail.data.join(', ')}</p>
            )}

          {/* Multiple Details */}
          {badge.details &&
            badge.details.map((detail, detailIndex) => (
              <div key={detailIndex}>
                {detail.title && detail.href && (
                  <Button variant={'link'} className={'-px-4 -py-2 -h-9'}>
                    <Link href={detail.href}>{detail.title}</Link>
                  </Button>
                )}
              </div>
            ))}
        </section>
      ))}
    </div>
  );
};

export default Details;
