import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="text-center py-8">
      <p className="text-gray-600  dark:text-gray-300 text-sm mb-4">
        © {new Date().getFullYear()} Sharmila. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
         href="https://github.com/sharmilaraman" target="_blank"
          className="border border-primary p-2 rounded-full text-primary hover:bg-cyan-400 hover:text-[#020817] transition"
        >
          <FaGithub size={20} />
        </Link>
        <Link
        href="https://www.linkedin.com/in/sharmilaramachandran/" target="_blank"
          className="border border-primary p-2 rounded-full text-primary hover:bg-cyan-400 hover:text-[#020817] transition"
        >
          <FaLinkedinIn size={20} />
        </Link>
        <Link
           href="mailto:sharmil05122002@gmail.com" target="_blank"
          className="border border-primary p-2 rounded-full text-primary hover:bg-cyan-400 hover:text-[#020817] transition"
        >
          <MdOutlineMail size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
