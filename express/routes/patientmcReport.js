
// MAKE CHANGES 
const router = require('express').Router();
const {patientmcReport, getmcReport} = require('../controller/patientmcReport')

router.post('/patient/mcReport', patientmcReport);
router.get('/patient/getmcReport/:id', getmcReport)

module.exports = router;