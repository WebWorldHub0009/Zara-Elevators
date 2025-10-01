import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-6 py-12 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/images/d106f6e49631ca8499f93f8fb5cba8eb.jpg')", // apni image ka path yaha daalo
      }}
    >
      {/* Overlay for better visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6">
        {/* Left: Form + Socials */}
        <div className="flex flex-col justify-between bg-[#f2ffcd]/50 rounded-2xl p-6 shadow-lg">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#D99021]">
              Get in Touch
            </h2>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#D99021] transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#D99021] transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#D99021] transition"
              />
              <button
                type="submit"
                className="p-3 rounded-lg font-semibold shadow-lg bg-[#D99021] text-[#171512] hover:bg-[#ffffff] hover:text-[#D99021] transition cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl mt-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="cursor-pointer hover:scale-125 transition text-[#ffffff] hover:text-[#D99021]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer hover:scale-125 transition text-[#ffffff] hover:text-[#D99021]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:scale-125 transition text-[#ffffff] hover:text-[#D99021]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:scale-125 transition text-[#ffffff] hover:text-[#D99021]" />
            </a>
            <a href="https://wa.me/+919259648796" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="cursor-pointer hover:scale-125 transition text-[#ffffff] hover:text-[#D99021]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="cursor-pointer hover:scale-125 transition text-[#ffffff] hover:text-[#D99021]" />
            </a>
          </div>
        </div>

        {/* Right: Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-500">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.983373703802!2d80.94616607491254!3d26.84669366521144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2d3a3d2c7a3%3A0x9b5d74b7d4e9b5e7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1695123456789!5m2!1sen!2sin"
            className="w-full h-[400px] md:h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
