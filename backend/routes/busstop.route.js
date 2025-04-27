import { Router } from "express";

import { getBusStops, addBusStops } from "../controllers/busstop.controller.js";

const router = Router();

router.get("/", getBusStops);
router.post("/", addBusStops);

export default router;