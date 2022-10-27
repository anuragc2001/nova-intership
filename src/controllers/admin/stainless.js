const {stainlessSteelTankModel} = require('../../models/tanks.model')

const stainless = (req, res, next) => {
    let queries = [
        stainlessSteelTankModel.find({})
    ]
    
    Promise.all(queries)
        .then((result) => {
            console.log("s");
            console.log(req.User);
            res.render('admin/stainless' , {u_name: req.User.adminName, ss_data: result[0]})
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
    stainless
}