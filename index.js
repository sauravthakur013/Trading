const monggoose = require("mongoose");
require("dotenv").config();
const app = require('./app'); 


// Database connection
const connectDB = async () => {
  await monggoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
};

// server listen
app.listen(process.env.PORT || 4040, () => {
  connectDB();
  console.log("Listening on port 4040");
});