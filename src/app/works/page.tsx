import fs from 'fs';
import glob from 'fast-glob';
import * as React from 'react';
import Image from 'next/legacy/image';
import { getPlaiceholder } from 'plaiceholder';
// import { imageList, imageListItem } from "@plaiceholder/ui";

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
    <div className={'mt-[60px] grid py-10 md:mt-[82.5px] w-full'}>
      <div className="grid grid-cols-2 gap-2 px-10 md:grid-cols-3 lg:grid-cols-4">
        <h1 className="col-span-2 text-4xl uppercase text-primary max-md:text-3xl md:col-span-3 lg:col-span-4">
          Projects
        </h1>
        {images.map(({ base64, img }, index) => (
          <div key={index} className="relative aspect-square h-auto">
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
            />
          </div>
        ))}
      </div>
    </div>
  );
}
