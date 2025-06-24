const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gk548028@gmail.com",
    pass: "unln xymc mipx zhec", 
  },
});


async function sendMail(to) {
  try {
    const info = await transporter.sendMail({
      from: '"Pet Care Support 🐾" <gk548028@gmail.com>',
      to: to, 
      subject: `Successfully register for ${to}`,
      text: `Hey ${to}, you are recieving this message because you have register on our website.`, 
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendMail;
