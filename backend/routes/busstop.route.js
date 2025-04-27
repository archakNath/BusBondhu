import { Router } from "express";

import { getBusStops, addBusStops, deleteBusStop, updateBusStop } from "../controllers/busstop.controller.js";

const router = Router();

router.get("/", getBusStops);
router.post("/", addBusStops);
router.delete('/:id', deleteBusStop);
router.patch('/:id', updateBusStop);

export default router;