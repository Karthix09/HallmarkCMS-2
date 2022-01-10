
const mongoose = require('mongoose');

const userDTO = new mongoose.Schema({ //CONTINUUE

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


const proceduresDTO = new mongoose.Schema({ //CONTINUUE

    companyDTO: {
        type: String, 
    },
    companyId: {
        type: Number, 
    },
    id: {
        type: Number, 
    },
    loginId: {
        type: Number, 
    },
    parentProcedureId: {
        type: Number, 
    },
    price: {
        type: Number, 
    },
    procedureName: {
        type: String, 
    },
    procedureNotes: {
        type: String, 
    },
    recordStatus: {
        type: String, 
    },
    taxDTO: {
        type: String, 
    },
    taxId: {
        type: Number 
    }
})

const itemMasterDTO = new mongoose.Schema({

    allowPrescription: {
        type: String, 
    },
    avaialableStock: {
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
        type: String, 
    },
    itemName: {
        type: String, 
    },
    itemType: {
        type: String, 
    },
    itemTypeDesc: {
        type: Number, 
    },
    loginId: {
        type: String, 
    },
    manufacturerId: {
        type: Number, 
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
    taxId: {
        type: Number, 
    },
    totalStock: {
        type: Number, 
    }
})

const invoiceDetails = new mongoose.Schema({

    amount: {
        type: Number, 
    },
    discountAmount: {
        type: Number, 
    },
    discountPercentage: {
        type: Number, 
    },
    id: {
        type: Number, 
    },
    invoiceId: {
        type: Number, 
    },
    itemId: {
        type: Number, 
    },

    itemMasterDTO: itemMasterDTO,

    loginId: {
        type: String, 
    },
    notes: {
        type: String, 
    },
    price: {
        type: Number, 
    },
    procedureId: {
        type: Number, 
    },

    proceduresDTO: proceduresDTO,

    quantity: {
        type: Number, 
    },
    recordStatus: {
        type: String, 
    },
    taxAmount: {
        type: Number, 
    },
    taxDTO: {
        type: String, 
    },
    taxId: {
        type: Number, 
    },
    treatmentCompletedBy: {
        type: String, 
    },
    treatmentCompletionDate: {
        type: Date, 
    },
    userDTO: {
        type: String, 
    }
})

const data = new mongoose.Schema({ //CONTINUUE

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
    invoiceComments: {
        type: String, 
    },
    invoiceDate: {
        type: Date, 
    },

    invoiceDetails: [invoiceDetails],

    invoiceNo: {
        type: Number, 
    },
    isCancelled: {
        type: String, 
    },
    loginId: {
        type: String, 
    },
    paidAmount: {
        type: Number, 
        default: 0
    },
    patientId: {
        type: Number, 
    },
    pendingPayment: {
        type: String, 
    },
    recordStatus: {
        type: String, 
    },
    subTotal: {
        type: Number, 
    },
    totalAmount: {
        type: Number, 
    },
    totalDiscount: {
        type: Number, 
    },
    totalTax: {
        type: Number, 
    },
    treatmentId: {
        type: Number, 
    },

    userDTO: userDTO

})

module.exports = mongoose.model('patientInvoice', data);
