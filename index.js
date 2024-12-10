// index.js
const express = require('express');
const sequelize = require('./src/config/db');
const { User } = require('./src/models/user');  // Adjust according to your model location

const app = express();

// Sync models with the database
sequelize.sync().then(() => {
  console.log('Database connected and models synced!');
}).catch((err) => {
  console.error('Error syncing models:', err);
});

// Example of a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
