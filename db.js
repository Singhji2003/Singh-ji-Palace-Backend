const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const MongooseURL = process.env.MongooseURL

const connectToMongooDB = () => {
    if (mongoose.connect(MongooseURL)) {
        console.log("Connect To MongooDb Sucessfully")
    }
    else {
        console.log("Got some issue in Backend")
    }
}
module.exports = connectToMongooDB