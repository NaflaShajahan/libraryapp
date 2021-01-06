const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine','ejs');
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    res.render("index");
});
app.get('/signup',function(req,res){
    res.render("signup");
});
app.get('/login',function(req,res){
    res.render("login");
});
app.get('/book',function(req,res){
    res.render("book");
});
app.post('/signupapi', function(req, res, next){
    console.log("true")
    console.log("req",req.body)
    res.send({name:req.body.name,password:req.body.password,email:req.body.email});
 });
 app.post('/loginapi', function(req, res, next){
    console.log("true")
    console.log("req",req.body)
    res.send({email:req.body.email,password:req.body.password})
 });
 app.post('/bookapi', function(req, res, next){
    console.log("true")
    console.log("req",req.body)
    res.send({name:req.body.name,author:req.body.author,description:req.body.desc})
 });

app.listen(5000);