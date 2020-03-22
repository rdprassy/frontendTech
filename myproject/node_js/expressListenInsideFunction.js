var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('Hello world');
})


var server=app.listen(3011,function(){
    port=server.address().port;
    address=server.address().address;
    console.log("App is running http://%s:%s",address,port);
    });