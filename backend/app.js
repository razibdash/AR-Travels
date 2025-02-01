const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors'); 
const connectDB = require('./db/db');
const app=express();
connectDB();  // Connect to the database
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const userRoutes=require('./routes/user.routes');
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use('/users',userRoutes); // Add the users route to the app

module.exports=app;