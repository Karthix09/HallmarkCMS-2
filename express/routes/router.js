const express = require('express');
const route = express.Router()
const controller = require('../controller/user');

// API
route.post('/users', controller.create);
route.get('/users', controller.find);
route.put('/users/:id', controller.update);
route.delete('/users/:id', controller.delete);
route.put('/users/review/:id', controller.review);


module.exports = route