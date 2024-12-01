const { userModel } = require("../models/userModel");
const jwt = require('jsonwebtoken');

const autherntication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const tokenValue = token.split(" ")[1];
    const userId = token.split(" ")[3];

    if (tokenValue !== 'null' && userId !== 'null') {
        const decoded = await jwt.verify(tokenValue, process.env.JWT_SECRET);
        const selectedUser= await userModel.findOne({ _id: decoded.id });
        req.user = selectedUser._id;
        next();
    }else{
        res.status(401).json({ error: "Unauthorized", statusCode: 401 });
    }
  } catch (error) {
    res.status(401).json({ error: "Unauthorized", statusCode: 401 });
    console.log(error);
  }
};

module.exports = {
  autherntication,
};
