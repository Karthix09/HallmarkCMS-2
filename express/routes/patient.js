const router = require('express').Router();
const {addPatient, 
    searchPatient, 
    showAllPatient, 
    updatePatient, 
    deletePatient, 
    getAppointmentByPatient} = require('../controller/patient')
const Appointment = require('../model/Appointment');
//Add Patient to Database
router.post('/patient/addPatient', addPatient);
// Retrieve individual ID from Database
router.get('/patient/:id', searchPatient);
//Show all Patients from Database
router.post('/patient/search', showAllPatient);
//Update Patient info in Database
router.put('/patient/updatePatient/:id', updatePatient);
//Delete Patient 
router.delete('/patient/deletePatient/:id', deletePatient);
//Show appointment from patients tab
router.get('/appointment/byPatient/:id', getAppointmentByPatient);
router.get('/patient/notes/1431', (req, res) => {
    // res.send(req.user);
res.send(
        {
            "recordStatus": null,
            "id": 1463,
            "loginId": null,
            "patientId": 870,
            "clinicalNote": "<p>The GOAT</p>",
            "noteDate": "2021-05-06T12:06:00",
            "noteCreatedBy": 1,
            "followupAppointmentDate": "2021-05-13",
            "patientDTO": {
                "recordStatus": null,
                "id": 870,
                "loginId": null,
                "patientName": "Cristiano Ronaldo",
                "companyId": 1,
                "idPassportNo": "T8736494G",
                "gender": "M",
                "dob": "1980-04-07",
                "mobileNo": "82347804",
                "email": "CR7@hotmail.com",
                "alternateContactNo": "",
                "referredBy": null,
                "bloodGroup": null,
                "relationshipCode": null,
                "relationshipName": "Karthik",
                "relationshipContactNo": "84567899",
                "ethnicity": "OT",
                "nationality": "09",
                "occupation": "06",
                "otherMedicalHistory": null,
                "addressId": 770,
                "enableEmail": "NO",
                "sendBirthdayWish": null,
                "sendFollowupNotification": null,
                "isDeleted": "NO",
                "deletedDate": null,
                "patientCredit": 107,
                "lastVisitDate": null,
                "createdDate": "2021-04-29T18:38:08.944419",
                "companyDTO": {
                    "recordStatus": null,
                    "id": 1,
                    "loginId": null,
                    "companyName": "Hallmark Physiotherapy - Singapore",
                    "companySpecialization": null,
                    "addressId": null,
                    "companyContactPerson": null,
                    "companyContactNo": null,
                    "companyEmail": null,
                    "companyWebsite": null,
                    "companyRegNo": null,
                    "companyStatus": null,
                    "companyTimezone": null,
                    "companyBaseCurrency": null,
                    "companyLogo": null,
                    "parentCompanyId": null,
                    "calendarTimeslot": null,
                    "isTodayCalendarStartDate": "NO",
                    "companyTimezoneText": null,
                    "companyDialCode": null,
                    "addressDTO": null,
                    "customSchedules": [],
                    "weeklyScheduleDTOs": []
                },
                "addressDTO": {
                    "recordStatus": null,
                    "id": 770,
                    "loginId": null,
                    "addressLine1": "BalokBay",
                    "addressLine2": "343535",
                    "addressLine3": "322",
                    "postalCode": "234456",
                    "city": "Singapore",
                    "state": "01",
                    "country": "SGP",
                    "latitude": null,
                    "longtitude": null
                },
                "patientMedicalGroups": [],
                "patientMedicalHistories": [{
                    "recordStatus": null,
                    "id": 19,
                    "loginId": null,
                    "patientId": 870,
                    "medicalHistory": "09",
                    "medicalHistoryDesc": "% Body Fat"
                }]
            },
            "userName": "VISVANATHAN RAVICHANDRAN"
        }
    )
    });

