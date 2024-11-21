const {model, Schema} = require("mongoose");

const {UserSchema} = require("../schema/userSchema");

const userModel = new model("users", UserSchema);

module.exports = {userModel};