const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const sendEmail = require('../utils/email');

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userType } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Save user as unverified
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      userType,
      otp,
      isVerified: false,
    });

    // Send OTP email
    const subject = 'Verify Your Email';
    const text = `Your OTP is ${otp}`;
    const html = `<p>Your OTP is <strong>${otp}</strong></p>`;

    await sendEmail(email, subject, text, html);

    res.status(201).json({ message: 'User created. Please verify your OTP.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

module.exports = { signup };
