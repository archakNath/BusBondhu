import busrouteModel from "../models/busroute.model.js";

export const getBusRoutes = async (req, res) => {
    try {
        const busRoutes = await busrouteModel.find();
        res.status(200).json(busRoutes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addBusRoutes = async (req, res) => {
    try {
        const busRoute = new busrouteModel(req.body);
        await busRoute.save();
        res.status(201).json(busRoute);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default { getBusRoutes, addBusRoutes };