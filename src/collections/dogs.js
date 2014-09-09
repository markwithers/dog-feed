var AmpersandCollection = require('ampersand-collection')

var Dog = require('../models/dog')

var Dogs = AmpersandCollection.extend({
  model: Dog
})

module.exports = Dogs
