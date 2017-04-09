var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var encryptStram = crypto.createCipher('aes-256-cbc', password);

var gzip = zlib.createGzip();
var readStream = fs.createReadStream('input.txt'); //current file
var writeStram = fs.createWriteStream(__dirname + '/out.txt.gz');

//take a readable stream
//pipe it into an encryption stream
//pipe it into a gzip compression stream
//pipe it into a writable stream
readStream
	.pipe(encryptStram)
	.pipe(gzip)
	.pipe(writeStram)
	.on('finish', function(){
		console.log('done');
	});


function readFiles(files, callback){
	var filesLeft = files.length;
	var contents =[];
	var error = null;

	var processContent = function(filePath){
		return function(err, data){
			if(error != null){
				return;
			}
			if(err){
				error = err;
				return callback(err);
			}
			contents[filePath] = data;
			if(!--filesLeft){
				callback(null, contents);
			}
		};
	};
	files.forEach(function(filePath){
		fs.readFile(filePath, processContent(filePath));
	});
}