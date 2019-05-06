var url = require('url');
//Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties
//split a web address into readable parts
var adr = 'http://localhost:8080/default.htm?year=2019&month=May';
var q = url.parse(adr, true);
console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2019&month=May'

var qdata =  q.query; //returns an object: {year : 2019, month: "May"}
console.log(qdata.month, qdata.year); //returns 'May'