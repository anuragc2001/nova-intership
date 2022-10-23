const {plasticTankModel} = require('../models/tanks.models')

let p_data;
plasticTankModel.find({}, (err, data)=>{
    if(err){
        throw err
    }else{
        p_data = data;
    }
});

const plastictanks = (req, res, next) => {
    res.render('plastictanks', {tank: p_data})
};



module.exports = {
    plastictanks
}