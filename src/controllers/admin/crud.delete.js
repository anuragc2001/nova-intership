const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')

const postDeleteSS = (req, res) => {
    const id_ss = req.body.id
    stainlessSteelTankModel.deleteOne({_id: id_ss})
    .then((eer) => {
        res.redirect('/dashboard')
    })
}

const postDeleteP = (req, res) => {
    const id_p = req.body.id
    plasticTankModel.deleteOne({_id: id_p})
    .then((eer) => {
        res.redirect('/dashboard')
    })
}

const postDeleteL = (req, res) => {
    const id_l = req.body.id
    loftTankModel.deleteOne({_id: id_l})
    .then((eer) => {
        res.redirect('/dashboard')
    })

}

module.exports = {
    postDeleteSS,
    postDeleteP,
    postDeleteL,
}