"use client";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="py-20 px-2 md:px-12 lg:px-20 bg-black text-white rounded-[3rem] mx-2 md:mx-8 lg:mx-12 my-20">
      <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-center gap-1 md:gap-6 lg:gap-16 overflow-hidden px-1">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          <h2 className="text-[7px] min-[400px]:text-[9px] sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-widest uppercase text-gray-400 whitespace-nowrap">
            Featured Tools
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-nowrap items-center gap-1 md:gap-4 lg:gap-8"
        >
          <h3 className="text-[8px] min-[400px]:text-[10px] sm:text-xl md:text-3xl lg:text-4xl font-black tracking-tighter whitespace-nowrap">PAYLOAD-ARSENAL</h3>
          <div className="w-1 h-1 md:w-3 md:h-3 rounded-full bg-gray-600 shrink-0" />
          <h3 className="text-[8px] min-[400px]:text-[10px] sm:text-xl md:text-3xl lg:text-4xl font-black tracking-tighter whitespace-nowrap">BYPASS-ARSENAL</h3>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
