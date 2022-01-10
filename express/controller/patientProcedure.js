const patientProced = require('../model/PatientProcedure');
const Patient = require('../model/Patient');
const procedures = require('../model/Procedure')

const addTreatment = (req, res) => {

    const cmspatientProc = new patientProced(
        {...req.body          
        })
        
    cmspatientProc.save()
        .then(data => {
            res.send(
                {
                    "success": true,
                    "message": "Treatment Id "+req.body.id +" created successfully.",
                    "procedureId" :req.body
                }
            )
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating operation"
            });
        });
}

const getPatientTreatment = (req, res) => {
    patientProced.find({ patientId: req.params.id })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

const getPatientTreatmentById = (req, res) => {
    //console.log("getPatientTreatmentById "+ req.params.id)
    patientProced.find({ id: req.params.id })
        .then(data => {
        //console.log(data)
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

const getProcedureName = (req, res) => {
    
    procedures.findOne({ id: req.params.id }, {"procedureName": 1, "_id":0})
      .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

const updateTreatment = (req, res) => {
    patientProced.findOneAndUpdate({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
    }

module.exports = {addTreatment, getPatientTreatment, getProcedureName,getPatientTreatmentById, updateTreatment}