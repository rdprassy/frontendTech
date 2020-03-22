var express=require('express');
var bodyparser=require('body-parser');
var app=express();
var urlencodedparser=bodyparser.urlencoded({extended:false});
app.post('/',urlencodedparser,function(req,res){
  resp={  usr:req.body.user,
    pss:req.body.pass
  };
  console.log(resp);
  res.send("<html><body bgcolor='pink'>"+JSON.stringify(resp)+" </body></html>");
    })
    .listen(3011);