import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

const router = express.Router();

// Register || Method : POST

router.post("/register", registerController);

// Login || Method : POST
router.post("/login", loginController);

export default router;
