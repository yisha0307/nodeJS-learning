var fs = require('fs')

// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         console.log(err)
//     }
//     console.log('异步读取: '+ data.toString())
// })

// fs.open('input.txt', 'r+', function(err,data) {
//     if(err){
//         return console.error(err)
//     }
//     console.log('文件打开成功')
// })

fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.error(err)
    }
    console.log(stats)
})

fs.unlink('input.txt', function (err) {
    if (err) {
        return console.error(err)
    }
    console.log('文件删除成功')
})

fs.readdir('./', function (err, files) {
    if(err) {
        return console.error(err)
    }
    files.forEach(function(file){
        console.log(file)
    })
})