const Contact = require("../../models/contacts");

const {ctrlWrapper} = require("../../decorators")


const addContact = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
    res.status(201).json(result);

}


     
module.exports = {
 
  addContact: ctrlWrapper(addContact),
  
}

