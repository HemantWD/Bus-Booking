import express from "express";
import {
  getStateController,
  stateController,
} from "../controllers/statesController.js";

const router = express.Router();

router.get("/districts", getStateController);

// METHOD:POST ||
router.post("/districts", stateController);

export default router;
