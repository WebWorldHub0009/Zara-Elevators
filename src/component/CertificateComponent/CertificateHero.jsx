// src/components/CertificateHero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Background image (replace with your elevator-related image)
import certBg from "../../assets/images/d8ea89a4-3314-4aec-a5ed-d386135e0c60.jpeg";

const phrases = [
  "Excellence in Vertical Mobility",
  "Certified Quality & Safety",
  "Trusted Elevator Solutions",
];

export default function CertificateHero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change phrase every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Image with color overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${certBg})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(226, 158, 2, 0.6)", // #E29E02 overlay
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#E29E02]/40 via-[#EA630B]/30 to-[#E29E02]/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <motion.h1
          key={currentPhrase}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E29E02] mb-6"
        >
          {phrases[currentPhrase]}
        </motion.h1>

        <motion.p
          key={`para-${currentPhrase}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8 }}
          className="text-[#EA630B] text-lg md:text-xl mb-8"
        >
          Our certifications guarantee quality, safety, and reliability in every elevator we design and maintain.
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/certificates">
            <button className="bg-[#E29E02] hover:bg-[#EA630B] text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
              Learn More
            </button>
          </Link>
          <Link to="/contact">
            <button className="border-2 border-[#E29E02] hover:border-[#EA630B] hover:bg-[#EA630B] hover:text-white text-[#E29E02] font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
