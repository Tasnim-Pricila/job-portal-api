const express = require('express');
const jobController = require('../controllers/job.controller');
const jobRoute = express.Router();

jobRoute.route('/jobs')
    .post(jobController.createJob)
    .get(jobController.getJob)

jobRoute.route('/jobs/highestPaidJob')
    .get(jobController.getHighestPaidJob)

jobRoute.route('/jobs/mostAppliedJob')
    .get(jobController.getMostAppliedJob)

jobRoute.route('/jobs/:id')
    .patch(jobController.updateJobyId)
    .delete(jobController.deleteJobById)

jobRoute.route('/manager/jobs/:id')
    .get(jobController.getJobById)


module.exports = jobRoute;