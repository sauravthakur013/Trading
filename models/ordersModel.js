const {model, Schema} = require("mongoose");

const {OrderSchema} = require("../schema/ordersScheme");

const ordersModel = new model("orders", OrderSchema);

module.exports = {ordersModel};