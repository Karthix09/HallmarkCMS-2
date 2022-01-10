
const mongoose = require('mongoose');

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
        type: Number,
    }

})

const userDTO = new mongoose.Schema({   

    companyId: {
        type: Number, 
    },
    companyName: {
        type: String, 
    },
    customSchedules: {
        type: Array, 
    },
    firstName: {
        type: String, 
    },
    id: {
        type: Number, 
    },
    lastLoginDate: {
        type: Date, 
    },
    lastName: {
        type: String, 
    },
    loginId: {
        type: Number, 
    },
    middleName: {
        type: String, 
    },
    recordStatus: {
        type: String, 
    },
    userEmail: {
        type: String, 
    },
    userPassword: {
        type: String, 
    },
    userPhone: {
        type: Number, 
    },
    userRolesList: {
        type: Array, 
    },
    userStatus: {
        type: String, 
    },
    weeklyScheduleDTOList: {
        type: Array, 
        
    }

})




const data = new mongoose.Schema({  //CONTINUE

    advanceAmountUsed: {
        type: Number,
    },
    bankName: {
        type: String,
    },
    cancelledDate: {
        type: Date,
    },
    companyId: {
        type: Number,
    },
    enteredBy: {
        type: Number,
    },
    id: {
        type: Number,
    },
    isCancelled: {
        type: String,
    },
    loginId: {
        type: String,
    },
    notes: {
        type: String,
    },
    patientId: {
        type: Number,
    },
    paymentDate: {
        type: Date,
    },
    paymentDetails: {
        type: Array,
    },

    paymentModeDTO: paymentModeDTO,

    paymentModeId: {
        type: Number,
    },
    paymentNo: {
        type: Number,
    },
    paymentNowAmount: {
        type: Number,
    },
    paymentRefNo: {
        type: Number,
    },
    recordStatus: {
        type: String,
    },
    updatedPatientCredit: {
        type: Number,
    },

    userDTO: userDTO

})

module.exports = mongoose.model('PatientPayment', data);
