const patientInvoice = require('../model/PatientInvoice');
const PatientLedger = require('../model/PatientLedger');

const submitLedgerData = (req,res) => {
    const cmsPatientLedger = new PatientLedger({
        balanceAmount: req.body.totalAmount,
        companyId: req.body.companyId,
        creditAmount: req.body.totalAmount,
        debitAmount: req.body.totalAmount,
        id: Math.floor(Math.random() * 10000000) + 1,
        invoiceId: req.body.invoiceNo,
        invoiceNo: req.body.invoiceNo,
        ledgerDate: req.body.invoiceDate,
        ledgerDetail: req.body.patientId,
        patientId: req.body.patientId,
        paymentId: '',
        paymentNo: ''
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

const addInvoice = (req, res) => {

    const cmspatientInvoice = new patientInvoice({ ...req.body, id: Math.floor(Math.random() * 10000000) + 1 });
    cmspatientInvoice.save()
        .then(data => {
            submitLedgerData(req, res);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating operation"
            });
        });

}

const searchLedger = (req, res) => {

    PatientLedger.find({patientId: req.params.id})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

const getAllInvoice = (req, res) => {

    patientInvoice.find({patientId: req.params.id})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const getInvoiceById = (req, res) => {

    patientInvoice.findOne({id: req.params.id})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const UpdateInvoice = (req, res) => {
    patientInvoice.findOneAndUpdate({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
    }

module.exports={addInvoice, searchLedger, getAllInvoice, getInvoiceById, UpdateInvoice}