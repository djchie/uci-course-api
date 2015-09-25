var app = require('./server/server.js');

// START THE SERVER
// =============================================================================

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Server is listening on ' + port);
});