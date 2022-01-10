
// MAKE CHANGES 
const router = require('express').Router();
const {addInvoice, searchLedger, getAllInvoice, getInvoiceById, UpdateInvoice} = require('../controller/patientInvoice')

//Adding PatientInvoice to database
router.post('/invoice/addInvoice', addInvoice);
router.get('/patient/allLedgers/:id', searchLedger);
// Getting all invoices from database
router.get('/invoice/all/:id', getAllInvoice);

router.get('/invoice/:id', getInvoiceById);

router.put('/invoice/updateInvoice/:id', UpdateInvoice);



module.exports = router;