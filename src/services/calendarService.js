const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/oauth2callback'
);

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

const createEvent = async (event) => {
  return await calendar.events.insert({
    calendarId: 'primary',
    resource: event,
  });
};

module.exports = { createEvent };
