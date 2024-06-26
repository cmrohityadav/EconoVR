import nodemailer from "nodemailer"
import { mailAuth } from "./configMail.js";


// async..await is not allowed in global scope, must use a wrapper
const otpEmail = async function (email, subject, message) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user:mailAuth.user,
      pass:mailAuth.pass,
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from:`"Value Vision: Admin-" ${process.env.SMTP_FROM_EMAIL}`, // sender address
    to: email, // user email
    subject: subject, // Subject line
    html: `<p>Your Verification Otp is ${message}</p>`, // html body
  });
};

export default otpEmail;
