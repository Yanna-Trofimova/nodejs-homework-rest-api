const Joi = require('joi'); 

const contactAddSheme = Joi.object({
  name: Joi.string().required().messages({
    'any.required': `"name" is a required field`
  }),
  email: Joi.string().required().messages({
    'any.required': `"email" is a required field`
  }),
  phone: Joi.string().required().messages({
    'any.required': `"phone" is a required field`
  })
})


module.exports = {
    contactAddSheme, 
}