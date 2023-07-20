'use client';

import { motion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.5,
      velocity: 2,
    },
  },
};

interface IntroSectionProps {
  title: string;
}

const IntroSection = ({
  children,
  title,
}: PropsWithChildren<IntroSectionProps>) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center h-screen"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="text-9xl font-black" variants={variants}>
        {title}
      </motion.div>
      <div>{children}</div>
    </motion.div>
  );
};

export default IntroSection;
