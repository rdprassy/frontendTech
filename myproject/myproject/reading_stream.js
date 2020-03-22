var fs = require("fs");  
var data = '';  
var readerStream = fs.createReadStream('A.txt');  
readerStream.setEncoding('UTF8');  
readerStream.on('data', function(mydata) {  
   data += mydata;  
});  
readerStream.on('end',function(){  
   console.log(data);  
});  
readerStream.on('error', function(err){  
   console.log(err.stack);  
});  