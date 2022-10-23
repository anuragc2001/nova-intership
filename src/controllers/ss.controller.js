const {stainlessSteelTankModel} = require('../models/tanks.models')

let ss_data;
stainlessSteelTankModel.find({}, (err, data)=>{
    if(err){
        throw err
    }else{
        ss_data = data;
    }
});


const ss = (req, res, next) => {
    res.render('ss', {tank: ss_data});
};



module.exports = {
    ss 
}