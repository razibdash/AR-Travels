const userServices = require('../services/user.service');
const userModel = require('../models/user.model');
const { hashedPwd, checkPwd } = require('../db/utilits');
const blacklistTokenSchema=require('../models/blacklistToken.model');

const registerUser = async (req, res) => {  
    try {
         const {fullname,email,password} = req.body;
         const hashedPassword = await hashedPwd(password);
         const user = await userServices.createUser(
            {
                firstname:fullname.firstname,
                lastname:fullname.lastname,
                email,
                password:hashedPassword
            }
        );   
         res.status(201).json({
            sucess:true,
            message:'User created successfully',
            user,
         });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({message:'All fields are required'});
        }
        const user = await userModel.findOne({email: email }).select('+password');  
        
        if (!user) {
            res.status(401).json({message:'Invalid login credentials'});
        }   
        if(user){
            const token =await checkPwd(password, user.password, { id: user._id });
            res.cookie('token',token);
            if(token===false){
                res.status(401).json({message:'Invalid login credentials'});
            }
            if(token){
            res.status(200).json({
                success:true,
                message:'User logged in successfully',
                user,
                token,
             });
            }
        }
    }catch (error) {
            res.status(401).json({ error: error.message });
        }
}

const userProfile=async(req,res)=>{
    try {
        res.status(200).json({
            success:true,
            message:'User profile fetched successfully',
            user:req.user,
        });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

const logoutUser=async(req,res)=>{
    res.clearCookie('token');
    const token=req.cookies.token||req.headers.authorization.split(' ')[1];
    const blacklistToken=await blacklistTokenSchema.create({token});
    res.status(200).json({message:'User logged out successfully'});


}
module.exports = { registerUser ,loginUser,userProfile,logoutUser};