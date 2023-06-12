const Contact = require("../../models/contacts");

const { HttpError } = require('../../helpers');

const {ctrlWrapper} = require("../../decorators")
const  isValidId   = require("../../middelwares/isValidId");

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    isValidId(contactId);
      const result = await Contact.findByIdAndUpdate(contactId, req.body, {new:true});
       if (!result) {
      throw HttpError(404, `Contacts with ${contactId} not found`);
      } 
    res.json(result)
}

module.exports = {
 
  updateContact: ctrlWrapper(updateContact)
  
}