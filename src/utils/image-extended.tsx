// image-extended.tsx

// types/utils.ts

import {
  OnLoadingComplete,
  PlaceholderValue
} from 'next/dist/shared/lib/get-img-props';

export interface IImageExtended
  extends Omit<
      React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      >,
      'height' | 'width' | 'loading' | 'ref' | 'alt' | 'src' | 'srcSet'
    >,
    React.RefAttributes<HTMLImageElement | null> {
  src: string;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  loader?: undefined;
  quality?: number | `${number}` | undefined;
  priority?: boolean | undefined;
  loading?: 'eager' | 'lazy' | undefined;
  placeholder?: PlaceholderValue | undefined;
  blurDataURL?: string | undefined;
  unoptimized?: boolean | undefined;
  onLoadingComplete?: OnLoadingComplete | undefined;
  layout?: string | undefined;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
  lazyBoundary?: string | undefined;
}

import { FC } from 'react';
import Image from 'next/image';

import { blurHashToDataURL } from '@/utils/blurhash-to-base64';

export const ImageExtended: FC<IImageExtended> = ({
  src,
  blurDataURL,
  ...props
}) => {
  let newBlurUrl = null;

  if (blurDataURL) {
    newBlurUrl = blurHashToDataURL(blurDataURL) || null;
  }

  return (
    <Image
      src={src}
      blurDataURL={newBlurUrl ? newBlurUrl! : ''}
      placeholder={newBlurUrl ? 'blur' : 'empty'}
      {...props}
    />
  );
};
