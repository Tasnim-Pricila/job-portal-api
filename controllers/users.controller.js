const { signupService, findUserByEmail } = require("../services/users.services");
const { generateToken } = require("../utils/token");


exports.signup = async (req, res, next) => {
    try {
        const result = await signupService(req.body);
        res.status(200).send({
            status: "success",
            message: "Successfully Signed Up",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: " Signed Up failed",
            error: error.message
        })
    }
}
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                status: "fail",
                error: "Email or password field is empty",
            })
        }
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).send({
                status: "fail",
                error: "Email doesnot exist.Please Create an account first",
            })
        }
        const isPasswordvalid = user.comparePassword(password, user.password);

        if (!isPasswordvalid) {
            return res.status(400).send({
                status: "fail",
                error: "password does not match",
            })
        }
        if (user.status !== "active") {
            return res.status(400).send({
                status: "fail",
                error: "Your account is not active",
            })
        }
        const token = generateToken(user);
        const { password: pwd, ...others } = user.toObject();

        res.status(200).send({
            status: "success",
            message: "Successfully Signed In",
            data: {
                others,
                token
            }
        })

    } catch (error) {
        res.status(400).send({
            status: "fail",
            message: " Sign Up failed",
            error: error.message
        })
    }
}

exports.getMe = async (req, res) => {
    try {
        const user = await findUserByEmail(req.user?.email);
        res.status(200).send({
            status: "success",
            message: "Successfully Signed In",
            data: user
        })
    } catch (error) {
        res.status(400).send({
            status: "fail",
            error: error.message
        })
    }
}