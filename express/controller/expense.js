const Expense = require('../model/Expense');
const addExpense = (req, res) => {

    const cmsExpense = new Expense({...req.body, id: Math.floor(Math.random() * 10000000) + 1})

    cmsExpense.save()
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

}

const getExpense = (req, res) => { // 1 is for Singapore
    
    Expense.find()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retrieving user information" })
    })

}

const reportExpense = (req, res) => {

    Expense.find()
    .then(data => {
        // res.send(data);
        res.send(
            {
                "expenseSummaryReport": {
                    "companyId": 1,
                    "month": null,
                    "totalExpense": 122.0
                },
                "expenseDetailReports":data
            }
        )
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })


}

module.exports = {addExpense, getExpense, reportExpense}