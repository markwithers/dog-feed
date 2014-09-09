var Dog = require('./models/dog')
var Dogs = require('./collections/dogs')
var MainController = require('./controllers/main')

var dogs = new Dogs([
  { treats: 10 },
  { treats: 7 }
])
var main = new MainController(dogs)
