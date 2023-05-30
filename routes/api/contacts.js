const express = require('express');

const router = express.Router();
const contactsController = require('../../controllers/contacts-controller.js');

const shemas = require("../../shemas/contacts.js");
const { validateBody } = require("../../decorators");



router.get('/', contactsController.getAllContacts)

router.get('/:contactId', contactsController.getContactById)

router.post('/',validateBody(shemas.contactAddSheme),  contactsController.addContact)

router.delete('/:contactId', contactsController.deleteContact)

router.put('/:contactId',validateBody(shemas.contactAddSheme),  contactsController.updateContact)

module.exports = router


