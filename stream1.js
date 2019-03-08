var fs = require('fs')
var data = ''

var readStream = fs.createReadStream('input.txt')

readStream.setEncoding('UTF8')

readStream.on('data', function(chunk){
    data += chunk
})

readStream.on('end', function(){
    console.log(data)
})

readStream.on('error', function(){
    console.log(err.stack)
})

console.log('程序执行完毕')