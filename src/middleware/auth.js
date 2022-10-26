const auth = (req, res, next) => {
    if (req.session.isLoggedIn === true) {
        req.User = req.session.User
        next()

    }else {
        res.redirect('/login')
    }
 
}

module.exports = auth