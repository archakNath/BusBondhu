import React from "react";
import { useLocation } from "react-router-dom";
import busRoutes from "../data/bus_routes"; // ✅ JS import works
import { Bus, BusFront, Circle, MapPin, Navigation } from "lucide-react";
import Header from "../components/Header";

// Utility function to capitalize each word
const capitalizeWords = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RoutePage = () => {
  const query = useQuery();
  const routeParam = query.get("route");
  const from = query.get("from");
  const to = query.get("to");

  const route = busRoutes.find((r) => r.route === routeParam);

  if (!route) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">❌ Route Not Found</h1>
        <p>
          We couldn't find route <strong>{routeParam}</strong>.
        </p>
      </div>
    );
  }

  // Create stop list including location1, via, and location2
  const fullStops = [route.location1, ...(route.via || []), route.location2];

  // Case-insensitive index calculation
  const lowerStops = fullStops.map((s) => s.toLowerCase());
  const fromIndex = from ? lowerStops.indexOf(from.toLowerCase()) : -1;
  const toIndex = to ? lowerStops.indexOf(to.toLowerCase()) : -1;

  let relevantStops = [];

  if (fromIndex !== -1 && toIndex !== -1) {
    if (fromIndex <= toIndex) {
      relevantStops = fullStops.slice(fromIndex, toIndex + 1);
    } else {
      relevantStops = fullStops.slice(toIndex, fromIndex + 1).reverse();
    }
  } else {
    relevantStops = fullStops;
  }

  let busImageSrc = "/private_bus_poly.png"; // Default
  const type = (route.type || "").toLowerCase();

  if (type.includes("mini")) {
    busImageSrc = "/mini_bus_poly.png";
  } else if (type.includes("sta") || type.includes("state transport")) {
    busImageSrc = "/sta_bus_poly.png";
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header/>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full h-fit md:w-5/12 bg-gray-200 rounded-lg p-4">
          <img src={busImageSrc} alt={route.type} className="w-full h-auto" />
          <div className="bg-gray-800 text-white p-2 rounded text-center mb-4">
            <p className="text-sm">{route.type || "General Bus Route"}</p>
          </div>
          <h1 className="text-4xl font-bold">Route {route.route}</h1>
          <p className="text-lg">
            {capitalizeWords(route.location1)} - {capitalizeWords(route.location2)}
          </p>
        </div>

        <div className="w-full md:w-7/12 mt-4 md:mt-0">
          <div className="bg-gray-800 text-white p-4 rounded-t flex items-center">
            <BusFront className="mr-2"/>
            <span className="text-lg font-bold">Bus Stops</span>
          </div>

          <div className="bg-white border border-gray-200">
            {relevantStops.map((stop, index) => {
              const isOrigin = from && stop.toLowerCase() === from.toLowerCase();
              const isDestination = to && stop.toLowerCase() === to.toLowerCase();

              let bgColor = "bg-white";
              if (isOrigin) bgColor = "bg-red-100";
              if (isDestination) bgColor = "bg-green-100";

              return (
                <div
                  key={index}
                  className={`flex items-center border-b last:border-b-0 ${bgColor}`}
                >
                  <div className="flex flex-col items-center w-12 mx-4">
                    {isOrigin ? (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white">
                        <Circle className="w-5 h-5 text-red-600 font-bold" />
                      </div>
                    ) : isDestination ? (
                        <MapPin className="w-6 h-6 text-green-800" />
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="h-3 border-l border-dashed border-gray-400"></div>
                        <Circle className="w-3 h-3 text-gray-400"/>
                        <div className="h-3 border-l border-dashed border-gray-400"></div>
                      </div>
                    )}
                  </div>
                  <div className="py-4 flex-grow">
                    <p className="text-lg">{capitalizeWords(stop)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
