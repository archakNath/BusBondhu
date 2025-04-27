import BusStop from "../models/busstop.model.js";

// Get all bus stops
export async function getBusStops(req, res) {
    try {
        const { lat, lon, radius } = req.query;

        if (lat && lon && radius) {
            const busStops = await BusStop.find({
                location: {
                    $near: {
                        $geometry: {
                            type: "Point",
                            coordinates: [parseFloat(lon), parseFloat(lat)], // [longitude, latitude]
                        },
                        $maxDistance: parseInt(radius) * 1000, // radius in meters
                    },
                },
            });
            return res.status(200).json(busStops);
        } else {
            const busStops = await BusStop.find();
            return res.status(200).json(busStops);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Add a new bus stop
export async function addBusStops(req, res) {
    try {
        const { name, location, routes } = req.body;

        if (!name) {
            return res.status(400).json({ error: "Bus stop 'name' is required." });
        }

        const busStopData = {
            name: name,
            routes: Array.isArray(routes) ? routes : [],
        };

        if (location && location.type === "Point" && Array.isArray(location.coordinates) && location.coordinates.length === 2) {
            busStopData.location = {
                type: "Point",
                coordinates: location.coordinates,
            };
        } else {
            busStopData.location = null; // Allow location to be null
        }

        const busStop = new BusStop(busStopData);

        await busStop.save();
        res.status(201).json(busStop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete a bus stop by _id
export async function deleteBusStop(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "Bus stop '_id' is required." });
        }

        const deletedBusStop = await BusStop.findByIdAndDelete(id);

        if (!deletedBusStop) {
            return res.status(404).json({ error: "Bus stop not found." });
        }

        res.status(200).json({ message: "Bus stop deleted successfully.", deletedBusStop });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a bus stop by _id
export async function updateBusStop(req, res) {
    try {
        const { id } = req.params;
        const { name, location, routes } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Bus stop '_id' is required." });
        }

        const busStop = await BusStop.findById(id);

        if (!busStop) {
            return res.status(404).json({ error: "Bus stop not found." });
        }

        // Update the fields if provided
        if (name) busStop.name = name;
        if (routes) busStop.routes = Array.isArray(routes) ? routes : [];
        if (location && location.type === "Point" && Array.isArray(location.coordinates) && location.coordinates.length === 2) {
            busStop.location = {
                type: "Point",
                coordinates: location.coordinates,
            };
        } else if (location === null) {
            busStop.location = null; // Allow location to be null if no valid location is provided
        }

        // Save the updated bus stop
        await busStop.save();
        res.status(200).json(busStop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
