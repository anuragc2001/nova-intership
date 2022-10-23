const {stainlessSteelTankModel} = require('../models/tanks.models')
const {plasticTankModel} = require('../models/tanks.models')
const {loftTankModel} = require('../models/tanks.models')


let ss_data, p_data, l_data;
stainlessSteelTankModel.find({}, (err, data)=>{
    if(err){
        throw err
    }else{
        ss_data = data;
        // console.log(data.length);
    }
}).limit(4);
plasticTankModel.find({}, (err, data)=>{
    if(err){
        throw err
    }else{
        p_data = data;
        // console.log(data.length);
    }
}).limit(4);
loftTankModel.find({}, (err, data)=>{
    if(err){
        throw err
    }else{
        l_data = data;
        // console.log(data.length);
    }
}).limit(4);

const data = {
    ss_data,
    p_data,
    l_data,
}


const index = (req, res, next) => {
    res.render('index', {tanks: data})
};


module.exports = {
    index, 
}