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

// global middlewares
app.use(cors());
app.use(express.json()); // Body parser

// Routes
app.use('/api/signUp', signUpRoutes);
app.use('/api/getHoldings', getHoldingsRoutes);
app.use('/api/getpositions', getPositionsRoutes);

module.exports = app;