const PatientMc = require('../model/PatientmcReport');

const patientmcReport = (req, res) => {

    const cmspatientmc = new PatientMc({ ...req.body})
    // Saving procedure in the database
    cmspatientmc.save()
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

const getmcReport =(req, res) =>{

    PatientMc.find({ patientId: req.params.id })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })

}

module.exports = {patientmcReport, getmcReport}