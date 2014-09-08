var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.use(express.static(__dirname + '/public'))
app.set('port', (process.env.PORT || 5000))

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});
