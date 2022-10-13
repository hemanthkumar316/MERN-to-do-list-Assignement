const mongoose = require('mongoose');

const Todos = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("ToDos", Todos)