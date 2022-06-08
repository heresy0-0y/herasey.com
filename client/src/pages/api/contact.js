const PASSWORD = process.env.ZOHO_PASS;

export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: "info@herasey.me",
      pass: PASSWORD,
    },
  });

  const mailData = {
    from: `${req.body.email}`,
    to: `info@herasey.me`,
    subject: `message from ${req.body.name} - ${req.body.email}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}<p>Sent from: ${req.body.email}, ${req.body.name}</p></div>`,
  };

  transporter.sendMail(mailData, function (error, info) {
    if (error) console.log(error);
    else console.log(info);
  });
  console.log(req.body);
  res.send("success");
}
