
const mongoose = require('mongoose');

const vendorDTO = new mongoose.Schema({

    recordStatus: {
        type: String,
    },
    id: {
        type: Number,
    },
    loginId: {
        type: String,
    },
    vendorName: {
        type: String,
    },
    vendorDesc: {
        type: String,
    },
    companyId: {
        type: Number,
    },
    isActive: {
        type: String
    }
})

const paymentModeDTO = new mongoose.Schema({   

    companyId: {
        type: Number,                                               
    },
    id: {
        type: Number,
    },
    isActive: {
        type: String,
    },
    loginId: {
        type: String,
    },
    paymentModeName: {
        type: String,
    },
    paymentType: {
        type: String,
    },
    recordStatus: {
        type: String,
    },
    vendorFee: {
        type: Number
    }

})


const data = new mongoose.Schema({

    bankName: {
        type: String,
    },
    companyDTO: {
        type: String,
    },
    companyId: {
        type: Number,
    },
    deleteDate: {
        type: String,
    },
    expenseAmount: {
        type: Number,
    },
    expenseDate: {
        type: String,
    },
    expenseNotes: {
        type: String,
    },
    expenseType: {
        type: String,
    },
    expenseTypeDesc: {
        type: String,
    },
    id: {
        type: Number,
    },
    isDeleted: {
        type: String,
    },
    deletedDate: {
        type: Date,
    },
    loginId: {
        type: Number,
    },
    paymentModeId: {
        type: Number,
    },
    invoiceDate: {
        type: Date,
    },
    paymentRefNo: {
        type: Number,
    },
    recordStatus: {
        type: String,
    },
    vendorId: {
        type: Number,
    },
    vendorName: {
        type: String,
    },

    vendorDTO: vendorDTO,
    paymentModeDTO: paymentModeDTO


})

module.exports = mongoose.model('Expense', data);

// module.exports = mongoose.model('Expensedata', Expensedata);