//     router.put('/patient/notes/updateNote/1463', (req, res) => {
//         // res.send(req.user);
//     res.send(
//         {
//             "success": true,
//             "message": "Patient with id 1463 updated successfully."
//         }
//     )
//     });

    // router.get('/treatment/7', (req, res) => {
    //     // res.send(req.user);
    // res.send(
    //     {
    //         "recordStatus": null,
    //         "id": 2,
    //         "loginId": null,
    //         "patientId": 870,
    //         "treatmentDate": "2021-04-30T08:24:00",
    //         "enteredBy": 1,
    //         "subTotal": 140.00,
    //         "totalDiscount": 0.00,
    //         "totalAmount": 140.00,
    //         "isTreatmentComplete": "YS",
    //         "isInvoice": "NO",
    //         "treatmentProcedures": [{
    //             "recordStatus": null,
    //             "id": 2,
    //             "loginId": null,
    //             "treatmentId": 2,
    //             "procedureId": 1,
    //             "procedureNotes": "yu",
    //             "quantity": 1,
    //             "price": 140.00,
    //             "discountPercentage": 0.00,
    //             "discountAmount": 0.00,
    //             "amount": 140.00,
    //             "treatmentCompletedBy": 1,
    //             "treatmentCompletionDate": "2021-04-29T16:00:00",
    //             "proceduresDTO": {
    //                 "recordStatus": null,
    //                 "id": 1,
    //                 "loginId": null,
    //                 "procedureName": "PHYSIOTHERAPY",
    //                 "procedureNotes": null,
    //                 "parentProcedureId": null,
    //                 "price": null,
    //                 "taxId": null,
    //                 "companyId": null,
    //                 "taxDTO": null,
    //                 "companyDTO": null
    //             },
    //             "userDTO": {
    //                 "recordStatus": null,
    //                 "id": 1,
    //                 "loginId": null,
    //                 "firstName": "VISVANATHAN",
    //                 "lastName": "RAVICHANDRAN",
    //                 "middleName": null,
    //                 "userEmail": null,
    //                 "userPhone": null,
    //                 "userPassword": null,
    //                 "lastLoginDate": "2021-05-06T12:38:50.024895",
    //                 "companyId": null,
    //                 "companyName": null,
    //                 "userStatus": null,
    //                 "userRolesList": [],
    //                 "weeklyScheduleDTOList": [],
    //                 "customSchedules": []
    //             }
    //         }],
    //         "userDTO": {
    //             "recordStatus": null,
    //             "id": 1,
    //             "loginId": null,
    //             "firstName": "VISVANATHAN",
    //             "lastName": "RAVICHANDRAN",
    //             "middleName": null,
    //             "userEmail": null,
    //             "userPhone": null,
    //             "userPassword": null,
    //             "lastLoginDate": "2021-05-06T12:38:50.023701",
    //             "companyId": null,
    //             "companyName": null,
    //             "userStatus": null,
    //             "userRolesList": [],
    //             "weeklyScheduleDTOList": [],
    //             "customSchedules": []
    //         }
    //     }
 
    // )
    // });

//     router.put('/treatment/updateTreatment/2', (req, res) => {
//         // res.send(req.user);
//     res.send(
//         {
//             "success": true,
//             "message": "Treatment with id 2 updated successfully."
//         }
//     )
//     });

 
    router.get('/payment/allMode/1', (req, res) => {
        // res.send(req.user);
    res.send(
        [{
            "recordStatus": null,
            "id": 1,
            "loginId": null,
            "paymentModeName": "CASH",
            "paymentType": "CAS",
            "vendorFee": 0.0,
            "companyId": 1,
            "isActive": "YS"
        }, {
            "recordStatus": null,
            "id": 2,
            "loginId": null,
            "paymentModeName": "VISA/MASTER/AMEX",
            "paymentType": "CRD",
            "vendorFee": 0.0,
            "companyId": 1,
            "isActive": "YS"
        }, {
            "recordStatus": null,
            "id": 3,
            "loginId": null,
            "paymentModeName": "BANK TRANSFER",
            "paymentType": "NET",
            "vendorFee": 0.0,
            "companyId": 1,
            "isActive": "YS"
        }, {
            "recordStatus": null,
            "id": 4,
            "loginId": null,
            "paymentModeName": "CHEQUE",
            "paymentType": "CQE",
            "vendorFee": 0.0,
            "companyId": 1,
            "isActive": "YS"
        }, {
            "recordStatus": null,
            "id": 5,
            "loginId": null,
            "paymentModeName": "NETS",
            "paymentType": "CAS",
            "vendorFee": 0.0,
            "companyId": 1,
            "isActive": "YS"
        }, {
            "recordStatus": null,
            "id": 6,
            "loginId": null,
            "paymentModeName": "GIRO",
            "paymentType": "CAS",
            "vendorFee": 0.0,
            "companyId": 1,
            "isActive": "YS"
        }]

    )
    });



