
const mongoose = require('mongoose');

const data = new mongoose.Schema({

    clinicalNote: {
        type: String,
    },
    followupAppointmentDate: { //Continue copy from payload
        type: Date,
    },
    id: {
        type: Number,
    },
    loginId: {
        type: String,
    },
    noteCreatedBy: {
        type: Number,
    },
    noteDate: {
        type: Date,
    },
    patientId: {
        type: Number
    }
})

module.exports = mongoose.model('PatientNote', data);
