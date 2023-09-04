const Thread = require("../../db/models/create-thread");
const User = require("../../db/models/user-model");


class UsersActions {

    async sendUsersList (req, res) {

        try {
            const usersList = await User.find()
            if (!usersList) return res.status(404).send('Document not found')

            res.json(usersList)
        } catch (e) {
            console.error("Error in sendUsersList:", e)
            res.status(500).send('Internal Server Error')

        }

    }

    async accesAdmin (req, res) {
        console.log(req.body)
    }

    async banUser (req, res) {
        console.log(req.body)
    }

}

module.exports = new UsersActions()