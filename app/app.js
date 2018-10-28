var express = require('express');
var app = express();
 
var ports = [3000, 8080];
 
ports.forEach(port => {
    app.listen(port, function (err) {
        console.log('Running on port '+port+'.');
    });
});
 

app.get('/', function(req, res) {
    res.send("Helbert say: Hello World!");
});
