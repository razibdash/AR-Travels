const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors'); 
const cookieParser=require('cookie-parser');
const connectDB = require('./db/db');
const app=express();
connectDB();  // Connect to the database
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const userRoutes=require('./routes/user.routes');
app.use(cookieParser());
app.use('/users',userRoutes); // Add the users route to the app

app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
}); 
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
}); 


module.exports=app;