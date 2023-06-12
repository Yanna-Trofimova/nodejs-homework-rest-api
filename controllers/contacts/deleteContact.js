const Contact = require("../../models/contacts");

const { HttpError } = require('../../helpers');

const {ctrlWrapper} = require("../../decorators")
const  isValidId   = require("../../middelwares/isValidId");

const deleteContact = async (req, res) => {
  
  const { contactId } = req.params;
  isValidId(contactId);
    const result = await Contact.findByIdAndDelete (contactId);
    if (!result) {
      throw HttpError(404, `Contacts with ${contactId} not found`);
    }
      res.json({
      message:"Delete success"
    })
}

     
module.exports = {
 
  deleteContact: ctrlWrapper(deleteContact),
  
}