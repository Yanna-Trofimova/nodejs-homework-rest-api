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
  }),
  favorite: Joi.boolean(),
  // owner: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'user',
  //   }
})

const contactUpdateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
})
  .min(1)
  .message("missing fields");

const contactUpdateFavoriteShema = Joi.object ({
  favorite: Joi.boolean().required()
});



module.exports = {
  contactAddSheme, 
  contactUpdateFavoriteShema,
  contactUpdateSchema
}