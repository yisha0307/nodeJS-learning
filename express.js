var express = require('express');
//fire the express function
var app = express();
app.set('view engine', 'ejs');//tell express i want to use ejs as the view engine

app.get('/', function(req, res){
	//express will figure out this is string and no need to tell the content-type
	res.sendFile(__dirname +'/index.html');
});

app.get('/sample', function(req, res){
	res.send('this is the sample page');
});

app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'ninja', hobbies: ['eating', 'gymming', 'fishing']};
	res.render('profile', {person: req.params.name, data: data}); 
}); 

app.listen(3001);