const { createCandidateService, getCandidateService, getCandidateServiceById, updateCandidateService } = require("../services/candidate.services");

exports.createCandidate = async (req, res, next) => {
    try {
        const candidate = await createCandidateService(req.body);
        res.status(200).send({
            status: 'success',
            message: "Candidate created successfully",
            data: candidate
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Candidate creation failed",
            error: error.message
        })
    }
}
exports.getCandidate = async (req, res, next) => {
    try {
        const candidate = await getCandidateService();
        res.status(200).send({
            status: 'success',
            message: "Candidate found successfully",
            data: candidate
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Candidate not found",
            error: error.message
        })
    }
}
exports.getCandidateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const candidate = await getCandidateServiceById(id);
        res.status(200).send({
            status: 'success',
            message: "Candidate found successfully",
            data: candidate
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Candidate not found",
            error: error.message
        })
    }
}
exports.updateCandidateyId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const candidate = await updateCandidateService(id, req.body);
        if (candidate.modifiedCount > 0) {
            res.status(200).send({
                status: 'success',
                message: "Candidate updated successfully",
                data: candidate
            })
        }
        else{
            res.status(200).send({
                status: 'success',
                message: "Candidate found but already updated",
                data: candidate
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Candidate update failed",
            error: error.message
        })
    }
}