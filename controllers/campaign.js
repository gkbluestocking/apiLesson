'use strict';

var Campaign = require('../models/campaign');

exports.index = function(request, response) {

  campaign.find(function (campaigns) {
    response.send(campaigns);
  })




}

exports.create = function(request, response) {

  var body = request.body;

  var campaign = new Campaign(body);

  campaign.save(function(err, campaignCreated) {
    if(err) {
      return response.send(err);
    }

    response.send(campaignCreated)
  })


}