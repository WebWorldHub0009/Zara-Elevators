// src/components/TestimonialsStatic.jsx
import React from "react";
import { Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Builder",
    feedback:
      "Their elevator installation was flawless. The team is professional and very reliable. Highly recommended!",
  },
  {
    name: "Priya Kapoor",
    role: "Architect",
    feedback:
      "Modern designs and excellent service. They transformed our building’s mobility with smart elevator solutions.",
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    feedback:
      "Very supportive and quick maintenance service. The quality of work exceeded our expectations.",
  },
  {
    name: "Neha Singh",
    role: "Interior Designer",
    feedback:
      "The designs perfectly blended with our modern interiors. Excellent craftsmanship!",
  },
  {
    name: "Vikram Joshi",
    role: "Hotel Owner",
    feedback:
      "Elevator service is top-notch! Guests appreciate the smooth and safe ride experience.",
  },
  {
    name: "Anjali Mehta",
    role: "Corporate Manager",
    feedback:
      "From installation to maintenance, their service is very professional and reliable.",
  },
];

const TestimonialsStatic = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff7ec] to-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-[#EA630B]">
          What Our <span className="text-[#E29E02]">Clients Say</span>
        </h2>
        <p className="text-[#EA630B] mb-12 max-w-2xl mx-auto">
          Trusted by builders, architects, and businesses for reliable elevator
          solutions.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#EA630B] rounded-2xl shadow-lg p-6 md:p-8 group hover:shadow-[0_0_25px_rgba(234,99,11,0.5)] hover:scale-[1.02] transition duration-500"
            >
              <Quote className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 text-[#E29E02] opacity-40" />
              <div className="flex flex-col items-center gap-4 md:gap-6">
                {/* User Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[#E29E02] text-white">
                  <User className="w-8 h-8 md:w-10 md:h-10" />
                </div>

                <p className="text-white italic text-sm md:text-base leading-relaxed">
                  “{t.feedback}”
                </p>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-[#E29E02]">
                    {t.name}
                  </h4>
                  <p className="text-xs md:text-sm text-white">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStatic;
