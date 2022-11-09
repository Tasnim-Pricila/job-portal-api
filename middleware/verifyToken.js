const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")?.[1];
        if (!token) {
            return res.status(400).send({
                status: "fail",
                message: "You are not logged in",
                // error: error.message
            })
        }
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET_TOKEN);
        req.user = decoded;
        next();

    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: "Invalid token",
            error: error.message
        })
    }
}