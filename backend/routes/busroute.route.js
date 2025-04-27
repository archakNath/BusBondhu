import { Router } from "express";

import { getBusRoutes, addBusRoutes } from "../controllers/busroute.controller.js";

const router = Router();

router.get("/", getBusRoutes);
router.post("/", addBusRoutes);

export default router;