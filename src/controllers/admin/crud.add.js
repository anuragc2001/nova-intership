const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')

const postAddSST = (req, res) => {
    const diameter = req.body.diameter
    const thickness = req.body.thickness
    const height = req.body.height
    const capacity = req.body.capacity
    const standMaterial = req.body.standMaterial
    const category = req.body.category

    const ss = new stainlessSteelTankModel({
        category,
        diameter,
        thickness,
        height,
        capacity,
        standMaterial
    })

    ss.save((err) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/stainless')
        }
    })
}
const postAddPT = (req, res) => {
    const diameter = req.body.diameter
    const height = req.body.height
    const capacity = req.body.capacity
    const layer = req.body.layer
    const category = req.body.category

    const p = new plasticTankModel({
        category,
        diameter,
        height,
        capacity,
        layer
    })

    p.save((err) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/plastic')
        }

    })
}
const postAddLT = (req, res) => {
    const lengths = req.body.lengths
    const width = req.body.width
    const height = req.body.height
    const thickness = req.body.thickness
    const capacity = req.body.capacity
    const standMaterial = req.body.standMaterial
    const category = req.body.category

    const l = new loftTankModel({
        category,
        lengths,
        width,
        height,
        thickness,
        capacity,
        standMaterial
    })

    l.save((err) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/loft')
        }
    })
}

const getAddSST = (req, res) => {
    res.render('admin/ss_form', {u_name: req.User.adminName})
}
const getAddPT = (req, res) => {
    res.render('admin/p_form', {u_name: req.User.adminName})
}
const getAddLT = (req, res) => {
    res.render('admin/l_form', {u_name: req.User.adminName})
}


module.exports = {
    postAddSST,
    postAddPT,
    postAddLT,
    getAddSST,
    getAddPT,
    getAddLT
}