const { Schema, model } = require("mongoose");

const { handelMongooseError } = require("../middelwares");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handelMongooseError);


const Contact = model('contact', contactSchema);

module.exports = Contact;