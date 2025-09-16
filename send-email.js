const nodemailer = require('nodemailer');

// Remplace ces valeurs par les tiennes
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bondkaamine9@gmail.com',
    pass: '******************',
  },
});

const mailOptions = {
  from: 'bondkaamine9@gmail.com',
  to: 'aminbn1996@gmail.com',
  subject: 'Email de test via Nodemailer',
  text: 'Ceci est un email envoyé depuis un script Node.js(oussema) ',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erreur :', error);
  }
  console.log('Email envoyé : ' + info.response);
});
