const express=require('express');
const { captainValidator, loginValidator } = require('../middleware/userValidation');
const { validation } = require('../middleware/validator');
const { registerCaptain, loginCaptain, profileCaptain, logoutCaptain } = require('../controllers/captain.controller');
const { authCaptain } = require('../middleware/auth.middleware');


const router=express.Router();

router.post('/register',captainValidator,validation,registerCaptain);
router.post('/login',loginValidator,validation,loginCaptain);
router.get('/profile',authCaptain,profileCaptain);
router.get('/logout',authCaptain,logoutCaptain);


module.exports=router;