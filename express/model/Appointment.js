
const mongoose = require('mongoose');

// patients,
// Expense
// Lookup.
// Company
// Subcollection.

const companySchema = new mongoose.Schema({

    recordStatus: {
        type: String
    },
    id: {
        type: Number,
        
    },
    loginId: {
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
        type: String,
        
    },
    companyEmail: {
        type: String,
        
    },
    companyWebsite: {
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
        type: String,
        
    },
    companyLogo: {
        type: String,
        
    },
    parentCompanyId: {
        type: String,
        
    },
    calendarTimeslot: {
        type: String,
        
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
        type: Array,
        
    },
    weeklyScheduleDTOList: {
        type: Array,
        
    }

});

const userSchema = new mongoose.Schema({

    recordStatus: {
        type: String,
        
    },
    id: {
        type: Number,
        
    },
    loginId: {
        type: String,
        
    },
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
    },
    middleName: {
        type: String,
        required: false
    },
    userEmail: {
        type: String, 
        required: false
    },
    userPhone: {
        type: Number,
        
    },
    userPassword: {
        type: String,
        
    },
    companyId: {
        type: Number,
        
    },
    companyName: {
        type: String,
        
    },
    userStatus: {
        type: String,
        
    },
    userRolesList: {
        type: Array,
        
    },
    weeklyScheduleDTOList: {
        type: Array,
        
    },
    customSchedules: {
        type: Array,
        
    }

});

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
        type: String, 
        
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
    companyDTO: {
        type: Date, 
    },
    addressDTO: {
        type: String, 
    },
    patientMedicalGroups: {
        type: Array
    },
    patientMedicalHistories: {
        type: Array
    }
})


const appointmentSchema = new mongoose.Schema({

    recordStatus: {
        type: String
    },
    doctorId:{
        type: Number,
    },
    id: {
        type: Number,
    },
    loginId: {
        type: String,
        
    },
    companyId: {
        type: Number,

    },
    appointmentType: {
        type: String,
    },
    patientId: {
        type: Number,
    },
    userId: {
        type: Number,
    },
    appointmentNotes: {
        type: String,
        
    },
    appointmentStarttime: {
        type: String,
        
    },
    appointmentEndtime: {
        type: Date,
        
    },
    appointmentDuration: {
        type: Number,
        
    },
    appointmentDurationType: {
        type: String,
        
    },
    appointmentTitle: {
        type: String,
        
    },
    appointmentStatus: {
        type: String,
    },
    checkinTime: {
        type: Date,
        
    },
    engageStartTime: {
        type: Date,
        
    },
    checkoutTime: {
        type: Date,
        
    },
    cancellationReasonCode: {
        type: String, 
    }, 


    company: companySchema,
    user: userSchema,
    patient: patientSchema


});

const AppointmentCountSchema = new mongoose.Schema({

    id: {
        type: String
    },
    totalCount: {
        type: Number,
        
    },
    checkinCount: {
        type: Number,
        
    },
    checkoutCount: {
        type: Number,
        
    },
    waitingCount: {
        type: Number,  
    },
    scheduledCount: {
        type: Number, 
    }
});


module.exports = mongoose.model('AppointmentCount', AppointmentCountSchema);

module.exports = mongoose.model('Appointment', appointmentSchema);

