var express = require('express');
var session = require ('cookie-session');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
app.use( express.static( "../public" ) );
app.use(session({secret:'polymtl'}))
/*.use(function(req,res,next){
	if(typeof(req.session.todolist)=='undefined')
	{
		req.session.todolist = [];
	}
	next();
})*/

.get('/',function(req,res){
	res.sendFile('index.ejs',{todolist:req.session.todolist});
})
.use (function(req,res,next){
	res.redirect('/');
});

app.listen(8080);