var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});

    res.write("<html><body bgcolor='pink'>Welcome to Node JS</body></html>");
    res.write(req.url)
    res.end();
}).listen(4444);
