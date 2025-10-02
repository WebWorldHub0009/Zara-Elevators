// src/components/AboutSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaRocket, FaCogs, FaStar } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

// Image
import about1 from "../../assets/images/pexels-shkrabaanthony-5816285.jpg";

export default function AboutSection() {
  const features = [
    { icon: <FaShieldAlt />, title: "24/7 Support", desc: "Always available for assistance." },
    { icon: <FaRocket />, title: "Energy Efficient", desc: "Smart systems for reduced energy use." },
    { icon: <FaCogs />, title: "Custom Design", desc: "Tailored solutions for every building." },
  ];

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-20 py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* LEFT: Text */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#E29E02] mb-6">
            About Zara Elevators
          </h2>
          <p className="text-[#EA630B] text-lg md:text-xl leading-relaxed mb-6">
            Zara Elevators is committed to transforming the way people experience vertical mobility.
            Combining state-of-the-art engineering with luxury design, we deliver elevators that are not only safe and reliable but also aesthetically pleasing.
            Every ride is a seamless experience, from smooth acceleration to whisper-quiet operation.
            Our elevators are designed for homes, offices, and skyscrapers, offering <span className="font-semibold">premium comfort</span>,
            <span className="font-semibold">advanced safety features</span>, and <span className="font-semibold">energy-efficient technology</span>.
          </p>

          <Link to="/about">
            <button className="bg-[#E29E02] hover:bg-[#EA630B] text-black font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105 mb-8 cursor-pointer">
              Learn More
            </button>
          </Link>

          {/* Smooth Scrolling Feature Cards */}
          <div className="overflow-hidden relative w-full">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              whileHover={{ x: 0 }}
            >
              {features.concat(features).map((feat, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0 w-64 p-6 rounded-xl shadow-md text-center bg-[#E29E02]/10 cursor-pointer hover:bg-[#EA630B] hover:text-white hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-3 text-[#E29E02] hover:text-white transition">
                    {feat.icon}
                  </div>
                  <p className="font-semibold mb-1">{feat.title}</p>
                  <p className="text-sm leading-snug">{feat.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT: Single Full Image */}
        <div className="lg:w-1/2 relative flex justify-end">
          <div className="w-[500px] h-[500px] md:h-[500px] rounded-tl-[20%] rounded-br-[30%] overflow-hidden shadow-2xl hover:scale-105 hover:shadow-3xl transition">
            <img
              src={about1}
              alt="Zara Elevator"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ICON CARDS BELOW */}
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-[#E29E02]/10 p-6 rounded-xl hover:scale-105 hover:shadow-lg transition text-center">
          <FaShieldAlt className="text-[#E29E02] text-5xl mb-4" />
          <p className="font-semibold text-[#EA630B] text-lg mb-2">Safety</p>
          <p className="text-sm text-[#E29E02] leading-snug">
            Our elevators meet the highest safety standards, ensuring secure rides every time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-[#E29E02]/10 p-6 rounded-xl hover:scale-105 hover:shadow-lg transition text-center">
          <FaRocket className="text-[#E29E02] text-5xl mb-4" />
          <p className="font-semibold text-[#EA630B] text-lg mb-2">Performance</p>
          <p className="text-sm text-[#E29E02] leading-snug">
            Smooth and reliable operation designed for both residential and commercial buildings.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-[#E29E02]/10 p-6 rounded-xl hover:scale-105 hover:shadow-lg transition text-center">
          <FaCogs className="text-[#E29E02] text-5xl mb-4" />
          <p className="font-semibold text-[#EA630B] text-lg mb-2">Technology</p>
          <p className="text-sm text-[#E29E02] leading-snug">
            Equipped with smart and modern control systems for a premium riding experience.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-[#E29E02]/10 p-6 rounded-xl hover:scale-105 hover:shadow-lg transition text-center">
          <FaStar className="text-[#E29E02] text-5xl mb-4" />
          <p className="font-semibold text-[#EA630B] text-lg mb-2">Luxury Design</p>
          <p className="text-sm text-[#E29E02] leading-snug">
            Sleek interiors, elegant finishes, and premium aesthetics make every ride comfortable and stylish.
          </p>
        </div>
      </div>
    </section>
  );
}
