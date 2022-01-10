
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


const userSchema = new mongoose.Schema({

    recordStatus: {
        type: String,
    },
    id: {
        type: Number,
    },
    country: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    userEmail: {
        type: String,
        required: true
    },
    userPhone: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    lastLoginDate: {
        type: Date,
    },
    companyId: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
    },
    userStatus: {
        type: String,
        required: true,
    },

    loginId: {
        type: Number,
    },
    
    userRolesList: [{recordStatus: String, id: Number, loginId: Number, userId: Number, 
    roleType: String, roleDesc: String}],

    weeklyScheduleDTOList: {
        type: Array,
    },
    customSchedules: {
        type: Array,
    },

    companyDTO: [{companyDTOSchema}]

  });

module.exports = mongoose.model('cmsUser', userSchema);
