const Thread = require("../../db/models/create-thread");


class EditThread {
    async editThread (req, res) {

        if (req.session.user.isAdmin) {

            const thread = await Thread.findById(req.params.id)
            thread.title = req.body.title
            thread.description = req.body.description
            thread.tags = req.body.description

            try {
                thread.save()
                res.redirect('/')
            } catch (e) {
                errors: e.error
                res.redirect('/')
            }
        } else {
            throw new Error("You have no admin role");
        }
    }

    async getSingleThread(req, res) {
        const { id } = req.params
        try {
            const data = await Thread.findById(id)
            res.json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }

}

module.exports = new EditThread()