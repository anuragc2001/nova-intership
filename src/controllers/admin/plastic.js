const {plasticTankModel} = require('../../models/tanks.model')

const plastic = (req, res, next) => {
    let queries = [
        plasticTankModel.find({})
    ]
    
    Promise.all(queries)
        .then((result) => {
            console.log(req.User);
            res.render('admin/plastic' , {u_name: req.User.adminName, p_data: result[0]})
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
    plastic
}