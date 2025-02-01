const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const authUser=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1]; 
    try {
        if(!token){
            return res.status(401).json({message:'Unauthorized access!'});
        }
        const isBlacklisted=await userModel.findOne({token});
        if(isBlacklisted){
            return res.status(401).json({message:'Unauthorized access!'});
        }   
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded.id);
        req.user=user;
        next();
    } catch (error) {
        res.status(401).json({message:error.message});
    }
}

module.exports=authUser;