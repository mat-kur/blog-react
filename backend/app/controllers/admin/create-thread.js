const Thread = require("../../db/models/create-thread");
const User = require("../../db/models/user-model");


function getFullDate() {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date
}
class CreateThread {
    async createThread (req, res) {


        console.log(req.session.user)
        if (req.session.user.isAdmin) {

            const { tags } = req.body

            const createThread = new Thread({
                title: req.body?.title,
                description: req.body.description,
                author: req.session.user._id,
                likedBy: [],
                likes: 0,
                tags: tags.split(',').map(tag => tag.trim()),
                date: getFullDate()
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
        const perPage = 5;
        const currentPage = parseInt(req.query.page) || 1;

        try {
            const totalCount = await Thread.countDocuments();
            const totalPages = Math.ceil(totalCount / perPage);

            let data;

            if (currentPage === 1) {
                data = await Thread.find()
                    .populate('author', 'username')
                    .sort({ _id: -1 })
                    .limit(perPage);
            } else {
                data = await Thread.find()
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



}

module.exports = new CreateThread()