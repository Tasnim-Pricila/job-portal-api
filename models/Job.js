const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({
    companyName: {
        type: String,
        trim: true,
        required: [true, "Company Name is required"],
        minLength: [3, "Company Name must be at least 3 characters."],
        maxLength: [50, "Company Name is too large."],
    },
    companyDescription: {
        type: String,
        trim: true,
        required: [true, "Description is required"],
        minLength: [30, "Description must be at least 30 characters."],
    },
    jobTitle: {
        type: String,
        trim: true,
        required: [true, "Job Title is required"],
        minLength: [3, "Title must be at least 3 characters."],
        maxLength: [100, "Title is too large."],
    },
    requirements: {
        type: String,
        trim: true,
        required: [true, "Job Requirements is required"],
        minLength: [30, "Requirements must be at least 30 characters."],
    },
    location: {
        type: String,
        trim: true,
        required: [true, "Location is required"],
        minLength: [3, "Location must be at least 3 characters."],
    },
    workingHours: {
        type: String,
        trim: true,
        required: [true, "Location is required"],
    },
    salary: {
        type: String,
        required: [true, "Salary is required"],
    },
    jobType: {
        type: String,
        required: [true, "Job Type is required"],
        enum: {
            values: ['full-time', 'part-time', 'internship'],
            message: "Unit value can not be {VALUE}, must be  full-time/part-time/internship"
        },
        lowercase: true
    },
    vacancy: {
        type: Number,
        required: [true, "vacancy is required"],
        minLength: 1
    },
    jobNature: {
        type: String,
        required: [true, "Job Nature is required"],
        enum: {
            values: ['On-site', 'Remote', 'Hybrid'],
            message: "Unit value can not be {VALUE}, must be  On-site/Remote/Hybrid"
        },
    },
    startDate: {
        type: String,
        required: [true, "Start Date is required"],
    },
    applicationDeadline: {
        type: Date,
        required: [true, "Deadline is required"],
    },
    numberOfApplication: {
        type: Number,
        default: 0,
        minLength: 0
    },
    postedBy: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "HiringManager",
            // required: true
        },
    },
    appliedBy: [{
        type: ObjectId,
        ref: "Candidate"
    }]

}, {
    timeStamps: true
})

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
