"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Africell's coverage has transformed our business operations. Highly reliable!",
    author: "John Doe",
  },
  {
    quote: "The best customer service and coverage in the region!",
    author: "Jane Smith",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-[#a01775] text-white py-20 px-8 text-center"
    >
      <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
      <div className="max-w-3xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className={`text-xl transition-opacity duration-500 ${
              index === currentTestimonial
                ? "opacity-100"
                : "opacity-0 absolute"
            }`}
          >
            {testimonial.quote}
            <cite className="block mt-4 font-semibold text-[#f38130]">
              – {testimonial.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
