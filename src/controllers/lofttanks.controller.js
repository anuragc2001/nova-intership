const {loftTankModel} = require('../models/tanks.models')

const lofttanks = (req, res, next) => {
    let queries = [
        loftTankModel.find({})
    ]
    
    Promise.all(queries)
        .then((result) => {
            console.log("l");
            res.render('lofttanks' , {l_data: result[0]})
        })
        .catch((err) => {
            console.log(err);
        })
};



module.exports = {
    lofttanks 
}