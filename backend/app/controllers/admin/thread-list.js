const Thread = require("../../db/models/create-thread");
const User = require("../../db/models/user-model");


class ThreadList {
    async deleteThread(req, res) {

        const { id, userID } = req.body;
        const user = await User.findById(userID)

        if (user.isAdmin) {
            try {
                await Thread.deleteOne({ _id: id });
                res.status(200).json({ message: 'Dokument został usunięty.' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Wystąpił błąd serwera.' });
            }
        } else {
            res.status(403).json({ message: 'Brak uprawnień administracyjnych.' });
        }

    }

    async sendThreadLists(req, res) {

        const query = req.query.q;
        const perPage = 4;
        const currentPage = parseInt(req.query.page) || 1;

        console.log(query)

        try {
            let threadsList;
            const totalCount = await Thread.countDocuments();
            const totalPages = Math.ceil(totalCount / perPage);

            if (currentPage === 1) {
                threadsList = await Thread.find({
                    title: new RegExp(query, 'i') // Wyszukiwanie nieczułe na wielkość liter
                })
                    .populate('author', 'username')
                    .select('-password -posts -email -commentNumber')
                    .sort({ _id: -1 })
                    .limit(perPage);

            } else {
                threadsList = await Thread.find({
                    title: new RegExp(query, 'i') // Wyszukiwanie nieczułe na wielkość liter
                })
                    .populate('author', 'username')
                    .select('-password -posts -email -commentNumber')
                    .sort({ _id: -1 })
                    .skip((currentPage - 1) * perPage)
                    .limit(perPage);


            }
            if (threadsList.length === 0) {
                return res.json({
                    threadsList: [],
                    currentPage: 1,
                    totalPages: 0
                });
            }
            res.json({
                threadsList,
                    currentPage,
                    totalPages
                }
            )
        } catch (e) {
            console.error("Error in sendThreadList:", e)
            res.status(500).send('Internal Server Error')

        }
    }
}


module.exports = new ThreadList()