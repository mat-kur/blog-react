const User = require("../../db/models/user-model");
const Comment = require("../../db/models/user-comment-model");

class UserProfile {

    async userProfile(req, res) {

        const { id } = req.params

        const singleUser = await User.findById(id).select("-password -email")
        const comment = await Comment.find({author: id})
            .sort({"_id": -1})
            .limit(5)
            .populate({
                path: 'thread',
                select: 'title',
            })



        const userProfileData = {
            user: singleUser,
            comments: comment
        }

        res.json(userProfileData)

    }

    async editUserProfile (req, res) {

       const { userID } = req.body
        const { id } = req.params
        console.log(req.body)

        if (id === userID) {
            try {
                const user = await User.findById(req.params.id)
                user.password = req.body.password
                user.avatar = req.file.filename,
                user.save()
                res.status(200).json({ok: 200}).redirect('/')
            } catch (e) {
                console.log(e)
            }
        } else {
            res.redirect('/')
        }

    }

}

module.exports = new UserProfile()