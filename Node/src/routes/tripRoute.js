const express = require("express");
const Trip = require("../modal/tripModal");
const Ticket = require("../modal/ticketModal");

const router = express.Router();

// GET request to get the trip details
router.get("/", (req, res) => {
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

// POST request to post the details to the database
router.post("/", (req, res) => {
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
