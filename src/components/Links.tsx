import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Links: React.FC = () => {
  return (
    <>
      {/* Links */}
      <div className="flex flex-col w-full mb-5">
        <div className="m-5 items-center bg-[#FFFFFB] text-[#44475a] p-5 rounded-xl grid grid-cols-3">
          <div className="items-center">
            <FaLinkedin
              size={30}
              className="fill-[#44475a] hover:bg-[#777777] hover:rounded"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg">Linkden</h2>
            <p className="text-xs">I might connect</p>
          </div>
        </div>
        <div className="m-5 items-center bg-[#FFFFFB] text-[#44475a] p-5 rounded-xl grid grid-cols-3">
          <div className="items-center">
            <FaLinkedin
              size={30}
              className="fill-[#44475a] hover:bg-[#777777] hover:rounded"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg">Linkden</h2>
            <p className="text-xs">I might connect</p>
          </div>
        </div>
        <div className="m-5 items-center bg-[#FFFFFB] text-[#44475a] p-5 rounded-xl grid grid-cols-3">
          <div className="items-center">
            <FaLinkedin
              size={30}
              className="fill-[#44475a] hover:bg-[#777777] hover:rounded"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg">Linkden</h2>
            <p className="text-xs">I might connect</p>
          </div>
        </div>
        <div className="m-5 items-center bg-[#FFFFFB] text-[#44475a] p-5 rounded-xl grid grid-cols-3">
          <div className="items-center">
            <FaLinkedin
              size={30}
              className="fill-[#44475a] hover:bg-[#777777] hover:rounded"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-lg">Linkden</h2>
            <p className="text-xs">I might connect</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
