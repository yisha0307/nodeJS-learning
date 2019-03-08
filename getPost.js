// var http = require('http')
// var url = require('url')
// var util = require('util')

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
//     var params = url.parse(req.url, true).query
//     res.write("网站名: "+params.name)
//     res.write('\n');
//     res.write(`网站url: ${params.url}`)
//     res.end()
// }).listen(3000)

var http = require('http')
var util = require('util')
var querystring = require('querystring')

var postHTML = 
'<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer((req, res) => {
    // 定义一个post变量，用于暂存请求体的信息
    var post = ''

    req.on('data', chunk => {
        post += chunk
    })
    req.on('end', function () {
        post = querystring.parse(post)
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})

        if(post.name && post.url) {
            res.write(`网站名： ${post.name}`)
            res.write('<br />')
            res.write(`网站url: ${post.url}`)
        } else {
            res.write(postHTML)
        }
        res.end()
    })
}).listen(3000)