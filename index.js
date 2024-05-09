import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import tripRoute from "./routes/tripRoute.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
//  connecting Database
connectDB();

// setting all the routes here

app.use("/api/v1", tripRoute);
app.use("/api/auth", authRoute);

// starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is listening on port " + port));
