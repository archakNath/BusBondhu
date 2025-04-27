import mongoose from "mongoose";

// Define the bus stop schema
const busStopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            validate: {
                validator: function (arr) {
                    if (!arr) return true; // allow missing coordinates
                    return arr.length === 2;
                },
                message: "Coordinates must be an array of [longitude, latitude]",
            },
        },
    },
    routes: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

// 2dsphere index on location only if it's not null
busStopSchema.index({ location: '2dsphere' });

export default mongoose.model("BusStop", busStopSchema);
