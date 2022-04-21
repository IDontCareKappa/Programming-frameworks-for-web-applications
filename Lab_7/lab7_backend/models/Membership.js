const mongoose = require("mongoose")

const membershipSchema = new mongoose.Schema({
    memberName: String,
    email: String,
    membershipDate: Date,
    membershipType: String,
    exercises: Array,
    payment: String,
    phone: String
})

module.exports = mongoose.model("Membership", membershipSchema)