const router = require('express').Router();

router.post('/reports/income', (req, res) => {

    
    // res.send(req.user);
res.send(
    {
        "incomeSummaryReport": {
            "companyId": 2,
            "month": null,
            "totalCost": 1078.0,
            "totalDiscount": 0.0,
            "totalAfterDiscount": 1078.0,
            "totalTax": 0.0,
            "totalInvoiceAmount": 1078.0
        },
        "incomeDetailReports": [{
            "invoiceDate": "2021-05-07T03:20:00",
            "invoiceNo": 1416,
            "patientName": "LIM WEE KIANG",
            "patientId": 884,
            "treatmentName": "GEN.PHYSIOTHERAPY",
            "productName": null,
            "subTotal": 130.0,
            "totalDiscount": 0.0,
            "totalTax": 0.0,
            "totalAmount": 130.0,
            "amountPaid": 130.0
        }, {
            "invoiceDate": "2021-05-07T03:37:00",
            "invoiceNo": 1417,
            "patientName": "LAM YEE SOON",
            "patientId": 849,
            "treatmentName": "GEN.PHYSIOTHERAPY",
            "productName": null,
            "subTotal": 350.0,
            "totalDiscount": 0.0,
            "totalTax": 0.0,
            "totalAmount": 350.0,
            "amountPaid": 350.0
        }, {
            "invoiceDate": "2021-05-07T04:39:00",
            "invoiceNo": 1418,
            "patientName": "MEENACHI A/P SUBRAMANIAM",
            "patientId": 863,
            "treatmentName": "GEN.PHYSIOTHERAPY",
            "productName": null,
            "subTotal": 130.0,
            "totalDiscount": 0.0,
            "totalTax": 0.0,
            "totalAmount": 130.0,
            "amountPaid": 130.0
        }, {
            "invoiceDate": "2021-05-07T05:33:00",
            "invoiceNo": 1419,
            "patientName": "PRAMITTA A/P SUBRAMANIAM",
            "patientId": 880,
            "treatmentName": "GEN.PHYSIOTHERAPY",
            "productName": null,
            "subTotal": 100.0,
            "totalDiscount": 0.0,
            "totalTax": 0.0,
            "totalAmount": 100.0,
            "amountPaid": 100.0
        }, {
            "invoiceDate": "2021-05-08T01:29:00",
            "invoiceNo": 1420,
            "patientName": "seah siew ching epyc ",
            "patientId": 887,
            "treatmentName": "GEN.PHYSIOTHERAPY",
            "productName": null,
            "subTotal": 148.0,
            "totalDiscount": 0.0,
            "totalTax": 0.0,
            "totalAmount": 148.0,
            "amountPaid": null
        }, {
            "invoiceDate": "2021-05-08T03:06:00",
            "invoiceNo": 1421,
            "patientName": "TAN JUAN FOOK ADRIAN",
            "patientId": 2,
            "treatmentName": "GEN.PHYSIOTHERAPY",
            "productName": null,
            "subTotal": 130.0,
            "totalDiscount": 0.0,
            "totalTax": 0.0,
            "totalAmount": 130.0,
            "amountPaid": 130.0
        }, {
            "invoiceDate": "2021-05-08T04:51:00",
            "invoiceNo": 1422,
            "patientName": "MESHALY SRITHARAN",
            "patientId": 47,
            "treatmentName": "GEN.PHYSIOTHERAPY",
            "productName": null,
            "subTotal": 90.0,
            "totalDiscount": 0.0,
            "totalTax": 0.0,
            "totalAmount": 90.0,
            "amountPaid": 90.0
        }]
    }


)
});

router.post('/reports/monthlyIncome', (req, res) => {
    // res.send(req.user);
res.send(
    [{
        "companyId": 2,
        "month": "2021-05-01 00:00:00",
        "totalCost": 1078.0,
        "totalDiscount": 0.0,
        "totalAfterDiscount": 1078.0,
        "totalTax": 0.0,
        "totalInvoiceAmount": 1078.0
    }]
)
});

