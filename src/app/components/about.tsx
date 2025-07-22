"use client";
import React, { useState } from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { GraduationCap, Code } from "lucide-react";
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, fadeInDown, staggerContainer } from '@/utils/animations';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-16"
            {...fadeInDown}
          >
            About <span className="text-primary">Me</span>
          </motion.h1>
        </div>
       {/* Profile Summary */}
        <motion.div className="flex flex-col items-center justify-center space-y-8" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div className="max-w-3xl text-center" {...fadeInUp}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              React.js Trainee with hands-on experience in building responsive
              UI components and structured front-end projects. Currently working
              on real-time projects using React.js, Next.js, and Tailwind CSS.
              Gained practical skills in component-based architecture and clean
              project structuring. Experienced in integrating APIs and creating
              dynamic, data-driven UIs. Focused on building pixel-perfect
              interfaces and optimizing for responsiveness. Familiar with
              collaborative workflows and real-world development practices.
              Continuously learning modern web development tools and best
              practices.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div className="w-full max-w-2xl" {...fadeIn}>
            <div className="flex md:justify-center md:space-x-4 mb-8  md:overflow-y-hidden overflow-y-hidden  overflow-x-auto">
              <motion.button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center space-x-2 px-4 py-2 font-medium rounded-full ${
                  activeTab === "experience"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BriefcaseIcon className="w-5 h-5" />
                <span>Experience</span>
              </motion.button>

              <motion.button
                onClick={() => setActiveTab("education")}
                className={`flex items-center space-x-2 px-4 py-2 font-medium rounded-full ${
                  activeTab === "education"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="w-5 h-5" />
                <span>Education</span>
              </motion.button>

              <motion.button
                onClick={() => setActiveTab("skills")}
                className={`flex items-center space-x-2 px-4 py-2 font-medium rounded-full ${
                  activeTab === "skills"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="w-5 h-5" />
                <span>Skills</span>
              </motion.button>
            </div>

            {/* Conditional Content */}
            <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
              {activeTab === "experience" && (
                <>
                  <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6" {...fadeInUp}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Full Stack Developer Intern
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      Besant Technologies,Chennai.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      July 2024 - March 2025
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      Full Stack Developer Intern with hands-on experience in
                      Java and MySQL for backend development, and React.js,
                      Next.js, Tailwind CSS, CSS, HTML, Bootstrap, and Sass for
                      frontend UI building. Contributed to real-time projects
                      involving REST API integration, dynamic UI development,
                      and responsive design. Focused on building scalable
                      applications using component-based architecture, clean
                      code practices, and collaborative development workflows.
                    </p>
                  </motion.div>

                  <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" {...fadeInUp}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      React.js Trainee
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      Siam Computing,Chennai.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      April 2025 - Present
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      Built responsive UI components using React.js and worked
                      closely with designers to create pixel-perfect user
                      interfaces. Gained practical experience with modern
                      JavaScript frameworks, React, Redux, Next.js, and state
                      management techniques.
                    </p>
                  </motion.div>
                </>
              )}

              {activeTab === "education" && (
                <>
                  <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" {...fadeInUp}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Bachelor of Engineering - ECE - 8.01
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      University College of Engineering,BIT
                      Campus,Tiruchirappalli
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                      Graduated 2024
                    </span>
                  </motion.div>
                  <motion.div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6" {...fadeInUp}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Higher Secondary Education - 80%
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      Laurel Higher Secondary School,Pattukkottai
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                      Academic Year 2020
                    </span>
                  </motion.div>
                </>
              )}

              {activeTab === "skills" && (
                <motion.div className="bg-white dark:bg-gray-800 flex flex-wrap gap-2 md:gap-3 rounded-lg shadow-md p-6" {...fadeInUp}>
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "Responsiveness Design",
                    "Tailwind CSS",
                    "React.js",
                    "Next.js",
                    "Redux",
                    "Gatsby.js",
                    "SSR",
                    "CSR",
                    "Git",
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 border border-blue-400 text-blue-600 rounded-full font-medium text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
