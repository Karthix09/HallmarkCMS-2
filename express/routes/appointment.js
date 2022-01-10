const router = require('express').Router();

const {appointmentCount,
     addAppointment,
     allAppointment,
     updateAppointment,
     deleteAppointment,
     getDoctorAppointment} = require('../controller/appointment')

router.post('/appointmentCount', appointmentCount);
router.post('/addAppointment', addAppointment);
router.post('/all', allAppointment);
router.put('/updateAppointment/:id', updateAppointment);
router.put('/deleteAppointment/:id', deleteAppointment);
router.post('/:id', getDoctorAppointment)

module.exports = router;