const mongoose = require('mongoose')
const Schema = mongoose.Schema


const threadSchema = new Schema({
    title: {
        type: String,
        required: [true, "Pole title jest wymagane!"],
        minLength: [3, "Minimalna liczba znaków w title to 3"]
    },
    description: {
        type: String,
        required: [true, "Pole description jest wymagane!"],
        minLength: [3, "Minimalna liczba znaków description to 3"]
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    likedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    likes: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
    },
    tags: [
        String
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        type: String,
        default: 'default-image.jpg'
    }
})


const Thread = mongoose.model('Thread', threadSchema )


module.exports = Thread