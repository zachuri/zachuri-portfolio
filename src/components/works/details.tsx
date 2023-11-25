import { BadgeCent } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';

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
    <div>
      {badges.map((badge, index) => (
        <section key={index} className="grid grid-cols-6 space-x-5">
          <Badge className="flex items-center justify-center col-span-1 capitalize">
            {badge.badgeName}
          </Badge>
          <div className="col-span-5">
            {badge.detail.title && badge.detail.href && (
              <a href={badge.detail.href}>{badge.detail.title}</a>
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