//     router.get('/invoice/1807', (req, res) => {
//         // res.send(req.user);
//     res.send(
//         {
//             "recordStatus": null,
//             "id": 1844,
//             "loginId": null,
//             "invoiceNo": "354",
//             "companyId": 1,
//             "patientId": 870,
//             "treatmentId": null,
//             "invoiceDate": "2021-05-06T13:32:00",
//             "enteredBy": 1,
//             "subTotal": 0.0,
//             "totalDiscount": 0.0,
//             "totalTax": 0.0,
//             "totalAmount": 0.0,
//             "invoiceComments": null,
//             "invoiceDetails": [{
//                 "recordStatus": null,
//                 "id": 1988,
//                 "loginId": null,
//                 "invoiceId": 1844,
//                 "procedureId": 50,
//                 "itemId": null,
//                 "notes": null,
//                 "quantity": 1,
//                 "price": 0.0,
//                 "discountPercentage": 0.0,
//                 "discountAmount": 0.0,
//                 "taxId": null,
//                 "taxAmount": 0.0,
//                 "amount": 0.0,
//                 "treatmentCompletedBy": 1,
//                 "treatmentCompletionDate": "2021-05-05T16:00:00",
//                 "proceduresDTO": {
//                     "recordStatus": null,
//                     "id": 50,
//                     "loginId": null,
//                     "procedureName": "Kirotherapy",
//                     "procedureNotes": null,
//                     "parentProcedureId": null,
//                     "price": 0.00,
//                     "taxId": null,
//                     "companyId": null,
//                     "taxDTO": null,
//                     "companyDTO": null
//                 },
//                 "taxDTO": null,
//                 "itemMasterDTO": null,
//                 "userDTO": {
//                     "recordStatus": null,
//                     "id": 1,
//                     "loginId": null,
//                     "firstName": "VISVANATHAN",
//                     "lastName": "RAVICHANDRAN",
//                     "middleName": null,
//                     "userEmail": null,
//                     "userPhone": null,
//                     "userPassword": null,
//                     "lastLoginDate": "2021-05-06T16:22:31.60983",
//                     "companyId": null,
//                     "companyName": null,
//                     "userStatus": null,
//                     "userRolesList": [],
//                     "weeklyScheduleDTOList": [],
//                     "customSchedules": []
//                 }
//             }],
//             "isCancelled": "NO",
//             "cancelledDate": null,
//             "paidAmount": null,
//             "pendingPayment": "false",
//             "userDTO": {
//                 "recordStatus": null,
//                 "id": 1,
//                 "loginId": null,
//                 "firstName": "VISVANATHAN",
//                 "lastName": "RAVICHANDRAN",
//                 "middleName": null,
//                 "userEmail": null,
//                 "userPhone": null,
//                 "userPassword": null,
//                 "lastLoginDate": "2021-05-06T16:22:31.602552",
//                 "companyId": null,
//                 "companyName": null,
//                 "userStatus": null,
//                 "userRolesList": [],
//                 "weeklyScheduleDTOList": [],
//                 "customSchedules": []
//             }
//         }
        
//     )
//     });

    

//     router.put('/payment/updatePayment/1563', (req, res) => {
//         // res.send(req.user);
//     res.send(
//         {
//             "success": true,
//             "message": "Payment with id 1563 updated successfully."
//         }      
//     )
//     });


