const { hashedPwd, checkPwd } = require('../db/utilits');
const {createCaptain} = require('../services/captain.service.js');  
const captainModel = require('../models/captain.model');

const registerCaptain = async (req, res) => {  
    try {
        const { fullname, email, password,vehicle } = req.body;
        const isCaptainAlreadyExist = await captainModel.findOne({email});
        if (isCaptainAlreadyExist) {
            return res.status(400).json({
                success: false,
                message: 'Captain already exists',
            });
        }
        const hashedPassword = await hashedPwd(password);
        const captain = await createCaptain(
            {
                firstname:fullname.firstname,
                lastname:fullname.lastname,
                email,
                password:hashedPassword,
                color:vehicle.color,
                plate:vehicle.plate,    
                capacity:vehicle.capacity,
                vehicleType:vehicle.vehicleType
            }
        );
        res.status(201).json({
            sucess:true,
            message:'Captain created successfully',
            captain,
        });
    } catch (error) {
        res.status(500).json({ message: error.message+"error controller" });
    }
}

const loginCaptain = async (req, res) => {
    try {
        const { email, password } = req.body;
        const captain = await captainModel.findOne({ email }).select('+password'); 
        if (!captain) {
            return res.status(400).json({
                success: false,
                message: 'Captain not found',
            });
        }
        if(captain){
            const token =await checkPwd(password, captain.password, { id: captain._id });
            res.cookie('token',token);
            if(token===false){
                res.status(401).json({message:'authentication failed'});
            }
            if(token){
            res.status(200).json({
                success:true,
                message:'Captain logged in successfully',
                captain,
                token,
             });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { registerCaptain ,loginCaptain};