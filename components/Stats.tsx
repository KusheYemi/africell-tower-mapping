"use client";

import { useEffect, useRef } from "react";

const stats = [
  { target: 500, label: "Towers Deployed" },
  { target: 1000, label: "Regions Covered" },
  { target: 2000000, label: "Customers Connected" },
];

export default function Stats() {
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLSpanElement;
            const target = Number.parseInt(counter.dataset.target || "0");
            animateCounter(counter, target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1, rootMargin: "0px" }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  const animateCounter = (counter: HTMLSpanElement, target: number) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      counter.textContent = Math.ceil(current).toLocaleString();
      if (current >= target) {
        clearInterval(timer);
        counter.textContent = target.toLocaleString();
      }
    }, 20);
  };

  return (
    <section id="stats" className="bg-gray-100 py-20 px-8 text-center">
      <h2 className="text-4xl font-bold mb-12 text-[#a01775]">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[#a01775] rounded-lg p-8 transition-transform hover:-translate-y-1"
          >
            <span
              ref={(el) => {
                countersRef.current[index] = el;
              }}
              className="text-4xl font-bold text-[#a01775] block mb-4"
              data-target={stat.target}
            >
              0
            </span>
            <p className="text-lg font-light text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
