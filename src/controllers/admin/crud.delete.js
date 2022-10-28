const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')

let id_ss, id_p, id_l
const postDeleteSS = (req, res) => {
    id_ss = req.body.id
    stainlessSteelTankModel.deleteOne({_id: id_ss})
    .then((err) => {
        console.log("deleted");
    })
    res.redirect('/deletess')
}
const getDeleteSS = (req, res) => {
    
    res.redirect('/dashboard')
}
const postDeleteP = (req, res) => {
    id_p = req.body.id
    plasticTankModel.deleteOne({_id: id_p})
    .then((err) => {
        console.log("deleted");
    })
    res.redirect('/deletep')
}
const getDeleteP = (req, res) => {

    res.redirect('/dashboard')
}
const postDeleteL = (req, res) => {
    id_l = req.body.id
    loftTankModel.deleteOne({_id: id_l})
    .then((err) => {
        console.log("deleted");
    })
    res.redirect('/deletel')
}
const getDeleteL = (req, res) => {

    res.redirect('/dashboard')
}
module.exports = {
    postDeleteSS,
    getDeleteSS,
    postDeleteP,
    getDeleteP,
    postDeleteL,
    getDeleteL
}