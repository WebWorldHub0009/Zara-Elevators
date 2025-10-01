// src/components/TeamSection.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

// Dummy data for team members
const teamMembers = [
  { name: "Rohit Sharma", role: "CEO", info: "Leading Zara Elevators with vision and innovation." },
  { name: "Ayesha Khan", role: "CTO", info: "Driving technological advancements in elevator systems." },
  { name: "Vikram Patel", role: "Senior Engineer", info: "Ensuring safety and precision in elevator design." },
  { name: "Fatima Ansari", role: "Marketing Head", info: "Expanding brand presence and client engagement." },
  { name: "Sandeep Mehta", role: "Project Manager", info: "Efficiently handling projects and timelines." },
  { name: "Neha Verma", role: "Designer", info: "Crafting modern and ergonomic elevator designs." },
  { name: "Mohammed Imran", role: "Maintenance Lead", info: "Overseeing maintenance and smooth operations." },
  { name: "Priya Singh", role: "HR Manager", info: "Building a motivated and skilled workforce." },
  { name: "Arjun Malik", role: "Customer Support", info: "Providing top-notch assistance to clients." },
  { name: "Zoya Sheikh", role: "Finance Head", info: "Managing financial resources efficiently." },
];


export default function TeamSection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#E29E02]/20 via-[#EA630B]/20 to-[#E29E02]/20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E29E02] mb-4">Our Team</h2>
        <p className="text-[#EA630B] text-lg md:text-xl max-w-2xl mx-auto">
          Meet the dedicated professionals behind Zara Elevators, driving innovation, safety, and quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-2xl"
          >
            {/* React User Icon */}
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E29E02] to-[#EA630B] mb-4">
              <FaUser className="text-white text-3xl" />
            </div>

            {/* Name and Role */}
            <h3 className="text-xl font-bold text-[#E29E02]">{member.name}</h3>
            <p className="text-[#EA630B] font-semibold mb-2">{member.role}</p>
            <p className="text-black/80 text-sm mb-4">{member.info}</p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-auto">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[#E29E02] hover:text-[#EA630B] transition text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
