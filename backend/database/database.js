const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://gurleen:gurleen22@petdatabase.byg7qxa.mongodb.net/"

const connectDB = async () => {
    try {
        await mongoose.connect (MONGO_URI);
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error Occured in connecting with database ", error.message)
    }
}

module.exports = {
    connectDB,
} 


/* 

server.get("/fetch_data", (request, response) => {
    response.send("This is the route to fetch data")
});

server.get("/Fdata", (request, response) => {
    response.send("Hii My Name is Gurleen Kaur")
})

server.post("/register", (request, response) => {
    const { name, email, password } = request.body;

    console.log(name);
    console.log(email);
    console.log(password);

    response.send("Data Received")
})

server.post("/Details", (request, response) => {
    const { name, class: username, email, password, semester } = request.body;

    console.log(name);
    console.log("class", username);
    console.log(email);
    console.log(password);
    console.log(semester);

    response.send("Data Recived")
})

*/