console.log(__filename)
console.log(__dirname)

process.on('exit', function (code) {
  setTimeout(function () {
    console.log('该代码永远不会执行')
  }, 0)

  console.log('退出码为: ', code)
})
console.log('程序执行结束')

process.stdout.write('hello world!' + '\n')
process.argv.forEach(function(val, index, array) {
    console.log(`${index} : ${val}`)
})

console.log(process.execPath)
console.log(process.platform)