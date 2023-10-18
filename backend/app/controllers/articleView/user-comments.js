const Comment = require("../../db/models/user-comment-model");
const User = require("../../db/models/user-model");
const Thread = require("../../db/models/create-thread");
const CommentReply = require("../../db/models/user-comment-reply-model");
const Report = require("../../db/models/comment-report-model");

function getFullDate() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date
}

class UserComments {

    async userComments(req, res) {

        const {_id: id} = req.params

        if (req.session.user) {

            const comment = new Comment({
                description: req.body.comment,
                date: getFullDate(),
                author: req.session.user._id,
                thread: req.params.id,
                avatar: req.session.user.avatar
            });
            await User.updateOne(
                {_id: req.session.user._id},
                {$inc: {commentNumber: +1}}
            );
            const thread = await Thread.findById({_id: req.params.id}).sort({ _id: -1 })
            thread.comments.push(comment)

            try {
                await comment.save()
                await thread.save()
                res.json({ok: "Succes"})
            } catch (e) {
                console.error('Wystąpił błąd podczas zapisywania:', e.message);
                res.status(500).send('Internal Server Error');
            }
        } else {
            throw new Error("You are not logged")
        }

    }

    async userDeleteComment(req, res) {

        const {_id} = req.session.user
        const {userID, commentID} = req.body

        if (_id === userID || req.session.user.isAdmin) {
            try {
                await Comment.deleteOne({_id: commentID});
                await User.updateOne(
                    {_id: userID},
                    {$inc: {commentNumber: -1}})
                res.status(200).json({message: 'Dokument został usunięty.'});
            } catch (error) {
                console.error(error);
                res.status(500).json({message: 'Wystąpił błąd serwera.'});
            }
        } else {
            res.redirect('/')
        }
    }

    async deleteReplyComment(req, res) {
        const { commentID, replyID, userID } = req.body;

        if (req.session.user._id === userID || req.session.user.isAdmin) {
            try {
                const comment = await Comment.findById(commentID);

                if (!comment) {
                    return res.status(404).json({ message: 'Document not found' });
                }
                comment.replies = comment.replies.filter(reply => reply.toString() !== replyID);
                await comment.save();
                await CommentReply.deleteOne({ _id: replyID });

                res.status(200).json({ message: 'Document has beed deleted' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Server error' });
            }
        } else {
            res.status(403).json({ message: 'Brak uprawnień do wykonania tej operacji.' });
        }
    }


    async userEditComment(req, res) {

        const {commentID, userID, comment: commentDes, commentAuthorID} = req.body

        if (commentAuthorID !== userID) {
            return res.status(403).send('You have no admin acces.');
        }

        if (!commentID) {
            return res.status(404).send('User comment not found');
        }

        if (commentAuthorID === userID) {

            const comment = await Comment.findByIdAndUpdate(
                commentID,
                { description: commentDes },
                { new: true }
            );

            return res.send(comment);
        }


    }

    async userReplyComment(req, res) {

        const {_id: id} = req.params

        if (req.session.user) {
            const {commentID, userID, commentReply} = req.body

            const reply = new CommentReply({
                description: commentReply,
                date: getFullDate(),
                author: req.session.user._id,
                comment: commentID,
                avatar: req.session.user.avatar
            });
            await User.updateOne(
                {_id: req.session.user._id},
                {$inc: {commentNumber: +1}}
            );
            const comment = await Comment.findById({_id: commentID})
            comment.replies.push(reply)

            try {
                await comment.save()
                await reply.save()
                res.json({ok: "Succes"})
            } catch (e) {
                console.error('Wystąpił błąd podczas zapisywania:', e.message);
                res.status(500).send('Internal Server Error');
            }
        } else {
            throw new Error("You are not logged")
        }

    }

    async userGetReply(req, res) {
        try {
            const {commentID} = req.params;
            const replies = await CommentReply.findById({_id: commentID})
                .populate('author', 'username avatar');
            res.json(replies);
        } catch (error) {
            console.error('Error while fetching replies:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async userReport(req, res) {

        const {_id: id} = req.params

        if (req.session.user) {
            const {commentID, userID, reason, authorOfComment} = req.body

            const report = new Report({
                reason: reason,
                date: getFullDate(),
                author: req.session.user._id,
                comment: commentID,
                avatar: req.session.user.avatar,
                usernameOfReportedComment: authorOfComment
            });

            const comment = await Comment.findById({_id: commentID})
            comment.reports.push(report)

            try {
                await comment.save()
                await report.save()
                res.json({ok: "Succes"})
            } catch (e) {
                console.error('Wystąpił błąd podczas zapisywania:', e.message);
                res.status(500).send('Internal Server Error');
            }
        } else {
            throw new Error("You are not logged")
        }

    }


}

module.exports = new UserComments()