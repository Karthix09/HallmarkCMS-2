const Procedure = require('../model/Procedure');

const addProcedure = async (req, res) => {

const cmsprocedure = new Procedure({
    recordStatus: req.body.recordStatus,
    id: Math.floor(Math.random() * 10000000) + 1,
    loginId: req.body.loginId,
    procedureName: req.body.procedureName,
    procedureNotes: req.body.procedureNotes,
    parentProcedureId: req.body.parentProcedureId,
    price: req.body.price,
    taxId: req.body.taxId,
    companyId: req.body.companyId,
    taxDTO: req.body.taxDTO,
    companyDTO: req.body.companyDTO,
})

// Saving procedure in the database
cmsprocedure.save()
.then(data => {
    res.send(
        {
            "success": true,
            "message": "Procedure with id 51 created successfully."
        }
    )
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating operation"
    });
});

}

const getAllPRocedures = (req, res) => {

Procedure.find()
.then(data => {
    res.send(data)
})
.catch(err => {
    res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
})
}

const getIdProcedure = (req, res) => {

Procedure.findOne({ id: req.params.id })
.then(data => {
    res.send(data)
})
.catch(err => {
    res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
})
}

const updateProcedure = (req, res) => {

    Procedure.findOneAndUpdate({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

const deleteProcedure = (req, res) => {

     Procedure.deleteOne({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}

module.exports={addProcedure, getAllPRocedures, getIdProcedure, updateProcedure, deleteProcedure}