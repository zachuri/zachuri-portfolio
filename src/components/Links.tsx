import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface Props {
  children: React.ReactNode;
  name: string;
  desc: string;
}

const Link: React.FC<Props> = ({ children, name, desc }) => {
  return (
    <>
      <div className="hover: mx-10 mb-4 items-center bg-[#FFFFFB] text-[#44475a] p-3 rounded-xl grid grid-cols-3 hover ">
        <div className="items-center">{children}</div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg">{name}</h2>
          <p className="text-xs">{desc}</p>
        </div>
      </div>
    </>
  );
};

const Links: React.FC = () => {
  return (
    <>
      {/* Links */}
      <div className="flex flex-col w-full mb-5">
        <Link name="Linkden" desc="I might connect">
          <FaLinkedin size={30} className="fill-[#44475a]" />
        </Link>
        <Link name="Github" desc="My spaghetti codes">
          <FaGithub size={30} className="fill-[#44475a]dark:fill-white" />
        </Link>
        <Link name="Twitter" desc="FLY">
          <FaTwitter size={30} className="fill-[#44475a]dark:fill-white" />
        </Link>
        <Link name="Mail" desc="Ready to Responsd">
          <AiOutlineMail size={30} className="fill-[#44475a]dark:fill-white" />
        </Link>
      </div>
    </>
  );
};

export default Links;
