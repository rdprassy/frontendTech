var express=require('express');
var fs=require('fs');
var app=express();
app.get('/',function(req,res)
{
var data=fs.writeFileSync('A.txt','I am writing a content in file');
res.end();
}).listen(3021);