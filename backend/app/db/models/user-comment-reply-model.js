const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentReplySchema = new Schema({
    description: {
        type: String,
        required: [true, "Wpisz treść komentarza"]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    },
    date: {
        type: String,
    },
    likedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    likes: {
        type: Number,
        default: 0
    },
})

const CommentReply = mongoose.model('Reply', commentReplySchema )


module.exports = CommentReply