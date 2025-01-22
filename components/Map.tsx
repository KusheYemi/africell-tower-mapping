"use client";

import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import PortalItem from "@arcgis/core/portal/PortalItem";

export default function ArcGISMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      const portalItem = new PortalItem({
        id: "6a37f543b89d44fca8e387ee13bf085a",
      });

      const map = new Map({
        basemap: "arcgis-topographic",
      });

      portalItem.load().then(() => {
        new MapView({
          container: mapRef.current!,
          map: map,
          zoom: 5,
          center: [0, 0],
        });
      });

      return () => {
        // Cleanup
      };
    }
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}
