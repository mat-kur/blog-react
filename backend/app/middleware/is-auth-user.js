module.exports = function (req, res, next){
    if(req.session.user._id){
        res.json('Zaloguj')
    }
    next()
}