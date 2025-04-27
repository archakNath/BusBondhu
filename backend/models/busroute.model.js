// {
//     "route": "1",
//     "location1": "ramnagar",
//     "location2": "mukundapur",
//     "via": [
//         "bnr",
//         "kidderpore",
//         "bhabani bhawan",
//         "alipore zoo",
//         "hazra",
//         "rashbehari",
//         "gariahat",
//         "kasba post office",
//         "haltu",
//         "safuipara",
//         "e.m. bypass"
//     ],
//     "type": "Blue-Yellow Buses (Private)"
// },

import mongoose from "mongoose";

const busRouteSchema = new mongoose.Schema({
    route: {
        type: String,
        required: true,
    },
    location1: {
        type: String,
        required: true,
    },
    location2: {
        type: String,
        required: true,
    },
    via: {
        type: [String],
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

export default mongoose.model("BusRoute", busRouteSchema);