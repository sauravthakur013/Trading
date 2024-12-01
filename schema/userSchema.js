const { Schema } = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  username: String,
  password: String,
},
{timestamps: true,}
);

module.exports = { UserSchema };
