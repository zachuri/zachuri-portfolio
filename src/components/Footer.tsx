import React from 'react'
import LayoutMotion from './Layouts/Motion';

const Footer = () => {

  return (
    <LayoutMotion>
      <div className="text-center opacity-25 text-sm p-4">
        &copy; {new Date().getFullYear()} Zachary Punsalang. All Rights Reserved.
      </div>
    </LayoutMotion>
  )
}

export default Footer