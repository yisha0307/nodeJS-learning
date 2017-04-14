var fs  = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myobj = {
    	name: 'Ryu',
    	job: 'ninja',
    	age: 29
    };
    res.end(JSON.stringify(myobj));
});

server.listen(3001);
console.log('listen to port 3001');