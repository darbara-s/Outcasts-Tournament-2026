const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

function getTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }
  
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendRegistrationEmail(toEmail, captainName, teamName, teamCode) {
  const transporter = getTransporter();
  
  if (!transporter) {
    console.log(`[MOCK EMAIL] To: ${toEmail} | Captain: ${captainName} | Team: ${teamName} | Code: ${teamCode}`);
    return;
  }

  const mailOptions = {
    from: `"Outcasts Cricket League" <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: `Registration Confirmed: ${teamName} - Outcasts Cricket League 2026`,
    html: `
      <h2>Welcome to the Outcasts Cricket League 2026, ${captainName}!</h2>
      <p>Your team <strong>${teamName}</strong> has been successfully registered.</p>
      <p>Your unique Team Code is: <strong>${teamCode}</strong></p>
      <p>You can use this team code to manage your roster on our website.</p>
      <br />
      <p>Best regards,</p>
      <p>Tournament Administration</p>
    `
  };

  await transporter.sendMail(mailOptions);
  
  // Optionally send a separate notification to the admin
  if (process.env.ADMIN_EMAIL) {
    const adminOptions = {
      from: `"League Registration" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Team Registered: ${teamName}`,
      html: `
        <p>A new team has registered.</p>
        <p><strong>Team Name:</strong> ${teamName}</p>
        <p><strong>Captain:</strong> ${captainName}</p>
        <p><strong>Code:</strong> ${teamCode}</p>
      `
    };
    await transporter.sendMail(adminOptions);
  }
}

module.exports = {
  sendRegistrationEmail
};
