require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors({ origin: 'https://dsa-sheet-apna-college.onrender.com' }));
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/sheet', require('./routes/sheetRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));

app.get('/api/ping', (req, res) => res.json({ message: 'Server is running' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
