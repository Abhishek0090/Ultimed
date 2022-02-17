const express = require("express");
const mongoose = require("mongoose");

const medSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  tag: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
});

//we are creating a new collection
const MedsModel = new mongoose.model("MedsModel", medSchema);

module.exports = MedsModel;
