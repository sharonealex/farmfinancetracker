const {Farmer} = require("../models")

module.exports = {
    async createUser({body}, res){
        console.log(body, 'inside server')
        const user = await Farmer.create(body);
        if(!user) {
            console.log("error");
            return res.status(400).json({ message: 'Unable to create user' });
        }
        return res.status(200).json(user);
    }
}