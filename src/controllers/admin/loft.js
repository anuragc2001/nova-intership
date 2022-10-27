const {loftTankModel} = require('../../models/tanks.model')

const loft = (req, res, next) => {
    let queries = [
        loftTankModel.find({})
    ]
    
    Promise.all(queries)
        .then((result) => {
            console.log("l");
            console.log(req.User);
            res.render('admin/loft' , {u_name: req.User.adminName, l_data: result[0]})
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
    loft
}