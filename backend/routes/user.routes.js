const express = require('express'); 
const  {registrationValidator, loginValidator}  = require('../middleware/userValidation');
const { validation } = require('../middleware/validator');
const { registerUser, loginUser } = require('../controllers/user.controller');
const router = express.Router();    

router.post('/register',registrationValidator,validation,registerUser);
router.post('/login',loginValidator,validation,loginUser);
module.exports = router;