import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Main = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4 ">
          <Image
            src="/projects/profile.jpg"
            alt="profile image"
            width={800}
            height={800}
            className="rounded-full mb-4 w-52 h-52 object-cover ring-2 ring-primary"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Sharmila</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Frontend Developer
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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
          {/* Add more skills as needed */}
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="https://github.com/your-github-username"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/your-linkedin-username"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="mailto:sharmil05122002@gmail.com"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-200 transition-colors flex items-center"
          >
            <MdOutlineMail className="mr-2" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Main;
