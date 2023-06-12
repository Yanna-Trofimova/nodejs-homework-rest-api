const express = require('express');
const schemas = require('../../schemas/users');
const validateBody = require('../../decorators/validateBody.js');

const { singup } = require('../../controllers/auth/singup');
const { singin } = require('../../controllers/auth/singin');

const router = express.Router();

router.post('/singup', validateBody(schemas.userAddSheme), singup);

router.post('/singin', validateBody(schemas.userLoginSheme), singin);

module.exports = router;  