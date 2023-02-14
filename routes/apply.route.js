const express = require('express');
const applyController = require('../controllers/apply.controller');
const uploader = require('../middleware/uploader');
const applyRoute = express.Router();

applyRoute.route('/jobs/:id/apply')
    .post(applyController.createApply)

applyRoute.post('/file-upload', uploader.single("image"), applyController.fileUpload);

module.exports = applyRoute;