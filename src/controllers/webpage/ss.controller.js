const {stainlessSteelTankModel} = require('../../models/tanks.model')

const ss = (req, res, next) => {
    let queries = [
        stainlessSteelTankModel.find({})
    ]
    
    Promise.all(queries)
        .then((result) => {
            console.log("s");
            res.render('templates/ss' , {ss_data: result[0]})
        })
        .catch((err) => {
            console.log(err);
        })
};



module.exports = {
    ss 
}