const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const validator = require('validator');

const candidateSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [50, "Name is too large."],
    },
    email: {
        type: String,
        trim: true,
        unique: [true, "Email must be unique"],
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please provide a valid mail."]
    },
    contactNumber: {
        type: String,
        trim: true,
        required: [true, "contactNumber is required"],
        validate: [validator.isMobilePhone, "Please provide a valid phone number"]
    },
    address: {
        type: String,
        trim: true,
        required: [true, "Job Requirements is required"],
    },
    imageUrl: {
        type: String,
        trim: true,
        required: [true, "Location is required"],
        validate: [validator.isURL, "Please provide a valid Url"]
    },
    appliedJobs: [{
        type: ObjectId,
        ref: "Job"
    }]
}, {
    timeStamps: true
})

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
