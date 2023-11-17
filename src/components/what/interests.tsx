import fs from 'fs';
import glob from 'fast-glob';
import * as React from 'react';
import Image from 'next/image';
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
    <ul role="list" className={'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'}>
      {images.map(({ base64, img }) => (
        <li key={img.src} className={'relative block overflow-hidden'}>
          <Image
            {...img}
            alt="Paint Splashes"
            title="Photo from Unsplash"
            blurDataURL={base64}
            placeholder="blur"
            fill
          />
        </li>
      ))}
    </ul>
  );
}
