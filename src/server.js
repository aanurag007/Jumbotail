require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();


app.use('/api/v1', require('./routes/api'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
