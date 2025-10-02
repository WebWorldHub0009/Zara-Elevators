// src/components/StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaWrench, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const stats = [
  {
    value: "200+",
    label: "Luxury Projects",
    sub: "Residential & Commercial Towers",
    icon: <FaBuilding className="text-4xl text-[#E29E02]" />,
  },
  {
    value: "80+",
    label: "Expert Engineers",
    sub: "Certified Elevator Specialists",
    icon: <FaUsers className="text-4xl text-[#EA630B]" />,
  },
  {
    value: "24/7",
    label: "Support & Maintenance",
    sub: "Always Available, Always Reliable",
    icon: <FaWrench className="text-4xl text-[#E29E02]" />,
  },
  {
    value: "100%",
    label: "Safety First",
    sub: "Global Safety Standards Certified",
    icon: <FaShieldAlt className="text-4xl text-[#EA630B]" />,
  },
];

export default function StatsSection() {
  return (
    <>
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Gradient BG Arc */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-[900px] rounded-b-[50%] bg-gradient-to-r from-[#E29E02]/10 to-[#EA630B]/10 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-lg md:text-xl text-[#EA630B] font-semibold mb-3 tracking-wide uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Our Achievements
          </motion.h2>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Why Choose <span className="text-[#E29E02]">Zara Elevators</span>
          </motion.h1>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.08 }}
                className="relative bg-white border border-[#E29E02]/20 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transition duration-500 group overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E29E02]/0 to-[#EA630B]/0 group-hover:from-[#E29E02]/20 group-hover:to-[#EA630B]/20 transition duration-500 rounded-2xl"></div>

                <div className="mb-4 transform group-hover:scale-110 transition duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#1A1A1A]">
                  {stat.value}
                </h3>
                <p className="mt-2 text-[#EA630B] font-semibold">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-gradient-to-r from-[#E29E02] to-[#EA630B] text-white px-8 py-4 rounded-full shadow-lg  hover:opacity-90 transition font-semibold"
              >
                Explore Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom Line */}
      <div className="w-full h-[3px] bg-gradient-to-r from-[#E29E02] to-[#EA630B]"></div>
    </>
  );
}
