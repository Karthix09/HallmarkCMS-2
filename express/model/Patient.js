const mongoose = require('mongoose');

const companyDTOSchema = new mongoose.Schema({

    recordStatus: {
        type: String,
    },
    id: {
        type: Number,   
    },                    
    loginID: {
        type: Number,
        
    },
    companyName: {
        type: String,
        
    },
    companySpecialization: {
        type: String,
       
    },
    addressId: {
        type: String,
       
    },
    companyContactPerson: {
        type: String,
        
    },
    companyContactNo: {
        type: Number,
    },
    companyEmail: {
        type: String,
    },
    companyWebsite: {
        type: String,
       
    },
    companyRegNo: {
        type: String,
       
    },
    companyStatus: {
        type: String,
       
    },
    companyTimezone: {
        type: Date,
       
    },
    companyBaseCurrency: {
        type: Date,
       
    },
    companyLogo: {
        type: Date,
       
    },
    parentCompanyId: {
        type: Date,
       
    },
    calendarTimeslot: {
        type: Date,
       
    },
    isTodayCalendarStartDate: {
        type: String,
       
    },
    companyTimezoneText: {
        type: String,
        
    },
    companyDialCode: {
        type: String,
        
    },
    addressDTO: {
        type: String,
        
    },
    customSchedules: {
        type: Array
    },
    weeklyScheduleDTOs: {
        type: Array
    }

});



const addressDTOSchema = new mongoose.Schema({

    recordStatus: {
        type: String, 
        
    },
    id: { 
        type: Number, 
    },
    loginID: {
        type: Number, 
        
    },
    addressLine1: {
        type: String, 
        
    },
    addressLine2: {
        type: String, 
        
    },
    addressLine3: {
        type: String, 
        
    },
    postalCode: {
        type: String, 
        
    },
    city: {
        type: String, 
        
    },
    state: {
        type: Number, 
        
    },
    country: {
        type: String,
        required: true 
        
    },
    latitude: {
        type: Number, 
        
    },
    longtitude: {
        type: Number, 
        
    }
})


const patientSchema = new mongoose.Schema({

    recordStatus: {
        type: String, 
        
    },
    id: {
        type: Number, 
        
    },
    loginID: {
        type: Number, 
        
    },
    patientName: {
        type: String, 
        
    },
    companyID: {
        type: Number, 
        
    },
    idPassportNo: {
        type: String, 
        
    },
    gender: {
        type: String, 
        
    },
    dob: {
        type: Date, 
        
    },
    mobileNo: {
        type: Number, 
        
    },
    email: {
        type: String, 
        
    },
    alternateContactNo: {
        type: String, 
        
    },
    referredBy: {
        type: String, 
        
    },
    bloodGroup: {
        type: String, 
        
    },
    relationshipCode: {
        type: String, 
        
    },
    relationshipName: {
        type: String, 
        
    },
    relationshipContactNo: {
        type: String, 
        
    },
    ethnicity: {
        type: String, 
        
    },
    nationality: {
        type: String, 
        
    },
    occupation: {
        type: String, 
        
    },
    otherMedicalHistory: {
        type: String, 
        
    },
    addressId: {
        type: Number, 
        
    },
    enableEmail: {
        type: String, 
        
    },
    sendBirthdayWish: {
        type: String, 
        
    },
    sendFollowupNotification: {
        type: String, 
        
    },
    isDeleted: {
        type: String, 
        
    },
    deletedDate: {
        type: Date, 
        
    },
    patientCredit: {
        type: Number, 
        
    },
    lastVisitDate: {
        type: Date, 
        
    },
    createdDate: {
        type: Date, 
        
    },

    companyDTO: companyDTOSchema,
    addressDTO: addressDTOSchema,
    
    patientMedicalGroups: {
        type: Array, 
        
    },
    patientMedicalHistories: [{recordStatus: String, id: Number, loginId: Number, patientId: Number, 
        medicalHistory: String, medicalHistoryDesc: String}]

  });

module.exports = mongoose.model('Patient', patientSchema);