// src/pages/ServiceDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ------------------ Image Imports ------------------
// (Same as your existing imports)
import sc1s1 from "../../assets/images/services/sc1/sc1s1.jpeg";
import sc1s2 from "../../assets/images/services/sc1/sc1s2.jpeg";
import sc1s3 from "../../assets/images/services/sc1/sc1s3.jpeg";
import sc1s4 from "../../assets/images/services/sc1/sc1s4.jpeg";
import sc1s5 from "../../assets/images/services/sc1/sc1s5.jpeg";
import sc1s6 from "../../assets/images/services/sc1/sc1s6.jpeg";

import sc2s1 from "../../assets/images/services/sc2/sc2s1.jpeg";
import sc2s2 from "../../assets/images/services/sc2/sc2s2.jpeg";
import sc2s3 from "../../assets/images/services/sc2/sc2s3.jpeg";
import sc2s4 from "../../assets/images/services/sc2/sc2s4.jpeg";
import sc2s5 from "../../assets/images/services/sc2/sc2s5.jpeg";
import sc2s6 from "../../assets/images/services/sc2/sc2s6.jpeg";

import sc3s1 from "../../assets/images/services/sc3/sc3s1.jpeg";
import sc3s2 from "../../assets/images/services/sc3/sc3s2.jpeg";
import sc3s3 from "../../assets/images/services/sc3/sc3s3.jpeg";
import sc3s4 from "../../assets/images/services/sc3/sc3s4.jpeg";
import sc3s5 from "../../assets/images/services/sc3/sc3s5.jpeg";
import sc3s6 from "../../assets/images/services/sc3/sc3s6.jpeg";

import sc4s1 from "../../assets/images/services/sc4/sc4s1.jpeg";
import sc4s2 from "../../assets/images/services/sc4/sc4s2.jpeg";
import sc4s3 from "../../assets/images/services/sc4/sc4s3.jpeg";
import sc4s4 from "../../assets/images/services/sc4/sc4s4.jpeg";
import sc4s5 from "../../assets/images/services/sc4/sc4s5.jpeg";
import sc4s6 from "../../assets/images/services/sc4/sc4s6.jpeg";

import sc5s1 from "../../assets/images/services/sc5/sc5s1.jpeg";
import sc5s2 from "../../assets/images/services/sc5/sc5s2.jpeg";
import sc5s3 from "../../assets/images/services/sc5/sc5s3.jpeg";
import sc5s4 from "../../assets/images/services/sc5/sc5s4.jpeg";
import sc5s5 from "../../assets/images/services/sc5/sc5s5.jpeg";
import sc5s6 from "../../assets/images/services/sc5/sc5s6.jpeg";

import sc6s1 from "../../assets/images/services/sc6/sc6s1.jpeg";
import sc6s2 from "../../assets/images/services/sc6/sc6s2.jpeg";
import sc6s3 from "../../assets/images/services/sc6/sc6s3.jpeg";
import sc6s4 from "../../assets/images/services/sc6/sc6s4.jpeg";
import sc6s5 from "../../assets/images/services/sc6/sc6s5.jpeg";
import sc6s6 from "../../assets/images/services/sc6/sc6s6.jpeg";

import sc7s1 from "../../assets/images/services/sc7/sc7s1.jpeg";
import sc7s2 from "../../assets/images/services/sc7/sc7s2.jpeg";
import sc7s3 from "../../assets/images/services/sc7/sc7s3.jpeg";
import sc7s4 from "../../assets/images/services/sc7/sc7s4.jpeg";
import sc7s5 from "../../assets/images/services/sc7/sc7s5.jpeg";
import sc7s6 from "../../assets/images/services/sc7/sc7s6.jpeg";

import sc8s1 from "../../assets/images/services/sc8/sc8s1.jpeg";
import sc8s2 from "../../assets/images/services/sc8/sc8s2.jpeg";
import sc8s3 from "../../assets/images/services/sc8/sc8s3.jpeg";
import sc8s4 from "../../assets/images/services/sc8/sc8s4.jpeg";
import sc8s5 from "../../assets/images/services/sc8/sc8s5.jpeg";
import sc8s6 from "../../assets/images/services/sc8/sc8s6.jpeg";

import sc9s1 from "../../assets/images/services/sc9/sc9s1.jpeg";
import sc9s2 from "../../assets/images/services/sc9/sc9s2.jpeg";
import sc9s3 from "../../assets/images/services/sc9/sc9s3.jpeg";
import sc9s4 from "../../assets/images/services/sc9/sc9s4.jpeg";
import sc9s5 from "../../assets/images/services/sc9/sc9s5.jpeg";
import sc9s6 from "../../assets/images/services/sc9/sc9s6.jpeg";

