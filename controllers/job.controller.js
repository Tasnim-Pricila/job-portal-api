const { createJobService, getJobService, updateJobService, getJobServiceById, deleteJobService, gethighestPaidJobService, getMostAppliedJobService } = require("../services/job.services")

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
exports.getHighestPaidJob = async (req, res, next) => {
    try {
        const job = await gethighestPaidJobService();
        res.status(200).send({
            status: 'success',
            message: "Job found successfully",
            data: job
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Job found failed",
            error: error.message
        })
    }
}

exports.getMostAppliedJob = async (req, res, next) => {
    try {
        const job = await getMostAppliedJobService();
        res.status(200).send({
            status: 'success',
            message: "Job found successfully",
            data: job
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Job found failed",
            error: error.message
        })
    }
}
exports.getJob = async (req, res, next) => {
    try {
        const job = await getJobService();
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
exports.getJobById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const job = await getJobServiceById(id);
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
exports.updateJobyId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const job = await updateJobService(id, req.body);
        if (job.modifiedCount > 0) {
            res.status(200).send({
                status: 'success',
                message: "Job updated successfully",
                data: job
            })
        }
        else{
            res.status(200).send({
                status: 'success',
                message: "Job found but already updated",
                data: job
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Job update failed",
            error: error.message
        })
    }
}
exports.deleteJobById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result  = await deleteJobService(id);
        if( result.deletedCount > 0){
            res.status(200).send({
                status: 'success',
                message: "Job deleted successfully",
                data: result
            })
        }
        else {
            res.status(400).send({
                status: 'fail',
                message: "Already deleted",
                data: result
            })
        }
       
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Deletion failed",
            error: error.message
        })
    }
}