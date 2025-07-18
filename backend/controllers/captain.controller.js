const { hashedPwd, checkPwd } = require('../db/utilits');
const {createCaptain} = require('../services/captain.service.js');  
const captainModel = require('../models/captain.model');
const blacklistTokenSchema=require('../models/blacklistToken.model');
const e = require('express');

//register captain controller 
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
        const captain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color:vehicle.color,
            plate:vehicle.plate,    
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType
        });
        return res.status(201).json({
            success: true,
            message: 'Captain created successfully',
            captain,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message + " error controller" });
    }
}

//login captain controller
const loginCaptain = async (req, res) => {
    try {
        const { email, password } = req.body;
        const captain = await captainModel.findOne({ email }).select('+password'); 
        if (!captain) {
              res.status(400).json({
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

//profile captain controller
const profileCaptain = async (req, res) => {
    try {
        res.status(200).json({
            success:true,
            message:'Captain profile fetched successfully',
            captain:req.captain,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//logout captain controller
const logoutCaptain = async (req, res) => {
    try {
    const token=req.cookies.token||req.headers.authorization?.split(' ')[1];
    // console.log(token);
    const blacklistToken=await blacklistTokenSchema.create({token});
    if(blacklistToken){
        req.clearCookie('token');
        res.status(200).json({
            success:true,
            message:'Captain logged out successfully',
        });
    }
    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { registerCaptain ,loginCaptain,profileCaptain,logoutCaptain};