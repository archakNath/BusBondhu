import mongoose from "mongoose";

// {
//     "name": "esplanade",
//     "routeCount": 135
//   },

const connectingStopsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    routeCount: {
        type: Number,
        required: true
    }
});

export default mongoose.model("ConnectingStops", connectingStopsSchema);