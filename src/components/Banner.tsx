'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full relative transition-colors	hover:text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover"
      >
        <source src={'/banner.webm'} type="video/webm" />
        <source src={'/banner.mp4'} type="video/mp4" />
      </video>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center	items-center">
        <p className="font-extrabold text-7xl">Web Frontend Developer</p>
      </div>
      <motion.div
        className="w-full absolute bottom-6 left-0"
        animate={{ y: ['50%', '-50%', '0%'] }}
      >
        <Image
          className="mx-auto my-0"
          src={'/arrow-down.svg'}
          width={70}
          height={70}
          alt="아래로 스크롤"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
