var express=require('express');
var app=express();
app.get('/welcome',function(req,res)
{
    usr=req.query.user;
    res.send("<html><body bgcolor='yellow'>Hai "+usr+" Welcome to First page</body></html>");
}).get('/second',function(req,res){
    res.send("<html><body bgcolor='green'>Welcome to Second page</body></html>");
}).listen(3011);