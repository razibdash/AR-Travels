const captainModel = require('../models/captain.model');
const createCaptain = async ({firstname,lastname,email,password,color,plate,capacity,vehicleType}) => {  
    try {
       if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
            throw new Error('All fields are required');
        }   
        const captain =  captainModel.create(
            {
            fullname:{
            firstname,
            lastname
           },
            email,
            password,
            vehicle:{
                color,
                plate,
                capacity,
                vehicleType
            }
        });
        return captain;
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {createCaptain};