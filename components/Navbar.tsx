"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Network Map" },
  { href: "#stats", label: "Stats" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActive(pathname);
    setIsMenuOpen(false); // Close menu when route changes
  }, [pathname]);

  const navbarClass =
    pathname === "/map"
      ? "relative w-full bg-black/80 backdrop-blur-md text-white p-4 shadow-md z-50"
      : "fixed top-0 w-full bg-black/80 backdrop-blur-md text-white p-4 shadow-md z-50";

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative">
        <Link href="/">
          <Image
            src="/Images/africell_logo.png"
            alt="Africell Logo"
            width={120}
            height={40}
            className="h-8 w-auto" // Reduced height for mobile
          />
        </Link>

        {/* Mobile Menu Button - Moved z-index higher */}
        <button
          className="md:hidden p-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-semibold py-2 px-4 rounded transition-colors ${
                  active === link.href ? "bg-[#f38130]" : "hover:bg-[#f38130]"
                }`}
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay - Updated positioning and styling */}
        <div
          className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ top: "0", left: "0", right: "0", bottom: "0" }}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-6 p-4">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <Link
                  href={link.href}
                  className={`block font-semibold text-lg py-3 px-6 rounded-lg transition-colors ${
                    active === link.href
                      ? "bg-[#f38130]"
                      : "hover:bg-[#f38130]/70"
                  }`}
                  onClick={() => {
                    setActive(link.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
