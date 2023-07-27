const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const cors = require("cors");
const tripRoute = require("./src/routes/tripRoute");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
//  connecting Database
connectDB();

// setting all the routes here
app.use("/", tripRoute);

// starting the server
const port = process.env.PORT;
app.listen(port, () => console.log("Server is listening on port " + port));
