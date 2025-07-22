"use client"
import React from "react";
import { skills } from "@/contents/skills";
import { motion } from "framer-motion";
import {fadeInDown, fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

const Skills = () => {
  return (
    <section className="min-h-screen  py-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center  dark:text-white mb-10"
        {...fadeInDown}
      >
        My <span className="text-primary ">Skills</span>
      </motion.h2>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            className="bg-white dark:bg-dark/50 rounded-xl border-2 border-cyan-400/40 shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105 hover:border-cyan-400"
            style={{ boxShadow: "0 0 16px 0 #00ffff44" }}
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
          >
            <img
              src={skill.image}
              alt={skill.title}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-600  dark:text-gray-300 text-center">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;