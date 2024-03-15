const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Student', studentSchema);