const mongoose = require('mongoose');
const { Schema } = mongoose;

const Feedback = new Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    email: {
        type: String
    },

    feedback: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', Feedback)