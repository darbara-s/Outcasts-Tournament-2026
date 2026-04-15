const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

// The service account email and private key shouldn't be empty in production
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function getGoogleAuth() {
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.warn('Google Credentials not fully set in .env! Sheets integration will be mocked.');
    return null;
  }
  return new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    SCOPES
  );
}

async function appendRegistration(data) {
  const auth = getGoogleAuth();
  if (!auth) {
    console.log('[MOCK SHEETS] Appending Registration: ', data);
    return;
  }

  const sheets = google.sheets({ version: 'v4', auth });
  
  const resource = {
    values: [[
      data.teamCode,
      data.teamName,
      data.captainName,
      data.phone,
      data.email,
      data.notes,
      data.timestamp
    ]],
  };

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'tournament_registrations!A:G', // Adjust based on your sheet setup
    valueInputOption: 'USER_ENTERED',
    resource,
  });
}

async function appendRoster(data) {
  const auth = getGoogleAuth();
  if (!auth) {
    console.log('[MOCK SHEETS] Appending Roster: ', data);
    return;
  }

  const sheets = google.sheets({ version: 'v4', auth });
  
  const resource = {
    values: [[
      data.teamCode,
      data.playerName,
      data.jersey,
      data.role,
      data.timestamp
    ]],
  };

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'team_rosters!A:E',
    valueInputOption: 'USER_ENTERED',
    resource,
  });
}

module.exports = {
  appendRegistration,
  appendRoster
};
