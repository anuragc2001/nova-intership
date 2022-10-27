
const loft = (req, res) => {
    console.log(req.User);
    res.render('admin/loft', {u_name: req.User.adminName})
}

module.exports = {
    loft
}