import fs from 'fs';
import * as React from 'react';
import Image from 'next/legacy/image';
import { getPlaiceholder } from 'plaiceholder';
import { WorkItem, worksConfig } from '@/config/works';

const getImages = async (works: WorkItem[]) =>
  Promise.all(
    works.map(async ({ src, title, desc, id }) => {
      // Assuming that your images are stored in the public folder
      const buffer = await fs.promises.readFile(`./public${src}`);

      // Convert ArrayBuffer to Buffer
      const plaiceholder = await getPlaiceholder(buffer);

      return {
        ...plaiceholder,
        img: { src: src, title: title, desc: desc, id: id }
      };
    })
  );

export default async function Page() {
  const images = await getImages(worksConfig.works);

  return (
    <div className={'mt-[60px] grid py-10 md:mt-[82.5px] w-full'}>
      <div className="grid grid-cols-2 gap-10 px-10 md:grid-cols-3">
        <h1 className="col-span-2 text-4xl uppercase text-primary max-md:text-3xl md:col-span-3">
          Projects
        </h1>
        {images.map(({ base64, img }, index) => (
          <div key={img.id} className="space-y-2">
            <div className="relative aspect-square h-auto border ">
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
            <h2 className="text-md lg:text-2xl font-bold">{img.title}</h2>
            <p className="hidden md:block text-xs lg:text-md">{img.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
