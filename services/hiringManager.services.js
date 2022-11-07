const HiringManager = require("../models/HiringManager");

exports.createHiringManagerService = async (value) => {
    const hiringManager = await HiringManager.create(value);
    return hiringManager;
}
exports.getHiringManagerService = async () => {
    const hiringManager = await HiringManager.find({});
    return hiringManager;
}
exports.getHiringManagerServiceById = async (id) => {
    const hiringManager = await HiringManager.findOne({ _id: id });
    return hiringManager;
}
exports.updateHiringManagerService = async (id, value) => {
    const hiringManager = await HiringManager.updateOne({ _id: id }, value, 
        { runValidators: true });
    return hiringManager;
}