const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: true, 
  auth: {
    user: "aishwaryageed4@gmail.com",
    pass: "gjqxjapmicbmfzpw",
  },
});

const mailOptions ={
  from: {
    name: 'Aishwarya Geed',
    address:'aishwaryageed4@gmail.com',
  }, // sender address
  to: ["aishwaryageed4@gmail.com"], 
  subject: "Send email using nodemailer and gmail ✔", 
  text: "hello this is a text mai", 
  html: "<h2>hello this is a text mail</h2>", 
  attachments: [
    {
      filename: 'picture.jpg',
      path: path.join(__dirname, 'picture.jpg')
    },
    {
      filename: 'AFCAT Model Question Paper-I.pdf',
      path: path.join(__dirname, 'AFCAT Model Question Paper-I.pdf')
    }
  ]
}

const sendMail = async (transporter, mailOptions) => {
  try{
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent!');
  } catch (error) {
    console.error(error);
  }
}

sendMail(transporter, mailOptions);