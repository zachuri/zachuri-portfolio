import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlurhashCanvas } from 'react-blurhash';

interface Props {
  id: string;
  title: string;
  desc: string;
  hash: string;
}

export const Badge: React.FC<{ children: string }> = ({ children }) => {
  return (
    <span className="dark:bg-[#bd93f9] dark:text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">
      {children}
    </span>
  );
};

const Project: React.FC<Props> = ({ id, title, desc, hash }) => {
  return (
    <div>
      <Link href={`works/${id}`}>
        <button>
          <div className="relative w-full">
            <BlurhashCanvas
              hash={hash}
              width={32}
              height={32}
              punch={1}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '90%'
              }}
              className="rounded-lg"
            />
            <Image
              // allows object to fit as a cover instead of filled
              src={`/assets/projects/${id}.png`}
              alt={id}
              priority
              className="rounded-lg"
              width="1200"
              height="700"
              objectFit="fill"
            />
          </div>
          <div className="mt-2 text-center">
            <h1 className="text-xl mb-1 font-bold">{title}</h1>
            <p className="md:text-sm mb-8">{desc}</p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Project;
