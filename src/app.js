const express = require('express');
const connectDB = require('./config/db');
const shippingRoutes = require('./routes/shippingRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
connectDB();

app.use('/api/v1', shippingRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
