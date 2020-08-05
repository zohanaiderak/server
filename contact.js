const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');
const user = process.env.USER;
const password = process.env.PASSWORD;
console.log(user);


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  service: "Gmail",
  auth: {
      user: user,
      pass: password
  }
});

transporter.verify((error, success) => {
    if (error) {
      console.log("error" ,error);
    } else {
      console.log('Server is ready to take messages', success);
    }
  });

  router.post('/',(req, res) => {
    let name = req.body.name
    let email = req.body.email
    let description = req.body.description
    let content = `A representative will reach out to you. \n name: ${name} \n email: ${email} \n description: ${description}`
    let mailList = `${user},${email}`
    let mail = {
      from: user,
      to: mailList,  
      subject: `New Order from ${name}`,
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err)
        } else {
         console.log("success")
        }
      })
    })

module.exports = router;