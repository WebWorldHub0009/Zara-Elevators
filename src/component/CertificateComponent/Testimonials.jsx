// src/components/Testimonials.jsx
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Facility Manager",
    text: "Zara Elevators has transformed our building with safe, reliable, and aesthetically beautiful lifts. Highly recommended!",
  },
  {
    name: "Anjali Khan",
    role: "Hotel Owner",
    text: "Excellent service and on-time installation. The elevators are smooth, safe, and very stylish!",
  },
  {
    name: "Mohammed Iqbal",
    role: "Industrial Head",
    text: "The maintenance team is very professional. Our freight elevators have never worked better.",
  },
  {
    name: "Priya Verma",
    role: "Architect",
    text: "Design and functionality perfectly combined. Zara Elevators provides innovative solutions every time.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#E29E02]/20 via-[#EA630B]/20 to-[#E29E02]/20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E29E02] mb-4">
          Testimonials
        </h2>
        <p className="text-[#EA630B] text-lg md:text-xl max-w-2xl mx-auto">
          Hear from our satisfied clients who trust Zara Elevators for innovation, safety, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-center transition duration-300 hover:bg-[#ffcdab] hover:text-white hover:shadow-2xl border-2 border-[#E29E02]/50"
          >
            <div className="mb-4 text-4xl text-[#E29E02] hover:text-white">
              <FaQuoteLeft />
            </div>
            <p className="text-[#EA630B] text-sm md:text-base mb-4">{t.text}</p>
            <div>
              <h3 className="text-xl font-bold text-[#E29E02] hover:text-white">{t.name}</h3>
              <p className="text-[#EA630B] font-semibold hover:text-white">{t.role}</p>
            </div>
            <div className="flex justify-center mt-4 space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
