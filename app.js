var express = require('express');
var app =  express();
var bodyParser = require("body-parser");
port = process.env.PORT||3000;
const nodemailer = require("nodemailer");
app.use(bodyParser.json());
app.listen(port)

console.log('app starting on port'+ port);
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'EmailAddress',
      pass: 'Password'
    }
  });
  
  var mailOptions = {
    from: 'segun.falugba@neulogicsolutions.com',
    to: ['sfalugba@gmail.com','uzoma.ebere@neulogicsolutions.com'],
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  
  app.post("/api/sendMail",function(req,res){
      var mailOptions = req.body;
      console.log(mailOptions);
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.json({'Response status':'success','description':'Email Sent Successfully'});
        }
      });
  });

  