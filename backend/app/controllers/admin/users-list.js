const Thread = require("../../db/models/create-thread");
const User = require("../../db/models/user-model");


class UsersActions {

    async sendUsersList (req, res) {
        const query = req.query.q;

        try {
            const usersList = await User.find({
                username: new RegExp(query, 'i') // Wyszukiwanie nieczułe na wielkość liter
            })
            if (usersList.length === 0) {
                return res.status(404).send('No users found');
            }

            res.json(usersList)
        } catch (e) {
            console.error("Error in sendUsersList:", e)
            res.status(500).send('Internal Server Error')

        }

    }

    async setAdminRights (req, res) {

        const { userID, userAdminID } = req.body

        const singleUser = await User.findById(userID)
        const adminUser = await User.findById(userAdminID)
        if (!singleUser) return res.status(404).send('Document not found')

        async function setAdmin () {
            if (!singleUser.isAdmin) {
                singleUser.isAdmin = 1
                await singleUser.save()
            } else {
                singleUser.isAdmin = 0
                await singleUser.save()
            }
        }

        try {

            if (adminUser.isAdmin) {
                setAdmin()
            }

        } catch (e) {
            console.error("Error in setAdminRights:", e)
            res.status(500).send('Internal Server Error')
        }

    }

    async banUser (req, res) {

        const { userID, userAdminID } = req.body

        const singleUser = await User.findById(userID)
        const adminUser = await User.findById(userAdminID)
        if (!singleUser) return res.status(404).send('Document not found')

        async function setAdmin () {
            if (!singleUser.banned) {
                singleUser.banned = 1
                await singleUser.save()
            } else {
                singleUser.banned = 0
                await singleUser.save()
            }
        }

        try {

            if (adminUser.isAdmin) {
                setAdmin()
            }

        } catch (e) {
            console.error("Error in setAdminRights:", e)
            res.status(500).send('Internal Server Error')
        }

    }

}

module.exports = new UsersActions()