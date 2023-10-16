const Thread = require("../../db/models/create-thread");
const User = require("../../db/models/user-model");


class UsersActions {

    async sendUsersList (req, res) {

        const query = req.query.q;
        const perPage = 4;
        const currentPage = parseInt(req.query.page) || 1;

        try {
            let usersList;
            const totalCount = await User.countDocuments();
            const totalPages = Math.ceil(totalCount / perPage);

            if (currentPage === 1) {
                 usersList = await User.find({
                    username: new RegExp(query, 'i') // Wyszukiwanie nieczułe na wielkość liter
                })
                     .select('-password -posts -email -commentNumber')
                    .sort({ _id: -1 })
                    .limit(perPage);

            } else {
                usersList = await User.find({
                    username: new RegExp(query, 'i') // Wyszukiwanie nieczułe na wielkość liter
                })
                    .select('-password -posts -email -commentNumber')
                    .sort({ _id: -1 })
                    .skip((currentPage - 1) * perPage)
                    .limit(perPage);


            }
            if (usersList.length === 0) {
                return res.json({
                    usersList: [],
                    currentPage: 1,
                    totalPages: 0
                });
            }
            res.json({
                usersList,
                currentPage,
                totalPages
                }
            )
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
        console.log('ban')
        const { userID, userAdminID } = req.body

        const singleUser = await User.findById(userID)
        const adminUser = await User.findById(userAdminID)
        if (!singleUser) return res.status(404).send('Document not found')
        console.log('ban')
        async function setAdmin () {
            console.log('ban')
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