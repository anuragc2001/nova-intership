
const stainless = (req, res) => {
    console.log(req.User);
    res.render('admin/stainless', {u_name: req.User.adminName})
}

module.exports = {
    stainless
}