router.post('/reports/appointments', (req, res) => {
    // res.send(req.user);
res.send(
    {
        "appointmentSummaryReport": {
            "companyId": 2,
            "totalAppointments": 11,
            "appointmentStatus": null
        },
        "appointmentDetailReports": [{
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T02:15:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 800,
            "patientName": "NG SIEW FENG",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T01:00:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 802,
            "patientName": "CHENG JING XUAN",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T04:00:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 201,
            "patientName": "TAN AH YAT",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T00:45:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 799,
            "patientName": "LOW SING KEE ",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T00:30:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 777,
            "patientName": "NIRMALA DEVI A/P BASKARAN",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T03:00:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 836,
            "patientName": "CHEONG MUN SANG ",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T06:00:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 5,
            "patientName": "VASUGI THEYAGA RAJAN",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T07:30:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 3,
            "patientName": "TAN CHUI CHANG",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T03:30:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 886,
            "patientName": "rajammal retnasamy",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T06:30:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 887,
            "patientName": "seah siew ching epyc ",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }, {
            "appointmentDate": "2021/05/09",
            "appointmentStarttime": "2021-05-09T02:30:00",
            "checkinTime": null,
            "waitedTime": null,
            "engageStartTime": null,
            "checkoutTime": null,
            "patientId": 888,
            "patientName": "thilagam krishnan EPYC",
            "userId": 5,
            "doctorName": "KARTIK MANOGAR",
            "category": null
        }]
    }
    
)
});

router.post('/reports/cancelAppointments', (req, res) => {
    // res.send(req.user);
res.send(
    [{
        "companyId": 3,
        "totalAppointments": 27,
        "appointmentStatus": "Cancelled"
    }, {
        "companyId": 3,
        "totalAppointments": 136,
        "appointmentStatus": "Confirmed"
    }]   
)
});

router.post('/reports/monthlyAppointments', (req, res) => {
    // res.send(req.user);
res.send(
    [{
        "companyId": 3,
        "totalAppointments": 156,
        "appointmentStatus": "2021-04-01 00:00:00"
    }, {
        "companyId": 3,
        "totalAppointments": 27,
        "appointmentStatus": "2021-05-01 00:00:00"
    }]       
)
});

