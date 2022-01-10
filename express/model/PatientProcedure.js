
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




const treatmentProcedures = new mongoose.Schema({

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
    loginId: { 
        type: Number, 
    },
    price: { 
        type: Number, 
    },
    procedureId: { 
        type: Number, 
    },
    procedureNotes: { 
        type: String, 
    },
    procedureNotes: { 
        type: String, 
    },

    proceduresDTO: proceduresDTO,

    quantity: { 
        type: Number, 
    },
    recordStatus: { 
        type: String, 
    },
    treatmentCompletedBy: { 
        type: Number, 
    },
    treatmentCompletionDate: { 
        type: Date, 
    },
    treatmentId: { 
        type: Number, 
    },

    userDTO: userDTO

})


const data = new mongoose.Schema({

    enteredBy: {
        type: Number,
    },
    id: { 
        type: Number,
    },
    isInvoice: { 
        type: String,
    },
    isTreatmentComplete: { 
        type: String,
    },
    loginId: { 
        type: Number,
    },
    patientId: { 
        type: Number,
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
    treatmentDate: { 
        type: Date
    },

    treatmentProcedures: [treatmentProcedures],
    userDTO: userDTO

    
})

module.exports = mongoose.model('patientProced', data);
