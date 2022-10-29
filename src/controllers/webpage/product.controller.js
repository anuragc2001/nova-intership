const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')



const product = (req, res, next) => {
    id = req.params.id
   
    let queries = [
        stainlessSteelTankModel.find({_id: id}),
        plasticTankModel.find({_id: id}),
        loftTankModel.find({_id: id})
    ]
    
    Promise.all(queries)
        .then((result) => {
            if(result[0].length !== 0){
                res.render('templates/showtank_ss', {tank: result[0][0]})
            }else if(result[1].length !== 0){
                res.render('templates/showtank_p', {tank: result[1][0]})
            }else if(result[2].length !== 0){
                res.render('templates/showtank_l', {tank: result[2][0]})
            }
        })
        .catch((err) => {
            console.log(err);
        })
};


module.exports = {
    product, 
}