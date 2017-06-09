const express = require('express');
const hbs = require('hbs')

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

app.get('/likes', function(req, res){
	res.send({name : "sanjay", likes : ["apple", 35, "mango", "something else"]});
	// res.send("hi");
});

app.listen(3000);


