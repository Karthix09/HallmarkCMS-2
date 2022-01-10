const Expense = require('../model/MasterData');

const addLookup = (req, res) => {

    const cmsprocedure = new Expense({ ...req.body })

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

const searchLookup = (req, res) => {
    Expense.find({ companyId: req.params.companyId, lookupType: req.params.type }, function (err, user) {
        if (err) {
            res.send(err);
        }
        console.log(user);
        res.json(user);

    });

}

module.exports={addLookup, searchLookup}