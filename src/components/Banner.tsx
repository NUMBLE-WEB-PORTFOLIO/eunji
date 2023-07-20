'use client';

import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="h-[80vh] flex text-9xl justify-center items-center">
      <motion.div
        className="px-24 py-12 font-bold rounded-full transition-all hover:text-white hover:bg-[#0123ff]"
        whileHover={{ scale: 1.05 }}
      >
        chldmswl
      </motion.div>
    </div>
  );
};

export default Banner;
