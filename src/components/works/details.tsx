import React from 'react';

type Detail = {
  title: string;
  href?: string;
};

export type DetailProps = {
  badges: {
    badgeName: string;
    detail: Detail[];
  }[];
};

const Details: React.FC<DetailProps> = ({ badges }) => {
  return (
    <div>
      {badges.map((badge, index) => (
        <section key={index}>
          <h1>{badge.badgeName}</h1>
          <ul>
            {badge.detail.map((detailItem, detailIndex) => (
              <li key={detailIndex}>
                <a href={detailItem.href}>{detailItem.title}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Details;
