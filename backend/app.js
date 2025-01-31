const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors'); 
const connectDB = require('./db/db');
const app=express();
connectDB();  // Connect to the database
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

module.exports=app;