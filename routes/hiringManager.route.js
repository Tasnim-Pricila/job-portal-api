const express = require('express');
const hiringManagerController = require('../controllers/hiringManager.controller');
const hiringManagerRoute = express.Router();

hiringManagerRoute.route('/managers')
    .post(hiringManagerController.createHiringManager)
    .get(hiringManagerController.getHiringManager)

hiringManagerRoute.route('/managers/:id')
    .patch(hiringManagerController.updateHiringManageryId)

module.exports = hiringManagerRoute;