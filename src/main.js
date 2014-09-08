var Dog = require('./dog')
var Dogs = require('./dogCollection')
var MainController = require('./mainController')

var dogs = new Dogs([
  { treats: 1 },
  { treats: 30 }
])
var main = new MainController(dogs)
