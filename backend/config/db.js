import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        connectTimeoutMS: 60000, // 60 seconds
        socketTimeoutMS: 60000,  // 60 seconds
    })
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.log("Error connecting to MongoDB:", err));

}