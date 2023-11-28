import glob from 'fast-glob';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs';
import { WorkItem } from '@/config/works';

export const getImagesPattern = (id: string) => {
  const pattern = `./public/assets/projects/${id}-*.{jpg,png,jpeg}`;
  return pattern;
};

export const getImagesProject = async (pattern: string) =>
  Promise.all(
    glob.sync(getImagesPattern(pattern)).map(async file => {
      const src = file.replace('./public', '');
      const buffer = await fs.promises.readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);

      return { ...plaiceholder, img: { src } };
    })
  );

export const getImagesWorks = async (works: WorkItem[]) =>
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

export const getImagesInterests = async (pattern: string) =>
  Promise.all(
    glob.sync(pattern).map(async file => {
      const src = file.replace('./public', '');
      const buffer = await fs.promises.readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);

      return { ...plaiceholder, img: { src } };
    })
  );
