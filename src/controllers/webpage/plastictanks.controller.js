const {plasticTankModel} = require('../../models/tanks.model')


const plastictanks = (req, res, next) => {
    let queries = [
        plasticTankModel.find({})
    ]
    
    Promise.all(queries)
        .then((result) => {
            console.log("p");
            res.render('templates/plastictanks' , {p_data: result[0]})
        })
        .catch((err) => {
            console.log(err);
        })
};



module.exports = {
    plastictanks
}