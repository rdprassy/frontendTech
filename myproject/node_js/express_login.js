var express=require('express');
var app=express();
app.get('/',function(req,res){
    usr=req.query.user;
    pss=req.query.pass;
    if((usr=='Raj')&&(pss=='123'))
    {
    res.send("<html><body bgcolor='green'>Entered username "+usr+" and password "+pss+" is valid</body></html>")
}
else{
    res.send("<html><body bgcolor='green'>Entered username and password is invalid</body></html>")}})
    .listen(3011);