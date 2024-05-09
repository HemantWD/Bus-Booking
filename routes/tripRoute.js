import express from "express";
import { busDataController } from "../controllers/busController.js";

const router = express.Router();

// METHOD : GET || get resquest to get the bus details
router.get("/busData", busDataController);

export default router;
