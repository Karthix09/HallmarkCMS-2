// MAKE CHANGES 
const router = require('express').Router();
const {itemSearch, addItem, inventoryReport, getItem, updateItem, getAllItems} = require('../controller/inventory')

//Add items to database
router.post('/item/addItemMaster', addItem);
//Get Items from database, but why post ?
router.post('/item/search', itemSearch);
router.post('/reports/stockReports',inventoryReport);
router.get('/item/:id', getItem);
router.put('/item/updateItemMaster/:id', updateItem);

router.get('/item/all/:id', getAllItems);

module.exports = router;