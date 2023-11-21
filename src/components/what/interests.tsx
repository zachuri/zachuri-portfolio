import fs from 'fs';
import glob from 'fast-glob';
import * as React from 'react';
import Image from 'next/legacy/image';
import { getPlaiceholder } from 'plaiceholder';

const getImages = async (pattern: string) =>
  Promise.all(
    glob.sync(pattern).map(async file => {
      const src = file.replace('./public', '');
      const buffer = await fs.promises.readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);

      return { ...plaiceholder, img: { src } };
    })
  );

export default async function Page() {
  const images = await getImages('./public/assets/interests/*.{jpg,png,jpeg}');

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold">Interests</h1>
      <div className={'mt-[60px] grid place-items-center py-10 md:mt-[82.5px]'}>
        <div className="grid w-full grid-cols-2 gap-6 px-10 lg:grid-cols-3">
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
