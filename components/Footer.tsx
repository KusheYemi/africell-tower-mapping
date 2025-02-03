"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      &copy; {year} Africell. All rights reserved. Developed by{" "}
      <a
        href="https://integemsgroup.com"
        className="underline hover:text-[#f38130]"
      >
        INTEGEMS Ltd.
      </a>
    </footer>
  );
}
