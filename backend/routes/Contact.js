const express =require("express");
const { sendContactMessage, getAllMessages }= require("../controller/Contact.js");

const router = express.Router();

router.post("/post/contact", sendContactMessage);
router.get("/get/contact", getAllMessages); // optional: for admin to view messages

module.exports= router;
