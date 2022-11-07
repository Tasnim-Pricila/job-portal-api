const { createHiringManagerService, getHiringManagerService, getHiringManagerServiceById, updateHiringManagerService } = require("../services/hiringManager.services");

exports.createHiringManager = async (req, res, next) => {
    try {
        const hiringManager = await createHiringManagerService(req.body);
        res.status(200).send({
            status: 'success',
            message: "HiringManager created successfully",
            data: hiringManager
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "HiringManager creation failed",
            error: error.message
        })
    }
}
exports.getHiringManager = async (req, res, next) => {
    try {
        const hiringManager = await getHiringManagerService();
        res.status(200).send({
            status: 'success',
            message: "HiringManager found successfully",
            data: hiringManager
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "HiringManager not found",
            error: error.message
        })
    }
}
exports.getHiringManagerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hiringManager = await getHiringManagerServiceById(id);
        res.status(200).send({
            status: 'success',
            message: "HiringManager found successfully",
            data: hiringManager
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "HiringManager not found",
            error: error.message
        })
    }
}
exports.updateHiringManageryId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const hiringManager = await updateHiringManagerService(id, req.body);
        if (hiringManager.modifiedCount > 0) {
            res.status(200).send({
                status: 'success',
                message: "HiringManager updated successfully",
                data: hiringManager
            })
        }
        else{
            res.status(200).send({
                status: 'success',
                message: "HiringManager found but already updated",
                data: hiringManager
            })
        }
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "HiringManager update failed",
            error: error.message
        })
    }
}