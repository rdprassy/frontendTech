var express=require('express');
var fs=require('fs');
var app=express();
app.get('/',function(req,res)
{
var data=fs.readFileSync('Nothing.html');
res.write(data);
res.end();
}).listen(3025);