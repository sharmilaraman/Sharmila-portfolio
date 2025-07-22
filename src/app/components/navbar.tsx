"use client";
// import { nav } from "framer-motion/client";
import React, { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from '../context/ThemeContext'

import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },

    { href: "/projects", label: "Project" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="fixed w-full bg-white/80  dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl container mx-auto px-4">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="uncial-antiqua-regular text-3xl font-bold text-primary">
            {" "}
            SHARMILA 
          </Link>
          {/* Desktop menus */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? " text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <button onClick={toggleTheme} className="p-1 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary  dark:hover:bg-gray-800 transition-colors cursor-pointer">
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} className="">
                  <Link
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="py-2 block hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div>
                <button onClick={toggleTheme}   className="flex items-center py-2 hover:text-primary transition-colors cursor-pointer">
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="h-5 w-5 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5 mr-2" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
