
const mongoose = require('mongoose');

const data = new mongoose.Schema({

    companyId: {
        type: Number,
    },
    courtAttendance: {
        type: String,
    },
    doctorId: {
        type: Number,
    },
    doctorName: {
        type: String,
    },
    excuseDutyDays: {
        type: String,
    },
    excuseDutyEndDate: {
        type: String,
    },
    excuseDutyStartDate: {
        type: String,
    },
    fitDutyEndDate: {
        type: String,
    },
    fitDutyStartDate: {
        type: String,
    },
    medicalCertificateNo: {
        type: Number,
    },
    notes: {
        type: String,
    },
    patientId: {
        type: String,
    },
    proofAttendEndDateTime: {
        type: Date,
    },
    proofAttendStartDateTime: {
        type: Date,
    },
    dateAdded: {
        type: Date,
    }
})

module.exports = mongoose.model('PatientMc', data);
