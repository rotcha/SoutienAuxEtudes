var express = require('express');
var session = require ('cookie-session');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');

var app = express();
app.use( express.static('public'))
    .use(express.static('app3'))
	.use(express.static('node_modules'))
    .use(express.static('node_modules/bootstrap/dist/css'))
	.use(session({secret:'polymtl'}))
/*.use(function(req,res,next){
	if(typeof(req.session.todolist)=='undefined')
	{
		req.session.todolist = [];
	}
	next();
})*/
	.get('/',function(req,res){
		res.render(__dirname+'/index-app.ejs',{todolist:req.session.todolist});
	})
	.use (function(req,res,next){
		res.redirect('/');
	})
	.listen(8080);