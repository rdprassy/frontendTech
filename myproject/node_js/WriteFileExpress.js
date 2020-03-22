var express=require('express');
var fs=require('fs');
var app=express();
app.get('/',function(req,res)
{
//fs.writeFile('A.txt','I am writing',function(err){
fs.appendFile('A.txt','I am writing',function(err){
    if(err)throw err;
    res.write("File Written successfully")
    res.end();
});
}).listen(3028);