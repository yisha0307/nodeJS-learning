var fs = require('fs')
var readStream = fs.createReadStream('input.txt')
// var data = 'baidu.com'
var writeStream = fs.createWriteStream('output.txt')

// writeStream.write(data, 'UTF8')
// writeStream.end()

// writeStream.on('finish', function () {
//     console.log('写入完成')
// })

// writeStream.on('error', err => {
//     console.log(err.stack)
// })

readStream.pipe(writeStream)

console.log('程序执行完毕')