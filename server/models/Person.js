const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/learningSomething');


const userData = mongoose.Schema({
    email: String,
    password: String,
})

module.exports = mongoose.model("user", userData);