// ------------------ Service Data ------------------
const serviceDetails = {
  1: {
    title: "Traction Machine Room Elevator",
    description:
      "Traction Machine Room Elevators are advanced vertical transportation systems used in high-rise commercial and residential buildings. These elevators offer exceptional ride comfort, energy efficiency, and long-term reliability.",
    extraInfo:
      "They use traction motors with counterweights to provide smooth, quiet, and efficient travel. Ideal for buildings that demand high speed and safety standards.",
    images: [sc1s1, sc1s2, sc1s3, sc1s4, sc1s5, sc1s6],
    faqs: [
      { q: "What is the max speed?", a: "Up to 2.5 m/s depending on model." },
      { q: "Maintenance frequency?", a: "Recommended every 6 months." },
      { q: "Energy efficiency features?", a: "Uses regenerative drives to save energy." },
    ],
  },
  2: {
    title: "Home Elevator",
    description:
      "Home Elevators blend comfort, luxury, and convenience for multi-story residences. Designed to integrate seamlessly into home architecture.",
    extraInfo:
      "Equipped with advanced safety features like emergency stop, overload protection, and battery backup, ensuring safety with style.",
    images: [sc2s1, sc2s2, sc2s3, sc2s4, sc2s5, sc2s6],
    faqs: [
      { q: "Can it be installed in small homes?", a: "Yes, compact models are available." },
      { q: "Is power backup available?", a: "Yes, battery backup is included." },
      { q: "Safety features?", a: "Emergency stop and overload sensors included." },
    ],
  },
  3: {
    title: "MRL Gearless Elevator",
    description:
      "MRL (Machine Room-Less) Gearless Elevators are the future of smart mobility. They save building space while maintaining efficiency and performance.",
    extraInfo:
      "These elevators eliminate the need for a machine room, reducing construction costs and optimizing building space.",
    images: [sc3s1, sc3s2, sc3s3, sc3s4, sc3s5, sc3s6],
    faqs: [
      { q: "Do these elevators need a machine room?", a: "No, they are machine room-less." },
      { q: "Are they energy efficient?", a: "Yes, they consume less energy than traditional elevators." },
      { q: "Suitable for high-rise buildings?", a: "Yes, up to 20 floors easily." },
    ],
  },
  4: {
    title: "Hospital Elevator",
    description:
      "Hospital Elevators are designed for smooth, silent, and hygienic transport of patients, staff, and medical equipment.",
    extraInfo:
      "They feature large cabins, smooth acceleration, and durable finishes, ensuring safety and comfort in critical environments.",
    images: [sc4s1, sc4s2, sc4s3, sc4s4, sc4s5, sc4s6],
    faqs: [
      { q: "Are stretchers accommodated?", a: "Yes, cabins are wide for stretchers." },
      { q: "Is it hygienic?", a: "Yes, antimicrobial finishes are used." },
      { q: "Power backup?", a: "Yes, emergency power ensures smooth operation." },
    ],
  },
  5: {
    title: "Goods Elevator",
    description:
      "Goods Elevators are built for heavy-duty performance in industries, warehouses, and commercial spaces.",
    extraInfo:
      "They are engineered with reinforced cabins and powerful hoisting mechanisms to ensure reliable material transport.",
    images: [sc5s1, sc5s2, sc5s3, sc5s4, sc5s5, sc5s6],
    faqs: [
      { q: "Max load capacity?", a: "Up to 5000 kg depending on model." },
      { q: "Suitable for warehouses?", a: "Yes, ideal for commercial use." },
      { q: "Safety features?", a: "Overload sensors and alarms included." },
    ],
  },
  6: {
    title: "Capsule Elevator",
    description:
      "Capsule Elevators enhance architectural beauty with panoramic views and luxury finishes. Ideal for malls, offices, and hotels.",
    extraInfo:
      "These elevators combine aesthetics with performance, using curved glass panels and modern lighting.",
    images: [sc6s1, sc6s2, sc6s3, sc6s4, sc6s5, sc6s6],
    faqs: [
      { q: "Can it be customized?", a: "Yes, glass panels and lighting can be customized." },
      { q: "Suitable for commercial buildings?", a: "Yes, perfect for malls and offices." },
      { q: "Maintenance required?", a: "Regular monthly check is recommended." },
    ],
  },
  7: {
    title: "Parking Elevator",
    description:
      "Parking Elevators maximize parking efficiency by transporting vehicles vertically across multiple levels.",
    extraInfo:
      "Perfect for modern urban structures with limited space. Built for safety, precision, and long-term performance.",
    images: [sc7s1, sc7s2, sc7s3, sc7s4, sc7s5, sc7s6],
    faqs: [
      { q: "Max vehicle weight?", a: "Up to 2500 kg per platform." },
      { q: "Is it automated?", a: "Yes, fully automated vehicle parking." },
      { q: "Space saving?", a: "Reduces footprint significantly." },
    ],
  },
  8: {
    title: "Hydraulic Elevator",
    description:
      "Hydraulic Elevators are ideal for low-rise buildings, offering smooth operation and high load capacity.",
    extraInfo:
      "They operate using hydraulic pistons, offering reliability and easy maintenance for residential and commercial buildings.",
    images: [sc8s1, sc8s2, sc8s3, sc8s4, sc8s5, sc8s6],
    faqs: [
      { q: "Max floors?", a: "Up to 6 floors typically." },
      { q: "Energy consumption?", a: "Moderate, depends on usage." },
      { q: "Maintenance?", a: "Quarterly hydraulic system checks recommended." },
    ],
  },
  9: {
    title: "Parts And Machines",
    description:
      "Zara Elevators provides high-quality elevator parts and machines, ensuring durability and performance in every installation.",
    extraInfo:
      "We supply motors, controllers, sensors, and safety systems that meet global elevator standards.",
    images: [sc9s1, sc9s2, sc9s3, sc9s4, sc9s5, sc9s6],
    faqs: [
      { q: "Do you provide spare parts?", a: "Yes, all types of parts available." },
      { q: "Warranty on parts?", a: "12 months warranty included." },
      { q: "Global standards?", a: "All parts meet ISO and EN standards." },
    ],
  },
};

