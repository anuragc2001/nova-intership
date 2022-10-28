const {stainlessSteelTankModel} = require('../../models/tanks.model')
const {plasticTankModel} = require('../../models/tanks.model')
const {loftTankModel} = require('../../models/tanks.model')

const addSST = (req, res) => {
    const diameter = req.body.diameter
    const thickness = req.body.thickness
    const height = req.body.height
    const capacity = req.body.capacity
    const standMaterial = req.body.standMaterial

    const ss = new stainlessSteelTankModel({
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
            console.log("data added");
            res.redirect('/dashboard')
        }
    })
}
const addPT = (req, res) => {
    const diameter = req.body.diameter
    const height = req.body.height
    const capacity = req.body.capacity
    const layer = req.body.layer

    const p = new plasticTankModel({
        diameter,
        height,
        capacity,
        layer
    })

    p.save((err) => {
        if(err){
            console.log(err);
        }else{
            console.log("data added");
            res.redirect('/plastic')
        }

    })
}
const addLT = (req, res) => {
    const lengths = req.body.lengths
    const width = req.body.width
    const height = req.body.height
    const thickness = req.body.thickness
    const capacity = req.body.capacity
    const standMaterial = req.body.standMaterial

    const l = new loftTankModel({
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
        }

        console.log("data added");
        res.redirect('/loft')
    })
}

module.exports = {
    addSST,
    addPT,
    addLT
}