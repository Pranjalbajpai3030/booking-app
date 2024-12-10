const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Booking = sequelize.define('Booking', {
  speakerId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  timeSlot: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Booking;
