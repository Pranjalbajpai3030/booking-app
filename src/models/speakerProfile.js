const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const SpeakerProfile = sequelize.define('SpeakerProfile', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  expertise: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = SpeakerProfile;
