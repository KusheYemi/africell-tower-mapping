"use client";

import { useEffect, useRef } from "react";
import esriConfig from "@arcgis/core/config";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

export default function ArcGISMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    esriConfig.assetsPath = "https://js.arcgis.com/4.31/";
    esriConfig.workers.loaderUrl =
      "https://js.arcgis.com/4.31/@arcgis/core/workers/arcgis-core-workers.js";

    let view: MapView | null = null;

    const webmap = new WebMap({
      portalItem: {
        id: "8e823319e1ff4ded87cd40fea93ab54a",
      },
    });

    webmap.load().then(() => {
      view = new MapView({
        container: mapRef.current!,
        map: webmap,
        padding: { top: 50 },
      });
    });

    return () => {
      if (view) {
        view.destroy();
        view = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-[calc(100vh-80px)]" />;
}
