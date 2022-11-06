const express = require('express');
const jobController = require('../controllers/job.controller');
const jobRoute = express.Router();

jobRoute.route('/')
    .post(jobController.createJob)
    .get(jobController.getJob)

module.exports = jobRoute;