router.post('/reports/payment', (req, res) => {
    // res.send(req.user);
res.send(
    {
        "paymentSummaryReport": {
            "companyId": 3,
            "totalPayment": 42550.0,
            "totalAdvancePayment": 3750.0
        },
        "paymentDetailReports": [{
            "paymentDate": "2021-04-10T04:58:00",
            "receiptNo": "324",
            "invoiceNo": "327",
            "patientName": "FRANCIS CASTROMAYOR",
            "patientId": 653,
            "treatmentName": "5+1 Promo (Half/Installment) (1st Half)",
            "productName": null,
            "amountPaid": 2000.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-12T04:57:00",
            "receiptNo": "325",
            "invoiceNo": null,
            "patientName": "RICHARD PEZ",
            "patientId": 374,
            "treatmentName": null,
            "productName": null,
            "amountPaid": 3750.0,
            "advanceAmount": 3750.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-12T10:13:00",
            "receiptNo": "326",
            "invoiceNo": "329",
            "patientName": "EDWIN ARANIA",
            "patientId": 649,
            "treatmentName": "JUNE SENIOR (1/2)",
            "productName": null,
            "amountPaid": 2200.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-12T10:15:00",
            "receiptNo": "327",
            "invoiceNo": "330",
            "patientName": "SAMSON  DIVINAGRACIA",
            "patientId": 805,
            "treatmentName": "JUNE 5+1 (1/2)",
            "productName": null,
            "amountPaid": 2500.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-12T14:45:00",
            "receiptNo": "328",
            "invoiceNo": "331",
            "patientName": "ANTONIO SOLIVEN JR.",
            "patientId": 633,
            "treatmentName": "JUNE 5+1 (1/2)",
            "productName": null,
            "amountPaid": 2500.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-14T10:19:00",
            "receiptNo": "329",
            "invoiceNo": "332",
            "patientName": "FRANCIS CASTROMAYOR",
            "patientId": 653,
            "treatmentName": "5+1 Promo (Half/Installment) (2nd Half)",
            "productName": null,
            "amountPaid": 1750.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-14T10:21:00",
            "receiptNo": "330",
            "invoiceNo": "333",
            "patientName": "MARY SHEENA CASTROMAYOR",
            "patientId": 748,
            "treatmentName": "5+1 Promo (Half/Installment) (2nd Half)",
            "productName": null,
            "amountPaid": 1750.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-16T08:05:00",
            "receiptNo": "331",
            "invoiceNo": "335",
            "patientName": "JEFFREY DIETA",
            "patientId": 819,
            "treatmentName": "JUNE 5+1 (1/2)",
            "productName": null,
            "amountPaid": 2500.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-16T08:06:00",
            "receiptNo": "332",
            "invoiceNo": "336",
            "patientName": "GEROMIE A. DELA TORRE",
            "patientId": 797,
            "treatmentName": "JUNE 5+1 (FULL)",
            "productName": null,
            "amountPaid": 4500.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-19T04:02:00",
            "receiptNo": "333",
            "invoiceNo": "337",
            "patientName": "EDWIN ARANIA",
            "patientId": 649,
            "treatmentName": "JUNE SENIOR (2/2)",
            "productName": null,
            "amountPaid": 2000.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-19T08:02:00",
            "receiptNo": "334",
            "invoiceNo": "339",
            "patientName": "MARIA CARMELA PALMA",
            "patientId": 816,
            "treatmentName": "JUNE 5+1 (1/2)",
            "productName": null,
            "amountPaid": 2500.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-19T08:06:00",
            "receiptNo": "335",
            "invoiceNo": "340",
            "patientName": "CHRISTIAN DIOR ESPINO",
            "patientId": 441,
            "treatmentName": "PHYSIO 900",
            "productName": null,
            "amountPaid": 900.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-20T13:35:00",
            "receiptNo": "336",
            "invoiceNo": "341",
            "patientName": "STYRO JOHN LAURON",
            "patientId": 812,
            "treatmentName": "JUNE 5+1 (FULL)",
            "productName": null,
            "amountPaid": 4500.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-20T13:36:00",
            "receiptNo": "337",
            "invoiceNo": "342",
            "patientName": "GONZALO GOBOY SR.",
            "patientId": 536,
            "treatmentName": "PHYSIO 900",
            "productName": null,
            "amountPaid": 7200.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }, {
            "paymentDate": "2021-04-20T13:38:00",
            "receiptNo": "338",
            "invoiceNo": "343",
            "patientName": "ANTONIO SOLIVEN JR.",
            "patientId": 633,
            "treatmentName": "JUNE 5+1 (2/2)",
            "productName": null,
            "amountPaid": 2000.0,
            "advanceAmount": 0.0,
            "paymentMode": "CASH",
            "vendorFees": 0.0
        }]
    }

)
});

router.post('/reports/paymentMode', (req, res) => {
    // res.send(req.user);
res.send(
    [{
        "month": null,
        "paymentMode": "CASH",
        "totalPayment": 42550.0,
        "vendorFee": 0.0,
        "netPayment": null
    }]    
)
});

