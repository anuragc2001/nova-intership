const Admin = require('../../models/admin.model')

const getLoginPage = (req, res) => {
    res.render('auth/login')
}

const postLogin = (req, res) => {

    const username = req.body.username
    const password = req.body.password

    console.log(username);
    console.log(password);

    Admin.findOne({ username: username })
        .then((user) => {

            if (!user) {
                return res.redirect('/login')
            }
            if (user.password === password) {
                // req.session.isLoggedIn = true
                // req.session.User = user
                // req.session.save(err => {
                //     if (err) {
                //         return console.log(err);
                //     }
                //     res.redirect('/dashboard')
                // })
                console.log('dashboard');
                res.redirect('/')
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