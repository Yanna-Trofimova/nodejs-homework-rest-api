const Contact = require("../models/contacts");

const { HttpError } = require('../helpers');

const {ctrlWrapper} = require("../decorators")
const  isValidId   = require("../middelwares");

// const { isValidObjectId } = require("mongoose");

// const isValidId = (req ) => {
//     const { contactId } = req.params;
//     if (!isValidObjectId(contactId)) {
//         throw HttpError(400, `Not valid ID: ${contactId}`);
//     }
// };



const getAllContacts = async (req, res, ) => {
 
  const result = await Contact.find({}, "-__v");
    res.json(result)
  
}

// const getContactById = async (req, res) => {

//     const { contactId } = req.params;
//     const result = await Contact.findById(contactId);
//     if (!result) {
//       throw HttpError(404, `Contacts with ${contactId} not found`);
//     }
//     res.json(result)

// }


const getContactById = async (req, res) => {
    const { contactId } = req.params;
    // if (!isValidObjectId(contactId)) {
    //     throw HttpError(400, `Not valid ID: ${contactId}`);
    // }
  isValidId(contactId);
  
    const result = await Contact.findById(contactId);
    if (!result) {
        throw HttpError(404, `Contacts with ${contactId} not found`);
    }
    res.json(result);
};

const addContact = async (req, res) => {
   
    const result = await Contact.create(req.body);
    res.status(201).json(result);

}

const updateContact = async (req, res) => {

      const { contactId } = req.params;
      const result = await Contact.findByIdAndUpdate(contactId, req.body, {new:true});
       if (!result) {
      throw HttpError(404, `Contacts with ${contactId} not found`);
      } 
    res.json(result)
}
  
const updateFavorite = async (req, res) => {

  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Contacts with ${contactId} not found`);
  }
  res.json(result)
};

const deleteContact = async (req, res) => {
  
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete (contactId);
    if (!result) {
      throw HttpError(404, `Contacts with ${contactId} not found`);
    }
      res.json({
      message:"Delete success"
    })

 
}

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  deleteContact: ctrlWrapper(deleteContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
   updateFavorite: ctrlWrapper(updateFavorite),
}