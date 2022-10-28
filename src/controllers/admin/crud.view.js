const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')

const postViewSS = (req, res) => {
    const id_ss = req.body.id

    stainlessSteelTankModel.findById(id_ss)
    .then((data) => {
        res.render('admin/product', {u_name: req.User.adminName, data: data})
    })

}

const postViewP = (req, res) => {
    const id_p = req.body.id

    plasticTankModel.findById(id_p)
    .then((data) => {
        res.render('admin/product', {u_name: req.User.adminName, data: data})
    })

}

const postViewL = (req, res) => {
    const id_l = req.body.id
    loftTankModel.findById(id_l)
    .then((data) => {
        res.render('admin/product', {u_name: req.User.adminName, data: data})
    })

}

module.exports = {
    postViewSS,
    postViewP,
    postViewL,
}