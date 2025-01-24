"use client";

import { useEffect, useRef } from "react";
import esriConfig from "@arcgis/core/config";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

export default function ArcGISMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    esriConfig.assetsPath = "https://js.arcgis.com/4.31/";
    let view: MapView | null = null;

    const initializeMap = async () => {
      try {
        const webmap = new WebMap({
          portalItem: {
            id: "6a37f543b89d44fca8e387ee13bf085a",
          },
        });

        view = new MapView({
          container: mapRef.current!,
          map: webmap,
          padding: { top: 50 },
        });

        await webmap.load();
      } catch (error) {
        console.error("ArcGIS Map Error:", error);
      }
    };

    initializeMap();

    return () => {
      if (view) {
        view.destroy();
        view = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-[calc(100vh-80px)]" />;
}
