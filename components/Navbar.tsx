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
  const pathname = usePathname();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  // Conditional class for the navbar
  const navbarClass =
    pathname === "/map"
      ? "relative w-full bg-black/80 backdrop-blur-md text-white p-4 shadow-md z-50"
      : "fixed top-0 w-full bg-black/80 backdrop-blur-md text-white p-4 shadow-md z-50";

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Images/africell_logo.png"
            alt="Africell Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <ul className="flex gap-8">
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
      </div>
    </nav>
  );
}
