
const mongoose = require('mongoose');

const data = new mongoose.Schema({

    lookupKey: {
        type: String,
    },
    companyId: {
        type: Number,
    },
    lookupType: {
        type: String,
    },
    lookupValue: {
        type: String,
    },
})



module.exports = mongoose.model('Lookup', data);
