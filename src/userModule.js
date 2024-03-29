const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    user_Id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date,
        default: Date.now
    },
    deletionDate: {
        type: Date,
        default: null
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const userModule = new mongoose.model("users", LoginSchema);

module.exports = userModule;