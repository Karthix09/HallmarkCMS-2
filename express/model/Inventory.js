
const mongoose = require('mongoose');

const data = new mongoose.Schema({

    allowPrescription: {
        type: String,
    },
    avaialableStock: { //Continue copy from payload
        type: Number,
    },
    companyDTO: {
        type: String,
    },
    companyId: {
        type: Number,
    },
    drugType: {
        type: String,
    },
    expiredStock: {
        type: Number,   
    },
    id: {
        type: Number,
    },
    instructions: {
        type: String,
    },
    itemCode: {
        type: Number,
    },
    itemName: {
        type: String,
    },
    itemType: {
        type: String,
    },
    loginId: {
        type: Number,
    },
    manufacturerId: {
        type: String,
    },
    recordStatus: {
        type: String,
    },
    reorderLevel: {
        type: Number,
    },
    retailPrice: {
        type: Number,
    },
    stockingUnit: {
        type: String,
    },
    strength: {
        type: Number,
    },
    strengthUnit: {
        type: Number,
    },
    taxDTO: {
        type: String,
    },
    taxId: {
        type: String,
    },
    totalStock: {
        type: Number,
    }

})

module.exports = mongoose.model('Inventory', data);
