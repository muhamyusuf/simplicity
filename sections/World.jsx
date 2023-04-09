'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TextGradient, TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className="relative z-10 paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col mx-auto innerWidth"
    >
      <TypingText title="Simplicity is Trend" textStyles="text-center" />
      <div className="flex-col gap-2 flexCenter">
        <TitleText
          title={<>Apply simplicity and be</>}
          textStyles="text-center"
        />
        <TextGradient title={<>GLOBAL</>} />
      </div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          src="/map.png"
          alt="map"
          width={1}
          height={1}
          className="object-cover w-full h-full"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={1}
            height={1}
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute bottom-60 left-5 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={1}
            height={1}
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={1}
            height={1}
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-1/2 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={1}
            height={1}
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <Image
            width={1}
            height={1}
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
