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



router.get('/', getAllContacts);

router.get('/:contactId',  getContactById);

router.post('/', validateBody(schemas.contactAddSheme), addContact);

router.delete('/:contactId', deleteContact)

router.put('/:contactId',  validateBody(schemas.contactUpdateSchema), validateBody(schemas.contactAddSheme), updateContact);


router.patch('/:contactId/favorite',  validateBody(schemas.contactUpdateFavoriteShema), updateFavorite);

 

module.exports = router; 


