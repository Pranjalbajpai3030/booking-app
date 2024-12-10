// src/config/db.js

const { Sequelize } = require('sequelize');

// Replace with your Supabase database credentials
const sequelize = new Sequelize(process.env.SUPABASE_URL, {
  dialect: 'postgres',
  username: process.env.SUPABASE_USER,
  password: process.env.SUPABASE_PASSWORD,
  logging: false, // Set to true if you want to see SQL queries in the console
});

module.exports = sequelize;
