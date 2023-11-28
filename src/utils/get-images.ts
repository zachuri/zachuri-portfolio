import glob from 'fast-glob';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs';
import { WorkItem } from '@/config/works';

export const getImagesPattern = (type: string, id?: string) => {
  return type === 'works'
    ? `./public/assets/projects/${id}*.{jpg,png,jpeg}` // gets all files with id
    : './public/assets/interests/*.{jpg,png,jpeg}'; // gets all the images in interests
};

export const getImagesProject = async (pattern: string) =>
  Promise.all(
    glob.sync(getImagesPattern('works', pattern)).map(async file => {
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

export const getImagesInterests = async () =>
  Promise.all(
    glob.sync(getImagesPattern('interest')).map(async file => {
      const src = file.replace('./public', '');
      const buffer = await fs.promises.readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);

      return { ...plaiceholder, img: { src } };
    })
  );
