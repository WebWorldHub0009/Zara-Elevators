import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroServices = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/cff5e1cba8964bcaeaee87cf0eaecb59.jpg')", // apni background image yahan daalo
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
          className="text-5xl md:text-6xl font-bold text-[#D99021] mb-6"
        >
          Our Premium Services
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          We bring creativity and innovation to every project, delivering
          spaces that inspire and transform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="#services"><button className="px-6 py-3 rounded-full bg-[#D99021] text-gray-900 font-semibold shadow-md hover:bg-transparent hover:border-2 border-[#D99021] hover:text-[#D99021] transition cursor-pointer">
            Learn More
          </button></a>
          <Link to="/gallery"><button className="px-6 py-3 rounded-full bg-transparent border-2 border-[#D99021] text-[#D99021] font-semibold shadow-md hover:bg-[#D99021] hover:text-gray-900 transition cursor-pointer">
            Our Gallery
          </button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroServices;
