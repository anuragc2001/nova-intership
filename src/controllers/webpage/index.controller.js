const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')



const index = (req, res, next) => {
    let queries = [
        stainlessSteelTankModel.find({}).limit(4),
        plasticTankModel.find({}).limit(4),
        loftTankModel.find({}).limit(4)
    ]
    
    Promise.all(queries)
        .then((result) => {
            res.render('index', {ss_data: result[0], p_data: result[1], l_data: result[2]})
        })
        .catch((err) => {
            console.log(err);
        })
};


module.exports = {
    index, 
}