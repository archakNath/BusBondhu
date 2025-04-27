import { useEffect } from "react";
import * as d3 from "d3";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let mapInstance = null;

function KolkataBusMap() {
  useEffect(() => {
    if (mapInstance) return;

    // Initialize map
    mapInstance = L.map("kolkata-map");

    // Add base tiles
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://carto.com/">Carto</a>',
    }).addTo(mapInstance);

    // Load and show the ward GeoJSON
    d3.json("/kolkata.geojson").then((wardData) => {
      const wardsLayer = L.geoJSON(wardData, {
        style: {
          color: "#313131",
          weight: 1,
          fillOpacity: 0.1,
        },
      }).addTo(mapInstance);

      // Fit map to the GeoJSON bounds
      mapInstance.fitBounds(wardsLayer.getBounds());
    });

    return () => {
      if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
      }
    };
  }, []);

  return (
    <div className="container border-2 border-black rounded-2xl overflow-hidden w-full">
      <div id="kolkata-map" style={{ aspectRatio: "16/10", width: "100%" }} />
    </div>
  );
}

export default KolkataBusMap;
