const express = require('express');

const router = express.Router();
const contactsController = require('../../controllers/contacts-controller.js');
// const { isValidId } = require("../../middelwares");
const validateBody = require('../../decorators/validateBody.js');

const schemas = require("../../schemas/contacts.js");



router.get('/', contactsController.getAllContacts);

router.get('/:contactId', contactsController.getContactById);

router.post('/', validateBody(schemas.contactAddSheme), contactsController.addContact);

router.delete('/:contactId', contactsController.deleteContact)

router.put('/:contactId',  validateBody(schemas.contactUpdateSchema), validateBody(schemas.contactAddSheme), contactsController.updateContact);


router.patch('/:contactId/favorite',  validateBody(schemas.contactUpdateFavoriteShema), contactsController.updateFavorite);

 

module.exports = router; 



// router.get("/:id", isValidId, contactsController.getContactById);

// router.post(
//   "/",
//   validateBody(schemas.contactAddSchema),
//   contactsController.addContact
// );

// router.put(
//   "/:id",
//   isValidId,
//   validateBody(schemas.contactUpdateSchema),
//   validateBody(schemas.contactAddSchema),
//   contactsController.updateContactById
// );

// router.patch(
//   "/:id/favorite",
//   isValidId,
//   validateBody(schemas.contactUpdateFavoriteSchema),
//   contactsController.updateStatusContact
// );

// router.delete("/:id", isValidId, contactsController.removeContact);

// module.exports = router;