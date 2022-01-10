const router = require('express').Router();
const {addTreatment, getPatientTreatment, getProcedureName,getPatientTreatmentById,updateTreatment} = require('../controller/patientProcedure')

router.post('/treatment/addTreatment', addTreatment);

//GET PATIENTS COMPLETED PROCEDURES NOT WORKING 

router.get('/treatment/all/:id', getPatientTreatment);

router.get('/treatment/:id', getPatientTreatmentById);

router.get('/procedure/name/:id', getProcedureName);

router.put('/treatment/updateTreatment/:id', updateTreatment);

module.exports = router;