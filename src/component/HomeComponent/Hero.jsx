// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCogs,
  FaShieldAlt,
  FaBuilding,
  FaArrowUp,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "react-lazy-load-image-component/src/effects/blur.css";

// ✅ Elevator Backgrounds
import heroImg1 from "../../assets/images/hero/h1.jpg";
import heroImg2 from "../../assets/images/hero/h2.jpg";
import heroImg3 from "../../assets/images/hero/h3.jpg";
import heroImg4 from "../../assets/images/hero/h4.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];

  // ✅ Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const cards = [
    {
      icon: <FaCogs className="text-3xl text-[#E29E02]" />,
      title: "Smart Technology",
      desc: "Cutting-edge systems ensuring smooth and intelligent rides.",
    },
    {
      icon: <FaBuilding className="text-3xl text-[#E29E02]" />,
      title: "Luxury Design",
      desc: "Modern aesthetics that elevate comfort and style.",
    },
    {
      icon: <FaArrowUp className="text-3xl text-[#E29E02]" />,
      title: "Energy Efficient",
      desc: "Eco-friendly elevators with optimized power usage.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#E29E02]" />,
      title: "Safety Certified",
      desc: "Reliability and security backed by global standards.",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden font-franklin bg-white">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <LazyLoadImage
            key={index}
            src={img}
            alt="Liftium Elevators"
            className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-[2000ms] ease-in-out ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* ✅ Social Media (Desktop) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-5 z-50 hidden md:flex">
        <FaFacebookF className="hover:text-[#EA630B] transition text-2xl cursor-pointer text-[#E29E02]" />
        <FaTwitter className="hover:text-[#EA630B] transition text-2xl cursor-pointer text-[#E29E02]" />
        <FaInstagram className="hover:text-[#EA630B] transition text-2xl cursor-pointer text-[#E29E02]" />
        <FaYoutube className="hover:text-[#EA630B] transition text-2xl cursor-pointer text-[#E29E02]" />
      </div>

      {/* ✅ Slider Dots (Desktop) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-50 hidden md:flex">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#EA630B] scale-125 shadow-lg"
                : "bg-[#E29E02]/60 hover:bg-[#EA630B]/80"
            }`}
          ></button>
        ))}
      </div>

      {/* ✅ Hero Text */}
      <div className="relative bottom-20 z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        {/* Tagline */}
        <h2 className="font-epunda text-[#E29E02] text-sm md:text-xl tracking-widest uppercase font-bold drop-shadow-md">
          Zara Elevators Services
        </h2>

        {/* Typewriter Heading */}
        <h1 className="font-epunda text-[#EA630B] text-2xl md:text-5xl mt-3 font-extrabold uppercase leading-tight drop-shadow-xl">
          <Typewriter
            words={[
              "Taking you to new  ",
              " heights,every day",
              
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>

        {/* Description */}
        <p className="mt-5 text-sm md:text-lg max-w-3xl md:max-w-4xl text-[#E29E02]/80 leading-relaxed">
        <span className="text-[#EA630B] font-medium"> Zara Elevators Services</span> is dedicated to delivering world-class elevator solutions that combine <span className="text-[#EA630B] font-medium">safety, innovation, and comfort.</span> We specialize in providing high-quality elevator installations, modernizations, and maintenance services for residential, commercial, and industrial spaces.
        </p>

        {/* ✅ CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/services"
            className="px-6 py-3 bg-[#E29E02] hover:bg-[#EA630B] rounded-full hover:text-white text-black font-franklin shadow-lg transition"
          >
            Explore Solutions
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#EA630B] hover:bg-[#E29E02] rounded-full hover:text-black text-white font-franklin shadow-lg transition"
          >
            Request Quote
          </Link>
        </div>
      </div>

      {/* ✅ Feature Cards (Desktop Grid) */}
      <div className="absolute bottom-16 w-full hidden md:flex flex-wrap justify-center gap-6 px-6 z-20">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-[#E29E02] hover:text-[#EA630B] hover:border-[#EA630B] text-[#E29E02] p-6 rounded-2xl w-72 hover:scale-105 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-3 mb-3 ">
              {card.icon}
              <h3 className="font-epunda text-lg font-bold uppercase tracking-wide">
                {card.title}
              </h3>
            </div>
            <p className="font-franklin text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* ✅ Feature Cards (Mobile Slider) */}
      <div className="absolute bottom-20 w-full px-6 z-20 md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1.15}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="pb-10"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/10 backdrop-blur-md border border-[#E29E02] hover:border-[#EA630B] text-[#E29E02] p-6 rounded-2xl w-full hover:scale-105 hover:shadow-2xl transition">
                <div className="flex items-center gap-3 mb-3">
                  {card.icon}
                  <h3 className="font-epunda text-base sm:text-lg font-bold uppercase tracking-wide">
                    {card.title}
                  </h3>
                </div>
                <p className="font-franklin text-xs sm:text-sm">{card.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 w-full py-3 px-4 text-center text-xs sm:text-sm md:text-base tracking-wide flex flex-wrap justify-center gap-3 md:gap-12 font-franklin bg-black/40">
        <span className="hover:text-[#EA630B] transition text-[#E29E02]">Innovation</span>
        <span className="hover:text-[#EA630B] transition text-[#E29E02]">Safety First</span>
        <span className="hover:text-[#EA630B] transition text-[#E29E02]">Luxury Experience</span>
        <span className="hover:text-[#EA630B] transition text-[#E29E02]">24/7 Support</span>
      </div>
    </section>
  );
}
