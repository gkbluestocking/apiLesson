'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CampaignSchema = new Schema({
  name: {
    type:String,
    default: "some awesome name monkey",
    max: 123,
    min: 23

  },
  description: String,
  budget: Number,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Campaign', ThingSchema);
