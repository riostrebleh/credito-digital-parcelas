var express = require('express');
var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 0;

console.log('process.env: ' + JSON.stringify(process.env));
console.log('port: ' + port);
console.log('ip: ' + ip);



app.listen(port, ip, function (err) {
    console.log('Running on port ' + port + ' ip: ' + ip);
});

app.get('/', function(req, res) {
    res.send('Hello Word!');
});
