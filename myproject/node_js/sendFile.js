var express=require('express');
var app=express();
app.get('/',function(req,res){
    app.use(express.static('public'));
    res.sendFile(__dirname+"/public/"+"Ex.html")})
    .listen(3011);