import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-br from-[#E29E02] to-[#EA630B] flex items-center justify-center px-6 py-12"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        {/* Left: Contact Form */}
        <div className="bg-gradient-to-br from-[#E29E02] to-[#EA630B] rounded-2xl p-6 shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/90 border-none focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-white/90 border-none focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-white/90 border-none focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-white/90 border-none focus:outline-none focus:ring-2 focus:ring-white transition"
            ></textarea>
            <button
              type="submit"
              className="p-3 rounded-lg font-semibold shadow-lg bg-white text-[#EA630B] hover:bg-[#EA630B] hover:text-white transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col justify-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4 text-[#E29E02] drop-shadow">
            Contact Information
          </h2>
          <p className="mb-6 text-lg text-[#EA630B]">
            At <span className="text-[#E29E02] font-semibold">Zara Elevators</span>, 
            we provide world-class vertical transportation solutions. Whether it’s passenger elevators, freight lifts, or
            luxury cabins – our team is here to assist you.
          </p>

          {/* Contact Details */}
          <a
            href="tel:+918279812942"
            className="flex items-center gap-4 mb-4 hover:scale-105 transition text-[#E29E02] hover:text-[#EA630B]"
          >
            <FaPhoneAlt className="text-[#E29E02] text-2xl" />
            <span>+91 8279812942</span>
          </a>
          <a
            href="tel:+917466891325"
            className="flex items-center gap-4 mb-4 hover:scale-105 transition text-[#E29E02] hover:text-[#EA630B]"
          >
            <FaPhoneAlt className="text-[#E29E02] text-2xl" />
            <span>+91 7466891325</span>
          </a>

          <a
            href="mailto:zara.elevatorsmaintenance@gamil.com"
            className="flex items-center gap-4 mb-4 hover:scale-105 text-[#E29E02] transition hover:text-[#EA630B]"
          >
            <FaEnvelope className="text-[#E29E02] text-2xl hover:text-[#EA630B]" />
            <span>zara.elevatorsmaintenance@gamil.com</span>
          </a>

          <a
            href="https://maps.google.com/?q=Zara Elevators, Aligarh, Uttar Pradesh, India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 mb-8 hover:scale-105 transition text-[#E29E02] hover:text-[#EA630B]"
          >
            <FaMapMarkerAlt className="text-[#E29E02] text-2xl hover:text-[#EA630B]" />
            <span>
              Mamu Bhanja, Old City, Near Agfa Tailor, Mamu Bhanha Alighar, Uttar Pradesh 202001
            </span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaWhatsapp].map(
              (Icon, idx) => (
                <a key={idx} href="#" target="_blank" rel="noopener noreferrer">
                  <Icon className="cursor-pointer hover:scale-125 transition text-[#EA630B] hover:text-[#E29E02]" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
