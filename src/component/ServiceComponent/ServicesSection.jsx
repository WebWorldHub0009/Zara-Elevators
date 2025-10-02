import React from "react";
import { Link } from "react-router-dom";

import sc1logo from "../../assets/images/services/sc1/sc1logo.jpeg";
import sc2logo from "../../assets/images/services/sc2/sc2logo.jpeg";
import sc3logo from "../../assets/images/services/sc3/sc3logo.jpeg";
import sc4logo from "../../assets/images/services/sc4/sc4logo.jpeg";
import sc5logo from "../../assets/images/services/sc5/sc5logo.jpeg";
import sc6logo from "../../assets/images/services/sc6/sc6logo.jpeg";
import sc7logo from "../../assets/images/services/sc7/sc7logo.jpeg";
import sc8logo from "../../assets/images/services/sc8/sc8logo.jpeg";
import sc9logo from "../../assets/images/services/sc9/sc9logo.jpeg";

const services = [
  {
    id: 1,
    title: "Traction Machine Room Elevator",
    desc: "Traction Machine Room Elevators are advanced vertical transportation systems...",
    img: sc1logo,
  },
  {
    id: 2,
    title: "Home Elevator",
    desc: "Home Elevators are designed to bring convenience, safety, and...",
    img: sc2logo,
  },
  {
    id: 3,
    title: "MRL Gealess Elevator",
    desc: "MRL (Machine Room-Less) Gealess Elevators are advanced vertical transportation...",
    img: sc3logo,
  },
  {
    id: 4,
    title: "Hospital Elevator",
    desc: "Hospital Elevators are specialized vertical transportation systems...",
    img: sc4logo,
  },
  {
    id: 5,
    title: "Goods Elevator",
    desc: "Goods Elevators are robust vertical transport systems designed specifically...",
    img: sc5logo,
  },
  {
    id: 6,
    title: "Copasule Elevator",
    desc: "Copasule Elevators are compact, efficient vertical transport solutions...",
    img: sc6logo,
  },
  {
    id: 7,
    title: "Parking Elevator",
    desc: "Parking Elevators are innovative vertical transport systems...",
    img: sc7logo,
  },
  {
    id: 8,
    title: "Hydroulic Elevator",
    desc: "Hydraulic Elevators are advanced vertical transport systems...",
    img: sc8logo,
  },
  {
    id: 9,
    title: "Parts And Machines",
    desc: "Elevator Parts and Machines comprise the essential components...",
    img: sc9logo,
  },


];

export default function ServicesSection() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-[#EA630B] to-[#E29E02] relative"
      id="services"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#EA630B]/10"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#ffffff]">
          Our Elevator Services
        </h2>
        <h2 className="text-3xl font-bold text-center mb-12 text-[#E29E02]">
          We at Zara Elevators Services offer <span className="text-[#E29E02]">following type of elevator</span> 
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform 
                         hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(234,99,11,0.5)] 
                         transition duration-500 group"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#EA630B] group-hover:text-[#E29E02] transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2 mb-4">
                  {service.desc}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-block px-5 py-2 bg-[#EA630B] text-white font-semibold rounded-md 
                             opacity-90 hover:opacity-100 hover:bg-[#E29E02] hover:text-[#171512] 
                             transition duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
