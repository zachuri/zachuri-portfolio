import React from 'react'
import LayoutMotion from './Layouts/Motion';
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {

  return (
    <LayoutMotion>
      <div className="text-center opacity-25 text-sm p-4">
        &copy; {new Date().getFullYear()} Zachary Punsalang. All Rights Reserved.
        <div className='flex flex-cols gap-5 justify-center'>
          <a href="https://www.linkedin.com/in/zachary-punsalang/">
            <FaLinkedin className='fill-black dark:fill-white' />
          </a>
          <a href="https://github.com/zachuri">
            <FaGithub className='fill-black dark:fill-white' />
          </a>
          <a href="https://twitter.com/zachurii">
            <FaTwitter className='fill-black dark:fill-white' />
          </a>
          <a href="mailto:punsalang.zachary.work@gmial.com?body=">
            <AiOutlineMail className='fill-black dark:fill-white' />
          </a>
        </div>
      </div>
    </LayoutMotion>
  )
}

export default Footer