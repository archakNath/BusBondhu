import React, { useEffect, useState } from "react";

const BusRoutesPage = () => {
  const [busRoutes, setBusRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [stats, setStats] = useState({
    total: 0,
    typeCounts: {},
    mostCommonStart: "",
    mostCommonEnd: "",
  });
  const [showStats, setShowStats] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/busroutes")
      .then((res) => res.json())
      .then((data) => {
        setBusRoutes(data);
        setFilteredRoutes(data);
        computeStats(data);
      })
      .catch((err) => {
        console.error("Failed to fetch bus routes:", err);
      });
  }, []);

  useEffect(() => {
    const filtered = busRoutes.filter((route) => {
      const matchesSearch =
        route.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.location1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.location2.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        selectedType === "All" ||
        (route.type &&
          route.type.toLowerCase().includes(selectedType.toLowerCase()));

      return matchesSearch && matchesType;
    });

    setFilteredRoutes(filtered);
  }, [searchTerm, selectedType, busRoutes]);

  const computeStats = (data) => {
    const typeCounts = {};
    const startLocationCount = {};
    const endLocationCount = {};

    data.forEach((route) => {
      const type = route.type || "Unknown";
      typeCounts[type] = (typeCounts[type] || 0) + 1;

      startLocationCount[route.location1] =
        (startLocationCount[route.location1] || 0) + 1;
      endLocationCount[route.location2] =
        (endLocationCount[route.location2] || 0) + 1;
    });

    const mostCommonStart =
      Object.entries(startLocationCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      "N/A";
    const mostCommonEnd =
      Object.entries(endLocationCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      "N/A";

    setStats({
      total: data.length,
      typeCounts,
      mostCommonStart,
      mostCommonEnd,
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          All Bus Routes
        </h1>

        {/* Toggle Stats Button */}
        <button
          onClick={() => setShowStats(!showStats)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition-all"
        >
          {showStats ? "Hide Statistics" : "Show Statistics"}
        </button>
      </div>

      {/* Collapsible Statistics */}
      {showStats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow border">
            <h2 className="text-sm text-gray-500">Total Routes</h2>
            <p className="text-xl font-bold text-blue-700">{stats.total}</p>
          </div>
          {Object.entries(stats.typeCounts).map(([type, count]) => (
            <div key={type} className="bg-white p-4 rounded shadow border">
              <h2 className="text-sm text-gray-500 capitalize">
                {type} Routes
              </h2>
              <p className="text-xl font-bold text-purple-700">{count}</p>
            </div>
          ))}
          <div className="bg-white p-4 rounded shadow border col-span-full sm:col-span-1 lg:col-span-2">
            <h2 className="text-sm text-gray-500">Most Common Start</h2>
            <p className="text-md font-medium text-green-600 capitalize">
              {stats.mostCommonStart}
            </p>
            <h2 className="text-sm text-gray-500 mt-2">Most Common End</h2>
            <p className="text-md font-medium text-red-600 capitalize">
              {stats.mostCommonEnd}
            </p>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by route or location..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="private">Private</option>
          <option value="mini">Mini</option>
          <option value="state">State</option>
        </select>
      </div>

      {/* Bus Routes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRoutes.map((route, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-bold text-gray-700 mb-1">
              Route {route.route}
            </h2>
            <p className="text-sm text-gray-600 capitalize">
              From: {route.location1}
            </p>
            <p className="text-sm text-gray-600 capitalize">
              To: {route.location2}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Type: {route.type || "Unknown"}
            </p>
          </div>
        ))}
      </div>

      {filteredRoutes.length === 0 && (
        <p className="mt-6 text-center text-gray-500">No routes found.</p>
      )}
    </div>
  );
};

export default BusRoutesPage;
