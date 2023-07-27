const express = require("express");
const Trip = require("../modal/tripModal");
const Ticket = require("../modal/ticketModal");
const busData = require("../modal/busData");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send("Reserve Bus Booking Application Server");
});

// GET request to get the trip details
router.get("/trips", (req, res) => {
  Trip.find()
    .then((trips) => {
      res.status(200).json(trips);
    })
    .catch((error) => {
      console.log("Failed to fetch trips: ", error);
      res.status(500).json({
        message: "Failed to fetch trips ",
      });
    });
});

// GET request to get bus details
router.get("/busData", (req, res) => {
  const { From, To, DaysRunOn } = req.query;
  const daysArray = (DaysRunOn || "").split(",").map((day) => day.trim());
  busData
    .find({ From, To, DaysRunOn: { $in: daysArray } })
    .then((busData) => {
      res.status(200).json(busData);
    })
    .catch((err) => {
      console.error("Failed to Fetch the Data: ", err.message);
      res.status(500).json({
        message: "Failed to fetch bus data",
      });
    });
});

// POST request to post the details to the database
router.post("/trips", (req, res) => {
  const {
    date,
    from,
    to,
    busOwnerID,
    startTime,
    EndTime,
    category,
    SeatBooked,
    bus_no,
    amenities_list,
    busFare,
    busName,
  } = req.body;

  const trip = new Trip({
    date: new Date(date),
    from,
    to,
    busOwnerID,
    startTime: new Date(startTime),
    EndTime: new Date(EndTime),
    category,
    SeatBooked,
    bus_no,
    amenities_list,
    busFare,
    busName,
  });
  //   to save the document to the database
  trip
    .save()
    .then(() => {
      console.log("Your trip is saved:", trip);
      res.status(201).json({
        message: "Trip added successfully",
      });
    })
    .catch((error) => {
      console.log("Failed to save the trip:", error);
      res.status(500).json({
        message: "Failed to add trip",
      });
    });
});

// POST request to save the ticket details
router.post("/ticket-details", (req, res) => {
  const { name, date, from, to, seatNumber, category, busName, busFare } =
    req.body;

  const ticket = new Ticket({
    name,
    date: new Date(date),
    from,
    to,
    seatNumber,
    category,
    busName,
    busFare,
  });
  //    to post the data to the database
  ticket
    .save()
    .then(() => {
      console.log("Your ticket is saved:", ticket);
      res.status(201).json({
        message: "Ticket Saved",
      });
    })
    .catch((error) => {
      console.log("Failed", error);
      res.status(500).json({
        message: "Failure",
      });
    });
});

// GET request to reterive details based on the date

router.get("/date", (req, res) => {
  const { date } = req.query;
  if (!date) {
    return res.status(400).json({ message: "Date parameter is required" });
  }
  Trip.find({ date: new Date(date) })
    .then((trips) => {
      res.status(200).json(trips);
    })
    .catch((error) => {
      console.log("Failed to find any trip on this Date", error);
      res.status(500).json({
        message: "Failed to fetch",
      });
    });
});

router.get("/parameter", (req, res) => {
  const { from, to, category, startTime } = req.query;
  const filter = {};

  if (from) {
    filter.from = from;
  }
  if (to) {
    filter.to = to;
  }
  if (category) {
    filter.category = category;
  }
  if (startTime) {
    filter.startTime = startTime;
  }

  Trip.find(filter)
    .then((trips) => {
      res.status(200).json(trips);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Failed to fetch trips",
      });
    });
});

module.exports = router;
