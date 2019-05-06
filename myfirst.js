//Create a module
var http = require('http'); // included a http module
var myDate = require('./myfirstmodule');

//create an http server using createServer() method
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); // writeHead is the status code, 200 means all is OK.
    res.write ("Hello World From Ayehsa Newç! </br>"); //write a response to the client
    res.write("The date and time are currently: " + myDate.myDateTime());
    res.end(); // end the response
    
}).listen(8080); // the server object listens on port 8080. Can specify any port ex:8010

