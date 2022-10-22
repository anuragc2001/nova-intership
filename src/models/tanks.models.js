
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


let stainlessSteelTank = new Schema({


    category :{
        type: String
    },
    diameter: {
      type: Number
    },
    thickness: {
      type: Number
    },
    height: {
      type: Number
    },
    capacity: {
        type: Number
      },

    standMaterial: {
    type: String
    },

  });

let plasticTank = new Schema({

    category :{
        type: String
    },

    diameter: {
        type: Number
      },
    height: {
    type: Number
    },
    capacity: {
        type: Number
    },
    layer: {
        type: Number
    },
  });
  let loftTank = new Schema({
    category :{
        type: String
    },

    length: {
      type: Number
    },
    width: {
      type: Number
    },
    height: {
        type: Number
    },
    thickness: {
    type: Number
    },
    capacity: {
    type: Number
    },

    standMaterial: {
    type: String
    },

  });


const stainlessSteelTankModel = mongoose.model("stainlessSteelTank", stainlessSteelTank);
const plasticTankModel = mongoose.model(" plasticTank",  plasticTank);
const loftTankModel = mongoose.model(" loftTank",  loftTank);



module.exports ={
    stainlessSteelTankModel,
    plasticTankModel,
    loftTankModel,

};