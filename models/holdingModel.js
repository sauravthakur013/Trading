const {model} = require("mongoose");

const {HoldingSchema} = require("../schema/holdingSchema");

const holdingModel = new model("holding", HoldingSchema);

module.exports = {holdingModel}