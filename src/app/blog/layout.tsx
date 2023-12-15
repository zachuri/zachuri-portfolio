import PageAnimation from '@/components/animation/page-animation';
import React from 'react'

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <PageAnimation>
      {children}
    </PageAnimation>
  )
}

export default Layout