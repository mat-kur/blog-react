const Thread = require("../../db/models/create-thread");
const User = require("../../db/models/user-model");
const Comment = require("../../db/models/user-comment-model")


function getFullDate() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date
}
class CreateThread {
    async createThread (req, res) {

        console.log(req.body)
        console.log(req.file)
        if (req.session.user.isAdmin) {

            const { tags } = req.body

            const createThread = new Thread({
                title: req.body?.title,
                description: req.body.description,
                author: req.session.user._id,
                likedBy: [],
                likes: 0,
                tags: tags.split(',').map(tag => tag.trim()),
                date: getFullDate(),
                image: req.file?.filename,
            });

            try {
                await createThread.save()
                console.log('Zapisano pomyślnie')
            } catch (e) {
                console.log(e)
            }
        } else {
            throw new Error("You have no admin role");
        }


    }

    async getThreadFromDataBase(req, res) {
        const query = req.query.q;
        const perPage = 5;
        const currentPage = parseInt(req.query.page) || 1;

        console.log(query)

        try {
            const totalCount = await Thread.countDocuments();
            const totalPages = Math.ceil(totalCount / perPage);

            let data;

            if (currentPage === 1) {
                data = await Thread.find({
                    title: new RegExp(query, 'i') // Wyszukiwanie nieczułe na wielkość liter
                })
                    .populate('author', 'username')
                    .sort({ _id: -1 })
                    .limit(perPage);
            } else {
                data = await Thread.find({
                    title: new RegExp(query, 'i') // Wyszukiwanie nieczułe na wielkość liter
                })
                    .populate('author', 'username')
                    .sort({ _id: -1 })
                    .skip((currentPage - 1) * perPage)
                    .limit(perPage);
            }

            res.json({
                data,
                currentPage,
                totalPages,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" });
        }
    }



    async getThreadByTag (req, res) {

        try {
            const tags = req.query.tags;
            console.log(tags)
            const threadsWithTags = await Thread.find({ tags: { $in: tags } });
            res.json(threadsWithTags);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }


    }

    async mostRatedThread(req, res) {
        try {
            const data = await Thread.find({}).sort({ likes: -1 }).limit(5)
            res.json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async mostActiveUsers(req, res) {
        try {
            const data = await User.find({})
                .sort({ commentNumber: -1 })
                .select("-password -email")
                .limit(5)
            res.json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async countThreads(req, res) {

        try {
            const threadCount = await Thread.countDocuments()
            const commentCount = await Comment.countDocuments()
            const userCount = await User.countDocuments()
            const threads = await Thread.find({});
            const lastFiveThreads = await Thread.find({})
                .sort({ _id: -1 }).
                limit(5)
            const lastFiveComments = await Comment.find({})
                .sort({ _id: -1 })
                .limit(5)
                .populate('author', 'username')
            if (!threads || !lastFiveThreads || !lastFiveComments) {
                res.status(404).send('Document not found')
            }
            const totalLikesSummary = threads.reduce((total, thread) => total + thread.likes, 0);
            res.json({lastFiveComments, lastFiveThreads,threadCount, commentCount, userCount,totalLikesSummary})
        } catch (e) {
            console.log(e);
            res.status(500).send('Internal Server Error');
        }
    }



}

module.exports = new CreateThread()