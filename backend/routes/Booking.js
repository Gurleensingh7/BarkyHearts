const express = require("express");
const router = express.Router();
const bookingController = require("../controller/Booking");

router.post("/bookings", bookingController.createBooking);
router.get("/getbookings", bookingController.getAllBookings);

module.exports = router;