router.post('/reports/dailyPaymentReport', (req, res) => {
    // res.send(req.user);
res.send(
    {
        "paymentDate": "DATE",
        "paymentModes": ["DATE", "CASH", "CHEQUE"],
        "paymentReceivedDetailReports": [{
            "paymentDate": "2021-04-10T00:00:00",
            "paymentValues1": 0.0,
            "paymentValues2": 0.0,
            "paymentValues3": 0.0,
            "paymentValues4": null,
            "paymentValues5": null,
            "paymentValues6": null,
            "paymentValues7": null,
            "paymentValues8": null
        }, {
            "paymentDate": "2021-04-12T00:00:00",
            "paymentValues1": 0.0,
            "paymentValues2": 0.0,
            "paymentValues3": 0.0,
            "paymentValues4": null,
            "paymentValues5": null,
            "paymentValues6": null,
            "paymentValues7": null,
            "paymentValues8": null
        }, {
            "paymentDate": "2021-04-14T00:00:00",
            "paymentValues1": 0.0,
            "paymentValues2": 0.0,
            "paymentValues3": 0.0,
            "paymentValues4": null,
            "paymentValues5": null,
            "paymentValues6": null,
            "paymentValues7": null,
            "paymentValues8": null
        }, {
            "paymentDate": "2021-04-16T00:00:00",
            "paymentValues1": 0.0,
            "paymentValues2": 0.0,
            "paymentValues3": 0.0,
            "paymentValues4": null,
            "paymentValues5": null,
            "paymentValues6": null,
            "paymentValues7": null,
            "paymentValues8": null
        }, {
            "paymentDate": "2021-04-19T00:00:00",
            "paymentValues1": 0.0,
            "paymentValues2": 0.0,
            "paymentValues3": 0.0,
            "paymentValues4": null,
            "paymentValues5": null,
            "paymentValues6": null,
            "paymentValues7": null,
            "paymentValues8": null
        }, {
            "paymentDate": "2021-04-20T00:00:00",
            "paymentValues1": 0.0,
            "paymentValues2": 0.0,
            "paymentValues3": 0.0,
            "paymentValues4": null,
            "paymentValues5": null,
            "paymentValues6": null,
            "paymentValues7": null,
            "paymentValues8": null
        }]
    }

)
});

router.post('/reports/patients', (req, res) => {
    // res.send(req.user);
res.send(
    {
        "patientSummaryReport": {
            "companyId": 3,
            "totalPatients": 17,
            "month": null
        },
        "patientDetailReports": [{
            "createdDate": "2021-04-17 01:00:00",
            "patientId": 778,
            "patientName": "GINA M. ARSULO"
        }, {
            "createdDate": "2021-04-12 02:00:00",
            "patientId": 795,
            "patientName": "MA'AM SY"
        }, {
            "createdDate": "2021-04-10 07:30:00",
            "patientId": 797,
            "patientName": "GEROMIE A. DELA TORRE"
        }, {
            "createdDate": "2021-04-10 07:45:00",
            "patientId": 798,
            "patientName": "JOSEF ELI ALCUDIA"
        }, {
            "createdDate": "2021-04-19 04:00:00",
            "patientId": 805,
            "patientName": "SAMSON  DIVINAGRACIA"
        }, {
            "createdDate": "2021-04-19 01:00:00",
            "patientId": 811,
            "patientName": "ROSAURO CABANA"
        }, {
            "createdDate": "2021-04-20 02:00:00",
            "patientId": 812,
            "patientName": "STYRO JOHN LAURON"
        }, {
            "createdDate": "2021-04-19 02:00:00",
            "patientId": 816,
            "patientName": "MARIA CARMELA PALMA"
        }, {
            "createdDate": "2021-04-16 07:30:00",
            "patientId": 819,
            "patientName": "JEFFREY DIETA"
        }, {
            "createdDate": "2021-04-26 03:00:00",
            "patientId": 828,
            "patientName": "JESSIE SULLANO"
        }, {
            "createdDate": "2021-04-20 01:00:00",
            "patientId": 830,
            "patientName": "ALLAN ARSULO"
        }, {
            "createdDate": "2021-04-26 03:00:00",
            "patientId": 832,
            "patientName": "REYNARD CALISTON"
        }, {
            "createdDate": "2021-04-23 02:30:00",
            "patientId": 844,
            "patientName": "LEONIL ALIP"
        }, {
            "createdDate": "2021-04-27 01:00:00",
            "patientId": 850,
            "patientName": "ERWIN YOUNG"
        }, {
            "createdDate": "2021-04-27 01:00:00",
            "patientId": 851,
            "patientName": "KARINA SULLANO"
        }, {
            "createdDate": "2021-04-29 02:00:00",
            "patientId": 862,
            "patientName": "RONALD ELPUSAN"
        }, {
            "createdDate": "2021-05-07 01:00:00",
            "patientId": 879,
            "patientName": "PETE ANDRIE COCHING"
        }]
    }

)
});

