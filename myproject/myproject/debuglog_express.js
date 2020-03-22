var util=require('util');
var express=require('express');
app=express();
app.get('/',function(req,res){
  
debuglog=util.debuglog('foo');
    res.send(debuglog('hai from foo %d',123))
}).listen(3044);