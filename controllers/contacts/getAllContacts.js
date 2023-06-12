const Contact = require("../../models/contacts");
const {ctrlWrapper} = require("../../decorators")


const getAllContacts = async (req, res, ) => {
 
  const result = await Contact.find({}, "-__v");
    res.json(result)
  
}

     
module.exports = {
 
  getAllContacts: ctrlWrapper(getAllContacts),
  
}