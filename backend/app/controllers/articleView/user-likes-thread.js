const Thread = require("../../db/models/create-thread");
const User = require("../../db/models/user-model");

class UserLikesThread {

    async userLike (req, res) {

        const {user: userId} = req.body
        const { threadId } = req.body

        try {
            const thread = await Thread.findById(threadId)
            const user = await User.findById({_id: thread.author})

            if (!thread.likedBy.includes(userId)){
                thread.likedBy.push(userId)
                thread.likes += 1
                user.likes += 1
                thread.save()
                user.save()
                console.log('like dodany')
            } else if (thread.likedBy.includes(userId)) {
                thread.likedBy.pull(userId)
                thread.likes -= 1
                user.likes -= 1
                user.save()
                thread.save()
                console.log('like odjęty')
            }
        } catch (e) {
            error: e.errors
            console.log(e)
        }
    }

}

module.exports = new UserLikesThread()