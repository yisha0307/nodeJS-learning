const fs = require('fs')
const child_process = require('child_process')

// child_process.exec
// for(var i = 0; i <3; i++){
//     var workerProcess = child_process.exec('node support.js '+i, function(error, stdout, stderr){
//         if(error){
//             console.log(error.stack)
//             console.log('Error code: '+ error.code)
//             console.log('Signal received: '+ error.signal)
//         }
//         console.log('stdout:'+stdout)
//         console.log('stderr: '+stderr)
//     })
//     workerProcess.on('exit', function (code) {
//         console.log('子进程已退出，退出码 '+code);
//     });
// }

//child_process.spawn
// for(var i =0; i <3; i++) {
//     var workerProcess = child_process.spawn('node', ['support.js', i])
//     workerProcess.stdout.on('data', function(data){
//         console.log('stdout: '+ data)
//     })
//     workerProcess.stderr.on('data', function(data){
//         console.log('stderr: '+ data)
//     })
//     workerProcess.on('close', code=>{
//         console.log('子进程已退出，退出码 '+code);
//     })
// }

// child_procss.fork()
for(var i =0;i<3;i++){
    var workerProcess = child_process.fork('support.js', [i])
    workerProcess. on('close', code=>{
        console.log('子进程已退出，退出码 '+code);
    })
}