const ContactMessage = require('../models/Contact');

 const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};

 const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};
module.exports={
    sendContactMessage,
    getAllMessages


}