//         // res.send(req.user);
//     res.send(
//         [{
//             "recordStatus": null,
//             "id": 3664,
//             "loginId": null,
//             "companyId": 1,
//             "appointmentType": "A",
//             "patientId": 870,
//             "userId": 1,
//             "appointmentNotes": "CHECK UP",
//             "appointmentStarttime": "2021-04-29T17:55:00",
//             "appointmentEndtime": null,
//             "appointmentDuration": 15,
//             "appointmentDurationType": "M",
//             "appointmentTitle": "Cristiano Ronaldo",
//             "appointmentStatus": "DEL",
//             "checkinTime": null,
//             "engageStartTime": null,
//             "checkoutTime": null,
//             "cancellationReasonCode": "CPT",
//             "company": {
//                 "recordStatus": null,
//                 "id": 1,
//                 "loginId": null,
//                 "companyName": "Hallmark Physiotherapy - Singapore",
//                 "companySpecialization": null,
//                 "addressId": null,
//                 "companyContactPerson": null,
//                 "companyContactNo": null,
//                 "companyEmail": null,
//                 "companyWebsite": null,
//                 "companyRegNo": null,
//                 "companyStatus": null,
//                 "companyTimezone": null,
//                 "companyBaseCurrency": null,
//                 "companyLogo": null,
//                 "parentCompanyId": null,
//                 "calendarTimeslot": null,
//                 "isTodayCalendarStartDate": "NO",
//                 "companyTimezoneText": null,
//                 "companyDialCode": null,
//                 "addressDTO": null,
//                 "customSchedules": [],
//                 "weeklyScheduleDTOs": []
//             },
//             "user": {
//                 "recordStatus": null,
//                 "id": 1,
//                 "loginId": null,
//                 "firstName": "VISVANATHAN",
//                 "lastName": "RAVICHANDRAN",
//                 "middleName": null,
//                 "userEmail": null,
//                 "userPhone": null,
//                 "userPassword": null,
//                 "lastLoginDate": "2021-05-06T11:54:20.550361",
//                 "companyId": null,
//                 "companyName": null,
//                 "userStatus": null,
//                 "userRolesList": [],
//                 "weeklyScheduleDTOList": [],
//                 "customSchedules": []
//             },
//             "patient": {
//                 "recordStatus": null,
//                 "id": 870,
//                 "loginId": null,
//                 "patientName": "Cristiano Ronaldo",
//                 "companyId": null,
//                 "idPassportNo": null,
//                 "gender": null,
//                 "dob": null,
//                 "mobileNo": null,
//                 "email": null,
//                 "alternateContactNo": null,
//                 "referredBy": null,
//                 "bloodGroup": null,
//                 "relationshipCode": null,
//                 "relationshipName": null,
//                 "relationshipContactNo": null,
//                 "ethnicity": null,
//                 "nationality": null,
//                 "occupation": null,
//                 "otherMedicalHistory": null,
//                 "addressId": null,
//                 "enableEmail": null,
//                 "sendBirthdayWish": null,
//                 "sendFollowupNotification": null,
//                 "isDeleted": null,
//                 "deletedDate": null,
//                 "patientCredit": null,
//                 "lastVisitDate": null,
//                 "createdDate": null,
//                 "companyDTO": null,
//                 "addressDTO": null,
//                 "patientMedicalGroups": [],
//                 "patientMedicalHistories": []
//             }
//         }, {
//             "recordStatus": null,
//             "id": 3755,
//             "loginId": null,
//             "companyId": 1,
//             "appointmentType": "A",
//             "patientId": 870,
//             "userId": 1,
//             "appointmentNotes": "",
//             "appointmentStarttime": "2021-05-21T16:00:00",
//             "appointmentEndtime": null,
//             "appointmentDuration": 15,
//             "appointmentDurationType": "M",
//             "appointmentTitle": "Cristiano Ronaldo",
//             "appointmentStatus": "CON",
//             "checkinTime": null,
//             "engageStartTime": null,
//             "checkoutTime": null,
//             "cancellationReasonCode": null,
//             "company": {
//                 "recordStatus": null,
//                 "id": 1,
//                 "loginId": null,
//                 "companyName": "Hallmark Physiotherapy - Singapore",
//                 "companySpecialization": null,
//                 "addressId": null,
//                 "companyContactPerson": null,
//                 "companyContactNo": null,
//                 "companyEmail": null,
//                 "companyWebsite": null,
//                 "companyRegNo": null,
//                 "companyStatus": null,
//                 "companyTimezone": null,
//                 "companyBaseCurrency": null,
//                 "companyLogo": null,
//                 "parentCompanyId": null,
//                 "calendarTimeslot": null,
//                 "isTodayCalendarStartDate": "NO",
//                 "companyTimezoneText": null,
//                 "companyDialCode": null,
//                 "addressDTO": null,
//                 "customSchedules": [],
//                 "weeklyScheduleDTOs": []
//             },
//             "user": {
//                 "recordStatus": null,
//                 "id": 1,
//                 "loginId": null,
//                 "firstName": "VISVANATHAN",
//                 "lastName": "RAVICHANDRAN",
//                 "middleName": null,
//                 "userEmail": null,
//                 "userPhone": null,
//                 "userPassword": null,
//                 "lastLoginDate": "2021-05-06T11:54:20.550387",
//                 "companyId": null,
//                 "companyName": null,
//                 "userStatus": null,
//                 "userRolesList": [],
//                 "weeklyScheduleDTOList": [],
//                 "customSchedules": []
//             },
//             "patient": {
//                 "recordStatus": null,
//                 "id": 870,
//                 "loginId": null,
//                 "patientName": "Cristiano Ronaldo",
//                 "companyId": null,
//                 "idPassportNo": null,
//                 "gender": null,
//                 "dob": null,
//                 "mobileNo": null,
//                 "email": null,
//                 "alternateContactNo": null,
//                 "referredBy": null,
//                 "bloodGroup": null,
//                 "relationshipCode": null,
//                 "relationshipName": null,
//                 "relationshipContactNo": null,
//                 "ethnicity": null,
//                 "nationality": null,
//                 "occupation": null,
//                 "otherMedicalHistory": null,
//                 "addressId": null,
//                 "enableEmail": null,
//                 "sendBirthdayWish": null,
//                 "sendFollowupNotification": null,
//                 "isDeleted": null,
//                 "deletedDate": null,
//                 "patientCredit": null,
//                 "lastVisitDate": null,
//                 "createdDate": null,
//                 "companyDTO": null,
//                 "addressDTO": null,
//                 "patientMedicalGroups": [],
//                 "patientMedicalHistories": []
//             }
//         }, {
//             "recordStatus": null,
//             "id": 3786,
//             "loginId": null,
//             "companyId": 1,
//             "appointmentType": "A",
//             "patientId": 870,
//             "userId": 1,
//             "appointmentNotes": null,
//             "appointmentStarttime": "2021-05-13T08:00:00",
//             "appointmentEndtime": null,
//             "appointmentDuration": 15,
//             "appointmentDurationType": "M",
//             "appointmentTitle": "Cristiano Ronaldo",
//             "appointmentStatus": "CON",
//             "checkinTime": null,
//             "engageStartTime": null,
//             "checkoutTime": null,
//             "cancellationReasonCode": null,
//             "company": {
//                 "recordStatus": null,
//                 "id": 1,
//                 "loginId": null,
//                 "companyName": "Hallmark Physiotherapy - Singapore",
//                 "companySpecialization": null,
//                 "addressId": null,
//                 "companyContactPerson": null,
//                 "companyContactNo": null,
//                 "companyEmail": null,
//                 "companyWebsite": null,
//                 "companyRegNo": null,
//                 "companyStatus": null,
//                 "companyTimezone": null,
//                 "companyBaseCurrency": null,
//                 "companyLogo": null,
//                 "parentCompanyId": null,
//                 "calendarTimeslot": null,
//                 "isTodayCalendarStartDate": "NO",
//                 "companyTimezoneText": null,
//                 "companyDialCode": null,
//                 "addressDTO": null,
//                 "customSchedules": [],
//                 "weeklyScheduleDTOs": []
//             },
//             "user": {
//                 "recordStatus": null,
//                 "id": 1,
//                 "loginId": null,
//                 "firstName": "VISVANATHAN",
//                 "lastName": "RAVICHANDRAN",
//                 "middleName": null,
//                 "userEmail": null,
//                 "userPhone": null,
//                 "userPassword": null,
//                 "lastLoginDate": "2021-05-06T11:54:20.550406",
//                 "companyId": null,
//                 "companyName": null,
//                 "userStatus": null,
//                 "userRolesList": [],
//                 "weeklyScheduleDTOList": [],
//                 "customSchedules": []
//             },
//             "patient": {
//                 "recordStatus": null,
//                 "id": 870,
//                 "loginId": null,
//                 "patientName": "Cristiano Ronaldo",
//                 "companyId": null,
//                 "idPassportNo": null,
//                 "gender": null,
//                 "dob": null,
//                 "mobileNo": null,
//                 "email": null,
//                 "alternateContactNo": null,
//                 "referredBy": null,
//                 "bloodGroup": null,
//                 "relationshipCode": null,
//                 "relationshipName": null,
//                 "relationshipContactNo": null,
//                 "ethnicity": null,
//                 "nationality": null,
//                 "occupation": null,
//                 "otherMedicalHistory": null,
//                 "addressId": null,
//                 "enableEmail": null,
//                 "sendBirthdayWish": null,
//                 "sendFollowupNotification": null,
//                 "isDeleted": null,
//                 "deletedDate": null,
//                 "patientCredit": null,
//                 "lastVisitDate": null,
//                 "createdDate": null,
//                 "companyDTO": null,
//                 "addressDTO": null,
//                 "patientMedicalGroups": [],
//                 "patientMedicalHistories": []
//             }
//         }]
//     )
//     });

