module.exports = function isUserAdmin(req, res, next){
    if (!req.session.isAdmin) {
        return res.status(403).redirect('/login')
    }

    next()
}