const Booking = require("../models/Booking");

// POST: Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: savedBooking });
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET: Fetch all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Fetching bookings error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
