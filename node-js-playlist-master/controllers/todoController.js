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
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
// 	if(err) throw err;
// 	console.log('item saved');
// });

//POST middleware
var urlencodedParser = bodyParser.urlencoded({extended: false});

//var data =[{item: 'get milk'}, {item: 'walk dog'}, {item:'kick some coding ass'}];

module.exports = function(app){
	app.get('/todo', function(req,res){
		//get data from mongodb and pass it to view
		//要获得all data就用empty obj, 如果要specific one就要在{}里传入那个特定的数据
		Todo.find({}, function(err,data){
			if(err) throw err;
			res.render('todo', {todos:data});
		});
	});
	app.post('/todo', urlencodedParser,function(req,res){
		//get data from the view and add it to mongodb
		var newTodo = Todo(req.body).save(function(err,data){
			if(err) throw err;
			res.json(data);
		})
	});
	app.delete('/todo/:item', function(req,res){
		//delete the item from mongodb
		//在url里会有'-'， 所以要用' '来replace
		Todo.find({item: req.params.item.replace(/\-/g,' ')}).remove(function(err,data){
			if(err) throw err;
			res.json(data);
		})
	});
};