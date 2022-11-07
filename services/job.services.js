const HiringManager = require("../models/HiringManager");
const Job = require("../models/Job")

exports.createJobService = async (value) => {
    const job = await Job.create(value);
    const { _id: jobId, postedBy } = job;
    const insertHR = await HiringManager.updateOne(
        { _id: postedBy.id },
        { $push: { postedJobs: jobId }}
    )
    return job;
}
exports.getJobService = async () => {
    const jobs = await Job.find({});
    return jobs;
}
exports.getJobServiceById = async (id) => {
    const jobs = await Job.findOne({ _id: id });
    return jobs;
}
exports.updateJobService = async (id, value) => {
    const jobs = await Job.updateOne({ _id: id }, value, 
        { runValidators: true });
    return jobs;
}