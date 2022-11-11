const { createApplyService } = require("../services/apply.services");

exports.createApply = async (req, res, next) => {
    try {
        const apply = await createApplyService(req.body);
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