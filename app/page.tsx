"use client";

import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled for components that use browser APIs
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: true });
const Hero = dynamic(() => import("../components/Hero"), { ssr: true });
const Stats = dynamic(() => import("../components/Stats"), { ssr: true });
const Testimonials = dynamic(() => import("../components/Testimonials"), {
  ssr: true,
});
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Testimonials />
      <Footer />
    </main>
  );
}
