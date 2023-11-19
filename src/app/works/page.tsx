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
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 mt-8">
        {images.map(({ base64, img }) => (
          <div key={img.src} className="relative h-64 w-44">
            <Image
              src={img.src}
              alt="Paint Splashes"
              title="Photo from Unsplash"
              placeholder="blur"
              blurDataURL={base64}
              layout="fill"
              objectFit="cover"
              className="object-cover" // Equivalent to the old objectFit prop
              style={{ aspectRatio: '5/7' }} // Set your desired aspect ratio
            />
          </div>
        ))}
      </div>
    </div>
  );
}
