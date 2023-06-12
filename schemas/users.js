const Joi = require('joi'); 

// const { emailRegexp } = require("../constans/users");

const userAddSheme = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  
});


const userLoginSheme = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  
});

module.exports = {
    userAddSheme,
    userLoginSheme,
}