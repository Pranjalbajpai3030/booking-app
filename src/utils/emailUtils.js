const sgMail = require('@sendgrid/mail');

// Set the API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Send an email using SendGrid
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} text - Plain text version of the email body
 * @param {string} html - HTML version of the email body
 */
const sendEmail = async (to, subject, text, html) => {
  try {
    const msg = {
      to,
      from: process.env.EMAIL_FROM, // Verified sender email
      subject,
      text,
      html,
    };

    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error.response ? error.response.body : error);
    throw new Error('Failed to send email');
  }
};

module.exports = sendEmail;
