import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('src/assets/images/Contact/c2.jpeg')", // apni elevator related image ka path daalna
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#000000]/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center max-w-3xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
          style={{ color: "#E29E02" }}
        >
          Connect With Our Elevator Experts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: "#EA630B" }}
        >
          Have a project in mind? Whether it’s modern passenger elevators,
          reliable freight lifts, or luxury designs, our team is here to provide
          safe, innovative, and efficient solutions tailored to your needs.
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <Link to="/">
            <button
              className="px-6 py-3 rounded-2xl font-semibold shadow-lg transition duration-300 cursor-pointer bg-[#E29E02] text-white hover:bg-[#EA630B] hover:text-white"
            >
              Go to Home
            </button>
          </Link>

          <Link to="/gallery">
            <button
              className="px-6 py-3 rounded-2xl font-semibold shadow-lg transition duration-300 cursor-pointer border-2 border-[#E29E02] text-[#E29E02] hover:bg-[#EA630B] hover:text-white"
            >
              View Our Gallery
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
