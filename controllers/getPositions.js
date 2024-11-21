const {positionModel} = require("../models/positionModel");

const getPositions = async (req, res) => {
    try {
        const positions = await positionModel.find();
        res.json(positions);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {getPositions}