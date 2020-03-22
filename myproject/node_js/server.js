var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Server Message!\r\n');
   connection.pipe(connection);
});
server.listen(8085, function() { 
   console.log('server is listening');
});


