//const sendMail = require('./sendmail.js');

function signInWithGoogle() {
    // Add Google sign-in functionality
    console.log("Signing in with Google");
}

function signInWithFacebook() {
    // Add Facebook sign-in functionality
    console.log("Signing in with Facebook");
}

// JavaScript form validation
const form = document.getElementById('signInForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Your validation logic here
   
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    // If validation passes, you can submit the form
    // form.submit();
    console.log('Form submitted:', { username, password });
});

// Add an event listener to the sign-up button
document.getElementById('signin-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    
  });
  
  


// Import the sendMail function from sendmail.js
const sendMail = require('./sendmail');

document.getElementById('signup-btn').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form data
    const formData = new FormData(document.getElementById('signUpForm'));
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    // Send verification email by calling the sendMail function
  mailOptions={
      from: {
          name: "FitFusion",
          address: process.env.USER // Sender email address
        },
      to: [email], // Recipient email address
      subject: 'Email Verification',
      html: `<p>Hello ${username},</p><p>Welcome to Fit Fusion.</p>` // Adjust the verification link as per your application
    };
  
  
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
});




