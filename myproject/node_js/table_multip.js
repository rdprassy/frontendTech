var express=require('express');
var app=express();
app.get('/calc',function(req,res){
    num=parseInt(req.query.num1);
    res.write("<html><body><table border='4'><tr><th>Num</th><th>Value</th><th>Result</th></tr>");
for(i=1;i<=10;i++)
    {
    res.write("<tr><td>"+i+"</td><td>"+num+"</td><td>"+(i*num)+"</td></tr>");
    }
    res.write("</table></body></html>");
}).listen(3011);