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
        const { geometry, properties } = req.body;

        if (
            !geometry ||
            geometry.type !== "Point" ||
            !geometry.coordinates ||
            geometry.coordinates.length !== 2
        ) {
            return res.status(400).json({
                error: "Invalid location format. Expected GeoJSON Point with [longitude, latitude].",
            });
        }

        const busStop = new BusStop({
            name: properties.name, // ✅ updated field name
            location: {
                type: "Point",
                coordinates: geometry.coordinates,
            },
            routes: Array.isArray(properties.routes) ? properties.routes : [], // optional safe fallback
        });

        await busStop.save();
        res.status(201).json(busStop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
