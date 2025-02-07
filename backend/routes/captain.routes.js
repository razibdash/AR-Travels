const express=require('express');
const { captainValidator, loginValidator } = require('../middleware/userValidation');
const { validation } = require('../middleware/validator');
const { registerCaptain, loginCaptain } = require('../controllers/captain.controller');

const router=express.Router();

router.post('/register',captainValidator,validation,registerCaptain);
router.post('/login',loginValidator,validation,loginCaptain);

module.exports=router;