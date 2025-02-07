const { hashedPwd } = require('../db/utilits');
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

module.exports = { registerCaptain }