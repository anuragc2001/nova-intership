const {loftTankModel} = require('../models/tanks.models')

let l_data;
loftTankModel.find({}, (err, data)=>{
    if(err){
        throw err
    }else{
        l_data = data;
    }
});
const lofttanks = (req, res, next) => {
    res.render('lofttanks', {tank: l_data});
};



module.exports = {
    lofttanks 
}