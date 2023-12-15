'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

const fadeInOut: Variants = {
  initial: {
    opacity: 0,
    pointerEvents: 'none'
  },
  animate: {
    opacity: 1,
    pointerEvents: 'all'
  },
  exit: {
    opacity: 0,
    pointerEvents: 'none'
  }
};

const transition: HTMLMotionProps<'div'>['transition'] = {
  duration: 0.2,
  staggerChildren: 0.1
};

const PageAnimation: React.FC<
  React.PropsWithChildren<HTMLMotionProps<'div'>>
> = props => (
  <motion.div
    initial="offscreen"
    animate="animate"
    exit="exit"
    variants={fadeInOut}
    transition={transition}
    {...props}
  />
);

export default PageAnimation;
