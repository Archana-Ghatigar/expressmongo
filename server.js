var express = require('express');
const mongoose = require("mongoose");
var user = require('./model/user');

const connection = "mongodb://mydb:27017/userdb";
var app = new express();
mongoose.connect(connection,{useNewUrlParser:true});
app.get('/',(req,res)=>{
	res.send('Welcome to Express-MongoDb Application');
})
app.get('/users',(req,response)=>{
	user.find({},function(err,allUsers){
		//Callback 
		if(err){
			response.send(err);
		}
		else
			response.json(allUsers);
	});
})
app.listen(3000,()=>{
	console.log('Express server listening on 3000');
});