const express = require('express'); 
const  {registrationValidator, loginValidator}  = require('../middleware/userValidation');
const { validation } = require('../middleware/validator');
const { registerUser, loginUser, userProfile, logoutUser } = require('../controllers/user.controller');
const  authUser  = require('../middleware/auth.middleware');
const router = express.Router();    

router.post('/register',registrationValidator,validation,registerUser);
router.post('/login',loginValidator,validation,loginUser);

router.get('/profile',authUser,userProfile);
router.get('/logout',authUser,logoutUser);
module.exports = router;