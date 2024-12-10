const { Booking, SpeakerProfile } = require('../models');

const bookSession = async (req, res) => {
  const { speakerId, date, timeSlot } = req.body;

  try {
    const speaker = await SpeakerProfile.findByPk(speakerId);
    if (!speaker) return res.status(404).json({ message: 'Speaker not found' });

    await Booking.create({ speakerId, userId: req.user.id, date, timeSlot });
    res.status(201).json({ message: 'Session booked successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error booking session', error: err.message });
  }
};

const getSpeakers = async (req, res) => {
  try {
    const speakers = await SpeakerProfile.findAll();
    res.status(200).json(speakers);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching speakers', error: err.message });
  }
};

module.exports = { bookSession, getSpeakers };
