require('dotenv').config()
const mongoose = require("mongoose");
const mongoUrl = process.env.mongo_url;

mongoose.connect = mongoose.connect(mongoUrl).then(console.log('Db conected')).catch(console.log('Error while connecting to db' , e))

module.exports = mongoose;