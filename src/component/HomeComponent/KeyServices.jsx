// src/components/KeyServices.jsx
import React from "react";
import { Wrench, Building2, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/services/sk1.jpeg";
import img2 from "../../assets/images/services/sk2.jpeg";
import img3 from "../../assets/images/services/sk3.jpeg";
import img4 from "../../assets/images/services/sk4.jpeg";

const services = [
  {
    icon: <Wrench className="w-10 h-10 text-[#EA630B]" />,
    title: "Lift Installation",
    desc: "Reliable and modern elevator installation for residential and commercial spaces.",
    img: img1,
  },
  {
    icon: <Building2 className="w-10 h-10 text-[#E29E02]" />,
    title: "Maintenance & Repairs",
    desc: "24/7 expert support and maintenance to ensure safe and smooth operations.",
    img: img2,
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#EA630B]" />,
    title: "Modernization",
    desc: "Upgrade your existing elevators with advanced, energy-efficient solutions.",
    img: img3,
  },
  {
    icon: <Cpu className="w-10 h-10 text-[#E29E02]" />,
    title: "Smart Elevators",
    desc: "Innovative vertical mobility solutions with smart technology integration.",
    img: img4,
  },
];

const KeyServices = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#fff7ec] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Our <span className="text-[#EA630B]">Key Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Delivering excellence in vertical mobility with safe, reliable and
          modern elevator solutions.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(234,99,11,0.3)] transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#E29E02] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Services Button */}
        <div className="mt-12">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#E29E02] to-[#EA630B] text-white font-semibold rounded-full shadow-lg transition cursor-pointer duration-300 hover:shadow-[0_0_20px_rgba(234,99,11,0.5)]"
            >
              EXPLORE SERVICES
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
