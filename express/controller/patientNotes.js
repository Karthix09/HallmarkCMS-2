const PatientNote = require('../model/PatientNote');

const addNote = (req, res) => {

    const cmsNotes = new PatientNote({...req.body, id: Math.floor(Math.random() * 10000000) + 1})

    cmsNotes.save()
        .then(data => {
            res.send(
                {
                    "success": true,
                    "message": "Notes with id 7 created successfully."
                }
            )
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating operation"
            });
        });


}

const getNote = (req, res) => { 
    //console.log("Patient id" + req.params.id);
    PatientNote.find({patientId: req.params.id})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving patient note information" })
    })

}

const updateNote = (req, res) => {
    // console.log("req.params.id" + req.params.id)
    // console.log(req.body.id);
    PatientNote.findOneAndUpdate({id: req.body.id}, { $set: req.body })
    .then(data => {
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving patient note information" })
    })
    }

    const getNotebyId = (req, res) => { 
    //console.log("req.params.id getNote" + req.params.id)
    PatientNote.find({id: req.params.id})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving patient note information" })
    })

}

module.exports={addNote, getNote, updateNote, getNotebyId}