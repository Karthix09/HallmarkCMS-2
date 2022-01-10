const Patient = require('../model/Patient');
const Appointment = require('../model/Appointment');
const PatientPayment = require('../model/PatientPayment');
const PatientInvoice = require('../model/PatientInvoice');

const addPatient = (req, res) => {
    console.log("req.body")
    console.log(req.body)
    const cmspatient = new Patient({...req.body, id: Math.floor(Math.random() * 10000000) + 1})

    cmspatient.save()
        .then(data => {
            res.send(
                {
                    "success": true,
                    "message": "User with id 7 created successfully."
                }
            )
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating operation"
            });
        });

    // res.send(req.user);

}

const searchPatient = (req, res) => {

    Patient.findOne({ id: req.params.id })
    .then(data => {
        res.send(data)
        //console.log("in search Patient id " + req.params.id)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

const searchPatientName = (req, res) => {
    var query = {}; 
    if (req.params.patientName !== 'null' ) {
        if(isNaN(req.params.patientName)){
            query = { patientName: {$regex: req.params.patientName,$options: 'i' }};
        }else{
            query = {$or:[{id: req.params.patientName}, {mobileNo: req.params.patientName}]}
        }
    }
    //console.log(query);
    Patient.find(query)
    .then(data => {
        res.send(data)
        //console.log("in search Patient Name" + req.params.patientName)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

const showAllPatient = (req, res) => {
    //console.log("in showallPatient" )
    Patient.find({})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })

}

const updatePatient = (req, res) => {
    
    Patient.findOneAndUpdate({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
    }

const deletePatient = (req, res) => {

    Patient.findOneAndRemove({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
    
}

const getAppointmentByPatient = (req, res) => {
        
        Appointment.find({ "patient.id": req.params.id })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

module.exports={addPatient, searchPatient, showAllPatient, updatePatient, deletePatient, getAppointmentByPatient}
