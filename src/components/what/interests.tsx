import * as React from 'react';
import Image from 'next/legacy/image';
import { getImagesInterests } from '@/utils/get-images';

export default async function Page() {
  const images = await getImagesInterests('./public/assets/interests/*.{jpg,png,jpeg}');

  return (
    <>
      <h1 className="text-3xl max-md:text-2xl font-medium uppercase">
        Interests
      </h1>
      <div className={'grid place-items-center pt-5 '}>
        <div className="grid w-full grid-cols-2 gap-6 px-5 lg:grid-cols-3">
          {images.map(({ base64, img }, index) => (
            <div key={index} className="relative aspect-square h-auto">
              <Image
                src={img.src}
                alt={img.src}
                placeholder="blur"
                blurDataURL={base64}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
