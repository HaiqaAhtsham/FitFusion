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


const sendMail = async(transporter,mailOptions) =>{
  try{
    await transporter.sendMail(mailOptions)
    console.log("Email has been sent successfully")
  }
  catch(error){
  console.error(error);
  }
}
//sendMail(transporter,mailOptions);