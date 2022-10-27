const {SHA256} = require('../../../utils/SHA256')

const Admin = require('../../models/admin.model')

const getLoginPage = (req, res) => {
    if(req.session.isLoggedIn === true){
        console.log("dashboard");
        res.redirect('/dashboard')
    }else{
        res.render('auth/login')
    }
}

const postLogin = (req, res) => {

    const username = req.body.username
    const password = SHA256(req.body.password)

    Admin.findOne({ username: username })
        .then((user) => {

            if (!user) {
                return res.redirect('/login')
            }
            if (user.password === password) {
                req.session.isLoggedIn = true
                req.session.User = user
                req.session.save(err => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log('logged in');
                    res.redirect('/dashboard')
                })
            } else {
                res.send("Incorrect password")
            }
        })
}

const postLogout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/login')
    })
}

module.exports = {
    getLoginPage,
    postLogin,
    postLogout
}