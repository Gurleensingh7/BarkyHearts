//express = backend framework of Node.js
const express = require('express');
const { connectDB } = require('./database/database');
const { petProductRouter } = require('./routes/PetProducts');
const UserRouter=require("./routes/User")
const BookingRouter=require("./routes/Booking")
const ContactRouter=require("./routes/Contact")
const cors = require("cors");
const PORT = 8000;

// Create a server
const server = express();

//middleware
server.use(express.json());

server.use(
    cors({
        origin: ["http://localhost:5173"],
    })
);


//calling database connection function
connectDB();

//calling all the routers
server.use("/api/products", petProductRouter);
server.use("/api", UserRouter)
server.use("/api",BookingRouter)
server.use("/api",ContactRouter)

// Start the server on a unique port
server.listen(PORT, () => {
    console.log(`Backend Server is running at http://localhost:${PORT}`)
})