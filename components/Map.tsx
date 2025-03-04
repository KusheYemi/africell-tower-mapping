"use client";

import { useEffect, useRef, useState } from "react";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import { CalciteLoader } from "@esri/calcite-components-react";
import { initializeArcGIS } from "../utils/config";

export default function ArcGISMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize ArcGIS configuration
    initializeArcGIS();

    let view: MapView | null = null;

    const webmap = new WebMap({
      portalItem: {
        id: "8e823319e1ff4ded87cd40fea93ab54a",
      },
    });

    webmap
      .load()
      .then(() => {
        try {
          view = new MapView({
            container: mapRef.current!,
            map: webmap,
            padding: { top: 50 },
          });

            view.when(
            (): void => {
              setIsLoading(false);
            },
            (error: Error): void => {
              console.error("Map view initialization failed:", error);
              setIsLoading(false);
            }
            );
        } catch (error) {
          console.error("Error creating map view:", error);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error loading webmap:", error);
        setIsLoading(false);
      });

    return () => {
      if (view) {
        view.destroy();
        view = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-80px)]">
      <div ref={mapRef} className="w-full h-full" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <CalciteLoader label="Loading map" scale="l" />
        </div>
      )}
    </div>
  );
}
