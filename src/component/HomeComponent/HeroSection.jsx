// src/components/HeroSection.jsx
import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Hero images
import hero1 from "../../assets/images/hero/h1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";


// Background overlay
import bgHero from "../../assets/images/hero-bg2.jpg";

const IMAGES = [
  { src: hero1, alt: "Zara Elevator 1" },
  { src: hero2, alt: "Zara Elevator 2" },
  { src: hero3, alt: "Zara Elevator 3" },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleImageChange = (idx) => {
    if (idx === active) return;
    setFade(true);
    setTimeout(() => {
      setActive(idx);
      setFade(false);
    }, 300);
  };

  return (
    <section className="relative w-full text-black px-6 md:px-12 lg:px-20 py-16 z-0 overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 z-[-2] bg-cover bg-center"
    style={{ backgroundImage: `url(${bgHero})` }}
  ></div>

  {/* Gradient overlay on top of bg image */}
  <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#E29E02]/10 via-[#EA630B]/60 to-[#E29E02]/70"></div>


      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 min-h-[64vh]">
        {/* LEFT: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Own a Piece of the{" "}
            <span className="text-[#E29E02]">Vertical Future</span>
          </h1>

          <p className="text-[#EA630B] max-w-xl mt-4">
            Welcome to{" "}
            <span className="font-semibold">Zara Elevators</span>, where
            innovation meets reliability in elevators and lifts. Experience the
            next level of convenience, design, and safety.
          </p>

          <div className="flex items-center space-x-4 mt-6">
            <Link to='/about'>
              <button className="cursor-pointer bg-[#E29E02] hover:bg-[#EA630B] text-black font-semibold px-6 py-3 rounded-lg shadow-md transition">
                Get Started
              </button>
            </Link>

            <button
              onClick={() => setShowVideo(true)}
              className="cursor-pointer flex items-center space-x-2 border border-[#E29E02] text-[#E29E02] px-5 py-3 rounded-lg hover:bg-[#EA630B] hover:text-white transition"
            >
              <Play size={18} />
              <span>Watch Video</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8 text-sm">
            <div>
              <p className="text-2xl font-bold text-[#E29E02]">1500+</p>
              <p className="text-[#EA630B]">Installations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#E29E02]">500+</p>
              <p className="text-[#EA630B]">Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#E29E02]">100%</p>
              <p className="text-[#EA630B]">Safety Guaranteed</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image + Thumbnails + Info Card */}
        <div className="w-full lg:w-1/2 hidden md:flex items-center justify-center relative">
          <div
            className="relative w-[75%] h-full rounded-2xl overflow-hidden shadow-2xl"
            style={{
              minHeight: 420,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 82%)",
            }}
          >
            {/* MAIN IMAGE */}
            <img
              src={IMAGES[active].src}
              alt={IMAGES[active].alt}
              key={IMAGES[active].src}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* TRENDING BADGE */}
            <div className="hidden md:block absolute top-4 left-4 bg-[#E29E02] text-black text-xs px-3 py-1 rounded-full font-semibold shadow-md">
              Trending Now
            </div>
          </div>

          {/* VERTICAL THUMBNAILS */}
          <div className="hidden md:flex flex-col gap-3 absolute right-[-60px] top-[150px] transform -translate-y-1/2">
            {IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleImageChange(idx)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-transform ${
                  active === idx
                    ? "scale-105 border-[#E29E02]"
                    : "border-black/20"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* INFO CARD */}
          <div className="hidden md:flex absolute bottom-2 right-[-60px] bg-gradient-to-r from-[#E29E02] to-[#EA630B] text-black rounded-lg shadow-2xl p-4 w-72 md:w-80 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={IMAGES[active].src}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">Smart Elevator</p>
                <p className="text-xs text-black/70">Reliable & Modern</p>
              </div>
            </div>
            <Link to='/showcase'>
              <button className="cursor-pointer bg-[#E29E02] hover:bg-[#EA630B] text-black px-3 py-2 rounded-md text-sm transition">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-[90%] max-w-3xl bg-[#E29E02]/20 bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden border border-[#EA630B]/40"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 bg-[#E29E02]/60 hover:bg-[#EA630B]/80 text-black rounded-full p-2 transition z-10"
              >
                <X size={24} />
              </button>


              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/sE8GsDhFHAA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
