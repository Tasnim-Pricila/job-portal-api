const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const applySchema = mongoose.Schema({
    jobId: [{
        type: ObjectId,
        ref: "Job",
        required: [true, "Job Id is required"]
    }],
    candidateId: [{
        type: ObjectId,
        ref: "Candidate",
        required: [true, "Candidate Id is required"]
    }],
    // resume: {
    //     type: String,
    //     trim: true,
    //     required: [true, "Resume is required"],
    // },
}, {
    timeStamps: true
})

const Apply = mongoose.model("Apply", applySchema);
module.exports = Apply;
