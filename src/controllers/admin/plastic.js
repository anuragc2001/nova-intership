
const plastic = (req, res) => {
    console.log(req.User);
    res.render('admin/plastic', {u_name: req.User.adminName})
}

module.exports = {
    plastic
}