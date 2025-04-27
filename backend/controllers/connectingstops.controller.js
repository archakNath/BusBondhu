import connectingstopsModel from "../models/connectingstops.model.js";

export const getConnectingStops = async (req, res) => {
    try {
        const connectingStops = await connectingstopsModel.find();
        res.status(200).json(connectingStops);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addConnectingStops = async (req, res) => {
    try {
        const connectingStop = new connectingstopsModel(req.body);
        await connectingStop.save();
        res.status(201).json(connectingStop);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getConnectingStops,
    addConnectingStops,
};