const router = require('express').Router();
const {addProcedure,
    getAllPRocedures,
    getIdProcedure,
    updateProcedure,
    deleteProcedure} = require('../controller/procedure')

// Adding a new Procedure
router.post('/treatment/procedure/addProcedure', addProcedure);
//Get Procedures from the database
router.get('/treatment/procedure/all/1', getAllPRocedures);
//Get specific Procedure from database with the id
router.get('/treatment/procedure/:id', getIdProcedure);
//Update Procedure in Database
router.put('/treatment/procedure/updateProcedure/:id', updateProcedure);
//Delete Procedure in Database
router.delete('/treatment/procedure/deleteProcedure/:id', deleteProcedure);

module.exports = router;