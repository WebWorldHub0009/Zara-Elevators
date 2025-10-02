import React from "react";
import { Link } from "react-router-dom";

const services = [
  { id: 1, title: "PVC WALL PANEL", desc: "Durable, stylish wall panels that enhance interiors.", img: "/images/High Quality Factory Direct Waterproof Interior….jpeg" },
  { id: 2, title: "CEILING PANEL", desc: "Premium ceiling panels for elegant spaces.", img: "/images/1dfbdb8e-17c6-41a5-863b-9f677d7e9313.jpeg" },
  { id: 3, title: "CHARCOL PANEL", desc: "Modern panels for bold and unique wall designs.", img: "/images/Panel Size _ 1ft x 9_5ft , New Star Pattern, The….jpeg" },
  { id: 4, title: "WPC LOUVERS", desc: "Weather-resistant louvers for both indoor and outdoor.", img: "/images/Cheap Wall Cladding Pvc Wpc House Hight Quality….jpeg" },
  { id: 5, title: "FLUTED PANEL", desc: "Fluted panels for modern textures and finishes.", img: "/images/What is the Advantages of WPC materials for FLUTED….jpeg" },
  { id: 6, title: "PVC DOOR", desc: "High-quality PVC doors with long-lasting durability.", img: "/images/中国工厂预挂设计实心芯板现代内饰木门 - Buy Door,Wood Door,China Wood….jpeg" },
  { id: 7, title: "UV MARBLE SHEET", desc: "Marble-look UV sheets for premium interiors.", img: "/images/Waterproof Seamless Flexible Plastic Wall Panel….jpeg" },
  { id: 8, title: "WALL PAPER", desc: "Stylish wallpapers to add character to your walls.", img: "/images/Love art deco_ Take a look at this custom-made….jpeg" },
  { id: 9, title: "Kitchen Design Wall", desc: "Creative designs to make your kitchen stand out.", img: "/images/Thrilled to announce my first NFT collection “The….jpeg" },
];

export default function ServicesSection() {
  return (
    <section
      className="py-16 bg-fixed bg-center bg-cover relative"
      id="services"
      style={{
        backgroundImage:
          "url('/images/2b82bf4c-17c6-4a89-9b72-77bd13ac9a85.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#171512]/90"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#D99021]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-500 group hover:bg-[#fffedd]"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#171512] group-hover:text-[#D99021] transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 mb-4">
                  {service.desc}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-block px-5 py-2 bg-[#D99021] text-[#171512] font-semibold rounded-md opacity-90 hover:opacity-100 transition duration-300 hover:bg-[#ffac30] hover:text-[#fff1dc]"
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
