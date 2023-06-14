const express = require('express');

const router = express.Router();
const { getAllContacts } = require('../../controllers/contacts/getAllContacts');
const { getContactById } = require('../../controllers/contacts/getContactById');
const { addContact } = require('../../controllers/contacts/addContact');
const { deleteContact } = require('../../controllers/contacts/deleteContact');
const { updateContact } = require('../../controllers/contacts/updateContact');
const { updateFavorite } = require('../../controllers/contacts/updateFavorite');
const validateBody = require('../../decorators/validateBody.js');

const schemas = require("../../schemas/contacts.js");

const { auteticate } = require("../../middelwares");

// router.use(auteticate);

router.get('/', auteticate , getAllContacts);

router.get('/:contactId', auteticate, getContactById);

router.post('/', validateBody(schemas.contactAddSheme),auteticate, addContact);

router.delete('/:contactId', auteticate , deleteContact)

router.put('/:contactId',  validateBody(schemas.contactUpdateSchema), validateBody(schemas.contactAddSheme), auteticate, updateContact);


router.patch('/:contactId/favorite',  validateBody(schemas.contactUpdateFavoriteShema), auteticate,  updateFavorite);

 

module.exports = router; 


