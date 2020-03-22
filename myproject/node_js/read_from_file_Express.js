var express=require('express');
var fs=require('fs');
var app=express();
app.get('/',function(req,res)
{
fs.readFile('Nothing.html',function(err,data){
        res.write(data);
        res.end();
    })
}).listen(3022);