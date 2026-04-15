const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { appendRegistration, appendRoster } = require('./services/googleSheets');
const { sendRegistrationEmail } = require('./services/email');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Registration Endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { teamName, captainName, phone, email, notes } = req.body;
    
    // Generate a unique mock team code for the example
    const teamCode = `OC26-${Math.floor(1000 + Math.random() * 9000)}`;

    // 1. Append to Google Sheets
    await appendRegistration({
      teamCode,
      teamName,
      captainName,
      phone,
      email,
      notes,
      timestamp: new Date().toISOString()
    });

    // 2. Send email notification
    await sendRegistrationEmail(email, captainName, teamName, teamCode);

    res.status(200).json({ success: true, teamCode });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// Player Addition Endpoint (Roster)
app.post('/api/roster', async (req, res) => {
  try {
    const { teamCode, playerName, jersey, role } = req.body;

    // Append to Google Sheets
    await appendRoster({
      teamCode,
      playerName,
      jersey,
      role,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Roster Error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
