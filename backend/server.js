const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const {readdirSync} = require('fs');
require("dotenv").config();
port = process.env.PORT 
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const legalServiceProviderRoutes = require('./routes/legalServiceProvider')


const app = express();

mongoose.connect('mongodb://127.0.0.1/LegalSathi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());


// app.get("/api/v1", (req, res) => {
//     res.json({
//       data: "hey you hit node API",
//     });
//   });


// Use the authentication routes
app.use('/api/v1/', authRoutes);
app.use('/api/v1/', adminRoutes);
app.use('/api/v1/',legalServiceProviderRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));