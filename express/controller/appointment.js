const Appointment = require('../model/Appointment');
const Patient = require('../model/Patient');


const appointmentCount = (req, res) => {
    Appointment.find({ id: req.params.id })
        .then(data => {
            res.send({ "id": null, "totalCount": 0, "engagedCount": 0, "checkinCount": 0, "checkoutCount": 0, "waitingCount": 0, "scheduledCount": 0 })
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const addAppointment = (req, res) => {

    const cmsappointment = new Appointment({ ...req.body, id: Math.floor(Math.random() * 10000000) + 1 })

    cmsappointment.save()
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




    // const cmspatient = new Patient({...req.body.Patient.patientName, id: Math.floor(Math.random() * 10000000) + 1})

    // cmspatient.save()
    //     .then(data => {
    //         res.send(
    //                 {
    //                     "success": true,
    //                     "message": "User with id 7 created successfully."
    //                 }
    //             )
    //         })
    //         .catch(err => {
    //             res.status(500).send({
    //                 message: err.message || "Some error occurred while creating operation"
    //             });
    //         });
}

const allAppointment = (req, res) => {
    // save user in the database
    Appointment.find({ companyId: req.body.companyId })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const updateAppointment =  (req, res) => {


    Appointment.find().findOneAndUpdate({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        res.send({

            "success": true,
            "message": "Appointment with id 3664 updated successfully."

        })
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

const deleteAppointment = (req, res) => {

    Appointment.find().findOneAndDelete({id: req.params.id}).then(data => {
        res.send({
            "success": true,
            "message": "Appointment with id 3664 deleted successfullydsdssdsd."
        })
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })  
}

const getDoctorAppointment = (req, res) => {
    // save user in the database
    Appointment.find({$and: [{ companyId: req.body.companyId }, {userId: req.body.userId }]   }      )
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
        })
}

module.exports={appointmentCount, addAppointment, allAppointment, updateAppointment, deleteAppointment, getDoctorAppointment}