
const dashboard = (req, res) => {
    console.log(req.User);
    res.redirect('/')
}

module.exports = {
    dashboard
}