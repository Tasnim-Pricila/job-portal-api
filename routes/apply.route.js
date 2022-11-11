const express = require('express');
const applyController = require('../controllers/apply.controller');
const applyRoute = express.Router();

applyRoute.route('/apply')
    .post(applyController.createApply)
   

module.exports = applyRoute;