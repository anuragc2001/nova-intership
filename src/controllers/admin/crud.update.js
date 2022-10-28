const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')

let ss_id, p_id, l_id

const getAddSST = (req, res) => {
    ss_id = req.query.id
    stainlessSteelTankModel.findById(ss_id)
    .then((data) => {
        res.render('admin/ss_update_form', {u_name: req.User.adminName, data: data})
    })
}
const getAddPT = (req, res) => {
    p_id = req.query.id
    plasticTankModel.findById(p_id)
    .then((data) => {
        res.render('admin/p_update_form', {u_name: req.User.adminName, data: data})
    })
}
const getAddLT = (req, res) => {
    l_id = req.query.id
    loftTankModel.findById(l_id)
    .then((data) => {
        res.render('admin/l_update_form', {u_name: req.User.adminName, data: data})
    })
}

const putAddSST = (req, res) => {
    const diameter = req.body.diameter
    const thickness = req.body.thickness
    const height = req.body.height
    const capacity = req.body.capacity
    const standMaterial = req.body.standMaterial
    const category = req.body.category

    const upt = {
        diameter,
        thickness,
        height,
        capacity,
        standMaterial,
        category
    }

    stainlessSteelTankModel.updateOne({_id: ss_id}, upt)
    .then((err) => {
        res.redirect('/stainless')
    })
}
const putAddPT = (req, res) => {
    const diameter = req.body.diameter
    const height = req.body.height
    const capacity = req.body.capacity
    const layer = req.body.layer
    const category = req.body.category

    const upt = {
        category,
        diameter,
        height,
        capacity,
        layer
    }

    plasticTankModel.updateOne({_id: p_id}, upt)
    .then((err) => {
        res.redirect('/plastic')
    })
}
const putAddLT = (req, res) => {
    const lengths = req.body.lengths
    const width = req.body.width
    const height = req.body.height
    const thickness = req.body.thickness
    const capacity = req.body.capacity
    const standMaterial = req.body.standMaterial
    const category = req.body.category

    const upt = {
        category,
        lengths,
        width,
        height,
        thickness,
        capacity,
        standMaterial
    }

    loftTankModel.updateOne({_id: l_id}, upt)
    .then((err) => {
        res.redirect('/loft')
    })
}



module.exports = {
    putAddSST,
    putAddPT,
    putAddLT,
    getAddSST,
    getAddPT,
    getAddLT
}