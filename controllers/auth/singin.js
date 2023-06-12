const User = require("../../models/user");
const bcrypt = require("bcryptjs"); 
// const { HttpError } = require('../../helpers');

const {ctrlWrapper} = require("../../decorators");
const { HttpError } = require("../../helpers");
// const  isValidId   = require("../../middelwares/isValidId");

const singin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(401)
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
     if (!passwordCompare) {
        throw HttpError(401)
    }
    const token = "fdsgs.e21412.fsdgfs";

    res.json({
        token,
    })
}

module.exports = {
    singin: ctrlWrapper(singin),
}