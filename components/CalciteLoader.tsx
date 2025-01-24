// components/CalciteInitializer.tsx
"use client";

import { useEffect } from "react";
import { defineCustomElements } from "@esri/calcite-components/dist/loader";
import { setAssetPath } from "@esri/calcite-components/dist/components";

export default function CalciteInitializer() {
  useEffect(() => {
    // Use latest Calcite assets
    setAssetPath(
      "https://unpkg.com/@esri/calcite-components@2.13.2/dist/calcite/assets"
    );
    defineCustomElements(window);
  }, []);

  return null;
}
