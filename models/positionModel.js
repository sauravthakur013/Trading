const {model} = require('mongoose');

const {PositionSchema} = require('../schema/positionSchema');

const positionModel = new model('position', PositionSchema);

module.exports = {positionModel};