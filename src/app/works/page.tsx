import fs from 'fs';
import * as React from 'react';
import Image from 'next/legacy/image';
import { worksConfig } from '@/config/works';
import Link from 'next/link';
import { getImagesWorks } from '@/utils/get-images';

export default async function Page() {
  const images = await getImagesWorks(worksConfig.works);

  return (
    <div className={'grid py-10 w-full'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-10 px-10 md:grid-cols-3 xl:grid-cols-4">
        {images.map(({ base64, img }) => (
          <Link key={img.id} href={`works/${img.id}`}>
            <div key={img.id} className="space-y-2 mb-10">
              <div className="relative aspect-square h-auto border-[1px] rounded-sm ">
                <Image
                  src={img.src}
                  alt={img.src}
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  placeholder="blur"
                  blurDataURL={base64}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
              <h2 className="text-md lg:text-2xl font-medium">{img.title}</h2>
              <p className="text-xs lg:text-sm">{img.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
