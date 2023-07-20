import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import Tag from './Tag';

const STACKS = ['React', '🖥️', 'Typescript', '🌐', 'Emotion', '💎', '⭐'];

interface ParallaxProps {
  baseVelocity: number;
}

function ParallaxText({ baseVelocity }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-5, -30, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax py-1">
      <motion.div className="scroller" style={{ x }}>
        {STACKS.map((stack) => (
          <Tag key={stack}>{stack}</Tag>
        ))}
        {STACKS.map((stack) => (
          <Tag key={stack}>{stack}</Tag>
        ))}
        {STACKS.map((stack) => (
          <Tag key={stack}>{stack}</Tag>
        ))}
      </motion.div>
    </div>
  );
}

export default ParallaxText;
