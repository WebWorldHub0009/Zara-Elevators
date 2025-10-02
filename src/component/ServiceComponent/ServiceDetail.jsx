import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const serviceDetails = {
  1: {
    title: "PVC WALL PANEL",
    description:
      "PVC wall panels provide a modern, stylish, and durable solution for interior spaces. Lightweight and easy to install, they are waterproof, termite-resistant, and low-maintenance. Available in diverse colors, textures, and designs, these panels enhance the aesthetic appeal of walls while offering practical benefits.",
    images: [
      "/images/d98db837-37f9-4066-ab8e-5f1a0c1732ed.jpeg",
      "/images/0d964cb5-6c65-4a78-aed1-a1ac966af1a3.jpeg",
      "/images/Pvc wall panels shop in Rawalpindi pvc wall panels….jpeg",
      "/images/Fluted panels add a modern, stylish touch to….jpeg",
      "/images/ae9c9fbb-20fb-4b4b-b336-2ae8e04a6c4b.jpeg",
      "/images/✨ Elevate Your Interiors with Our Latest Fluted….jpeg",
    ],
  },
  2: {
    title: "CEILING PANEL",
    description:
      "Ceiling panels are high-quality wall coverings designed to protect and enhance interiors. They are durable, weather-resistant, and low-maintenance, providing excellent insulation and soundproofing. Available in a variety of finishes, they offer both style and protection.",
    images: [
      "/images/04272b1c-4ea0-41e2-beb5-48c259ffbdc6.jpeg",
      "/images/Contact us on 09060002990.jpeg",
      "/images/Modern POP Ceiling Design Ideas _ Elegant False….jpeg",
      "/images/986cfb45-62a4-4831-883e-1a9abcb9f9fd.jpeg",
      "/images/878f5e90-1a72-469b-bbec-03fd4e481f5f.jpeg",
      "/images/bc7fc181-9f83-4265-a109-c5da440e242b.jpeg",
    ],
  },
  3: {
    title: "CHARCOL PANEL",
    description:
      "Charcoal panels are sleek, modern wall solutions designed to enhance interiors with a bold and contemporary look. Made from durable, lightweight, and easy-to-install materials, they are resistant to moisture, termites, and wear. Available in various textures and finishes, charcoal panels add elegance and sophistication to homes, offices, and commercial spaces. They not only improve aesthetic appeal but also offer practical benefits like low maintenance, long-lasting durability, and enhanced wall protection.",
    images: [
      "/images/0e10ab6e-a27b-442f-baf2-24fc7e133448.jpeg",
      "/images/ALUXO® Acoustic Hexagon Wall Panel 70 x 60cm….jpeg",
      "/images/b8c86619-2997-40f6-bcf1-512a686e2157.jpeg",
      "/images/Obsidian Gold Block Panel Transform your space….jpeg",
      "/images/Bespoke Black Ceiling and Wall With Lights….jpeg",
      "/images/dde8ebeb-0122-4ca7-8668-41d14e01c323.jpeg",
    ],
  },
  4: {
    title: "WPC LOUVERS",
    description:
      "WPC (Wood Plastic Composite) louvers are modern, durable, and eco-friendly solutions for ventilation and aesthetic enhancement. Made from a blend of wood fibers and plastic, they are resistant to moisture, termites, and decay, ensuring long-lasting performance. Available in various designs, colors, and finishes, WPC louvers provide effective airflow while adding a stylish architectural element to homes, offices, and commercial spaces. They combine functionality, low maintenance, and visual appeal seamlessly.",
    images: [
      "/images/LEBEN _ Wpc Exterior Louvers.jpeg",
      "/images/dfb561ea-ce7f-4ce2-82c1-adbbbaca3c3f.jpeg",
      "/images/670d4656-c4b6-4d5e-a9c6-f28c7fc17e97.jpeg",
      "/images/Outdoor Wall Decoration WPC Slatted Panel WPC Wall….jpeg",
      "/images/ff757a25-cce2-469b-8567-95603e3caba1.jpeg",
      "/images/Wpc Louvers panel __ Fluted Panels __ Lenen Wpc….jpeg",
    ],
  },
  5: {
    title: "FLUTED PANEL",
    description:
      "Fluted panels are elegant wall and ceiling solutions featuring vertical grooves that add texture, depth, and sophistication to interiors. Crafted from durable and lightweight materials, they are easy to install, low-maintenance, and resistant to moisture and wear. Available in a variety of colors, finishes, and sizes, fluted panels enhance the aesthetic appeal of homes, offices, and commercial spaces while providing a modern, stylish, and visually striking design element.",
    images: [
      "/images/Attribute Description Material High-Density….jpeg",
      "/images/High Quality Factory Direct Waterproof Interior… (1).jpeg",
      "/images/ce4b0a13-ffd0-4ce9-8539-1da961814cf3.jpeg",
      "/images/Panneaux cannelés de revêtement mural intérieur en….jpeg",
      "/images/Discover the transformative potential of Fluted….jpeg",
      "/images/high quality Decorative Wall Cladding Panel Eco….jpeg",
    ],
  },
  6: {
    title: "PVC DOOR",
    description:
      "PVC doors are durable, lightweight, and low-maintenance solutions for both interior and exterior spaces. Resistant to moisture, termites, and corrosion, they ensure long-lasting performance and security. Available in a variety of designs, colors, and finishes, PVC doors provide a modern and stylish look while being easy to install. Ideal for homes, offices, and commercial spaces, these doors combine functionality with aesthetics, offering a practical and elegant entryway solution.",
    images: [
      "/images/1set PVC Door Sticker, Modern Geometric Pattern….jpeg",
      "/images/Cairgorm Slate Grey Grained Internal PVC Door.jpeg",
      "/images/182c0a42-6553-40ee-a147-c7d9c588c949.jpeg",
      "/images/e028aa81-44d6-4feb-adbd-a953135144bb.jpeg",
      "/images/c762819d-b643-4228-92b2-ce8bb5b3a4f0.jpeg",
      "/images/This is the most popular interior waterproof PVC….jpeg",
    ],
  },
  7: {
    title: "UV MARBLE SHEET",
    description:
      "UV marble sheets are premium, durable wall and surface coverings designed to mimic the elegance of natural marble. Manufactured with high-gloss UV coating, they are scratch-resistant, waterproof, and easy to maintain. Available in various colors, patterns, and textures, UV marble sheets enhance the aesthetic appeal of interiors, providing a luxurious, modern look. Ideal for kitchens, bathrooms, and living spaces, they combine beauty, functionality, and long-lasting performance for a sophisticated finish.",
    images: [
      "/images/Best Interior Wall Cladding UV Coating Board 3D….jpeg",
      "/images/Product__UV Marble….jpeg",
      "/images/Custom Size 3mm 1220mm 2440mm PVC Marble Sheet….jpeg",
      "/images/PVC UV Coating Marble Sheet 1220 2660 3mm PVC….jpeg",
      "/images/1220 2800 mm Waterproof of UV Marble Sheet….jpeg",
      "/images/PVC Marble Sheet Interior Wall Panel PVC Marble….jpeg",
    ],
  },
  8: {
    title: "WALL PAPER",
    description:
      "Wallpapers are versatile and stylish interior solutions that instantly transform the look and feel of any space. Available in a wide range of patterns, textures, and colors, they offer endless design possibilities for homes, offices, and commercial spaces. Easy to install and maintain, wallpapers can enhance walls with elegance, sophistication, or modern flair. They provide a cost-effective way to add personality and aesthetic appeal while protecting walls from minor wear and tear.",
    images: [
      "/images/78384d16-38a9-48a4-9f0d-c075b97625cd.jpeg",
      "/images/Infuse your space with bold elegance using our… (1).jpeg",
      "/images/The Dark Teal and Gold Mosaic Wall Mural brings an….jpeg",
      "/images/Immerse yourself in the captivating world of….jpeg",
      "/images/Self adhesive vinyl temporary removable wallpaper….jpeg",
      "/images/canvas wallpaper, can be used for large-size wall….jpeg",
    ],
  },
  9: {
    title: "KITCHEN DESIGN WALL",
    description:
      "Kitchen design walls are innovative interior solutions that enhance both functionality and aesthetics in cooking spaces. Featuring durable, easy-to-clean materials and customizable finishes, they protect walls from moisture, heat, and stains while adding style. Available in a variety of colors, textures, and patterns, these walls create visually appealing kitchen environments. Ideal for modern homes and commercial kitchens, they combine practicality with elegant design, ensuring long-lasting beauty and a polished, organized look.",
    images: [
      "/images/Transform your space with stunning peel-and-stick….jpeg",
      "/images/25+ Stunning Kitchen Wall Tiles Design Ideas for a….jpeg",
      "/images/20 Stunning Ideas for Kitchens with a Tile Accent….jpeg",
      "/images/Upgrade your kitchen's style with Espresso….jpeg",
      "/images/29 Unique Kitchen Backsplash Ideas You Must Try »….jpeg",
      "/images/74421169-ad26-4a4e-add7-5b1ecdcfd652.jpeg",
    ],
  },

};

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [popupImg, setPopupImg] = useState(null);

  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-[#D99021]">Service Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-[#172D20] text-[#D99021] font-semibold rounded hover:bg-[#D99021] hover:text-[#171512] transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-24">
      {/* 🔥 Hero Section */}
      <div
        className="relative h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/21 Magical Nursery Décor Ideas to Create Your….jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          className="relative z-10 max-w-3xl px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#D99021] mb-4">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            {service.description}
          </p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/gallery")}
              className="px-6 py-3 bg-[#D99021] text-[#171512] font-semibold rounded-lg shadow-lg hover:bg-transparent hover:text-[#D99021] transition hover:border-1 hover:border-[#D99021]"
            >
              Show Gallery
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate("/contact")}
              className="px-6 py-3 bg-transparent border border-[#D99021] text-[#D99021] font-semibold rounded-lg shadow-lg hover:bg-[#D99021] hover:text-[#171512] transition"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 🔥 Gallery Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#D99021] mb-8">
          {service.title} Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer relative group"
              onClick={() => setPopupImg(img)}
            >
              <img
                src={img}
                alt={`Service ${id} - ${index + 1}`}
                className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-[#171512]/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#172D20] text-[#D99021] font-semibold rounded hover:bg-[#D99021] hover:text-[#171512] transition cursor-pointer"
          >
            Back
          </button>
        </div>
      </div>

      {/* 🔥 Popup Image */}
      {popupImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <img
            src={popupImg}
            alt="Popup"
            className="max-w-[90%] max-h-[85%] rounded shadow-lg transform transition duration-500 hover:scale-105"
          />
          <button
            className="absolute top-5 right-5 text-[#D99021] text-3xl font-bold hover:text-[#172D20]"
            onClick={() => setPopupImg(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
