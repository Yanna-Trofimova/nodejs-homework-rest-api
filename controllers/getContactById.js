const Contact = require("../models/contacts");

const { HttpError } = require('../helpers');

const {ctrlWrapper} = require("../decorators")
const  isValidId   = require("../middelwares/isValidId");


const getContactById = async (req, res) => {
    const { contactId } = req.params;
    isValidId(contactId);
  
    const result = await Contact.findById(contactId);
    if (!result) {
        throw HttpError(404, `Contacts with ${contactId} not found`);
    }
    res.json(result);
};

module.exports = {
 
  getContactById: ctrlWrapper(getContactById)
  
}