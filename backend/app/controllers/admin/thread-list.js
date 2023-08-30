const Thread = require("../../db/models/create-thread");


class ThreadList {

    async deleteThread (req, res) {
        const {id} = req.body

        if (req.session.user.isAdmin) {

            try {
                await Thread.deleteOne({_id: id});
                res.status(200).json({message: 'Dokument został usunięty.'});
            } catch (error) {
                console.error(error);
                res.status(500).json({message: 'Wystąpił błąd serwera.'});
            }
        } else {
            throw new Error("You have no admin role");
        }
    }

}

module.exports = new ThreadList()