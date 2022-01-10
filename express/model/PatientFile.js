const mongoose = require('mongoose');

const data = new mongoose.Schema({

    companyId: {
        type: Number,
    },
    fileDate: { //Continue copy from payload
        type: Date,
    },
    fileName: {
        type: String,
    },
    filePath: {
        type: String,
    },
    fileType: {
        type: String,
    },
    id: {
        type: Number,
    },
    imageFile: {
        type: String
    },
    imageFileName: { 
        type: String,
    },
    isSystemGenerated: {
        type: String,
    },
    loginId: {
        type: String,
    },
    patientId: {
        type: Number,
    },
    recordStatus: {
        type: String
    }
})

module.exports = mongoose.model('PatientFile', data);
