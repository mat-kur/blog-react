const Comment = require("../../db/models/user-comment-model");
const User = require("../../db/models/user-model");

class UserLikesComment {

    async commentLike (req, res) {

        const { userID } = req.body
        const { commentID } = req.body
        const { userSessionID } = req.body

        if (userID !== userSessionID) {
            try {
                const comment = await Comment.findById(commentID)
                const user = await User.findById({_id: userID})

                if (!comment.likedBy.includes(userSessionID)){
                    comment.likedBy.push(userSessionID)
                    comment.likes += 1
                    user.likes += 1
                    comment.save()
                    user.save()
                } else if (comment.likedBy.includes(userSessionID)) {
                    comment.likedBy.pull(userSessionID)
                    comment.likes -= 1
                    user.likes -= 1
                    user.save()
                    comment.save()
                }
            } catch (e) {
                error: e.errors
            }
        } else {
            res.json({message: "You cant like your own comment"})
        }

    }

    async mostLikedUserComment (req, res) {

    }


}

module.exports = new UserLikesComment()