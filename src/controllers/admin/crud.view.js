const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')

let id_ss, id_p, id_l

const postViewSS = (req, res) => {
    id_ss = req.body.id

    res.redirect('/viewss')
}
const getViewSS = (req, res) => {
    stainlessSteelTankModel.findById(id_ss)
    .then((data) => {
        res.render('admin/product', {u_name: req.User.adminName, data: data})
    })
}
const postViewP = (req, res) => {
    id_p = req.body.id

    res.redirect('/viewp')
}
const getViewP = (req, res) => {
    plasticTankModel.findById(id_p)
    .then((data) => {
        res.render('admin/product', {u_name: req.User.adminName, data: data})
    })
}
const postViewL = (req, res) => {
    id_l = req.body.id

    res.redirect('/viewl')
}
const getViewL = (req, res) => {
    console.log(id_l);
    loftTankModel.findById(id_l)
    .then((data) => {
        res.render('admin/product', {u_name: req.User.adminName, data: data})
    })
}
module.exports = {
    postViewSS,
    getViewSS,
    postViewP,
    getViewP,
    postViewL,
    getViewL
}