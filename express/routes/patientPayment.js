// MAKE CHANGES 
const router = require('express').Router();
const {addPayment, getPayment} = require('../controller/patientPayment')

router.post('/payment/addPayment', addPayment);

//Getting all Payments from database
router.get('/payment/all/:id', getPayment);

module.exports = router;