// ------------------ Component ------------------
export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [popupImg, setPopupImg] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null); // for FAQ accordion

  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-[#EA630B]">Service Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-5 px-6 py-3 bg-[#EA630B] text-white rounded-lg hover:bg-[#E29E02] transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="font-sans bg-[#FFF9F0]">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={service.images[0]}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EA630B]/80 to-[#E29E02]/70 mix-blend-multiply"></div>

        <motion.div
          className="relative z-10 px-6 md:px-12 text-white max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl text-[#ffd000] font-bold drop-shadow-lg">
            {service.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 leading-relaxed">
            {service.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/gallery")}
              className="px-6 py-3 bg-white text-[#EA630B] font-semibold rounded-lg shadow-lg hover:bg-[#EA630B] hover:text-white transition cursor-pointer"
            >
              View Full Gallery
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/contact")}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#EA630B] transition cursor-pointer"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#EA630B] mb-4">
            About This Elevator
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {service.extraInfo}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#FFF4E1] text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#EA630B] mb-2">
                Modern Design
              </h3>
              <p className="text-gray-600">
                Sleek interiors, stylish finishes, and customizable panels.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF4E1] text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#EA630B] mb-2">
                Energy Efficient
              </h3>
              <p className="text-gray-600">
                Optimized motor systems reduce energy consumption significantly.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#FFF4E1] text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#EA630B] mb-2">
                Built for Safety
              </h3>
              <p className="text-gray-600">
                Equipped with modern safety sensors and emergency power systems.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-[#EA630B] mb-10">
          {service.title} Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {service.images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              onClick={() => setPopupImg(img)}
            >
              <img
                src={img}
                alt={`Service ${id} - ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#EA630B]/30 opacity-0 group-hover:opacity-80 transition duration-500"></div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate(-1)}
            className="px-6 cursor-pointer py-3 bg-[#EA630B] text-white font-semibold rounded-lg hover:bg-[#E29E02] transition"
          >
            Back
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && (
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-center text-[#EA630B] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => {
              const isOpen = openFAQ === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
                >
                  <div
                    className="p-6 flex justify-between items-center"
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                  >
                    <h3 className="font-semibold text-lg text-[#EA630B]">
                      {faq.q}
                    </h3>
                    <span className="text-2xl text-[#EA630B]">{isOpen ? "−" : "+"}</span>
                  </div>

                  {/* Smooth dynamic content */}
                  <div
                    ref={(el) => {
                      if (el) el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : "0px";
                    }}
                    className="px-6 text-gray-700 overflow-hidden transition-all duration-500 ease-in-out"
                  >
                    <p className="py-3">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}



      {/* Popup Image */}
      {popupImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <motion.img
            src={popupImg}
            alt="Popup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-[90%] max-h-[85%] rounded-lg shadow-2xl"
          />
          <button
            className="absolute top-5 right-5 text-[#EA630B] cursor-pointer text-3xl font-bold hover:text-[#E29E02]"
            onClick={() => setPopupImg(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
