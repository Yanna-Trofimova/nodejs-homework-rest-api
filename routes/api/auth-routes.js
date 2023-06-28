const express = require('express');
const schemas = require('../../schemas/users');
const validateBody = require('../../decorators/validateBody.js');
// const jwt = require("jsonwebtoken");

const { register } = require('../../controllers/auth/register');
const { login } = require('../../controllers/auth/login');
const { getCurrent } = require('../../controllers/auth/getCurrent');
const { logout } = require('../../controllers/auth/logout');
const { updateStatusUser } = require('../../controllers/auth/updateStatusUser');
const { UpdateAvatarURL } = require('../../controllers/auth/UpdateAvatarURL');

const router = express.Router();

const { auteticate, upload} = require("../../middelwares");

router.post('/register', validateBody(schemas.registerSchema), register);

router.post('/login', validateBody(schemas.loginSchema), login);

router.get("/current", auteticate, getCurrent);

router.get("/logout", auteticate, logout);

router.patch("/", validateBody(schemas.updateStatusSchema), auteticate, updateStatusUser);

router.patch( "/avatars", auteticate, upload.single("avatar"), UpdateAvatarURL);


module.exports = router;  



