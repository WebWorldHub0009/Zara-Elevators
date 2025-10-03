import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/liftiumnewlogo.png"; 
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
  FaHome,
  FaImages,
  FaPhoneAlt,
  FaTruckMoving,
  FaInfoCircle,
  FaEnvelope,
  FaCertificate,
  FaBuilding,
  FaUserCog,
  FaLayerGroup,
  FaCogs,
  FaAngleDoubleUp,
  FaTools,
  FaAngleDown, 
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Services Data
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

// Updated nav items
const leftNavItems = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  {
    name: "Services",
    path: "/services",
    icon: <FaTruckMoving className="inline mr-1" />,
    // dropdown: true,
  },
  { name: "Certificates", path: "/certificate", icon: <FaCertificate className="inline mr-1" /> },
];

const rightNavItems = [
  { name: "Gallery", path: "/gallery", icon: <FaImages className="inline mr-1" /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
];

const COMPANY_INFO = {
  udyam: "UDYAM-UP-02-0002982",
  gst: "09AMMPH5998N1ZX",
  email: "zara.elevatorsservices.com",
  mobile: "+91 8279812942",
};

const socialLinks = {
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  pinterest: "https://www.pinterest.com",
  twitter: "https://www.twitter.com",
  youtube: "https://www.youtube.com",
  linkedin: "https://www.linkedin.com",
  skype: "https://www.skype.com",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-1 hover:text-[#EA630B] ${
      pathname === path ? "text-[#E29E02] font-semibold" : "text-[#E29E02]"
    }`;

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#EA630B] text-white text-xs md:text-sm py-2 px-4 md:px-12 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Desktop Info */}
          <div className="hidden md:flex justify-between w-full">
            <div className="flex space-x-6">
              <p className="flex items-center gap-1">
                <span className="font-semibold">UDYAM:</span> {COMPANY_INFO.udyam}
              </p>
              <p className="flex items-center gap-1">
                <span className="font-semibold">GSTIN/UIN:</span> {COMPANY_INFO.gst}
              </p>
            </div>
            <div className="flex space-x-6">
              <p className="flex items-center gap-1">
                <FaEnvelope className="text-white" />
                {COMPANY_INFO.email}
              </p>
              <p className="flex items-center gap-1">
                <FaPhoneAlt className="text-white" />
                {COMPANY_INFO.mobile}
              </p>
            </div>
          </div>

          {/* Mobile Info */}
          <div className="md:hidden text-center w-full flex justify-center">
            <p className="flex items-center justify-center gap-1">
              <FaEnvelope className="text-white" />
              {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-4 md:px-12 py-1 bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Mobile View */}
          <div className="flex w-full items-center justify-between md:hidden">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-3xl text-[#E29E02]" />
            <Link to="/" className="ml-auto">
              <img src={logo} alt="zara Logo" className="h-14 object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left Nav */}
            <ul className="flex gap-6 text-sm font-medium uppercase relative">
              {leftNavItems.map((item) => (
                <li
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.dropdown && setIsServicesOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link to={item.path} className={navLinkClasses(item.path)}>
                      {item.icon}
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1 text-[#E29E02]"
                      >
                        <FaAngleDown size={12} />
                      </motion.span>
                    )}
                  </div>

                  {/* Services Dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                        >
                          {servicesData.map((service) => (
                            <li key={service.path}>
                              <Link
                                to={service.path}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-[#E29E02] hover:text-[#EA630B] transition"
                              >
                                {React.createElement(service.icon, { size: 16 })}
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* Logo Center */}
            <Link to="/" className="mx-6">
              <img src={logo} alt="Zara Logo" className="h-10 md:h-18 object-contain" />
            </Link>

            {/* Right Nav + Social */}
            <div className="flex items-center gap-6">
              <ul className="flex gap-6 text-sm font-medium uppercase">
                {rightNavItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className={navLinkClasses(item.path)}>
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 ml-6 text-[#E29E02]">
                {Object.entries(socialLinks).map(([k, url]) => (
                  <a
                    key={k}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#EA630B]"
                  >
                    {React.createElement(
                      {
                        facebook: FaFacebookF,
                        instagram: FaInstagram,
                        pinterest: FaPinterest,
                        twitter: FaTwitter,
                        youtube: FaYoutube,
                        linkedin: FaLinkedinIn,
                        skype: FaSkype,
                      }[k],
                      { size: 16 }
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex"
            >
              <motion.div
                ref={panelRef}
                className="w-64 h-full bg-white shadow-lg px-6 py-4 flex flex-col"
              >
                <div className="flex justify-between items-center mb-3">
                  <img src={logo} alt="Liftium" className="h-17" />
                  <FaTimes
                    className="text-xl text-[#E29E02] cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
                <hr className="mb-4" />

                <nav className="flex flex-col gap-3 text-sm">
                  {[...leftNavItems, ...rightNavItems].map((item) => (
                    <div key={item.path}>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          className={`flex items-center gap-2 ${
                            pathname === item.path
                              ? "font-semibold text-[#E29E02]"
                              : "text-[#E29E02]"
                          }`}
                          onClick={toggleMenu}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                        {item.dropdown && (
                          <motion.span
                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="cursor-pointer text-[#E29E02]"
                          >
                            <FaAngleDown size={14} />
                          </motion.span>
                        )}
                      </div>

                      {item.dropdown && isServicesOpen && (
                        <ul className="ml-6 mt-2 flex flex-col gap-2">
                          {servicesData.map((service) => (
                            <li key={service.path}>
                              <Link
                                to={service.path}
                                className="flex items-center gap-2 text-[#E29E02] hover:text-[#EA630B]"
                                onClick={toggleMenu}
                              >
                                {React.createElement(service.icon, { size: 14 })}
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto pt-4 border-t text-xs text-[#E29E02]">
                  <p className="py-1">
                    <strong>UDYAM:</strong> {COMPANY_INFO.udyam}
                  </p>
                  <p className="py-1">
                    <strong>GSTIN:</strong> {COMPANY_INFO.gst}
                  </p>
                  <p className="py-1">
                    <FaPhoneAlt className="inline mr-1" />
                    {COMPANY_INFO.mobile}
                  </p>
                  <div className="flex gap-3 mt-3 text-lg text-[#E29E02]">
                    {Object.entries(socialLinks).map(([k, url]) => (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#EA630B]"
                      >
                        {React.createElement(
                          {
                            facebook: FaFacebookF,
                            instagram: FaInstagram,
                            pinterest: FaPinterest,
                            twitter: FaTwitter,
                            youtube: FaYoutube,
                            linkedin: FaLinkedinIn,
                            skype: FaSkype,
                          }[k]
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div
                className="flex-1 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default ModernNavbar;
