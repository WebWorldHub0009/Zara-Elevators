// src/components/GalleryHero.jsx
import React from "react";
import { Link } from "react-router-dom";

// Hero background image
import bgGallery from "../../assets/images/gallery/6a5fbc68-b9a5-4f49-8990-2b699ad7840e.jpeg"; // elevator related image

export default function GalleryHero() {
  return (
    <section className="relative w-full text-black overflow-hidden min-h-[70vh] flex items-center px-6 md:px-12 lg:px-20">
      {/* Background image */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${bgGallery})` }}
      ></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#E29E02]/50 via-[#EA630B]/40 to-[#E29E02]/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E29E02] mb-4">
          Explore Our Elevator Gallery
        </h1>

        <p className="text-[#EA630B] text-lg md:text-xl mb-8 max-w-2xl">
          Discover the excellence, safety, and innovation in every elevator we design. Browse our gallery for inspiration and reliability.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/learn-more">
            <button className="bg-[#E29E02] hover:bg-[#EA630B] text-black font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105">
              Learn More
            </button>
          </Link>

          <Link to="/services">
            <button className="border-2 border-[#E29E02] text-[#E29E02] hover:bg-[#EA630B] hover:text-white font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105">
              Our Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
