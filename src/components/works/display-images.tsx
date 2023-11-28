import React from 'react';
import Image from 'next/legacy/image';

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
    <div className="flex flex-col items-center justify-center">
      {images.map(({ img, base64 }, index) => (
        <div key={index}>
          <Image
            src={img.src}
            alt={img.src}
            placeholder="blur"
            blurDataURL={base64}
            width={1920}
            height={1080}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayImages;
