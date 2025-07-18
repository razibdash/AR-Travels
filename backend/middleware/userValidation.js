const {check}=require('express-validator');

const registrationValidator=[
    check("email")
    .notEmpty()
    .withMessage("email is missing")
    .isEmail()
    .withMessage("not a valid email!"),
    check("fullname.firstname").isLength({min:3}).withMessage("First name is missing"),
    check("password").isLength({min:6}).withMessage("password is missing"),
]

const loginValidator=[
    check("email")
    .notEmpty()
    .withMessage("email is missing")
    .isEmail()
    .withMessage("not a valid email!"),
    check("password").isLength({min:6}).withMessage("password is missing"),
]

const captainValidator=[ 
    check("fullname.firstname").isLength({min:3}).withMessage("First name is missing"),
    check("email")
    .notEmpty()
    .withMessage("email is missing")
    .isEmail()
    .withMessage("not a valid email!"),
    check("password").isLength({min:6}).withMessage("password is missing"),
   ];
module.exports={registrationValidator,loginValidator,captainValidator};