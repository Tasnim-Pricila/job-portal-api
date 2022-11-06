const Job = require("../models/Job")

exports.createJobService = async (value) => {
    const job = await Job.create(value);
    return job;
}
exports.getJobService = async () => {
    const jobs = await Job.find({});
    return jobs;
}