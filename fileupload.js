var http = require('http');
//var formidable = require('formidable');

http.createServer(function (req, res){
  
    res.writeHead(200, {'Content-Type': 'txt/html'});
    res.write('<form action="fileupload" method="post" entype="multipart/form-data">');
    res.write('<input type="file" name="fileupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);