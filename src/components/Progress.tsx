'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

const Progress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 bottom-0 h-1 bg-white"
      style={{ scaleX }}
    />
  );
};

export default Progress;
