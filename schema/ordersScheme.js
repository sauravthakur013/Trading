const {Schema, model} = require('mongoose');

const OrderSchema = new Schema({
    name: String,
    price: Number,
    percent: Number,
    isDown: Boolean,
    mode: String
});

module.exports = {OrderSchema};