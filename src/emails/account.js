// not part of the final app
const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'omar.saucedo@wizeline.com',
    subject: 'Thanks for joining',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'omar.saucedo@wizeline.com',
    subject: 'Sad to see you leave',
    text: `Goodbye, ${name}. I hope to see you back sometime soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
