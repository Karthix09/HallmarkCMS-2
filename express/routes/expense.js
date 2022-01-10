const router = require('express').Router();
const {addExpense,
    getExpense,
    reportExpense} = require('../controller/expense')

router.post('/expense/addExpense', addExpense);
router.get('/expense/all/1', getExpense);
router.post('/reports/expenses', reportExpense);

module.exports = router;