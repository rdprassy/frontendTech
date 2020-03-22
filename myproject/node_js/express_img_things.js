var express=require('express');
var app=express();
app.get('/',function(req,res){
    app.use(express.static('public'));
    // res.send("<html><body style='background-image:url('sound_issue.png');'>welcome</body></html>")})
    res.send("<html><style>body{background-image:url('lion.jfif');}</style><body><img src='sound_issue.png'/></body></html>")})
    .listen(3011);