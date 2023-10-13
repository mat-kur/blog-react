const Thread = require("../../db/models/create-thread");
const Comment = require("../../db/models/user-comment-model");
class ArticleView {

    async articleView(req, res) {

        const perPage = 5;
        const currentPage = parseInt(req.query.page) || 1;
        const { id: threadId } = req.params;

        try {
            const totalCount = await Comment.countDocuments({ thread: threadId });
            let totalPages = Math.ceil(totalCount / perPage);
            let data1;

            if (currentPage === 1) {
                data1 = await Comment.find({thread: threadId})
                    .populate('author', 'username avatar')
                    .populate('reportApprover', 'username avatar')
                    .sort({ _id: 1 })
                    .limit(perPage);
            } else {
                data1 = await Comment.find({thread: threadId})
                    .populate('author', 'username avatar')
                    .populate('reportApprover', 'username avatar')
                    .sort({ _id: 1 })
                    .skip((currentPage - 1) * perPage)
                    .limit(perPage);
            }

            const { id } = req.params;
            const singleThread = await Thread.findById(id)
                .populate('author', 'username postsNumber avatar')
                .populate({
                    path: 'comments',
                    populate: [
                        { path: 'author', model: 'User', select: '-password -email' },
                        { path: 'reportApprover', model: 'User', select: '-password -email' },
                    ],

                })
                .populate({
                    path: 'likedBy',
                    model: 'User',
                    select: 'username',
                });
            const usersWhoLiked = singleThread.likedBy.map(user => ({
                id: user._id,
                username: user.username,
            }));
            res.json({ data: singleThread, usersWhoLiked, currentPage, data1, totalPages});

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }

    }

}

module.exports = new ArticleView()