const {holdingModel} = require("../models/holdingModel");

const getHoldings = async (req, res) => {
    try {
        const holdings = await holdingModel.find();
        res.json(holdings);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {getHoldings}