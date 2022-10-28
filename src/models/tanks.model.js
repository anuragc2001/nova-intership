
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let stainlessSteelTank = new Schema({

    diameter: {
      type: Number,
      required: true,
    },
    thickness: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    standMaterial: {
        type: String,
        required: true,
    },

  });

let plasticTank = new Schema({

    diameter: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    layer: {
        type: Number,
        required: true,
    },
  });

let loftTank = new Schema({

    length: {
        type: Number,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    thickness: {
        type: Number,
        required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    standMaterial: {
      type: String,
      required: true,
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