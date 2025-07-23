
"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';


const Main = () => {
  return (
    <section className="py-15 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div className='flex justify-center items-center mb-4'
          initial={scaleIn.initial}
          animate={scaleIn.animate}
          transition={scaleIn.transition}
        >
          <Image
            src="/projects/profile.jpg"
            alt="profile image"
            width={800}
            height={800}
            className="rounded-full mb-4 w-52 h-52 object-cover ring-2 ring-primary"
          />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          Hi, I&apos;m{" "}
          <motion.span className="text-primary" {...fadeIn}>
            Sharmila
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          {...fadeInUp}
        >
          Frontend Developer | React | 
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-2 mb-8"  {...fadeInUp}>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            React.js
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Redux
          </span>

          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Next.js
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            TypeScript
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            JavaScript
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Tailwind CSS
          </span>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            Git
          </span>
          {/* Add more skills as needed */}
        </motion.div>
        <motion.div className="flex justify-center space-x-4 mb-8"  {...fadeInUp}>
          <Link
            href="https://github.com/sharmilaraman"
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-200 transition-colors"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sharmilaramachandran/"
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-200 transition-colors"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="mailto:sharmil05122002@gmail.com"
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-200 transition-colors flex items-center"
          >
            <MdOutlineMail className="mr-2" />
          </Link>
        </motion.div>
        <motion.div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="inline-block w-full  md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/70 transition-colors bg-primary "
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block w-full  md:w-auto text-white hover:text-primary  px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors bg-gray-500 "
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
