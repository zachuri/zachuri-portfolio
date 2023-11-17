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
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="flex flex-col item-center justify-center w-[500px] h-[700px] absolute ">
        <ul
          role="list"
          className={'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'}
        >
          {images.map(({ base64, img }) => (
            <li key={img.src} className={'relative block overflow-hidden h-64'}>
              <Image
                {...img}
                alt="Paint Splashes"
                title="Photo from Unsplash"
                blurDataURL={base64}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
