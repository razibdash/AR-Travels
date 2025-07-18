const mongoose=require('mongoose');

const captainSchema=new mongoose.Schema({
    fullname:{
       firstname:{
           type:String,
           required:true,
           minlenth:[3,'Please enter a valid name'],
       },
       lastname:{
           type:String,
       }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true, 
        match:[/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'Please enter a valid email']
    },
   
    password:{
        type:String,
        required:true,
        select:false
    },
    soketId:{   
        type:String,
        
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            minlenth:[10,'Please enter a valid color'],
        },
        plate:{
            type:String,
           
            minlenth:[10,'Please enter a valid plate number'],
        },
        capacity:{
            type:Number,
          
            min:[1,'Please enter a valid capacity'],
        },
        vehicleType:{
            type:String,
            enum:['car','motorcycle','auto'],
            
       },
     },
     location:{
       lat:{
           type:Number,
          
       },
         lng:{
              type:Number,
             
         },
      },
      
});

const Captain=mongoose.model('Captain',captainSchema);
module.exports=Captain;