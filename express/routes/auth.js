const router = require('express').Router();
const {register, loginNow} = require('../controller/auth')

router.post('/register', register);
router.post('/login', loginNow)

module.exports = router;