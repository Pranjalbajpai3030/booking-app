const { Booking } = require('../models');

const blockSlot = async (req, res, next) => {
  const { speakerId, date, timeSlot } = req.body;

  const bookingExists = await Booking.findOne({ where: { speakerId, date, timeSlot } });
  if (bookingExists) return res.status(400).json({ message: 'Slot already booked' });

  next();
};

module.exports = { blockSlot };
