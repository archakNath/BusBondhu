import React, { useEffect, useState } from "react";

const ConnectingStopsPage = () => {
  const [stops, setStops] = useState([]);
  const [filteredStops, setFilteredStops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [analytics, setAnalytics] = useState({
    total: 0,
    averageRoutes: 0,
    maxStop: null,
    minStop: null,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/connectingstops")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.routeCount - a.routeCount);
        setStops(sorted);
        setFilteredStops(sorted);
        generateAnalytics(sorted);
      })
      .catch((err) => {
        console.error("Failed to fetch connecting stops:", err);
      });
  }, []);

  const generateAnalytics = (data) => {
    if (data.length === 0) return;
    const total = data.length;
    const averageRoutes =
      data.reduce((sum, stop) => sum + stop.routeCount, 0) / total;
    const maxStop = data[0];
    const minStop = data[data.length - 1];

    setAnalytics({
      total,
      averageRoutes: averageRoutes.toFixed(2),
      maxStop,
      minStop,
    });
  };

  useEffect(() => {
    const filtered = stops.filter((stop) =>
      stop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStops(filtered);
  }, [searchTerm, stops]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Major Connecting Stops
      </h1>

      {/* Analytics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-sm text-gray-500">Total Connecting Stops</h2>
          <p className="text-xl font-bold text-blue-700">{analytics.total}</p>
        </div>
        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-sm text-gray-500">Average Routes/Stop</h2>
          <p className="text-xl font-bold text-yellow-600">
            {analytics.averageRoutes}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-sm text-gray-500">Most Connected Stop</h2>
          <p className="text-lg font-semibold text-green-700 capitalize">
            {analytics.maxStop?.name}
          </p>
          <p className="text-sm text-gray-600">
            {analytics.maxStop?.routeCount} routes
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow border">
          <h2 className="text-sm text-gray-500">Least Connected Stop</h2>
          <p className="text-lg font-semibold text-red-700 capitalize">
            {analytics.minStop?.name}
          </p>
          <p className="text-sm text-gray-600">
            {analytics.minStop?.routeCount} routes
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search connecting stop..."
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Stop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStops.map((stop, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-700 capitalize">
              {stop.name}
            </h2>
            <p className="text-sm text-gray-600">Routes: {stop.routeCount}</p>
          </div>
        ))}
      </div>

      {filteredStops.length === 0 && (
        <p className="mt-6 text-center text-gray-500">
          No connecting stops found.
        </p>
      )}
    </div>
  );
};

export default ConnectingStopsPage;
