import React from 'react';
import Image from 'next/image';

type ImageProp = {
  images: {
    img: {
      src: string;
    };
    base64: string;
  }[];
};

const DisplayImages: React.FC<ImageProp> = ({ images }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      {images.map(({ img, base64 }, index) => (
        <div key={index} className="border-[1px] rounded-sm overflow-hidden">
          <Image
            src={img.src}
            alt={img.src}
            placeholder="blur"
            blurDataURL={base64}
            layout="responsive"
            width={1920}
            height={1080}
            className="rounded-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayImages;
