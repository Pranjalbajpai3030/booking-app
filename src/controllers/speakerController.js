const { SpeakerProfile } = require('../models');

const addSpeakerProfile = async (req, res) => {
  const { expertise, price } = req.body;

  try {
    if (req.user.userType !== 'speaker') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const profile = await SpeakerProfile.create({ userId: req.user.id, expertise, price });
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Error adding profile', error: err.message });
  }
};

module.exports = { addSpeakerProfile };
