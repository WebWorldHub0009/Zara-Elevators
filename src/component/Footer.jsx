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
  FaServer,
  FaHospital,
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
  { name: "Traction Machine Room Elevator", path: "/services/1", icon: FaBuilding },
  { name: "Home Elevator", path: "/services/2", icon: FaHome },
  { name: "MRL Gealess Elevator", path: "/services/3", icon: FaUserCog },
  { name: "Hospital Elevator", path: "/services/4", icon: FaHospital },
  { name: "Goods Elevator", path: "/services/5", icon: FaLayerGroup },
  { name: "Copasule Elevator", path: "/services/6", icon: FaCogs },
  { name: "Parking Elevator", path: "/services/7", icon: FaAngleDoubleUp },
  { name: "Hydroulic Elevator", path: "/services/8", icon: FaTools },
  { name: "Parts And Machines", path: "/services/9", icon: FaServer },
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
            About Zara Elevators
          </h4>
          <p className="leading-relaxed text-white/90">
            Providing reliable, safe, and modern elevator solutions with a focus on quality service and customer satisfaction. Trusted name in elevator installation, maintenance, and modernization. Delivering comfort, safety, and innovation for every building.
          </p>
          <div className="mt-4 space-y-1 text-xs text-white/80">
            <p>UDYAM-UP-02-0002982</p>
            <p>GSTIN/UIN: 09AMMPH5998N1ZX</p>
            {/* <p>NCS ID: E20H84-2200407050875</p> */}
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
              ["Gallery", "/gallery", <FaImage />],
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
            {["www.zaraelevatorsservices.com", "zara.elevatorsmaintenance@gmail.com"].map((email, i) => (
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
            <strong>Reg Office:</strong>
            <br />
            13/290, Mamu Bhanja,
            <br />
            Aligarh, Uttar Pradesh, 202001
            <br />
            <strong>Head Office:</strong>
            <br />
            M72, Room No.4,
            <br />
            Lado Sarai, New Delhi,110030.
            <br />
            <strong>Address:</strong>
            <br />
            Mamu Bhanja, Old City, Near Agfa Tailor,
            <br />
            Mamu Bhanja, Alighar Utter Pradesh 202001
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
        <p>© {new Date().getFullYear()} Zara Elevators. All rights reserved.</p>
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
