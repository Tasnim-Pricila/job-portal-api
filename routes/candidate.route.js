const express = require('express');
const candidateController = require('../controllers/candidate.controller');
const candidateRoute = express.Router();

candidateRoute.route('/candidate')
    .post(candidateController.createCandidate)
    .get(candidateController.getCandidate)

candidateRoute.route('/candidate/:id')
    .patch(candidateController.updateCandidateyId)
    .delete(candidateController.deleteCandidateById)

module.exports = candidateRoute;