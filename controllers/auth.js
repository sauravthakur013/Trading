const {userModel} = require('../models/userModel');
const jwt = require('jsonwebtoken');

const generateToken = async  (user) => {
    const token = await jwt.sign({id: user._id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '30m'});
    return token;
}

const addUser = async (req, res) => {
    try {
        const userExists = await userModel.findOne({_id: req.user});
        if (userExists) {
            return res.status(400).json({error: "User already exists", success: false,statusCode: 400});
        }
        const user = new userModel(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}

const getUser = async (req, res) => {
    try {
        const user = await userModel.findOne({username: req.body.username});
        if (!user) return res.status(400).json({error: "User not found", success: false,statusCode: 400});
        if (user.password !== req.body.password) return res.status(400).json({error: "Wrong password", success: false,statusCode: 400});
        const token = await generateToken({
            _id: user._id,
            username: user.username
        });
        res.json({
            success: true,
            statusCode: 200,
            user: {
                username: user._id,
                token: token,
            },
        });
    } catch (error) {
        console.log(error);
    }
}

const getUserDetails = async (req, res) => {
    try{
        const user = await userModel.findOne({_id: req.user});
        if (!user) return res.status(400).json({error: "User not found", success: false,statusCode: 400});
        res.json({
            success: true,
            statusCode: 200,
            user: {
                username: user.username,
            },
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addUser,
    getUser,
    getUserDetails
};