var bodyParser = require('body-parser');
//to connect with mongo database
var mongoose = require('mongoose');

//connect to the database in mlab
mongoose.connect('mongodb://test:test@ds163020.mlab.com:63020/todo');

//create a scheme - this is like a blueprint
//this is what mongodb expected
var todoSchema = new mongoose.Schema({
	item: String
});
//create a model based on the todoSchema
var Todo = mongoose.model('Todo',todoSchema);
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
	if(err) throw err;
	console.log('item saved');
});

//POST middleware
var urlencodedParser = bodyParser.urlencoded({extended: false});

var data =[{item: 'get milk'}, {item: 'walk dog'}, {item:'kick some coding ass'}];

module.exports = function(app){
	app.get('/todo', function(req,res){
		res.render('todo', {todos: data});
	});
	app.post('/todo', urlencodedParser,function(req,res){
		data.push(req.body);
		res.json(data);
	});
	app.delete('/todo/:item', function(req,res){
		data = data.filter(function(todo){
			return todo.item.replace( / /g, '-') != req.params.item;
		});
		res.json(data);
	});
};