import { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { findIndirectRoutes } from "../utils/findIndirectRoutes";
import Header from "../components/Header.jsx";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQuery();
  const from = query.get("from");
  const to = query.get("to");
  const [directRoutes, setDirectRoutes] = useState([]);
  const [indirectRoutes, setIndirectRoutes] = useState([]);
  const [busRoutes, setBusRoutes] = useState([]);

  useEffect(() => {
    if (!from || !to) return;

    const fetchAndCheckRoutes = async () => {
      try {
        const res = await fetch("https://busbondhu-production.up.railway.app/api/busroutes");
        const data = await res.json();
        setBusRoutes(data);

        // ✅ Direct route check
        const direct = data.filter((route) => {
          const allStops = [
            route.location1,
            ...(route.via || []),
            route.location2,
          ];
          return allStops.includes(from) && allStops.includes(to);
        });
        setDirectRoutes(direct);

        // ✅ Indirect route check if no direct route found
        if (direct.length === 0) {
          const indirect = findIndirectRoutes(from, to, data);
          setIndirectRoutes(indirect ? indirect.path : []);
        } else {
          setIndirectRoutes([]);
        }
      } catch (err) {
        console.error("Error fetching or processing routes:", err);
      }
    };

    fetchAndCheckRoutes();
  }, [from, to]);

  // Function to get the appropriate bus image based on type
  const getBusImage = (type) => {
    if (!type) return "/private_bus_poly.png"; // Default image

    const lowerType = type.toLowerCase();
    if (lowerType.includes("mini")) {
      return "/mini_bus_poly.png";
    } else if (lowerType.includes("state") || lowerType.includes("sta")) {
      return "/sta_bus_poly.png";
    } else {
      return "/private_bus_poly.png"; // Default to private bus image
    }
  };

  // Function to format route details
  const getRouteDetails = (route) => {
    if (!route) return { fromTo: "", series: "" };

    // Capitalize the location names
    const capitalizedLocation1 = route.location1
      ? route.location1.charAt(0).toUpperCase() + route.location1.slice(1)
      : "";
    const capitalizedLocation2 = route.location2
      ? route.location2.charAt(0).toUpperCase() + route.location2.slice(1)
      : "";

    const fromTo = `${capitalizedLocation1}-${capitalizedLocation2}`;

    let series = "";
    if (route.route.startsWith("S-")) {
      series = "Mini Series Bus Routes";
    } else if (route.route.startsWith("2")) {
      series = "200 Series General Bus Routes";
    } else if (route.type && route.type.toLowerCase().includes("private")) {
      series = "Blue-Yellow Buses (Private)";
    } else if (route.type && route.type.toLowerCase().includes("state")) {
      series = "State Transport Authority";
    } else {
      series = "General Bus Routes";
    }

    return { fromTo, series };
  };

  useEffect(() => {
    if (!from || !to) return;

    // Find direct routes
    const direct = busRoutes.filter((route) => {
      const allStops = [route.location1, ...(route.via || []), route.location2];
      return allStops.includes(from) && allStops.includes(to);
    });
    setDirectRoutes(direct);

    // Find indirect routes if no direct route is found
    if (direct.length === 0) {
      const indirect = findIndirectRoutes(from, to, busRoutes);
      setIndirectRoutes(indirect ? indirect.path : []);
    } else {
      setIndirectRoutes([]);
    }
  }, [from, to]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-4 max-w-[1200px] container mx-auto">
        <Header />
        <div className="bg-[#212121] p-8 rounded-xl flex flex-col items-start justify-center gap-2 text-[#f7f7f7] shadow-sm mb-6">
          <h1 className="text-4xl italic">Search Results of Routes between</h1>
          <div className="flex justify-between w-full items-center mt-5">
            <p className="font-semibold capitalize bg-stone-700 p-3 rounded-full whitespace-nowrap">
              {from}
            </p>
            <div className="border-2 w-full h-0 mx-2 border-dashed border-stone-700" />
            <p className="font-semibold capitalize bg-stone-700 p-3 rounded-full whitespace-nowrap">
              {to}
            </p>
          </div>
        </div>

        {directRoutes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {directRoutes.map((route, index) => {
              const { fromTo, series } = getRouteDetails(route);
              return (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-md"
                >
                  <Link
                    to={`/route?route=${route.route}&from=${from}&to=${to}`}
                    key={index}
                    className="bg-gray-200 rounded-lg overflow-hidden shadow-md block"
                  >
                    <div className="flex p-4">
                      <div className="w-1/2">
                        <img
                          src={getBusImage(route.type)}
                          alt={`${route.type} bus`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <div className="w-1/2 flex flex-col justify-between">
                        <div className="bg-gray-800 text-white text-xs rounded p-2 mb-2 inline-block self-end">
                          {series}
                        </div>
                        <div className="mt-auto">
                          <h3 className="text-3xl font-bold">
                            Route {route.route}
                          </h3>
                          <p className="text-gray-700">{fromTo}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-red-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              ❌ No Direct Routes Found
            </h2>
            <p className="text-red-500">
              Sorry, we couldn't find a direct route between{" "}
              <strong className="capitalize">{from}</strong> and{" "}
              <strong className="capitalize">{to}</strong>.
            </p>
          </div>
        )}

        {/* Indirect Route Display */}
        {indirectRoutes.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-yellow-700 mb-4">
              🔁 Alternative Routes with Transfers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {indirectRoutes.map((route, index) => {
                const { from: fromStop, to: toStop, route: routeName } = route;
                const busRoute = busRoutes.find((r) => r.route === routeName);
                const { series } = getRouteDetails(busRoute);

                // Capitalize the transfer stops
                const capitalizedFromStop = fromStop
                  ? fromStop.charAt(0).toUpperCase() + fromStop.slice(1)
                  : "";
                const capitalizedToStop = toStop
                  ? toStop.charAt(0).toUpperCase() + toStop.slice(1)
                  : "";

                return (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-lg overflow-hidden shadow-md"
                  >
                    <Link
                      to={`/route?route=${routeName}&from=${fromStop}&to=${toStop}`}
                      key={index}
                      className="bg-gray-200 rounded-lg overflow-hidden shadow-md block"
                    >
                      <div className="flex p-4">
                        <div className="w-1/2">
                          <img
                            src={getBusImage(busRoute?.type)}
                            alt={`${busRoute?.type || "bus"}`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="w-1/2 flex flex-col justify-between">
                          <div className="bg-gray-800 text-white text-xs rounded p-2 mb-2 inline-block self-end">
                            {series}
                          </div>
                          <div className="mt-auto">
                            <h3 className="text-3xl font-bold">
                              Route {routeName}
                            </h3>
                            <p className="text-gray-700">
                              {capitalizedFromStop} - {capitalizedToStop}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-md">
              <p className="text-yellow-800">
                <strong>Note:</strong> You will need to transfer buses at the
                intermediate stops.
              </p>
            </div>
          </div>
        )}

        {directRoutes.length === 0 &&
          indirectRoutes.length === 0 &&
          from &&
          to && (
            <div className="bg-red-50 p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                ❌ No Routes Found
              </h2>
              <p className="text-red-500">
                Sorry, we couldn't find any routes between{" "}
                <strong className="capitalize">{from}</strong> and{" "}
                <strong className="capitalize">{to}</strong>.
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
