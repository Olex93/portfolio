require('dotenv').config();
const express = require('express');
const Next = require('next');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;


const app = Next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  //use Cors//
    server.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        next();
    });

    
    //Post request from contact form//
    server.post("/contact", function(req,res){
        const firstName = req.body.contact.fName;
        const lastName = req.body.contact.lName;
        const message = req.body.contact.message;
        const service = req.body.contact.service;
        const email = req.body.contact.email;
        const enquiryMail = firstName + " " + lastName + " " + "has just submitted the following " + service + " enquiry via findthelead.co.uk: '" + message + "'. Get back to them by replying to this email or contacting the at: " + email + ".";
        const user = process.env.GMAIL_ACCOUNT;
        const clientID = process.env.GMAIL_CLIENT_ID;
        const clientSecret = process.env.GMAIL_CLIENT_SECRET;
        const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
        const accessToken = process.env.GMAIL_ACCESS_TOKEN;


    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          type: 'OAuth2',
          user: user,
          clientId: clientID,
          clientSecret: clientSecret,
          refreshToken: refreshToken,
          accessToken: accessToken,
      }
  });

  const mailOpts = {
      from: email,
      to: 'alexfoster934@gmail.com',
      replyTo:email,
      subject: 'New message from my portfolio',
      text:enquiryMail
  }

  smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
          console.log(error)
      } else {
          console.log("message sent")
      }
  })
});


    //set up sitemap//
    const sitemapOptions = {
        root: __dirname + '/sitemap/',
        headers: {
            'Content-Type': 'text/xml;charset=UTF-8'
        }
    };

    // serve sitemap
    server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions));


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
});