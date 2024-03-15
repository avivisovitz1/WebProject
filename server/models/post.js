const moongose = require('mongoose');

const postSchema = new moongose.Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true,
    }
});

module.exports = moongose.model('Post', postSchema);