router.post('/reports/unsettledInvoices', (req, res) => {
    // res.send(req.user);
res.send(
    {
        "companyId": 3,
        "totalAmount": 720.0,
        "unsettledDetailReports": [{
            "patientCredit": 720.0,
            "patientId": 536,
            "ledgerId": 3461,
            "patientName": "GONZALO GOBOY SR."
        }]
    }
)
});




router.post('/reports/monthlyExpenses', (req, res) => {
    // res.send(req.user);
res.send(
    [{
        "companyId": 1,
        "month": "2021-04-01 00:00:00",
        "totalExpense": 122.0
    }]
)
});

router.post('/reports/monthlyPatients', (req, res) => {
    // res.send(req.user);
res.send(
    [{
        "companyId": 1,
        "totalPatients": 2,
        "month": "2021-04-01 00:00:00"
    }, {
        "companyId": 1,
        "totalPatients": 1,
        "month": "2021-05-01 00:00:00"
    }]
)
});

router.post('/reports/dailySummary', (req, res) => {
    // res.send(req.user);
res.send(
    [{
        "patientId": 836,
        "patientName": "CHEONG MUN SANG ",
        "appointmentStarttime": "2021-04-24T02:30:00",
        "checkinTime": "2021-04-24T03:53:20.246",
        "checkoutTime": "2021-04-24T03:53:29.398",
        "procedureName": "GEN.PHYSIOTHERAPY",
        "invoiceNo": 1331,
        "quantity": 1,
        "price": 188.0,
        "discountAmount": 0.0,
        "taxAmount": 0.0,
        "invoiceAmount": 188.0,
        "paymentNo": 1105,
        "payedInvoiceNo": 1331,
        "payedInvoiceAmount": 188.0,
        "paymentAmount": 188.0,
        "paymentMode": "VISA/MASTER"
    }, {
        "patientId": 780,
        "patientName": "CHUA BENG HUAT",
        "appointmentStarttime": "2021-04-24T03:00:00",
        "checkinTime": "2021-04-24T03:19:18.227",
        "checkoutTime": "2021-04-24T04:06:10.453",
        "procedureName": "GEN.PHYSIOTHERAPY",
        "invoiceNo": 1332,
        "quantity": 1,
        "price": 130.0,
        "discountAmount": 0.0,
        "taxAmount": 0.0,
        "invoiceAmount": 130.0,
        "paymentNo": 1106,
        "payedInvoiceNo": 1332,
        "payedInvoiceAmount": 130.0,
        "paymentAmount": 130.0,
        "paymentMode": "VISA/MASTER"
    }, {
        "patientId": 843,
        "patientName": "KHALEKKUZAMAN MD",
        "appointmentStarttime": "2021-04-24T04:00:00",
        "checkinTime": "2021-04-24T07:17:52.654",
        "checkoutTime": "2021-04-24T07:17:59.009",
        "procedureName": null,
        "invoiceNo": 1333,
        "quantity": 1,
        "price": 50.0,
        "discountAmount": 0.0,
        "taxAmount": 0.0,
        "invoiceAmount": 50.0,
        "paymentNo": 1107,
        "payedInvoiceNo": 1333,
        "payedInvoiceAmount": 50.0,
        "paymentAmount": 50.0,
        "paymentMode": "CASH"
    }, {
        "patientId": 845,
        "patientName": "TAN SIEW YEH",
        "appointmentStarttime": "2021-04-24T07:00:00",
        "checkinTime": "2021-04-24T07:20:27.309",
        "checkoutTime": "2021-04-24T07:20:38.316",
        "procedureName": "HOSPITAL TENS/IFT/EMS/RUSSIAN CURRENT CP0030",
        "invoiceNo": 1335,
        "quantity": 1,
        "price": 42.0,
        "discountAmount": 0.0,
        "taxAmount": 0.0,
        "invoiceAmount": 42.0,
        "paymentNo": null,
        "payedInvoiceNo": null,
        "payedInvoiceAmount": null,
        "paymentAmount": null,
        "paymentMode": null
    }, {
        "patientId": 845,
        "patientName": "TAN SIEW YEH",
        "appointmentStarttime": "2021-04-24T07:00:00",
        "checkinTime": "2021-04-24T07:20:27.309",
        "checkoutTime": "2021-04-24T07:20:38.316",
        "procedureName": "HOSPITAL LIMB PHYSIO CP0035",
        "invoiceNo": 1335,
        "quantity": 1,
        "price": 70.0,
        "discountAmount": 0.0,
        "taxAmount": 0.0,
        "invoiceAmount": 70.0,
        "paymentNo": null,
        "payedInvoiceNo": null,
        "payedInvoiceAmount": null,
        "paymentAmount": null,
        "paymentMode": null
    }, {
        "patientId": 849,
        "patientName": "LAM YEE SOON",
        "appointmentStarttime": "2021-04-24T06:00:00",
        "checkinTime": "2021-04-24T07:20:24.538",
        "checkoutTime": "2021-04-24T07:20:35.717",
        "procedureName": "HOSPITAL TENS/IFT/EMS/RUSSIAN CURRENT CP0030",
        "invoiceNo": 1334,
        "quantity": 2,
        "price": 42.0,
        "discountAmount": 0.0,
        "taxAmount": 0.0,
        "invoiceAmount": 84.0,
        "paymentNo": null,
        "payedInvoiceNo": null,
        "payedInvoiceAmount": null,
        "paymentAmount": null,
        "paymentMode": null
    }, {
        "patientId": 849,
        "patientName": "LAM YEE SOON",
        "appointmentStarttime": "2021-04-24T06:00:00",
        "checkinTime": "2021-04-24T07:20:24.538",
        "checkoutTime": "2021-04-24T07:20:35.717",
        "procedureName": "HOSPITAL LIMB PHYSIO CP0035",
        "invoiceNo": 1334,
        "quantity": 2,
        "price": 70.0,
        "discountAmount": 0.0,
        "taxAmount": 0.0,
        "invoiceAmount": 140.0,
        "paymentNo": null,
        "payedInvoiceNo": null,
        "payedInvoiceAmount": null,
        "paymentAmount": null,
        "paymentMode": null
    }, {
        "patientId": 849,
        "patientName": "LAM YEE SOON",
        "appointmentStarttime": "2021-04-24T06:00:00",
        "checkinTime": "2021-04-24T07:20:24.538",
        "checkoutTime": "2021-04-24T07:20:35.717",
        "procedureName": "HOSPITAL ON CALL/AFTER OFFICE CP0031",
        "invoiceNo": 1334,
        "quantity": 1,
        "price": 30.0,
        "discountAmount": 0.0,
        "taxAmount": 0.0,
        "invoiceAmount": 30.0,
        "paymentNo": null,
        "payedInvoiceNo": null,
        "payedInvoiceAmount": null,
        "paymentAmount": null,
        "paymentMode": null
    }, {
        "patientId": 849,
        "patientName": "LAM YEE SOON",
        "appointmentStarttime": "2021-04-24T06:00:00",
        "checkinTime": "2021-04-24T07:20:24.538",
        "checkoutTime": "2021-04-24T07:20:35.717",
        "procedureName": null,
        "invoiceNo": 1334,
        "quantity": 1,
        "price": 80.0,
        "discountAmount": 80.0,
        "taxAmount": 0.0,
        "invoiceAmount": 0.0,
        "paymentNo": null,
        "payedInvoiceNo": null,
        "payedInvoiceAmount": null,
        "paymentAmount": null,
        "paymentMode": null
    }]
    
)
});


module.exports = router;