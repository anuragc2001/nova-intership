
const dashboard = (req, res) => {
    console.log(req.User);
    res.render('admin/index', {u_name: req.User.adminName})
}

module.exports = {
    dashboard
}