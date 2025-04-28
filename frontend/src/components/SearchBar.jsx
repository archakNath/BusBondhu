import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [busStops, setBusStops] = useState([]); // ✅ declare busStops state

  useEffect(() => {
    fetch("https://busbondhu-production.up.railway.app/api/busstops")
      .then((res) => res.json())
      .then((data) => setBusStops(data))
      .catch((error) => console.error("Error fetching bus stops:", error));
  }, []);

  function capitalizeFirstLetter(string) {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const filterStops = (input) => {
    if (!input) return [];
    return busStops
      .filter((stop) => stop.name?.toLowerCase().includes(input.toLowerCase()))
      .slice(0, 5);
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFromInput(value);
    setFromSuggestions(filterStops(value));
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setToInput(value);
    setToSuggestions(filterStops(value));
  };

  const selectFrom = (stop) => {
    setFromInput(stop);
    setFromSuggestions([]);
  };

  const selectTo = (stop) => {
    setToInput(stop);
    setToSuggestions([]);
  };

  return (
    <div className="w-screen sm:w-full sm:max-w-5xl mx-auto">
      <div className="w-full bg-white rounded-none sm:rounded-lg shadow-xl">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center flex-wrap">
          {/* From Section */}
          <div className="flex-1 p-4 border-b sm:border-b-0 sm:border-r border-gray-200 relative">
            <div className="text-xs text-gray-500 mb-1">From</div>
            <input
              type="text"
              value={fromInput}
              onChange={handleFromChange}
              className="font-medium text-gray-800 text-lg w-full outline-none placeholder-gray-400"
              placeholder="Enter departure location"
            />
            {fromSuggestions.length > 0 && (
              <ul className="absolute bottom-full left-0 right-0 bg-white border border-gray-300 shadow-lg rounded-md mt-1 z-10 max-h-60 overflow-y-auto">
                {fromSuggestions.map((stop, idx) => (
                  <li
                    key={idx}
                    onClick={() => selectFrom(capitalizeFirstLetter(stop.name))}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {capitalizeFirstLetter(stop.name)}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Connection Line */}
          <div className="hidden sm:flex px-4 py-2 items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 border-t border-dashed border-gray-400 mx-1"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          </div>

          {/* Destination Section */}
          <div className="flex-1 p-4 relative border-b sm:border-b-0 sm:border-r border-gray-200">
            <div className="text-xs text-gray-500 mb-1">Destination</div>
            <input
              type="text"
              value={toInput}
              onChange={handleToChange}
              className="font-medium text-gray-800 text-lg w-full outline-none placeholder-gray-400"
              placeholder="Enter destination"
            />
            {toSuggestions.length > 0 && (
              <ul className="absolute bottom-full left-0 right-0 bg-white border border-gray-300 shadow-lg rounded-md mt-1 z-10 max-h-60 overflow-y-auto">
                {toSuggestions.map((stop, idx) => (
                  <li
                    key={idx}
                    onClick={() => selectTo(capitalizeFirstLetter(stop.name))}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {capitalizeFirstLetter(stop.name)}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <div className="p-4 w-full sm:w-auto flex justify-center">
            <Link
              to={`/search?from=${encodeURIComponent(
                fromInput.toLowerCase()
              )}&to=${encodeURIComponent(toInput.toLowerCase())}`}
              className="w-full sm:w-24"
            >
              <button className="w-full h-20 sm:h-24 bg-[#d9d9d9] p-4 flex flex-col items-center justify-center hover:bg-stone-400 transition-colors cursor-pointer rounded-none sm:rounded-xl">
                <Search size={28} className="text-gray-700 mb-1" />
                <span className="font-semibold text-gray-700 text-xs text-center">
                  SEARCH <br /> ROUTES
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
