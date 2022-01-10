
const mongoose = require('mongoose');

const data = new mongoose.Schema({

    balanceAmount: {
        type: Number,
    },
    companyId: { //Continue copy from payload
        type: Number,
    },
    creditAmount: {
        type: Number,
    },
    debitAmount: {
        type: Number,
    },
    id: {
        type: Number,
    },
    invoiceId: {
        type: Number,
    },
    invoiceNo: {
        type: Number
    },
    ledgerDate: {
        type: Date,
    },
    ledgerDetail: {
        type: String,
    },
    patientId: {
        type: Number,
    },
    paymentId: {
        type: Number
    },
    paymentNo: {
        type: String
    }
})

module.exports = mongoose.model('PatientLedger', data);