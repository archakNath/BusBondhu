import React from "react";
import KolkataBusMap from "../KolkataBusMap";

const MapSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Map Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <KolkataBusMap />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 h-full p-6 flex flex-col justify-center bg-white">
        <h1 className="text-2xl md:text-4xl italic">
          Your Friendly Bus Route Companion in{" "}
          <span className="font-bold">Kolkata</span>
        </h1>
        <p className="text-base md:text-lg mt-4">
          Kolkata is a city that never stands still—and neither do its buses. With{" "}
          <span className="italic">hundreds of routes crisscrossing the streets</span>, buses are the lifeline for millions every day. But{" "}
          <span className="bg-amber-100 p-1">
            finding the right bus at the right time can often feel like solving a puzzle.
          </span>{" "}
          That’s where BusBondhu comes in. We’re here to make bus travel in Kolkata smarter, simpler, and stress-free—whether you’re a daily commuter or just exploring the city.
        </p>
      </div>
    </div>
  );
};

export default MapSection;
