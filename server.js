const express = require('express');
const hbs = require('hbs')

var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname+"/public"));
app.set("view engine", "hbs");	

app.get('/', function(req, res){
	// res.send("Index page");
	res.render('index.hbs', {
		name : "Sanjay George",
		age : 21,
		status : "Really Single, Believe me.",
		hobbies : "Practice sarcasm"
	});
})

app.get('/about', function(req, res){
	res.render('about.hbs', {
		pageTitle : "About Page", 
		year : new Date().getFullYear()
	})
});

app.get('/project', function(req, res){
	res.render('project.hbs', {
		name : 'NodeJS Sample',
		complexity : "very easy",
		contributors : ["Sanjay George", "Random person 1", "Random person 2"]
	});
})

app.listen(port, function(){
	console.log("Started app on port "+ port);
});


