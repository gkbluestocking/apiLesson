'use strict';

modules.export = function(app) {

  app.use('/api/campaign', require('./campaign'));
  app.use('/api/insertionOrder', require('./insertionOrder'))

}