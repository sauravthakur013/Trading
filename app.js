const express = require("express");
const monggoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();

// routes connections
const getHoldingsRoutes = require("./Routes/getHoldingRoutes");
const getPositionsRoutes = require("./Routes/getPositionsRoutes");
const signUpRoutes = require("./Routes/auth");

const allowedOrigins = [
    'https://trading-1-qymd.onrender.com',
    'https://trading-frontend-tau.vercel.app',
    'https://trading-dashboard-xi.vercel.app',
    'http://localhost:3000', // Frontend 1
    'http://localhost:3001', // Frontend 2
    'http://example.com',    // Frontend 3
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

// global middlewares
app.use(cors(corsOptions));
app.use(express.json()); // Body parser



// Routes
app.use('/api/auth', signUpRoutes);
app.use('/api/getHoldings', getHoldingsRoutes);
app.use('/api/getpositions', getPositionsRoutes);

module.exports = app;