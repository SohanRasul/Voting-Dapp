var express = require('express');
var path = require('path');
var app = express();
//var http = require('http').Server(app);
//var Contract = require('web3-eth-contract');
var port = process.env.PORT || 3000;

//app.use(express.static(path.join(__dirname, './public/')));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');

    // console.log('I am working');
});
app.listen(port, function () {
    console.log('listening on *:' + port);
});
