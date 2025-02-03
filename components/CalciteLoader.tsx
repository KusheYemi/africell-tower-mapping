"use client";

import { useEffect } from "react";
import { defineCustomElements } from "@esri/calcite-components/dist/loader";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-icon";

export default function CalciteInitializer() {
  useEffect(() => {
    setAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");
    defineCustomElements(window);
  }, []);

  return null;
}
