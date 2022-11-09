const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email address is required"],
        trim: true,
        unique: [true, "Email must be unique."],
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid mail."]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: (value) => 
                validator.isStrongPassword(value, {
                    minLength: 6,
                    minLowercase: 1,
                    minNumbers: 1,
                    minUppercase: 1,
                    minSymbols: 1
                }),
            
            message: "Password {VALUE} is not strong enough "
        }
    },
    confirmPassword: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: function(value) {
                return value === this.password;
            },
            message: "Password don't match."
        }
    },
    role: {
        type: String,
        enum: {
            values: ["Candidate", "Hiring-manager", "Admin"],
            message: "Role can't be {VALUE}, must be Candidate/Hiring-manager/Admin",
        },
        required: true
    },
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large."],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large."],
    },
    contactNumber: {
        type: String,
        validate: [validator.isMobilePhone, "Please provide a valid phone number"]
    },
    shippingAddress: {
        type: String
    },
    imageUrl: {
        type: String,
        validate: [validator.isURL, "Please provide a valid url"]
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'inactive', 'blocked'],
            message: "Status can't be {VALUE}, must be active/inactive/blocked",
        },
        default: 'active'
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
}, {
    timestamps: true
})

userSchema.pre('save', function (next) {
    const password = this.password;
    const hashedPassword = bcrypt.hashSync(password);
    this.password = hashedPassword;
    this.confirmPassword = undefined;
    next();
})

userSchema.methods.comparePassword = function(password, hash) {
    const isPasswordvalid = bcrypt.compareSync(password, hash);
    return isPasswordvalid;
}

const User = mongoose.model('User', userSchema);
module.exports = User;