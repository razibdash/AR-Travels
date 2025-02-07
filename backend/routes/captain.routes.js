const express=require('express');
const { captainValidator } = require('../middleware/userValidation');
const { validation } = require('../middleware/validator');
const { registerCaptain } = require('../controllers/captain.controller');

const router=express.Router();

router.post('/register',captainValidator,validation,registerCaptain);


module.exports=router;