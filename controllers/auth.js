const {UserSchema} = require('../schema/userSchema');

const addUser = async (req, res) => {
    try {
        const userExists = await UserSchema.findOne({username: req.body.username});
        if (userExists) {
            return res.status(400).json({error: "User already exists"});
        }
        const user = new UserSchema(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {addUser};