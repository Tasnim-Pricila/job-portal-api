const User = require("../models/Users")

exports.signupService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}
exports.findUserByEmail = async (email) => {
    const user = await User.findOne({email});
    return user;
}