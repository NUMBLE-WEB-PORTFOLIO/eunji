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

const Card = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      className="h-64 px-8 py-6 text-lg rounded-lg border-dotted border-2 border-[#0123ff]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Card;
