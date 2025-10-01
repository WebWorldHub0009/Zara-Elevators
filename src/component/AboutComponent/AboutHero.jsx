// src/components/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutHero() {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
    },
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#E29E02] via-[#EA630B] to-[#E29E02]"></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 z-10 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-center text-white flex flex-col items-center gap-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          About Zara Elevators
        </motion.h1>

        {/* Paragraph */}
        <p className="text-white/90 text-lg md:text-xl max-w-3xl">
          We provide innovative and reliable vertical mobility solutions for 
          residential, commercial, and industrial spaces. Safety, comfort, and 
          efficiency are our top priorities.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Link to="/services">
            <button className="bg-[#E29E02] hover:bg-[#EA630B] text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
              Learn More
            </button>
          </Link>

          <Link to="/contact">
            <button className="bg-transparent border-2 border-[#E29E02] hover:bg-[#EA630B] hover:text-white text-[#E29E02] font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
