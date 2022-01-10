const router = require('express').Router();
const {findUserWithEmail} = require('../controller/employees')

router.post('/', findUserWithEmail);

module.exports = router;