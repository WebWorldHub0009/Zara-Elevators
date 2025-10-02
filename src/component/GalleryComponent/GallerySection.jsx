// src/components/GallerySection.jsx
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import g1 from "../../assets/images/gallery/g1.jpeg";
import g2 from "../../assets/images/gallery/g2.jpeg";
import g3 from "../../assets/images/gallery/g3.jpeg";
import g4 from "../../assets/images/gallery/g4.jpeg";
import g5 from "../../assets/images/gallery/g5.jpeg";
import g6 from "../../assets/images/gallery/g6.jpeg";
import g7 from "../../assets/images/gallery/g7.jpeg";
import g8 from "../../assets/images/gallery/g8.jpeg";
import g9 from "../../assets/images/gallery/g9.jpeg";
import g10 from "../../assets/images/gallery/g10.jpeg";
import g11 from "../../assets/images/gallery/g11.jpeg";
import g12 from "../../assets/images/gallery/g12.jpeg";
// ... baki images import karo

const images = [
  { src: g1, alt: "Elevator Design 1", desc: "Modern passenger elevator" },
  { src: g2, alt: "Elevator Design 2", desc: "Luxury residential elevator" },
  { src: g3, alt: "Elevator Design 1", desc: "Modern passenger elevator" },
  { src: g4, alt: "Elevator Design 2", desc: "Luxury residential elevator" },
  { src: g5, alt: "Elevator Design 1", desc: "Modern passenger elevator" },
  { src: g6, alt: "Elevator Design 2", desc: "Luxury residential elevator" },
  { src: g7, alt: "Elevator Design 1", desc: "Modern passenger elevator" },
  { src: g8, alt: "Elevator Design 2", desc: "Luxury residential elevator" },
  { src: g9, alt: "Elevator Design 1", desc: "Modern passenger elevator" },
  { src: g10, alt: "Elevator Design 2", desc: "Luxury residential elevator" },
  { src: g11, alt: "Elevator Design 1", desc: "Modern passenger elevator" },
  { src: g12, alt: "Elevator Design 2", desc: "Luxury residential elevator" },
  // baki images yahi
];

export default function GallerySection() {
  const [modalIndex, setModalIndex] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#E29E02]/20 via-[#EA630B]/20 to-[#E29E02]/20" id="mygallery">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E29E02] mb-4">Our Gallery</h2>
        <p className="text-[#EA630B] text-lg md:text-xl max-w-2xl mx-auto">
          Explore the innovation, safety, and design of our elevator solutions through our gallery.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            onClick={() => setModalIndex(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-90 transition flex items-center justify-center p-4">
              <p className="text-white text-center font-semibold">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalIndex(null)} // click backdrop pe close
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // click modal content me close na ho
          >
            {/* Close icon */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-[#E29E02] z-50"
            >
              <FaTimes />
            </button>

            <img
              src={images[modalIndex].src}
              alt={images[modalIndex].alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4">{images[modalIndex].desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
