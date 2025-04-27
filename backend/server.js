import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import busstopRouter from './routes/busstop.route.js';
import busrouteRouter from './routes/busroute.route.js';
import connectingstopsRouter from './routes/connectingstops.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors()); // Allow all origins (customize if needed)
app.use(express.json());

// Define a simple route
app.use('/api/busstops', busstopRouter);
app.use('/api/busroutes', busrouteRouter);
app.use('/api/connectingstops', connectingstopsRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port http://localhost:${port}`);
});