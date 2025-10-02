// src/components/ServicesHero.jsx
import React, { useEffect, useState } from "react";
import {
  Truck,
  Users,
  Star,
  Clock,
  Package,
  MapPin,
  Headphones,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import logoImg from "../../assets/images/liftiumnewlogo.png";
import img1 from "../../assets/images/s1.jpeg";
import img2 from "../../assets/images/s2.jpeg";
import img3 from "../../assets/images/s3.jpeg";
import img4 from "../../assets/images/s4.jpeg";

// Counter Component
const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseFloat(target);
      const increment = end / (duration / 16); // ~60fps
      const handle = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(handle);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ServicesHero = () => {
  return (
    <section className="bg-white text-black min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Elevating Lives,{" "}
              <span className="text-[#E29E02]">One Floor at a Time</span>.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At{" "}
              <span className="text-[#EA630B] font-semibold">
                Zara Elevators
              </span>
              , we design innovative, safe, and reliable lift solutions that
              redefine modern living and working spaces with excellence.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-4 bg-gradient-to-r from-[#E29E02] to-[#EA630B] text-white rounded-full shadow-lg font-semibold transition duration-300 hover:shadow-[0_0_20px_rgba(226,158,2,0.6)]"
              >
                GET A FREE QUOTE
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Logo */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="relative flex justify-center"
          >
            <img
              src={logoImg}
              alt="Logo"
              className="w-90 md:w-126 p-6 hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            {
              icon: <Truck className="w-8 h-8 mb-2 text-[#EA630B]" />,
              stat: 5000,
              label: "Installations",
              suffix: "+",
            },
            {
              icon: <Users className="w-8 h-8 mb-2 text-[#E29E02]" />,
              stat: 3000,
              label: "Happy Clients",
              suffix: "+",
            },
            {
              icon: <Star className="w-8 h-8 mb-2 text-[#EA630B]" />,
              stat: 4.9,
              label: "Customer Rating",
              suffix: "★",
            },
            {
              icon: <Clock className="w-8 h-8 mb-2 text-[#E29E02]" />,
              stat: 10,
              label: "Years of Excellence",
              suffix: "+",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="bg-white/80 border border-[#E29E02]/20 shadow-lg rounded-2xl flex flex-col items-center p-6 text-center transition duration-300 hover:shadow-[0_0_20px_rgba(234,99,11,0.3)]"
            >
              {item.icon}
              <h3 className="text-2xl font-bold text-black">
                <Counter target={item.stat} suffix={item.suffix} />
              </h3>
              <p className="text-sm text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
