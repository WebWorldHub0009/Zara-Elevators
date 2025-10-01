// src/components/ServicesHero.jsx
import React from "react";
import {
  Truck,
  Users,
  Star,
  Clock,
  Package,
  MapPin,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import profileImg from "../../assets/images/owner.jpeg";
import logoImg from "../../assets/images/liftiumnewlogo.png";
import img1 from "../../assets/images/s1.jpeg";
import img2 from "../../assets/images/s2.jpeg";
import img3 from "../../assets/images/s3.jpeg";
import img4 from "../../assets/images/s4.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ServicesHero = () => {
  return (
    <section className="bg-white text-black min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Elevating Lives,{" "}
              <span className="text-[#E29E02]">One Floor at a Time</span>.
            </h1>
            <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
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
                className="px-8 py-4 bg-gradient-to-r from-[#E29E02] to-[#EA630B] text-white rounded-full shadow-lg font-semibold"
              >
                GET A FREE QUOTE
              </motion.button>
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="flex-1 relative flex justify-center"
          >
            <img
              src={profileImg}
              alt="Owner"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-[#E29E02] shadow-xl"
            />
            <img
              src={logoImg}
              alt="Logo"
              className="absolute bottom-4 right-8 w-28 md:w-36 bg-white rounded-full p-2 shadow-lg"
            />
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: <Truck className="w-8 h-8 mb-2 text-[#EA630B]" />, stat: "5000+", label: "Installations" },
            { icon: <Users className="w-8 h-8 mb-2 text-[#E29E02]" />, stat: "3000+", label: "Happy Clients" },
            { icon: <Star className="w-8 h-8 mb-2 text-[#EA630B]" />, stat: "4.9★", label: "Customer Rating" },
            { icon: <Clock className="w-8 h-8 mb-2 text-[#E29E02]" />, stat: "10+", label: "Years of Excellence" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-br from-[#E29E02]/10 to-white shadow-md rounded-2xl flex flex-col items-center p-6 text-center"
            >
              {item.icon}
              <h3 className="text-2xl font-bold text-black">{item.stat}</h3>
              <p className="text-sm text-[#4B5563]">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={img1} alt="Modern Elevators" className="w-full h-80 object-cover" />
          </motion.div>
          <div className="flex flex-col justify-center p-6 rounded-2xl bg-gradient-to-br from-[#EA630B]/10 to-white shadow-md">
            <Package className="w-10 h-10 text-[#EA630B] mb-3" />
            <h3 className="text-2xl font-bold text-[#E29E02]">5000+ Projects Delivered</h3>
            <p className="text-[#4B5563] mt-3 leading-relaxed">
              Safe, reliable, and modern lift installations across industries, homes, and commercial spaces.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center p-6 rounded-2xl bg-gradient-to-br from-[#E29E02]/10 to-white shadow-md">
            <MapPin className="w-10 h-10 text-[#EA630B] mb-3" />
            <h3 className="text-2xl font-bold text-[#E29E02]">120+ Cities Covered</h3>
            <p className="text-[#4B5563] mt-3 leading-relaxed">
              Expanding trust & innovation nationwide with advanced vertical mobility solutions.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={img2} alt="Lift Installations" className="w-full h-80 object-cover" />
          </motion.div>

          {/* Card 3 */}
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={img3} alt="Smart Elevators" className="w-full h-80 object-cover" />
          </motion.div>
          <div className="flex flex-col justify-center p-6 rounded-2xl bg-gradient-to-br from-[#E29E02]/10 to-white shadow-md">
            <Headphones className="w-10 h-10 text-[#EA630B] mb-3" />
            <h3 className="text-2xl font-bold text-[#E29E02]">24/7 Customer Support</h3>
            <p className="text-[#4B5563] mt-3 leading-relaxed">
              Always here for seamless vertical solutions with prompt service and assistance.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-center p-6 rounded-2xl bg-gradient-to-br from-[#E29E02]/10 to-white shadow-md">
            <Star className="w-10 h-10 text-[#EA630B] mb-3" />
            <h3 className="text-2xl font-bold text-[#E29E02]">Trusted by Thousands</h3>
            <p className="text-[#4B5563] mt-3 leading-relaxed">
              A legacy of excellence, safety, and innovation in elevator solutions across India.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={img4} alt="Support Team" className="w-full h-80 object-cover" />
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Space?
          </h2>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-[#E29E02] to-[#EA630B] text-white rounded-full shadow-lg font-semibold"
            >
              CONTACT US TODAY
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
