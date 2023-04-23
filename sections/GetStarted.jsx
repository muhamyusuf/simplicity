'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { startingFeatures } from '../constants';
import { StartSteps, TextGradient, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className="relative z-10 paddings" id="Element">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-8 mx-auto innerWidth lg:flex-row"
    >
      <motion.div
        variants={planetVariants('left')}
        className="flex-1 flexCenter"
      >
        <Image
          src="/smartphone.png"
          alt="get-started"
          width={1}
          height={1}
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="Element of Simplicity" />
        <div className="flex flex-row items-center justify-start gap-2">
          <TextGradient title={<>Refactoring</>} />
          <TitleText title={<>Design</>} />
        </div>
        <p className="text-white opacity-60">
          Simplicity is the discipline of minimizing, refining or editing back a
          design.
        </p>
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[20px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
