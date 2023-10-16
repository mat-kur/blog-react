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
}


module.exports = new ThreadList()