'use client';

import React from 'react';
import { ImageBlur } from '@/utils/image-blur';

const Interests = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold pb-5">Interests</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-4">
          <div>
            {/* Use Blurhash component for image preview */}
            <ImageBlur
              className="h-auto max-w-full rounded-sm"
              src="/assets/keyboards/jp-02.jpeg"
              alt="jp-02"
              width={500}
              height={500}
              blurDataURL="/assets/keyboards/jp-02.jpeg"
            />
          </div>
          <div>
            <ImageBlur
              className="h-auto max-w-full rounded-sm"
              src="/assets/keyboards/tofu60.jpeg"
              alt="tofu-60"
              width={500}
              height={500}
              blurDataURL="/assets/keyboards/tofu60.jpeg"
            />
          </div>
          <div>
            <ImageBlur
              className="h-auto max-w-full rounded-sm"
              src="https://novelkeys.com/cdn/shop/files/TypeK_16x9-4_1024x1024@2x.jpg?v=1691498876"
              alt="tofu-60"
              width={500}
              height={500}
              blurDataURL="https://novelkeys.com/cdn/shop/files/TypeK_16x9-4_1024x1024@2x.jpg?v=1691498876"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <ImageBlur
              className="h-auto max-w-full rounded-sm"
              src="https://ssb.wiki.gallery/images/thumb/1/16/Marth_Idle_Pose_Melee.gif/200px-Marth_Idle_Pose_Melee.gif"
              alt="jp-02"
              width={500}
              height={500}
              blurDataURL="https://ssb.wiki.gallery/images/thumb/1/16/Marth_Idle_Pose_Melee.gif/200px-Marth_Idle_Pose_Melee.gif"
            />
          </div>
          <div>
            <ImageBlur
              className="h-auto max-w-full rounded-sm"
              src="/assets/interests/samurai-champloo.jpg"
              alt="samurai champloo"
              width={500}
              height={500}
              blurDataURL="/assets/interests/samurai-champloo.jpg"
            />
          </div>
          <div>
            <ImageBlur
              className="h-auto max-w-full rounded-sm"
              src="/assets/interests/cowboy-bebop.jpg"
              alt="cowboy bebop"
              width={500}
              height={500}
              blurDataURL="/assets/interests/cowboy-bebop.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Interests;
