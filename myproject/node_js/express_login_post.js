var express=require('express');
var bodyparser=require('body-parser');
var app=express();
var urlencodedparser=bodyparser.urlencoded({extended:false});
app.post('/',urlencodedparser,function(req,res){
    usr=req.body.user;
    pss=req.body.pass;
    if((usr=='Raj')&&(pss=='123'))
    {
    res.send("<html><body bgcolor='green'>Entered username "+usr+" and password "+pss+" is valid</body></html>")
}
else{
    res.send("<html><body bgcolor='green'>Entered username and password is invalid</body></html>")}})
    .listen(3011);