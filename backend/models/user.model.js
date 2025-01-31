const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({ 
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be at least 3 characters long'],
        },
        lastname:{
            type:String,
            minlength:[3,'Last name must be at least 3 characters long'],
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be at least 5 characters long'],
    },
    password:{
        type:String,
        required:true,
        select:false,
       
    },
    soketId:{
        type:String,
       
    },

 });

 userSchema.methods.generateAuthToken=function(){
    const token= jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    });
    return token;
 };

 userSchema.methods.compsrePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
 }

 userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
 }  

    const User=mongoose.model('user',userSchema);

    module.exports=User;