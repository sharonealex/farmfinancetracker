const {Farmer} = require("../models");
const { signToken } = require('../utils/auth');

module.exports = {
    async createUser({body}, res){
        console.log(body, 'inside server')
        const user = await Farmer.create(body);
        const token = signToken(user);
        console.log(token, "token")
        if(!user) {
            console.log("error");
            return res.status(400).json({ message: 'Unable to create user' });
        }
        return res.status(200).json({token, user});
    }
}