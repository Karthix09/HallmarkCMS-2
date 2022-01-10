// MAKE CHANGES 
const router = require('express').Router();
const {addNote, getNote, updateNote, getNotebyId} = require('../controller/patientNotes')


// PROBLEM: NOTES ARE BEING SAVED FOR ALL THE PATIENTS

//Adding notes to database
router.post('/patient/notes/addNote', addNote);

//Getting notes from database
router.get('/patient/notes/all/:id', getNote);

//router.post('/patient/notes/updateNote/:id', updateNote);
router.post('/patient/notes/updateNote', updateNote);

router.get('/patient/notes/:id', getNotebyId);

module.exports = router;