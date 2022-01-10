
const router = require('express').Router();
const CmsUser = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {addUser, 
    editUser, 
    getAllSGUsers, 
    getUser, 
    getAllSGDocs, 
    getAllILODocs, 
    getAllMMDocs, 
    getAllJBDocs,
    deleteUser,
    checkPasswordAndGenerateToken } = require('../controller/user')

router.post('/user/addUser', addUser);
//Update User info (Roles still not working)
router.put('/user/updateUser/:id', editUser);
router.get('/user/allUsers/1', getAllSGUsers);
router.get('/user/:id',getUser);
router.get('/user/allDocs/1', getAllSGDocs); // Singapore
router.get('/user/allDocs/2', getAllILODocs); // Ilo Ilo
router.get('/user/allDocs/3', getAllMMDocs); // Myanmar
router.get('/user/allDocs/4', getAllJBDocs); // Johor Bahru
router.post('/token/generate-token', checkPasswordAndGenerateToken);
router.delete('/user/deleteUser/:id', deleteUser);

module.exports = router;