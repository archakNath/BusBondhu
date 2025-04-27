import mongoose from "mongoose";

// Define the bus stop schema
const busStopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Ensure the bus stop name is always provided
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            validate: {
                validator: function (arr) {
                    return arr.length === 2;
                },
                message: "Coordinates must be an array of two numbers: [lon, lat]"
            },
            required: false, // Optional to allow null initially
        }
    },
    routes: {
        type: [String], // Array of route names
        required: false,
    },
});

// Add geospatial index for location (if it exists)
busStopSchema.index({ location: '2dsphere' });

export default mongoose.model("BusStop", busStopSchema);
