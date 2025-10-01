// src/components/MissionVision.jsx
import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  {
    title: "Our Mission",
    icon: FaBullseye,
    description:
      "To deliver safe, innovative, and reliable vertical mobility solutions, ensuring comfort and convenience for every user.",
  },
  {
    title: "Our Vision",
    icon: FaLightbulb,
    description:
      "To become a leading name in the elevator industry, transforming urban mobility with cutting-edge technology and excellence.",
  },
  {
    title: "Our Values",
    icon: FaBullseye,
    description:
      "Integrity, innovation, and customer satisfaction form the core of everything we do at Zara Elevators.",
  },
];

export default function MissionVision() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#E29E02]/20 via-[#EA630B]/20 to-[#E29E02]/20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E29E02] mb-4">
          Mission & Vision
        </h2>
        <p className="text-[#EA630B] text-lg md:text-xl max-w-2xl mx-auto">
          Driving innovation, safety, and reliability in vertical mobility with every step we take.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map(({ title, icon: Icon, description }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition duration-500 border-2 border-[#E29E02]/50 hover:bg-gradient-to-br hover:from-[#E29E02] hover:to-[#EA630B]"
          >
            <motion.div
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E29E02] to-[#EA630B] text-white text-3xl mb-4 transition duration-500 group-hover:bg-white group-hover:text-[#E29E02]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Icon className="transition duration-500 group-hover:text-[#EA630B]" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#E29E02] mb-2 group-hover:text-white transition duration-500">{title}</h3>
            <p className="text-[#EA630B] text-sm md:text-base group-hover:text-white transition duration-500">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
