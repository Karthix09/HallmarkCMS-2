const Inventory = require('../model/Inventory');

const addItem = (req, res) => {

    const cmsInvent = new Inventory({ ...req.body, id: Math.floor(Math.random() * 10000000) + 1 })

    // Saving procedure in the database
    cmsInvent.save()
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

const itemSearch = (req, res) => {
    
    Inventory.find()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}

const inventoryReport = (req, res) => {

    Inventory.find()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}

const getItem = (req, res) => {

    Inventory.findOne({ id: req.params.id })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}

const updateItem = (req, res) => {

    Inventory.findOneAndUpdate({
        "id": req.params.id,
    }, { $set: req.body }).then(data => {
        res.send("success")
    })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
    })
}
const getAllItems = (req, res) => {

    Inventory.find({ companyId: req.params.id })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}

module.exports={addItem, itemSearch, inventoryReport, getItem, updateItem, getAllItems}