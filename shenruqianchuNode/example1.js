var http = require('http')
var querystring = require('querystring')

http.createServer(function (req, res) {
    var postData = ''
    req.setEncoding('utf8')

    req.on('data', function (chunk) {
        postData += chunk
    })

    req.on('end', function() {
        res.end(postData)
    })
}).listen(8080)

console.log('server is listening at 8080')