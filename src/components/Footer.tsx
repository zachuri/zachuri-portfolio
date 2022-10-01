import React from 'react'
import LayoutMotion from './Layouts/Motion';
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {

  const fillColor = "fill-[#333333] dark:fill-[#999999]"

  return (
    <LayoutMotion>
      <div className="text-center text-[#333333] dark:text-[#999999] text-sm p-4">
        &copy; {new Date().getFullYear()} Zachary Punsalang. All Rights Reserved.
        <div className='flex flex-cols gap-5 justify-center'>
          <a
            href="https://www.linkedin.com/in/zachary-punsalang/"
            aria-label='link to linkden'
          >
            <FaLinkedin className={fillColor} />
          </a>
          <a
            href="https://github.com/zachuri"
            aria-label='link to github'
          >
            <FaGithub className={fillColor} />
          </a>
          <a
            href="https://twitter.com/zachurii"
            aria-label='link to twitter'
          >
            <FaTwitter className={fillColor} />
          </a>
          <a
            href="mailto:punsalang.zachary.work@gmail.com?body="
            aria-label='link to my email'
          >
            <AiOutlineMail className={fillColor} />
          </a>
        </div>
      </div>
    </LayoutMotion>
  )
}

export default Footer