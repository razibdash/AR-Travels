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
    check("vehicle.color").isLength({min:3}).withMessage("Color is missing"),
    check("vehicle.plate").isLength({min:3}).withMessage("Plate is missing"),
    check("vehicle.capacity").isLength({min:1}).withMessage("Capacity is missing"),
    check("vehicle.vehicleType").isIn(['car','motorcycle','auto']).withMessage("Vehicle type is missing"),
   ];
module.exports={registrationValidator,loginValidator,captainValidator};