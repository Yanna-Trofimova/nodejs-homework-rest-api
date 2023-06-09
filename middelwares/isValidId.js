
const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = ( id) => {
//   const { contactId } = req.params;
//   if (!isValidObjectId(contactId)) {
//     next(HttpError(404, `${contactId} invalid id format`));
//   }
//   next();
    // const { contactId } = req.params;
    if (!isValidObjectId(id)) {
        throw HttpError(400, `Not valid ID: ${id}`);
    }
};


module.exports = isValidId;