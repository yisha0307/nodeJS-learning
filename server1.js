var server = require('./router.js');
var route = require('./router2.js');

server.start(route.route);