// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaHome,
  FaPhoneAlt,
  FaImage,
  FaInfoCircle,
  FaTruckMoving,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaCertificate,
  FaCogs,
  FaBuilding,
  FaTools,
  FaUserCog,
  FaAngleDoubleUp,
  FaLayerGroup,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/footerbg2.jpg";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Services
const servicesData = [
  { name: "Passenger Elevators", path: "/services/passenger-elevators", icon: FaBuilding },
  { name: "Home Elevators", path: "/services/home-elevators", icon: FaHome },
  { name: "Hospital Elevators", path: "/services/hospital-elevators", icon: FaUserCog },
  { name: "Goods/Freight Elevators", path: "/services/goods-elevators", icon: FaTruckMoving },
  { name: "Capsule Elevators", path: "/services/capsule-elevators", icon: FaLayerGroup },
  { name: "Hydraulic Elevators", path: "/services/hydraulic-elevators", icon: FaCogs },
  { name: "Escalators", path: "/services/escalators", icon: FaAngleDoubleUp },
  { name: "Maintenance & AMC", path: "/services/maintenance", icon: FaTools },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative text-white pt-20 pb-10 px-6 md:px-16 overflow-hidden font-sans font-medium"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with gradient of given colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EA630B]/95 to-[#E29E02]/95 z-0"></div>

      {/* Grid Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold mb-2 text-3xl text-white font-[italiana]">
            About Liftium Elevators
          </h4>
          <p className="leading-relaxed text-white/90">
            Liftium Elevators is a trusted name in the elevator and escalator
            industry, providing innovative and safe vertical mobility solutions.
            We specialize in customized lifts, escalators, and maintenance
            services, ensuring comfort, safety, and reliability for residential,
            commercial, and industrial needs.
          </p>
          <div className="mt-4 space-y-1 text-xs text-white/80">
            <p>UDYAM-UP-02-0092776</p>
            <p>GSTIN/UIN: 09KVLPK8565A1Z1</p>
            <p>NCS ID: E20H84-2200407050875</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-white font-[italiana]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Showcase", "/gallery", <FaImage />],
              ["Certificates", "/certificate", <FaCertificate />],
              ["Contact Us", "/contact", <FaPhoneAlt />]
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#E29E02] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl text-white font-[italiana]">
            Email
          </h4>
          <ul className="mt-2 space-y-2">
            {["Info@liftiumelevators.in", "liftiumelevators@gmail.com"].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-[#E29E02] transition duration-300"
                >
                  <FaEnvelope className="text-white" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-white font-[italiana]">
            Our Services
          </h4>
          <ul className="space-y-2">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:text-[#E29E02] transition duration-300 flex items-center gap-2"
                >
                  <Icon className="text-white" /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-white font-[italiana]">
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-white/90">
            <strong>Address 1:</strong>
            <br />
            Bismillah Colony Manjoor Gadi, Aligarh Bypass Road,
            <br />
            Aligarh, Uttar Pradesh, 202001
            <br /><br />
            <strong>Address 2:</strong>
            <br />
            Shop No.01 Ground, near Hindu Temple, ITI Rd,
            <br />
            Mustak Nagar, Industrial Estate, Aligarh,
            <br />
            Uttar Pradesh, 202001
          </address>

          <div className="mb-4 flex">
            <Translator />
            <div className="w-42 md:w-16"></div>
          </div>

          <div className="mt-6 flex space-x-4">
            {[FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP, FaSearchLocation].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#EA630B] transition"
                >
                  <Icon size={20} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-xs border-t border-white/40 pt-4 space-y-2 relative z-10 text-white/90">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Liftium Elevators. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#EA630B] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
