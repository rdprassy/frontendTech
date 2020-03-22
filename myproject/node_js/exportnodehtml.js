var http=require('http');
var mod = require('./exportnode')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});

    res.write("<html><body bgcolor='pink'>"+mod.greet()+"</body></html>");
    res.write(req.url)
    res.end();
}).listen(4444);
