'use client';

import {
  motion,
  useTransform,
  useScroll,
  Variants,
  useSpring,
} from 'framer-motion';
import Image from 'next/image';

const variants: Variants = {
  offscreen: {
    y: 0,
  },
  onscreen: {
    y: 100,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1.5,
      velocity: 2,
    },
  },
};

const ScrollImage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 });
  const rotate = useTransform(spring, (progress) => progress * 270 + 'deg');
  const scale = useTransform(spring, (progress) => 1 + progress * 0.1);

  return (
    <div className="w-full relative">
      <motion.div style={{ y }}>
        <motion.div
          style={{
            rotate,
            scale,
            width: 'fit-content',
          }}
          className="absolute top-[260px] left-[-200px]"
          variants={variants}
        >
          <Image src={'/smile.svg'} width={600} height={600} alt="smile" />
        </motion.div>
      </motion.div>
      <motion.div style={{ y }}>
        <motion.div
          style={{
            rotate,
            scale,
            width: 'fit-content',
          }}
          className="absolute right-[-100px] top-[-180px]"
          variants={variants}
        >
          <Image src={'/tag.svg'} width={400} height={400} alt="tag" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollImage;
