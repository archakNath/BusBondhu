import React, { useEffect, useState } from "react";

const BusStopsPage = () => {
  const [busStops, setBusStops] = useState([]);
  const [filteredStops, setFilteredStops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState({
    total: 0,
    mostCommonRoute: "",
    mostCommonLocation: "",
  });
  const [showStats, setShowStats] = useState(true);
  const [showAddBusStopDialog, setShowAddBusStopDialog] = useState(false);
  const [newBusStop, setNewBusStop] = useState({
    name: "",
    location: { lat: "", lon: "" },
    routes: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/busstops")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
        setBusStops(sorted);
        setFilteredStops(sorted);
        computeStats(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch bus stops:", err);
        setError("Failed to load bus stops.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = busStops.filter((stop) =>
      stop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStops(filtered);
  }, [searchTerm, busStops]);

  useEffect(() => {
    const filtered = busStops.filter(
      (stop) =>
        stop.name && stop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStops(filtered);
  }, [searchTerm, busStops]);

  const computeStats = (data) => {
    const routeCount = {};
    const locationCount = {};

    data.forEach((stop) => {
      // Count routes
      stop.routes?.forEach((route) => {
        routeCount[route] = (routeCount[route] || 0) + 1;
      });

      // Count locations
      locationCount[stop.location] = (locationCount[stop.location] || 0) + 1;
    });

    const mostCommonRoute =
      Object.entries(routeCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
    const mostCommonLocation =
      Object.entries(locationCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      "N/A";

    setStats({
      total: data.length,
      mostCommonRoute,
      mostCommonLocation,
    });
  };

  const handleAddBusStop = () => {
    // Validate if name and location are filled
    if (
      !newBusStop.name ||
      !newBusStop.location.lat ||
      !newBusStop.location.lon
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Format location into the correct shape expected by the backend
    const formattedLocation = {
      type: "Point",
      coordinates: [newBusStop.location.lon, newBusStop.location.lat],
    };

    // Create the payload with the correctly formatted location
    const busStopData = {
      name: newBusStop.name,
      location: formattedLocation,
      routes: newBusStop.routes, // Since routes is optional, it can be an empty array initially
    };

    // Send the new bus stop to the server
    fetch("http://localhost:5000/api/busstops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(busStopData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Add the new bus stop to the state and close the dialog
        setBusStops((prevStops) => [...prevStops, data]);
        setFilteredStops((prevStops) => [...prevStops, data]);
        setShowAddBusStopDialog(false);
      })
      .catch((err) => {
        console.error("Failed to add bus stop:", err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "location") {
      // Ensure the value is a valid coordinate object (we'll assume it's a string in format "lat, lon")
      const [lat, lon] = value
        .split(",")
        .map((coord) => parseFloat(coord.trim()));
      setNewBusStop((prevState) => ({
        ...prevState,
        location: { lat, lon },
      }));
    } else {
      setNewBusStop((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setNewBusStop((prevState) => ({
      ...prevState,
      location: {
        ...prevState.location,
        [name]: value,
      },
    }));
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading bus stops...
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">All Bus Stops</h1>

        <div>
          {/* Toggle Stats Button */}
          <button
            onClick={() => setShowStats(!showStats)}
            className="mb-4 px-4 py-2 mr-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 transition-all"
          >
            {showStats ? "Hide Statistics" : "Show Statistics"}
          </button>

          {/* Add Bus Stop Button */}
          <button
            onClick={() => setShowAddBusStopDialog(true)}
            className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700 transition-all"
          >
            Add Bus Stop
          </button>
        </div>
      </div>

      {/* Collapsible Statistics */}
      {showStats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow border">
            <h2 className="text-sm text-gray-500">Total Bus Stops</h2>
            <p className="text-xl font-bold text-blue-700">{stats.total}</p>
          </div>
          <div className="bg-white p-4 rounded shadow border">
            <h2 className="text-sm text-gray-500">Most Common Route</h2>
            <p className="text-xl font-bold text-purple-700">
              {stats.mostCommonRoute}
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow border col-span-full sm:col-span-1 lg:col-span-2">
            <h2 className="text-sm text-gray-500">Most Common Location</h2>
            <p className="text-md font-medium text-green-600">
              {stats.mostCommonLocation}
            </p>
          </div>
        </div>
      )}

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search bus stops..."
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Bus Stops List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStops.map((stop, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-bold capitalize text-gray-700">
              {stop.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Routes: {stop.routes?.length ?? 0}
            </p>
            <p className="text-sm text-gray-500">
              Location:{" "}
              {stop.location
                ? `Lat: ${stop.location.lat}, Lon: ${stop.location.lon}`
                : "Unknown"}
            </p>
          </div>
        ))}
      </div>

      {/* Add Bus Stop Dialog */}
      {showAddBusStopDialog && (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Bus Stop
            </h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Bus Stop Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newBusStop.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter bus stop name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lat" className="block text-gray-600">
                Latitude
              </label>
              <input
                type="text"
                id="lat"
                name="lat"
                value={newBusStop.location.lat}
                onChange={handleLocationChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter latitude"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lon" className="block text-gray-600">
                Longitude
              </label>
              <input
                type="text"
                id="lon"
                name="lon"
                value={newBusStop.location.lon}
                onChange={handleLocationChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter longitude"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setShowAddBusStopDialog(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBusStop}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add Bus Stop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusStopsPage;
