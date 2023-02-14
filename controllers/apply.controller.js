const { createApplyService } = require("../services/apply.services");

exports.createApply = async (req, res, next) => {
    try {
        const { id } = req.params;
        const apply = await createApplyService(id, req.body);
        res.status(200).send({
            status: 'success',
            message: "Application successful",
            data: apply
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Apply failed",
            error: error.message
        })
    }
}

exports.fileUpload =  async (req, res) => {
    try {
        res.status(200).send({
            status: 'success',
            message: "file uploaded Successfully.",
            data: req.file
        });
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "File upload Failed.",
            error: error.message
        })
    }
}