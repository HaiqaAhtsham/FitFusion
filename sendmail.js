console.log("Nodemailer");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host:"smtp.gmail.com",
  auth: {
    user: 'haiqachaudhary5@gmail.com', // Your Gmail email address
    pass: 'hlej hrat kxmk mutu' // App password from gmail account
  }
});

const mailOptions = {
 from:{
  name: "admin",
  address: process.env.USER
 },
  to:["haiqaahtsham@gmail.com"], //list of recievers
  subject: 'Email Verification',
  html: `<p>Please click <a href="landing-page.html">here</a> to verify your email.</p>`
}
const sendMail = async(transporter,mailOptions) =>{
  try{
    await transporter.sendMail(mailOptions)
    console.log("Email has been sent successfully")
  }
  catch(error){
  console.error(error);
  }
}
sendMail(transporter,mailOptions);