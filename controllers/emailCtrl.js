const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_ID, // generated ethereal user
      pass: process.env.MP, // generated ethereal password
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(
    {
      from: '"Hey 👻" <abc@gmail.com>', // sender address
      to: data.to, // list of receivers
      subject: data.subject, // Subject line
      text: data.text, // plain text body
      html: data.htm, // html body
    },
    (err, success) => {
      if (err) {
        console.log("email err", err);
      } else {
        console.log("Email Sent Succesfully");
      }
    }
  );

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = sendEmail;
