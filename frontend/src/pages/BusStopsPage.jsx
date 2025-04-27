import React, { useEffect, useState } from "react";
import { LocationEdit, Trash } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles

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

  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [busStopToDelete, setBusStopToDelete] = useState(null);

  const [showEditBusStopDialog, setShowEditBusStopDialog] = useState(false);
  const [busStopToEdit, setBusStopToEdit] = useState(null);

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

  const computeStats = (data) => {
    const routeCount = {};
    const locationCount = {};

    data.forEach((stop) => {
      stop.routes?.forEach((route) => {
        routeCount[route] = (routeCount[route] || 0) + 1;
      });

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
    if (!newBusStop.name) {
      toast.error("Please enter the bus stop name."); // Show error toast if name is missing
      return;
    }

    let busStopData = {
      name: newBusStop.name,
      routes: newBusStop.routes,
    };

    if (newBusStop.location.lat && newBusStop.location.lon) {
      busStopData.location = {
        type: "Point",
        coordinates: [
          parseFloat(newBusStop.location.lon),
          parseFloat(newBusStop.location.lat),
        ],
      };
    } else {
      busStopData.location = null;
    }

    fetch("http://localhost:5000/api/busstops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(busStopData),
    })
      .then((res) => res.json())
      .then((data) => {
        setBusStops((prevStops) => [...prevStops, data]);
        setFilteredStops((prevStops) => [...prevStops, data]);
        setShowAddBusStopDialog(false);
        setNewBusStop({
          name: "",
          location: { lat: "", lon: "" },
          routes: [],
        });
        toast.success("Bus stop added successfully!"); // Show success toast
      })
      .catch((err) => {
        console.error("Failed to add bus stop:", err);
        toast.error("Failed to add bus stop. Please try again."); // Show error toast on failure
      });
  };

  const handleDeleteBusStop = () => {
    if (busStopToDelete) {
      fetch(`http://localhost:5000/api/busstops/${busStopToDelete._id}`, {
        method: "DELETE",
      })
        .then(() => {
          // Update the bus stops state by removing the deleted bus stop
          setBusStops((prevStops) =>
            prevStops.filter((stop) => stop._id !== busStopToDelete._id)
          );
          setFilteredStops((prevStops) =>
            prevStops.filter((stop) => stop._id !== busStopToDelete._id)
          );
          setShowDeleteWarning(false);
          setBusStopToDelete(null);

          // Show success toast after deletion
          toast.success("Bus stop deleted successfully!");
        })
        .catch((err) => {
          console.error("Failed to delete bus stop:", err);
          // Show error toast if deletion fails
          toast.error("Failed to delete bus stop. Please try again.");
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "location") {
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

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "location") {
      const [lat, lon] = value
        .split(",")
        .map((coord) => parseFloat(coord.trim()));
      setBusStopToEdit((prevState) => ({
        ...prevState,
        location: { lat, lon },
      }));
    } else {
      setBusStopToEdit((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleUpdateBusStop = () => {
    if (!busStopToEdit.name) {
      toast.error("Please enter the bus stop name.");
      return;
    }

    let busStopData = {
      name: busStopToEdit.name,
      routes: busStopToEdit.routes,
    };

    if (
      busStopToEdit.location &&
      busStopToEdit.location.lat &&
      busStopToEdit.location.lon
    ) {
      busStopData.location = {
        type: "Point",
        coordinates: [
          parseFloat(busStopToEdit.location.lon),
          parseFloat(busStopToEdit.location.lat),
        ],
      };
    } else {
      busStopData.location = null; // Ensure location is explicitly set to null if not provided
    }

    fetch(`http://localhost:5000/api/busstops/${busStopToEdit._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(busStopData),
    })
      .then((res) => res.json())
      .then((data) => {
        setBusStops((prevStops) =>
          prevStops.map((stop) =>
            stop._id === busStopToEdit._id ? data : stop
          )
        );
        setFilteredStops((prevStops) =>
          prevStops.map((stop) =>
            stop._id === busStopToEdit._id ? data : stop
          )
        );
        setShowEditBusStopDialog(false);
        setBusStopToEdit(null);
        toast.success("Bus stop updated successfully!");
      })
      .catch((err) => {
        console.error("Failed to update bus stop:", err);
        toast.error("Failed to update bus stop. Please try again.");
      });
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

  const openDeleteWarning = (busStop) => {
    setBusStopToDelete(busStop);
    setShowDeleteWarning(true);
  };

  const closeDeleteWarning = () => {
    setShowDeleteWarning(false);
    setBusStopToDelete(null);
  };

  const openEditBusStopDialog = (busStop) => {
    setBusStopToEdit(busStop);
    setShowEditBusStopDialog(true);
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
      <ToastContainer />
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">All Bus Stops</h1>

        <div>
          <button
            onClick={() => setShowStats(!showStats)}
            className="mb-4 px-4 py-2 mr-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 transition-all"
          >
            {showStats ? "Hide Statistics" : "Show Statistics"}
          </button>

          <button
            onClick={() => setShowAddBusStopDialog(true)}
            className="px-4 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700 transition-all"
          >
            Add Bus Stop
          </button>
        </div>
      </div>

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

      <input
        type="text"
        placeholder="Search bus stops..."
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

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
                ? `Lat: ${stop.location.coordinates[1]}, Lon: ${stop.location.coordinates[0]}`
                : "Unknown"}
            </p>

            <button
              onClick={() => openDeleteWarning(stop)}
              className="mt-4 bg-red-100 text-red-500 p-2 rounded hover:bg-red-500 hover:text-white transition-all cursor-pointer"
            >
              <Trash size={20} />
            </button>
            <button
              onClick={() => openEditBusStopDialog(stop)}
              className="mt-4 ml-2 bg-blue-100 text-blue-500 p-2 rounded hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
            >
              <LocationEdit size={20} />
            </button>
          </div>
        ))}
      </div>

      {showDeleteWarning && (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Are you sure you want to delete this bus stop?
            </h2>
            <div className="flex justify-between">
              <button
                onClick={closeDeleteWarning}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBusStop}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditBusStopDialog && busStopToEdit && (
        <div className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Bus Stop
            </h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Bus Stop Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={busStopToEdit.name}
                onChange={handleEditInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter bus stop name"
              />
            </div>

            {/* Conditionally render latitude and longitude inputs */}
            {busStopToEdit.location ? (
              <>
                <div className="mb-4">
                  <label htmlFor="lat" className="block text-gray-600">
                    Latitude
                  </label>
                  <input
                    type="text"
                    id="lat"
                    name="lat"
                    value={busStopToEdit.location.lat || ""}
                    onChange={handleEditInputChange}
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
                    value={busStopToEdit.location.lon || ""}
                    onChange={handleEditInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter longitude"
                  />
                </div>
              </>
            ) : (
              // If location is not available, allow user to input location
              <>
                <div className="mb-4">
                  <label htmlFor="lat" className="block text-gray-600">
                    Latitude
                  </label>
                  <input
                    type="text"
                    id="lat"
                    name="lat"
                    value={busStopToEdit.lat || ""}
                    onChange={handleEditInputChange}
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
                    value={busStopToEdit.lon || ""}
                    onChange={handleEditInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter longitude"
                  />
                </div>
              </>
            )}

            <div className="flex justify-between">
              <button
                onClick={() => setShowEditBusStopDialog(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateBusStop}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
              >
                Update Bus Stop
              </button>
            </div>
          </div>
        </div>
      )}

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
                placeholder="Enter latitude (optional)"
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
                placeholder="Enter longitude (optional)"
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
