import { Router } from "express";

import { addConnectingStops, getConnectingStops } from "../controllers/connectingstops.controller.js";

const router = Router();

router.get("/", getConnectingStops);
router.post("/", addConnectingStops);

export default router;