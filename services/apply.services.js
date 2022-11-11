const Apply = require("../models/Apply");
const Candidate = require("../models/Candidate");
const Job = require("../models/Job");

exports.createApplyService = async (value) => {
    const apply = await Apply.create(value);
    const { jobId, candidateId } = apply;

    const getCandidateJobs = await Candidate.findOne({ _id: candidateId });
    const getJobs = await Job.findOne({ _id: jobId });
    const deadline = getJobs.applicationDeadline;
    console.log(deadline.toISOString());
    const date = new Date().toISOString();

    if (getCandidateJobs.appliedJobs.length === 0) {
        if (deadline.toISOString() > date) {
            console.log("time hein", date);
            const insertJob = await Job.updateOne(
                { _id: jobId },
                { $push: { "appliedBy": candidateId } }
            );
            const insertCandidate = await Candidate.updateOne(
                { _id: candidateId },
                { $push: { "appliedJobs": jobId } }
            )
            console.log("apply")
        }
        else {
            console.log("time passed", date)
        }
    }
    else {
        getCandidateJobs.appliedJobs.forEach(async (element) => {
            if (!element.equals(jobId.toString())) {
                if (deadline.toISOString() > date) {
                    console.log("time hein", date);
                    const insertJob = await Job.updateOne(
                        { _id: jobId },
                        { $push: { "appliedBy": candidateId } }
                    );
                    const insertCandidate = await Candidate.updateOne(
                        { _id: candidateId },
                        { $push: { "appliedJobs": jobId } }
                    )
                    console.log("apply")
                }
                else {
                    console.log("time passed", date)
                }
            }
            else {
                console.log('already applied');
            }
        })
    }


    return apply;
}