const nodemailer = require('nodemailer')

exports.nodemailer = async (req, res) => {
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'satoro564@misena.edu.co',
      pass: 'kdab tesr xxes itma'
    }
  })

  const mailOptions = {
    from: 'satoro564@misena.edu.co',
    to: 'bkvides@misena.edu.co',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
