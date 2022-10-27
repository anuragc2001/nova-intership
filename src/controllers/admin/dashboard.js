const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')



const dashboard = (req, res, next) => {
    let queries = [
        stainlessSteelTankModel.find({}).limit(6),
        plasticTankModel.find({}).limit(6),
        loftTankModel.find({}).limit(6)
    ]
    
    Promise.all(queries)
        .then((result) => {
            console.log("index");
            console.log(req.User);
            res.render('admin/index', {u_name: req.User.adminName, ss_data: result[0], p_data: result[1], l_data: result[2]})
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
    dashboard
}