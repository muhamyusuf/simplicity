'use client';

import { motion } from 'framer-motion';

import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import {
  InsightCard,
  TextGradient,
  TitleText,
  TypingText,
} from '../components';

const Insights = () => (
  <section className="relative z-10 paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col mx-auto innerWidth"
    >
      <TypingText title="Insight" textStyles="text-center" />
      <div className="flex flex-wrap items-baseline gap-2 flexCenter">
        <TitleText title={<>Insight about</>} textStyles="text-center" />
        <TextGradient title={<>simplicity</>} />
      </div>
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
