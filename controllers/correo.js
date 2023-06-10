const nodemailer = require('nodemailer');


exports.nodemailer = async(req,res) => {
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'satoro564@misena.edu.co',
    pass: 'kdab tesr xxes itma'
  }
});

var mailOptions = {
  from: 'satoro564@misena.edu.co',
  to: 'bkvides@misena.edu.co',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}