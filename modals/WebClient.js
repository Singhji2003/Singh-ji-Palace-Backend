const mongoose = require('mongoose');
const { Schema } = mongoose;

const WebClient = new Schema({
    name: {
        type: String
    },
    number: {
        type: Number
    },
    email: {
        type: String
    },
    theme: {
        type: String
    },
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('WebClient', WebClient)