const User = require("../../db/models/user-model");


class Login {

    async loginSystem (req, res) {

        try {
            const { username, password } = req.body
            const user = await User.findOne({username: username})
            if(!user) {
                throw new Error ('user not found')
            }

            const isValidPassword = user.comparePassword(password)
            if (!isValidPassword) {
                throw new Error ('password not vaild')
            }

            req.session.user = {
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                avatar: user?.avatar
            };
            res.status(200).json({message: "User logged in"})

        } catch (e) {
            return res.json({
                errors: true
            })
        }

    }

    async logOut (req, res){
        req.session.destroy()
        res.json('Wylogowano')
    }

    async isUserLogged (req, res) {
        res.json({user: req.session.user})
    }

}
module.exports = new Login()
