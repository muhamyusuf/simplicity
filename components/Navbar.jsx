'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="relative py-8 xPaddings"
  >
    <div className="absolute w-[30%] inset-0 gradient-01" />
    <div className="flex justify-between gap-8 mx-auto innerWidth">
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        Simplicity
      </h2>
      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
