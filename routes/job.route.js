const express = require('express');
const jobController = require('../controllers/job.controller');
const jobRoute = express.Router();

jobRoute.route('/jobs')
    .post(jobController.createJob)
    .get(jobController.getJob)

jobRoute.route('/jobs/:id')
    .patch(jobController.updateJobyId)

jobRoute.route('/manager/jobs/:id')
    .get(jobController.getJobById)


module.exports = jobRoute;