//     router.get('/patient/notes/all/870', (req, res) => {
//         // res.send(req.user);
//     res.send(
//         [{
//             "recordStatus": null,
//             "id": 1431,
//             "loginId": null,
//             "patientId": 870,
//             "clinicalNote": "<p>Patient is the GOAT TEST</p>",
//             "noteDate": "2021-04-30T08:15:00",
//             "noteCreatedBy": 1,
//             "followupAppointmentDate": "2021-05-01",
//             "patientDTO": {
//                 "recordStatus": null,
//                 "id": 870,
//                 "loginId": null,
//                 "patientName": "Cristiano Ronaldo",
//                 "companyId": 1,
//                 "idPassportNo": "T8736494G",
//                 "gender": "M",
//                 "dob": "1980-04-07",
//                 "mobileNo": "82347804",
//                 "email": "CR7@hotmail.com",
//                 "alternateContactNo": "",
//                 "referredBy": null,
//                 "bloodGroup": null,
//                 "relationshipCode": null,
//                 "relationshipName": "Karthik",
//                 "relationshipContactNo": "84567899",
//                 "ethnicity": "OT",
//                 "nationality": "09",
//                 "occupation": "06",
//                 "otherMedicalHistory": null,
//                 "addressId": 770,
//                 "enableEmail": "NO",
//                 "sendBirthdayWish": null,
//                 "sendFollowupNotification": null,
//                 "isDeleted": "NO",
//                 "deletedDate": null,
//                 "patientCredit": 107,
//                 "lastVisitDate": null,
//                 "createdDate": "2021-04-29T18:38:08.944419",
//                 "companyDTO": {
//                     "recordStatus": null,
//                     "id": 1,
//                     "loginId": null,
//                     "companyName": "Hallmark Physiotherapy - Singapore",
//                     "companySpecialization": null,
//                     "addressId": null,
//                     "companyContactPerson": null,
//                     "companyContactNo": null,
//                     "companyEmail": null,
//                     "companyWebsite": null,
//                     "companyRegNo": null,
//                     "companyStatus": null,
//                     "companyTimezone": null,
//                     "companyBaseCurrency": null,
//                     "companyLogo": null,   
//                     "parentCompanyId": null,
//                     "calendarTimeslot": null,
//                     "isTodayCalendarStartDate": "NO",
//                     "companyTimezoneText": null,
//                     "companyDialCode": null,
//                     "addressDTO": null,
//                     "customSchedules": [],
//                     "weeklyScheduleDTOs": []
//                 },
//                 "addressDTO": {
//                     "recordStatus": null,
//                     "id": 770,
//                     "loginId": null,
//                     "addressLine1": "BalokBay",
//                     "addressLine2": "343535",
//                     "addressLine3": "322",
//                     "postalCode": "234456",
//                     "city": "Singapore",
//                     "state": "01",
//                     "country": "SGP",
//                     "latitude": null,
//                     "longtitude": null
//                 },
//                 "patientMedicalGroups": [],
//                 "patientMedicalHistories": [{
//                     "recordStatus": null,
//                     "id": 19,
//                     "loginId": null,
//                     "patientId": 870,
//                     "medicalHistory": "09",
//                     "medicalHistoryDesc": "% Body Fat"
//                 }]
//             },
//             "userName": "VISVANATHAN RAVICHANDRAN"
//         }]  
//     )
// });

module.exports = router;