import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import sh1 from "../../assets/images/services/sh1.jpeg";


const HeroServices = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${sh1})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#EA630B] to-[#E29E02]"
        >
          Elevators & Mobility Solutions
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-[#FFD580] mb-8"
        >
          We provide safe, modern, and reliable elevator services for residential
          and commercial buildings. Elevate your space with our innovative solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="#services">
            <button className="px-6 py-3 cursor-pointer rounded-full bg-[#EA630B] text-white font-semibold shadow-md
                               hover:bg-[#E29E02] hover:text-gray-900 transition transform hover:scale-105">
              Learn More
            </button>
          </a>
          <Link to="/gallery">
            <button className="px-6 py-3 rounded-full bg-transparent border-2 border-[#E29E02] 
                               text-[#E29E02] font-semibold shadow-md 
                               hover:bg-[#E29E02] hover:text-gray-900 cursor-pointer transition transform hover:scale-105">
              Our Gallery
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroServices;
