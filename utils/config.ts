import esriConfig from "@arcgis/core/config";

interface EsriConfig {
  assetsPath: string;
  workers: {
    loaderUrl: string;
    loaderConfig: {
      has: Record<string, boolean>;
    };
  };
  has: Record<string, number | boolean>;
}

export function initializeArcGIS() {
  // Set the assets path
  esriConfig.assetsPath = "https://js.arcgis.com/4.31/";

  // Configure workers for Next.js environment
  esriConfig.workers = {
    loaderUrl: "https://js.arcgis.com/4.31/",
    loaderConfig: {
      has: {
        "esri-workers": false,
      },
    },
  };

  // Disable WebGL2 to prevent worker-related issues
  (esriConfig as EsriConfig).has = {
    ...(esriConfig as EsriConfig).has,
    "esri-web-gl2": 0,
  };
}
