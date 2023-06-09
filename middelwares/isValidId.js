
const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = ( id) => {
    if (!isValidObjectId(id)) {
        throw HttpError(400, `Not valid ID: ${id}`);
    }
};


module.exports = isValidId;