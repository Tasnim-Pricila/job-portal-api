const Candidate = require("../models/Candidate");

exports.createCandidateService = async (value) => {
    const candidate = await Candidate.create(value);
    return candidate;
}
exports.getCandidateService = async () => {
    const candidate = await Candidate.find({});
    return candidate;
}
exports.getCandidateServiceById = async (id) => {
    const candidate = await Candidate.findOne({ _id: id });
    return candidate;
}
exports.updateCandidateService = async (id, value) => {
    const candidate = await Candidate.updateOne({ _id: id }, value, 
        { runValidators: true });
    return candidate;
}