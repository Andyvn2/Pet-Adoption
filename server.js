var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var mongoose = require('mongoose');
var session = require('session');



app.use(bodyParser.urlencoded({ extended: true}));


app.use(bodyParser.json());


app.use(express.static( __dirname + '/codingdojo/dist' ));
app.use(express.static(path.join(__dirname, './views')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/basic_mongoose');

mongoose.Promise = global.Promise;

var PetSchema = new mongoose.Schema({
	name: {type: String, required: [true, "name is required!!!"], minlength: [3, "Name too short.Name must be longer than 3 characters!"]},
	type: {type: String, required: [true, "type is required!!!"], minlength: [3, "Type too short! Atleast 3 Characters"]},
	description: {type: String, required: [true, "description is required!!"], minlength: [3, "Description needs to be longer!  (Min 3 characters)"]},
	skill1: {type: String, required: false, minlength: 3, default: 'none'},
	skill2: {type: String, required: false, minlength: 3, default: 'none'},
	skill3: {type: String, required: false, minlength: 3, default: 'none'},
	created_at: {type: Date, default: Date()},
	updated_at: {type: Date, default: Date()}
	})
mongoose.model('Pet', PetSchema);
var Pet = mongoose.model('Pet')



app.delete('/pets/:id', function(req,res){
	Pet.remove({_id: req.params.id}, function(err){
		console.log("removed Successful")
		res.json({message: "success"})
})

})

app.put('/pets/:id', function(req,res){
	console.log("THis is the ID", req.params.id)
		Pet.update(
		{_id: req.body._id}, 
		{ 
			name: req.body.name,
		type: req.body.type,
		description: req.body.description,
		skill1: req.body.skill1,
		skill2: req.body.skill2,
		skill3: req.body.skill3,
		updated_at: Date()
		},
		function(err, results){
		if(err){
			console.log("edit UnSuccessful!")
		}
		else{
			res.json({message: "success"})
		}
		}
	)
	
})


app.post('/pets', function(req,res){
	// console.log("*****THIS IS RES",res)
	var pet = new Pet({
		name: req.body.name,
		type: req.body.type,
		description: req.body.description,
		skill1: req.body.skill1,
		skill2: req.body.skill2,
		skill3: req.body.skill3,
		created_at: Date(),
		updated_at: Date()
	})
	pet.save(function(err, results){
		if(err){
			console.log(err)
			res.json({message: "fail", errors: err})
		}
		else{
			console.log(results)
			res.json({message: "success", data: results})
		}
	})
	
})


app.get('/petsfind', function(req, res){
	Pet.find({}, function(err, pets){
		if(err){
			console.log(err);
			res.json({message:"error", error: err})
		}
		else{
			res.json({message:"Success", data: pets})
		}
	})
})


app.get('/pets', function(req, res){
	
	Pet.find({}, function(err, pets){
		if(err){
			console.log("Returned Err", err);
			res.json({message:"error", error:err})
		}
		else {
			res.json({message: "Success", data: pets})
		}
	})
})


app.get('/pets/:id', function(req,res){
	console.log("12312312begin finding pets")
	Pet.find({_id: req.params.id}, function(err, pets){
		if(err){
			console.log(err)
		}
		else{
			res.json({message: "Success", data: pets})
		}
	})
})


app.all("*", (req, res, next) => {
	res.sendFile(path.resolve("./codingdojo/dist/index.html"))
})

app.listen(8000, function(){
	console.log("listening on port 8000, hello")
})