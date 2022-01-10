const PatientPayment = require('../model/PatientPayment');
const PatientLedger = require('../model/PatientLedger');

const submitLedgerData = (req, res) => {
    const cmsPatientLedger = new PatientLedger({
        balanceAmount: req.body.paymentNowAmount - req.body.paymentNowAmount,
        companyId: req.body.companyId,
        creditAmount: req.body.paymentNowAmount,
        debitAmount: req.body.paymentNowAmount,
        id: Math.floor(Math.random() * 10000000) + 1,
        invoiceId: '',
        invoiceNo: '',
        ledgerDate: req.body.paymentDate,
        ledgerDetail: req.body.patientId,
        patientId: req.body.patientId,
        paymentId: req.body.paymentModeId,
        paymentNo: req.body.paymentNo
    });

    cmsPatientLedger.save()
    .then(data => {
        res.send(
            {
                "success": true,
                "message": "Appointment with id 7 created successfully."
            }
        )
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating operation"
        });
    });


}

const addPayment = (req, res) => {

    const cmspatientpay = new PatientPayment({ ...req.body, id: Math.floor(Math.random() * 10000000) + 1 })

    // save user in the database
    cmspatientpay.save()
        .then(data => {
            submitLedgerData(req, res);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating operation"
            });
        });
}

const getPayment= (req, res) => {

    PatientPayment.find({patientId: req.params.id})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

module.exports ={addPayment, getPayment}