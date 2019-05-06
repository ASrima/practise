var fs = require('fs');
//create a new file using appendFile() method
fs.appendFile('newfile.txt','Hello Content!', function (err){
    if(err) throw err;
    console.log('Saved');
});
//create a new empty file using open() method
 //var fs = require('fs');

fs.open('myFile1.txt', 'w', function (err, file){
    if (err) throw err;
    console.log('New Saved!');
}); 
//create a new file using writeFile() method
//var fs = require('fs');
fs.writeFile('mynewFile2.txt', 'Hello Content!', function(err){
    if (err) throw err;
    console.log('write file');
}); 

//var fs = require('fs');
//The file system module has method for updating files:
// - fs.appendFile()
//fs,writeFile
fs.appendFile('updateText.txt', 'This is my text', function(err){
    if(err) throw err;
    console.log('Updated');
});
//fs.writeFile() method replaces the specified file and content
fs.writeFile('newfile.txt', 'This is my new replaced content', function (err){
    if(err) throw err;
    console.log("Replaced!");
});
//The fs.unlink() method deletes the specified file

fs.unlink('newfile.txt', function (err){
    if(err) throw err;
    console.log('File Deleted');
});
// The fs.rename() method renames the specified file
fs.rename('mynewFile2.txt', 'renamedmynewFile2.txt', function(err){
    if(err) throw err;
    console.log('File Renamed');
});