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
    },
    async loginUser({body}, res){
        console.log(body.email, 'inside login user');
        try{ 
            const user = await Farmer.findOne({where: {email: body.email}});
            console.log("user from db", user)
        if(!user){
           return res.status(400).json({ message: 'Incorrect email or password, please try again'})
        }
        const token = signToken(user);
        return res.json({ token, user });
      //  const validPassword = await Farmer.checkPassword(body.password);
        
        if (false) { //to be changed later
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }
        }
        catch(e){
            console.log(e)
        }
       
        
    }
}