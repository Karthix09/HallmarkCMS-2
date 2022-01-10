
const mongoose = require('mongoose');

const procedureSchema = new mongoose.Schema({

    recordStatus: {
        type: String,
    },
    id: {
        type: Number,
    },
    loginId: {
        type: Number,
        required: true
    },
    procedureName: {
        type: String,
        required: true
    },
    procedureNotes: {
        type: String,
        required: true
    },
    parentProcedureId: {
        type: Number
    },
    price: {
        type: Number,
        required: true
    },
    taxId: {
        type: Number
    },
    companyId: {
        type: Number,
        required: true
    },
    taxDTO: {
        type: Number
    },
    companyDTO: {
        type: Number,
    }
})



module.exports = mongoose.model('Procedure', procedureSchema);
