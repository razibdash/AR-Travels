const userServices = require('../services/user.service');
const userModel = require('../models/user.model');
const registerUser = async (req, res) => {  
    try {
         const {fullname,email,password} = req.body;
         const hashedPassword = await userModel.hashPassword(password);
         const user = await userServices.createUser(
            {
                firstname:fullname.firstname,
                lastname:fullname.lastname,
                email,
                password:hashedPassword
            }
        );   
        console.log(user);
         const token=await userModel.generateAuthToken();
         res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { registerUser };