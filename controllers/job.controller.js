const { createJobService, getJobService } = require("../services/job.services")

exports.createJob = async (req, res, next) => {
    try {
        const job = await createJobService(req.body);
        res.status(200).send({
            status: 'success',
            message: "Job created successfully",
            data: job
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Job creation failed",
            error: error.message
        })
    }
}
exports.getJob = async (req, res, next) => {
    try {
        const job = await getJobService() ;
        res.status(200).send({
            status: 'success',
            message: "Job found successfully",
            data: job
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Job not found",
            error: error.message
        })
    }
}