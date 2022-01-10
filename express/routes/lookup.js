const router = require('express').Router();
const {addLookup, searchLookup} = require('../controller/lookup')

router.post('/lookup/addLookup', addLookup);
router.get('/lookup/:type/:companyId', searchLookup);

module.exports = router;