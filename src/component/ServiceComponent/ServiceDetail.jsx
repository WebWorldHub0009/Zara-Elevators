import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

const serviceDetails = {
  1: {
    title: "Traction Machine Room Elevator",
    description:
      "Traction Machine Room Elevators are advanced vertical transportation systems widely used in commercial and residential buildings for efficient and smooth movement between floors. These elevators operate using a traction motor connected to a hoisting rope, providing precise speed control, energy efficiency, and quiet operation.",
    
      images: [sc1s1, sc1s2, sc1s3,sc1s4, sc1s5, sc1s6]

  },
  2: {
    title: "Home Elevator",
    description:
      "Home Elevators are designed to bring convenience, safety, and luxury into residential spaces. They provide smooth and quiet vertical transportation within multi-story homes, making it easier for people of all ages and abilities to move between floors effortlessly. Equipped with modern safety features such as emergency stop buttons, backup power, and door sensors, home elevators ensure maximum protection for passengers.",
    
      images: [sc2s1, sc2s2, sc2s3,sc2s4, sc2s5, sc2s6]

  },
  3: {
    title: "MRL Gealess Elevator",
    description:
      "MRL (Machine Room-Less) Gealess Elevators are advanced vertical transportation solutions that combine efficiency, safety, and space-saving design. Unlike traditional elevators, these elevators do not require a separate machine room, making them ideal for modern buildings where space optimization is crucial. Featuring a compact and sleek design, MRL Gealess Elevators operate with a highly efficient gearless traction system, ensuring smooth, quiet, and energy-saving rides.",
    
      images: [sc3s1, sc3s2, sc3s3,sc3s4, sc3s5, sc3s6]

  },
  4: {
    title: "Hospital Elevator",
    description:
      "Hospital Elevators are specialized vertical transportation systems designed to provide safe, reliable, and efficient movement of patients, medical staff, and equipment within healthcare facilities. Engineered with a focus on hygiene, accessibility, and smooth operation, these elevators ensure comfort and convenience in critical environments.",
    
      images: [sc4s1, sc4s2, sc4s3,sc4s4, sc4s5, sc4s6]

  },
  5: {
    title: "Goods Elevator",
    description:
      "Goods Elevators are robust vertical transport systems designed specifically for moving heavy materials, equipment, and cargo efficiently within commercial, industrial, and storage facilities. Built to handle substantial weight capacities, these elevators ensure safe and reliable transportation of goods between floors, reducing manual labor and improving workflow. The cabins are spacious and reinforced with strong materials such as steel to withstand repeated heavy loads.",
    
      images: [sc5s1, sc5s2, sc5s3,sc5s4, sc5s5, sc5s6]

  },
  6: {
    title: "Copasule Elevator",
    description:
      "Copasule Elevators are compact, efficient vertical transport solutions designed for modern buildings where space optimization is crucial. Ideal for residential apartments, small commercial complexes, and offices, these elevators combine functionality, safety, and aesthetic appeal in a sleek, space-saving design. The cabin is ergonomically designed, providing a comfortable ride for passengers or light cargo.",
    
      images: [sc6s1, sc6s2, sc6s3,sc6s4, sc6s5, sc6s6]

  },
  7: {
    title: "Parking Elevator",
    description:
      "Parking Elevators are innovative vertical transport systems designed to optimize parking space in residential, commercial, and mixed-use buildings. They allow vehicles to be moved between floors efficiently, making the most of limited land area while maintaining safety and convenience. These elevators are engineered with heavy-duty platforms and robust lifting mechanisms to safely transport cars of various sizes and weights.",
    
      images: [sc7s1, sc7s2, sc7s3,sc7s4, sc7s5, sc7s6]

  },
  8: {
    title: "Hydroulic Elevator",
    description:
      "Hydraulic Elevators are advanced vertical transport systems that use hydraulic fluid and a piston mechanism to lift and lower the elevator car smoothly and efficiently. Ideal for low- to mid-rise buildings, they offer a reliable, safe, and cost-effective solution for both residential and commercial applications. These elevators operate using a hydraulic pump and cylinder system, which provides strong lifting power with minimal space requirements.",
    
      images: [sc8s1, sc8s2, sc8s3,sc8s4, sc8s5, sc8s6]

  },
  9: {
    title: "Parts And Machines",
    description:
      "Elevator Parts and Machines comprise the essential components that ensure the smooth, safe, and efficient operation of any elevator system. These include motors, controllers, pulleys, cables, doors, safety devices, hydraulic pumps, and other mechanical and electrical elements that work together to provide reliable vertical transportation.",
    
      images: [sc9s1, sc9s2, sc9s3,sc9s4, sc9s5, sc9s6]

  },
  // Add remaining services similarly, using /images/... paths
};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [popupImg, setPopupImg] = useState(null);

  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-[#EA630B]">Service Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-[#E29E02] text-white font-semibold rounded hover:bg-[#EA630B] transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center text-white bg-gradient-to-r from-[#EA630B] to-[#E29E02]"
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="relative z-10 max-w-3xl px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6 drop-shadow-md">
            {service.description}
          </p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/gallery")}
              className="px-6 py-3 bg-[#EA630B] text-white font-semibold rounded-lg shadow-lg hover:bg-[#E29E02] hover:text-[#171512] transition transform hover:scale-105"
            >
              Show Gallery
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/contact")}
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-[#EA630B] hover:text-white transition transform hover:scale-105"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 bg-gradient-to-b from-[#FFF4E1] to-[#FFE6B3] rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#EA630B] mb-8">
          {service.title} Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer relative group shadow-md"
              onClick={() => setPopupImg(img)}
            >
              <img
                src={img}
                alt={`Service ${id} - ${index + 1}`}
                className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-[#EA630B]/30 opacity-0 group-hover:opacity-80 transition duration-500 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#EA630B] text-white font-semibold rounded hover:bg-[#E29E02] hover:text-[#171512] transition cursor-pointer"
          >
            Back
          </button>
        </div>
      </div>

      {/* Popup Image */}
      {popupImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <img
            src={popupImg}
            alt="Popup"
            className="max-w-[90%] max-h-[85%] rounded shadow-lg transform transition duration-500 hover:scale-105"
          />
          <button
            className="absolute top-5 right-5 text-[#EA630B] text-3xl font-bold hover:text-[#E29E02]"
            onClick={() => setPopupImg(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
