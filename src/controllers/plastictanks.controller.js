const {plasticTankModel} = require('../models/tanks.models')


const plastictanks = (req, res, next) => {
    let queries = [
        plasticTankModel.find({})
    ]
    
    Promise.all(queries)
        .then((result) => {
            console.log("p");
            res.render('plastictanks' , {p_data: result[0]})
        })
        .catch((err) => {
            console.log(err);
        })
};



module.exports = {
    plastictanks
}