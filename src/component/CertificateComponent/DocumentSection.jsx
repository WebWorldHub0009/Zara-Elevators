// src/components/DocumentSection.jsx
import React from "react";
import { FaEye, FaDownload, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";


import cert1 from "../../assets/certificates/11zon_JPEG-to-PDF (82).pdf";
// import cert2 from "../../assets/certificates/11zon_JPEG-to-PDF (83).pdf";

const documents = [
  {
    title: "Safety Certification",
    description: "Certified for highest safety standards in elevators and lifts.",
    pdf: cert1,
  },
  {
    title: "Quality Assurance Report",
    description: "Detailed report on quality and performance of our elevators.",
    pdf: cert1,
  },
];


export default function DocumentSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#E29E02]/30 via-[#EA630B]/30 to-[#E29E02]/30">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#E29E02] mb-4">
          Our Documents
        </h2>
        <p className="text-[#EA630B] text-lg md:text-xl max-w-2xl mx-auto">
          Access our certifications and reports for detailed information on quality and safety.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documents.map((doc, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="group bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col justify-between items-center text-center transition duration-300 border-2 border-[#E29E02]/50 hover:bg-gradient-to-br hover:from-[#E29E02] hover:to-[#EA630B]"
          >
            {/* PDF Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#E29E02] to-[#EA630B] text-white text-2xl mb-4 transition duration-300 group-hover:bg-white group-hover:text-[#EA630B]">
              <FaFilePdf />
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#E29E02] mb-2 transition duration-300 group-hover:text-white">{doc.title}</h3>
              <p className="text-[#EA630B] text-sm md:text-base transition duration-300 group-hover:text-white">{doc.description}</p>
            </div>

            {/* Buttons Centered */}
            <div className="flex gap-4 mt-auto justify-center">
              <a
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E29E02] hover:bg-[#EA630B] hover:text-white text-black font-semibold px-6 py-2 rounded-lg transition duration-300"
              >
                <FaEye /> View
              </a>
              <a
                href={doc.pdf}
                download
                className="flex items-center gap-2 border-2 border-[#E29E02] hover:border-[#EA630B] hover:bg-[#EA630B] hover:text-white text-[#E29E02] font-semibold px-6 py-2 rounded-lg transition duration-300"
              >
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
