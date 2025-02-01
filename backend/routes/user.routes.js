const express = require('express'); 
const  {registrationValidator}  = require('../middleware/userValidation');
const { validation } = require('../middleware/validator');
const { registerUser } = require('../controllers/user.controller');
const router = express.Router();    

router.post('/register',registrationValidator,validation,registerUser);

module.exports = router;